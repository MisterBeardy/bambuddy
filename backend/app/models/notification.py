"""Notification provider model for push notifications."""

from datetime import datetime

from sqlalchemy import Boolean, Column, DateTime, ForeignKey, Integer, String, Text, Time
from sqlalchemy.orm import relationship

from backend.app.core.database import Base


class NotificationProvider(Base):
    """Model for notification providers (WhatsApp, ntfy, Pushover, etc.)."""

    __tablename__ = "notification_providers"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)  # User-defined name
    provider_type = Column(String(50), nullable=False)  # callmebot, ntfy, pushover, telegram, email
    enabled = Column(Boolean, default=True)

    # Provider-specific configuration stored as JSON string
    config = Column(Text, nullable=False)

    # Event triggers - print lifecycle
    on_print_start = Column(Boolean, default=False)
    on_print_complete = Column(Boolean, default=True)
    on_print_failed = Column(Boolean, default=True)
    on_print_stopped = Column(Boolean, default=True)  # User cancelled/stopped print
    on_print_progress = Column(Boolean, default=False)  # 25%, 50%, 75% milestones

    # Event triggers - printer status
    on_printer_offline = Column(Boolean, default=False)
    on_printer_error = Column(Boolean, default=False)  # AMS issues, etc.
    on_filament_low = Column(Boolean, default=False)

    # Quiet hours (do not disturb)
    quiet_hours_enabled = Column(Boolean, default=False)
    quiet_hours_start = Column(String(5), nullable=True)  # HH:MM format, e.g., "22:00"
    quiet_hours_end = Column(String(5), nullable=True)  # HH:MM format, e.g., "07:00"

    # Optional: Link to specific printer (NULL = all printers)
    printer_id = Column(Integer, ForeignKey("printers.id", ondelete="SET NULL"), nullable=True)

    # Status tracking
    last_success = Column(DateTime, nullable=True)
    last_error = Column(Text, nullable=True)
    last_error_at = Column(DateTime, nullable=True)

    # Timestamps
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # Relationships
    printer = relationship("Printer", back_populates="notification_providers")
