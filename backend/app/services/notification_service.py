"""Notification service for sending push notifications via various providers."""

import json
import logging
import smtplib
from datetime import datetime
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from typing import Any
from urllib.parse import quote

import httpx
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from backend.app.models.notification import NotificationProvider

logger = logging.getLogger(__name__)


class NotificationService:
    """Service for sending notifications through various providers."""

    def __init__(self):
        self._http_client: httpx.AsyncClient | None = None

    async def _get_client(self) -> httpx.AsyncClient:
        """Get or create HTTP client."""
        if self._http_client is None or self._http_client.is_closed:
            self._http_client = httpx.AsyncClient(timeout=30.0)
        return self._http_client

    async def close(self):
        """Close HTTP client."""
        if self._http_client and not self._http_client.is_closed:
            await self._http_client.aclose()

    def _is_in_quiet_hours(self, provider: NotificationProvider) -> bool:
        """Check if current time is within provider's quiet hours."""
        if not provider.quiet_hours_enabled:
            return False

        if not provider.quiet_hours_start or not provider.quiet_hours_end:
            return False

        try:
            now = datetime.now()
            current_time = now.hour * 60 + now.minute

            start_parts = provider.quiet_hours_start.split(":")
            end_parts = provider.quiet_hours_end.split(":")

            start_minutes = int(start_parts[0]) * 60 + int(start_parts[1])
            end_minutes = int(end_parts[0]) * 60 + int(end_parts[1])

            # Handle overnight quiet hours (e.g., 22:00 to 07:00)
            if start_minutes > end_minutes:
                # Quiet hours span midnight
                return current_time >= start_minutes or current_time < end_minutes
            else:
                # Same day quiet hours
                return start_minutes <= current_time < end_minutes
        except (ValueError, TypeError, AttributeError):
            logger.warning(f"Invalid quiet hours format for provider {provider.name}")
            return False

    def _format_duration(self, seconds: int | None) -> str:
        """Format duration in seconds to human-readable string."""
        if seconds is None:
            return "Unknown"
        hours = seconds // 3600
        minutes = (seconds % 3600) // 60
        if hours > 0:
            return f"{hours}h {minutes}m"
        return f"{minutes}m"

    def _build_print_start_message(self, printer_name: str, data: dict) -> tuple[str, str]:
        """Build notification message for print start event."""
        filename = data.get("filename", "Unknown")
        # Clean up filename
        if filename.endswith(".gcode.3mf"):
            filename = filename[:-10]
        elif filename.endswith(".3mf"):
            filename = filename[:-4]

        title = "Print Started"

        estimated_time = data.get("raw_data", {}).get("print", {}).get("mc_remaining_time")
        time_str = self._format_duration(estimated_time * 60 if estimated_time else None)

        message = f"{printer_name}: {filename}\nEstimated: {time_str}"
        return title, message

    def _build_print_complete_message(
        self, printer_name: str, status: str, data: dict, archive_data: dict | None = None
    ) -> tuple[str, str]:
        """Build notification message for print complete event."""
        filename = data.get("filename", "Unknown")
        if filename.endswith(".gcode.3mf"):
            filename = filename[:-10]
        elif filename.endswith(".3mf"):
            filename = filename[:-4]

        if status == "completed":
            title = "Print Completed"
        elif status == "failed":
            title = "Print Failed"
        elif status in ("aborted", "stopped", "cancelled"):
            title = "Print Stopped"
        else:
            title = "Print Ended"

        lines = [f"{printer_name}: {filename}"]

        if archive_data:
            # Add print time if available
            if archive_data.get("print_time_seconds"):
                lines.append(f"Time: {self._format_duration(archive_data['print_time_seconds'])}")
            # Add filament used if available
            if archive_data.get("actual_filament_grams"):
                lines.append(f"Filament: {archive_data['actual_filament_grams']:.1f}g")
            # Add failure reason if failed
            if status == "failed" and archive_data.get("failure_reason"):
                lines.append(f"Reason: {archive_data['failure_reason']}")

        message = "\n".join(lines)
        return title, message

    def _build_progress_message(
        self, printer_name: str, filename: str, progress: int
    ) -> tuple[str, str]:
        """Build notification message for print progress milestone."""
        if filename.endswith(".gcode.3mf"):
            filename = filename[:-10]
        elif filename.endswith(".3mf"):
            filename = filename[:-4]

        title = f"Print {progress}% Complete"
        message = f"{printer_name}: {filename}"
        return title, message

    def _build_printer_offline_message(self, printer_name: str) -> tuple[str, str]:
        """Build notification message for printer offline event."""
        title = "Printer Offline"
        message = f"{printer_name} has disconnected"
        return title, message

    def _build_printer_error_message(
        self, printer_name: str, error_type: str, error_detail: str | None = None
    ) -> tuple[str, str]:
        """Build notification message for printer error event."""
        title = f"Printer Error: {error_type}"
        message = f"{printer_name}"
        if error_detail:
            message += f"\n{error_detail}"
        return title, message

    def _build_filament_low_message(
        self, printer_name: str, slot: int, remaining_percent: int
    ) -> tuple[str, str]:
        """Build notification message for low filament event."""
        title = "Filament Low"
        message = f"{printer_name}: Slot {slot} at {remaining_percent}%"
        return title, message

    async def send_test_notification(
        self, provider_type: str, config: dict[str, Any]
    ) -> tuple[bool, str]:
        """Send a test notification to verify configuration."""
        title = "BambuTrack Test"
        message = "This is a test notification from BambuTrack. If you see this, notifications are working correctly!"

        try:
            if provider_type == "callmebot":
                return await self._send_callmebot(config, f"{title}\n{message}")
            elif provider_type == "ntfy":
                return await self._send_ntfy(config, title, message)
            elif provider_type == "pushover":
                return await self._send_pushover(config, title, message)
            elif provider_type == "telegram":
                return await self._send_telegram(config, f"*{title}*\n{message}")
            elif provider_type == "email":
                return await self._send_email(config, title, message)
            else:
                return False, f"Unknown provider type: {provider_type}"
        except Exception as e:
            logger.exception(f"Error sending test notification via {provider_type}")
            return False, str(e)

    async def _send_callmebot(self, config: dict, message: str) -> tuple[bool, str]:
        """Send notification via CallMeBot (WhatsApp)."""
        phone = config.get("phone", "").strip()
        apikey = config.get("apikey", "").strip()

        if not phone or not apikey:
            return False, "Phone number and API key are required"

        # URL encode the message
        encoded_message = quote(message)
        url = f"https://api.callmebot.com/whatsapp.php?phone={phone}&text={encoded_message}&apikey={apikey}"

        client = await self._get_client()
        response = await client.get(url)

        if response.status_code == 200:
            return True, "Message sent successfully"
        else:
            return False, f"HTTP {response.status_code}: {response.text[:200]}"

    async def _send_ntfy(self, config: dict, title: str, message: str) -> tuple[bool, str]:
        """Send notification via ntfy."""
        server = config.get("server", "https://ntfy.sh").rstrip("/")
        topic = config.get("topic", "").strip()
        auth_token = config.get("auth_token", "").strip()

        if not topic:
            return False, "Topic is required"

        url = f"{server}/{topic}"
        headers = {"Title": title}

        if auth_token:
            headers["Authorization"] = f"Bearer {auth_token}"

        client = await self._get_client()
        response = await client.post(url, content=message, headers=headers)

        if response.status_code in (200, 204):
            return True, "Message sent successfully"
        else:
            return False, f"HTTP {response.status_code}: {response.text[:200]}"

    async def _send_pushover(self, config: dict, title: str, message: str) -> tuple[bool, str]:
        """Send notification via Pushover."""
        user_key = config.get("user_key", "").strip()
        app_token = config.get("app_token", "").strip()
        priority = config.get("priority", 0)

        if not user_key or not app_token:
            return False, "User key and app token are required"

        url = "https://api.pushover.net/1/messages.json"
        data = {
            "token": app_token,
            "user": user_key,
            "title": title,
            "message": message,
            "priority": priority,
        }

        client = await self._get_client()
        response = await client.post(url, data=data)

        if response.status_code == 200:
            return True, "Message sent successfully"
        else:
            try:
                error_data = response.json()
                errors = error_data.get("errors", [])
                return False, f"Pushover error: {', '.join(errors)}"
            except Exception:
                return False, f"HTTP {response.status_code}: {response.text[:200]}"

    async def _send_telegram(self, config: dict, message: str) -> tuple[bool, str]:
        """Send notification via Telegram bot."""
        bot_token = config.get("bot_token", "").strip()
        chat_id = config.get("chat_id", "").strip()

        if not bot_token or not chat_id:
            return False, "Bot token and chat ID are required"

        url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
        data = {
            "chat_id": chat_id,
            "text": message,
            "parse_mode": "Markdown",
        }

        client = await self._get_client()
        response = await client.post(url, json=data)

        if response.status_code == 200:
            result = response.json()
            if result.get("ok"):
                return True, "Message sent successfully"
            else:
                return False, f"Telegram error: {result.get('description', 'Unknown error')}"
        else:
            return False, f"HTTP {response.status_code}: {response.text[:200]}"

    async def _send_email(self, config: dict, subject: str, body: str) -> tuple[bool, str]:
        """Send notification via email (SMTP)."""
        smtp_server = config.get("smtp_server", "").strip()
        smtp_port = int(config.get("smtp_port", 587))
        username = config.get("username", "").strip()
        password = config.get("password", "").strip()
        from_email = config.get("from_email", "").strip()
        to_email = config.get("to_email", "").strip()
        # Security: "starttls" (port 587), "ssl" (port 465), "none" (port 25)
        security = config.get("security", "starttls")
        # Authentication: "true" or "false"
        auth_enabled = config.get("auth_enabled", "true").lower() == "true"

        if not all([smtp_server, from_email, to_email]):
            return False, "SMTP server, from email, and to email are required"

        if auth_enabled and not all([username, password]):
            return False, "Username and password are required when authentication is enabled"

        try:
            msg = MIMEMultipart()
            msg["From"] = from_email
            msg["To"] = to_email
            msg["Subject"] = f"[BambuTrack] {subject}"
            msg.attach(MIMEText(body, "plain"))

            if security == "ssl":
                # Direct SSL connection (typically port 465)
                server = smtplib.SMTP_SSL(smtp_server, smtp_port)
            elif security == "starttls":
                # STARTTLS upgrade (typically port 587)
                server = smtplib.SMTP(smtp_server, smtp_port)
                server.starttls()
            else:
                # No encryption (typically port 25) - use with caution
                server = smtplib.SMTP(smtp_server, smtp_port)

            if auth_enabled:
                server.login(username, password)

            server.sendmail(from_email, to_email, msg.as_string())
            server.quit()

            return True, "Email sent successfully"
        except smtplib.SMTPAuthenticationError:
            return False, "SMTP authentication failed - check username/password"
        except smtplib.SMTPException as e:
            return False, f"SMTP error: {str(e)}"
        except Exception as e:
            return False, f"Email error: {str(e)}"

    async def _send_to_provider(
        self, provider: NotificationProvider, title: str, message: str
    ) -> tuple[bool, str]:
        """Send notification to a specific provider."""
        # Check quiet hours
        if self._is_in_quiet_hours(provider):
            logger.info(f"Skipping notification to {provider.name} - quiet hours active")
            return True, "Skipped - quiet hours"

        config = json.loads(provider.config) if isinstance(provider.config, str) else provider.config

        try:
            if provider.provider_type == "callmebot":
                return await self._send_callmebot(config, f"{title}\n{message}")
            elif provider.provider_type == "ntfy":
                return await self._send_ntfy(config, title, message)
            elif provider.provider_type == "pushover":
                return await self._send_pushover(config, title, message)
            elif provider.provider_type == "telegram":
                return await self._send_telegram(config, f"*{title}*\n{message}")
            elif provider.provider_type == "email":
                return await self._send_email(config, title, message)
            else:
                return False, f"Unknown provider type: {provider.provider_type}"
        except Exception as e:
            logger.exception(f"Error sending notification via {provider.provider_type}")
            return False, str(e)

    async def _update_provider_status(
        self, db: AsyncSession, provider_id: int, success: bool, error: str | None = None
    ):
        """Update provider status after sending notification."""
        result = await db.execute(
            select(NotificationProvider).where(NotificationProvider.id == provider_id)
        )
        provider = result.scalar_one_or_none()
        if provider:
            if success:
                provider.last_success = datetime.utcnow()
            else:
                provider.last_error = error
                provider.last_error_at = datetime.utcnow()
            await db.commit()

    async def _get_providers_for_event(
        self,
        db: AsyncSession,
        event_field: str,
        printer_id: int | None = None,
    ) -> list[NotificationProvider]:
        """Get all enabled providers that want a specific event type."""
        # Build the query dynamically based on event field
        query = select(NotificationProvider).where(
            NotificationProvider.enabled == True,
            getattr(NotificationProvider, event_field) == True,
        )

        if printer_id is not None:
            query = query.where(
                (NotificationProvider.printer_id == None) | (NotificationProvider.printer_id == printer_id)
            )

        result = await db.execute(query)
        return list(result.scalars().all())

    async def _send_to_providers(
        self,
        providers: list[NotificationProvider],
        title: str,
        message: str,
        db: AsyncSession,
    ):
        """Send notification to multiple providers."""
        for provider in providers:
            try:
                success, error = await self._send_to_provider(provider, title, message)
                await self._update_provider_status(db, provider.id, success, error if not success else None)
                if success:
                    logger.info(f"Sent notification via {provider.name}")
                else:
                    logger.warning(f"Failed to send notification via {provider.name}: {error}")
            except Exception as e:
                logger.exception(f"Error sending notification via {provider.name}")
                await self._update_provider_status(db, provider.id, False, str(e))

    async def on_print_start(
        self, printer_id: int, printer_name: str, data: dict, db: AsyncSession
    ):
        """Handle print start event - send notifications to relevant providers."""
        logger.info(f"on_print_start called for printer {printer_id} ({printer_name})")
        providers = await self._get_providers_for_event(db, "on_print_start", printer_id)
        if not providers:
            logger.info(f"No notification providers configured for print_start event on printer {printer_id}")
            return

        logger.info(f"Found {len(providers)} providers for print_start: {[p.name for p in providers]}")
        title, message = self._build_print_start_message(printer_name, data)
        await self._send_to_providers(providers, title, message, db)

    async def on_print_complete(
        self,
        printer_id: int,
        printer_name: str,
        status: str,
        data: dict,
        db: AsyncSession,
        archive_data: dict | None = None,
    ):
        """Handle print complete event - send notifications to relevant providers."""
        logger.info(f"on_print_complete called for printer {printer_id} ({printer_name}), status={status}")
        # Determine which event type this is
        if status == "completed":
            event_field = "on_print_complete"
        elif status in ("failed",):
            event_field = "on_print_failed"
        elif status in ("aborted", "stopped", "cancelled"):
            event_field = "on_print_stopped"
        else:
            # Unknown status, default to on_print_complete
            logger.warning(f"Unknown print status '{status}', defaulting to on_print_complete")
            event_field = "on_print_complete"

        providers = await self._get_providers_for_event(db, event_field, printer_id)
        if not providers:
            logger.info(f"No notification providers configured for {event_field} event on printer {printer_id}")
            return

        logger.info(f"Found {len(providers)} providers for {event_field}: {[p.name for p in providers]}")
        title, message = self._build_print_complete_message(printer_name, status, data, archive_data)
        await self._send_to_providers(providers, title, message, db)

    async def on_print_progress(
        self,
        printer_id: int,
        printer_name: str,
        filename: str,
        progress: int,
        db: AsyncSession,
    ):
        """Handle print progress milestone (25%, 50%, 75%)."""
        providers = await self._get_providers_for_event(db, "on_print_progress", printer_id)
        if not providers:
            return

        title, message = self._build_progress_message(printer_name, filename, progress)
        await self._send_to_providers(providers, title, message, db)

    async def on_printer_offline(
        self, printer_id: int, printer_name: str, db: AsyncSession
    ):
        """Handle printer offline event."""
        providers = await self._get_providers_for_event(db, "on_printer_offline", printer_id)
        if not providers:
            return

        title, message = self._build_printer_offline_message(printer_name)
        await self._send_to_providers(providers, title, message, db)

    async def on_printer_error(
        self,
        printer_id: int,
        printer_name: str,
        error_type: str,
        db: AsyncSession,
        error_detail: str | None = None,
    ):
        """Handle printer error event (AMS issues, etc.)."""
        providers = await self._get_providers_for_event(db, "on_printer_error", printer_id)
        if not providers:
            return

        title, message = self._build_printer_error_message(printer_name, error_type, error_detail)
        await self._send_to_providers(providers, title, message, db)

    async def on_filament_low(
        self,
        printer_id: int,
        printer_name: str,
        slot: int,
        remaining_percent: int,
        db: AsyncSession,
    ):
        """Handle low filament event."""
        providers = await self._get_providers_for_event(db, "on_filament_low", printer_id)
        if not providers:
            return

        title, message = self._build_filament_low_message(printer_name, slot, remaining_percent)
        await self._send_to_providers(providers, title, message, db)


# Global instance
notification_service = NotificationService()
