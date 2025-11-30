# Notifications Feature Implementation Plan

## Overview
Add push notifications for print events (start, complete, fail) with support for multiple notification providers.

## Supported Providers (Initial Release)
1. **CallMeBot/WhatsApp** - Free, uses HTTP API with phone number + API key
2. **ntfy** - Self-hosted or ntfy.sh, simple HTTP POST
3. **Pushover** - Commercial ($5 one-time), HTTP API with user key + app token
4. **Telegram** - Free bot API, requires bot token + chat ID
5. **Email (SMTP)** - Universal fallback

## Database Design

### New Table: `notification_providers`
```sql
CREATE TABLE notification_providers (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,                    -- User-defined name ("My WhatsApp")
    provider_type TEXT NOT NULL,           -- "callmebot", "ntfy", "pushover", "telegram", "email"
    enabled BOOLEAN DEFAULT true,

    -- Provider-specific config (JSON or individual fields)
    config TEXT NOT NULL,                  -- JSON: {"phone": "+1234", "apikey": "xxx"}

    -- Event triggers (which events send notifications)
    on_print_start BOOLEAN DEFAULT false,
    on_print_complete BOOLEAN DEFAULT true,
    on_print_failed BOOLEAN DEFAULT true,

    -- Optional: Link to specific printer (NULL = all printers)
    printer_id INTEGER REFERENCES printers(id) ON DELETE SET NULL,

    -- Timestamps
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### Config JSON Structure by Provider
```python
# CallMeBot/WhatsApp
{"phone": "+1234567890", "apikey": "123456"}

# ntfy
{"server": "https://ntfy.sh", "topic": "my-printer", "auth_token": "optional"}

# Pushover
{"user_key": "xxx", "app_token": "yyy", "priority": 0}

# Telegram
{"bot_token": "123:ABC", "chat_id": "12345678"}

# Email (SMTP)
{"smtp_server": "smtp.gmail.com", "smtp_port": 587, "username": "x", "password": "y", "from_email": "x@gmail.com", "to_email": "dest@example.com"}
```

## Backend Implementation

### 1. Model: `backend/app/models/notification.py`
- SQLAlchemy model for `notification_providers` table
- Relationship to Printer (optional, nullable)

### 2. Schema: `backend/app/schemas/notification.py`
- `NotificationProviderBase` - Common fields
- `NotificationProviderCreate` - For creating new providers
- `NotificationProviderUpdate` - For partial updates
- `NotificationProviderResponse` - API response with id/timestamps
- `NotificationTestRequest` - For testing notifications

### 3. Service: `backend/app/services/notification_service.py`
Core notification dispatcher with provider implementations:

```python
class NotificationService:
    async def send_notification(self, provider: NotificationProvider, event: str, data: dict) -> bool
    async def on_print_start(self, printer_id: int, data: dict, db: AsyncSession)
    async def on_print_complete(self, printer_id: int, status: str, data: dict, db: AsyncSession)

    # Provider-specific methods
    async def _send_callmebot(self, config: dict, message: str) -> bool
    async def _send_ntfy(self, config: dict, title: str, message: str) -> bool
    async def _send_pushover(self, config: dict, title: str, message: str) -> bool
    async def _send_telegram(self, config: dict, message: str) -> bool
    async def _send_email(self, config: dict, subject: str, body: str) -> bool
```

### 4. Routes: `backend/app/api/routes/notifications.py`
```
GET    /notifications/              - List all providers
POST   /notifications/              - Create provider
GET    /notifications/{id}          - Get provider details
PATCH  /notifications/{id}          - Update provider
DELETE /notifications/{id}          - Delete provider
POST   /notifications/{id}/test     - Send test notification
POST   /notifications/test-config   - Test config before saving
```

### 5. Integration in `main.py`
Add calls to notification service in existing event handlers:
- `on_print_start()` - After smart_plug_manager call (line ~244)
- `on_print_complete()` - After archive update (line ~580)

## Frontend Implementation

### 1. API Client: `frontend/src/api/client.ts`
Add types and API methods for notification providers.

### 2. Components
- `NotificationProviderCard.tsx` - Display single provider with enable/disable toggle
- `AddNotificationModal.tsx` - Modal for adding/editing providers with provider-specific forms

### 3. Settings Page Integration
Add "Notifications" section in SettingsPage.tsx (similar to Smart Plugs section):
- List of configured providers
- Add button
- Per-provider enable/disable
- Test button
- Event toggles (start/complete/failed)

## Message Templates

### Print Started
```
🖨️ Print Started
{printer_name}: {filename}
Estimated time: {est_time}
```

### Print Completed
```
✅ Print Completed
{printer_name}: {filename}
Time: {actual_time}
Filament: {filament_used}g
```

### Print Failed
```
❌ Print Failed
{printer_name}: {filename}
Status: {failure_reason}
Progress: {progress}%
```

## Implementation Order

### Phase 1: Backend Core
1. Create notification model with migrations
2. Create notification schema
3. Create notification service with all 5 providers
4. Create notification routes (CRUD + test)
5. Register routes in main.py
6. Integrate into print event handlers

### Phase 2: Frontend
7. Add API types and methods
8. Create NotificationProviderCard component
9. Create AddNotificationModal component
10. Add Notifications section to SettingsPage

### Phase 3: Testing & Polish
11. Test each provider
12. Add error handling and logging
13. Handle network failures gracefully (don't block print events)

## Technical Notes

### Async HTTP Requests
Use `httpx` (already available) for async HTTP calls to notification APIs.

### Error Handling
- Notifications should NEVER block print events
- Log failures but continue processing
- Store last_error and last_success timestamps for UI feedback

### Security
- Store credentials in database (SQLite file already contains access codes)
- Consider encryption for sensitive fields in future

### Rate Limiting
- Debounce rapid events (don't spam on quick start/stop cycles)
- Consider per-provider rate limits

## Questions for User
None - proceeding with the 5 providers as discussed.
