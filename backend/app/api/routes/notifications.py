"""API routes for notification providers."""

import json
import logging

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from backend.app.core.database import get_db
from backend.app.models.notification import NotificationProvider
from backend.app.schemas.notification import (
    NotificationProviderCreate,
    NotificationProviderResponse,
    NotificationProviderUpdate,
    NotificationTestRequest,
    NotificationTestResponse,
)
from backend.app.services.notification_service import notification_service

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/notifications", tags=["notifications"])


def _provider_to_dict(provider: NotificationProvider) -> dict:
    """Convert a NotificationProvider model to a response dictionary."""
    return {
        "id": provider.id,
        "name": provider.name,
        "provider_type": provider.provider_type,
        "enabled": provider.enabled,
        "config": json.loads(provider.config) if isinstance(provider.config, str) else provider.config,
        # Print lifecycle events
        "on_print_start": provider.on_print_start,
        "on_print_complete": provider.on_print_complete,
        "on_print_failed": provider.on_print_failed,
        "on_print_progress": provider.on_print_progress,
        # Printer status events
        "on_printer_offline": provider.on_printer_offline,
        "on_printer_error": provider.on_printer_error,
        "on_filament_low": provider.on_filament_low,
        # Quiet hours
        "quiet_hours_enabled": provider.quiet_hours_enabled,
        "quiet_hours_start": provider.quiet_hours_start,
        "quiet_hours_end": provider.quiet_hours_end,
        # Printer filter
        "printer_id": provider.printer_id,
        # Status tracking
        "last_success": provider.last_success,
        "last_error": provider.last_error,
        "last_error_at": provider.last_error_at,
        # Timestamps
        "created_at": provider.created_at,
        "updated_at": provider.updated_at,
    }


@router.get("/", response_model=list[NotificationProviderResponse])
async def list_notification_providers(db: AsyncSession = Depends(get_db)):
    """List all notification providers."""
    result = await db.execute(
        select(NotificationProvider).order_by(NotificationProvider.created_at.desc())
    )
    providers = result.scalars().all()

    return [_provider_to_dict(provider) for provider in providers]


@router.post("/", response_model=NotificationProviderResponse)
async def create_notification_provider(
    provider_data: NotificationProviderCreate,
    db: AsyncSession = Depends(get_db),
):
    """Create a new notification provider."""
    provider = NotificationProvider(
        name=provider_data.name,
        provider_type=provider_data.provider_type.value,
        enabled=provider_data.enabled,
        config=json.dumps(provider_data.config),
        # Print lifecycle events
        on_print_start=provider_data.on_print_start,
        on_print_complete=provider_data.on_print_complete,
        on_print_failed=provider_data.on_print_failed,
        on_print_progress=provider_data.on_print_progress,
        # Printer status events
        on_printer_offline=provider_data.on_printer_offline,
        on_printer_error=provider_data.on_printer_error,
        on_filament_low=provider_data.on_filament_low,
        # Quiet hours
        quiet_hours_enabled=provider_data.quiet_hours_enabled,
        quiet_hours_start=provider_data.quiet_hours_start,
        quiet_hours_end=provider_data.quiet_hours_end,
        # Printer filter
        printer_id=provider_data.printer_id,
    )

    db.add(provider)
    await db.commit()
    await db.refresh(provider)

    logger.info(f"Created notification provider: {provider.name} ({provider.provider_type})")

    return _provider_to_dict(provider)


@router.get("/{provider_id}", response_model=NotificationProviderResponse)
async def get_notification_provider(
    provider_id: int,
    db: AsyncSession = Depends(get_db),
):
    """Get a specific notification provider."""
    result = await db.execute(
        select(NotificationProvider).where(NotificationProvider.id == provider_id)
    )
    provider = result.scalar_one_or_none()

    if not provider:
        raise HTTPException(status_code=404, detail="Notification provider not found")

    return _provider_to_dict(provider)


@router.patch("/{provider_id}", response_model=NotificationProviderResponse)
async def update_notification_provider(
    provider_id: int,
    update_data: NotificationProviderUpdate,
    db: AsyncSession = Depends(get_db),
):
    """Update a notification provider."""
    result = await db.execute(
        select(NotificationProvider).where(NotificationProvider.id == provider_id)
    )
    provider = result.scalar_one_or_none()

    if not provider:
        raise HTTPException(status_code=404, detail="Notification provider not found")

    # Update only provided fields
    update_dict = update_data.model_dump(exclude_unset=True)

    for key, value in update_dict.items():
        if key == "config" and value is not None:
            setattr(provider, key, json.dumps(value))
        elif key == "provider_type" and value is not None:
            setattr(provider, key, value.value)
        else:
            setattr(provider, key, value)

    await db.commit()
    await db.refresh(provider)

    logger.info(f"Updated notification provider: {provider.name}")

    return _provider_to_dict(provider)


@router.delete("/{provider_id}")
async def delete_notification_provider(
    provider_id: int,
    db: AsyncSession = Depends(get_db),
):
    """Delete a notification provider."""
    result = await db.execute(
        select(NotificationProvider).where(NotificationProvider.id == provider_id)
    )
    provider = result.scalar_one_or_none()

    if not provider:
        raise HTTPException(status_code=404, detail="Notification provider not found")

    name = provider.name
    await db.delete(provider)
    await db.commit()

    logger.info(f"Deleted notification provider: {name}")

    return {"message": f"Notification provider '{name}' deleted"}


@router.post("/{provider_id}/test", response_model=NotificationTestResponse)
async def test_notification_provider(
    provider_id: int,
    db: AsyncSession = Depends(get_db),
):
    """Send a test notification using an existing provider."""
    result = await db.execute(
        select(NotificationProvider).where(NotificationProvider.id == provider_id)
    )
    provider = result.scalar_one_or_none()

    if not provider:
        raise HTTPException(status_code=404, detail="Notification provider not found")

    config = json.loads(provider.config) if isinstance(provider.config, str) else provider.config
    success, message = await notification_service.send_test_notification(
        provider.provider_type, config
    )

    # Update provider status
    if success:
        from datetime import datetime
        provider.last_success = datetime.utcnow()
    else:
        from datetime import datetime
        provider.last_error = message
        provider.last_error_at = datetime.utcnow()

    await db.commit()

    return NotificationTestResponse(success=success, message=message)


@router.post("/test-config", response_model=NotificationTestResponse)
async def test_notification_config(
    test_request: NotificationTestRequest,
):
    """Test notification configuration before saving."""
    success, message = await notification_service.send_test_notification(
        test_request.provider_type.value, test_request.config
    )

    return NotificationTestResponse(success=success, message=message)
