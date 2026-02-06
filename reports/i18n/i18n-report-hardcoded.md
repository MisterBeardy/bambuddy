# i18n Hard-coded Strings Report

Generated: 2026-02-06T14:29:47.931Z

## Frontend | Hard-coded strings (heuristic)

| File | Line | Text |
| --- | --- | --- |
| frontend/src/App.tsx | 43 | Loading... |
| frontend/src/App.tsx | 57 | Loading... |
| frontend/src/App.tsx | 82 | Loading... |
| frontend/src/components/AMSHistoryModal.tsx | 57 | ('24h'); const [mode, setMode] = useState |
| frontend/src/components/AMSHistoryModal.tsx | 122 | a + b, 0) / firstQuarter.length; const lastAvg = lastQuarter.reduce((a, b) => a + b, 0) / lastQuarter.length; const diff = lastAvg - firstAvg; if (Math.abs(diff) |
| frontend/src/components/AMSHistoryModal.tsx | 133 | ; if (trend === 'down') return |
| frontend/src/components/AMSHistoryModal.tsx | 134 | ; return |
| frontend/src/components/AMSHistoryModal.tsx | 300 | ) : error ? ( |
| frontend/src/components/AMSHistoryModal.tsx | 304 | ) : chartData.length === 0 ? ( |
| frontend/src/components/APIBrowser.tsx | 337 | Path Parameters |
| frontend/src/components/APIBrowser.tsx | 361 | Query Parameters |
| frontend/src/components/APIBrowser.tsx | 375 | -- Select -- |
| frontend/src/components/APIBrowser.tsx | 398 | Request Body |
| frontend/src/components/APIBrowser.tsx | 431 | Response |
| frontend/src/components/APIBrowser.tsx | 434 | = 200 && response.status |
| frontend/src/components/APIBrowser.tsx | 470 | (null); const [loading, setLoading] = useState(true); const [error, setError] = useState |
| frontend/src/components/APIBrowser.tsx | 472 | (null); const [expandedTags, setExpandedTags] = useState |
| frontend/src/components/APIBrowser.tsx | 506 | Failed to load API schema |
| frontend/src/components/APIBrowser.tsx | 585 | Expand All |
| frontend/src/components/APIBrowser.tsx | 588 | Collapse All |
| frontend/src/components/APIBrowser.tsx | 597 | Swagger UI |
| frontend/src/components/APIBrowser.tsx | 404 | JSON request body... |
| frontend/src/components/APIBrowser.tsx | 580 | Search endpoints... |
| frontend/src/components/AddExternalLinkModal.tsx | 19 | (null); const [name, setName] = useState(link?.name \|\| ''); const [url, setUrl] = useState(link?.url \|\| ''); const [icon, setIcon] = useState(link?.icon \|\| 'link'); const [useCustomIcon, setUseCustomIcon] = useState(!!link?.custom_icon); const [customIconPreview, setCustomIconPreview] = useState |
| frontend/src/components/AddExternalLinkModal.tsx | 25 | ( link?.custom_icon ? api.getExternalLinkIconUrl(link.id) : null ); const [pendingIconFile, setPendingIconFile] = useState |
| frontend/src/components/AddExternalLinkModal.tsx | 28 | (null); const [error, setError] = useState |
| frontend/src/components/AddExternalLinkModal.tsx | 196 | Name * |
| frontend/src/components/AddExternalLinkModal.tsx | 209 | URL * |
| frontend/src/components/AddExternalLinkModal.tsx | 221 | Icon |
| frontend/src/components/AddExternalLinkModal.tsx | 226 | Custom Icon |
| frontend/src/components/AddExternalLinkModal.tsx | 253 | Upload |
| frontend/src/components/AddExternalLinkModal.tsx | 258 | PNG, JPG, GIF, SVG, WebP, or ICO. Max 1MB. |
| frontend/src/components/AddExternalLinkModal.tsx | 266 | Or choose a preset icon |
| frontend/src/components/AddExternalLinkModal.tsx | 279 | Cancel |
| frontend/src/components/AddExternalLinkModal.tsx | 201 | My Link |
| frontend/src/components/AddExternalLinkModal.tsx | 214 | https://example.com |
| frontend/src/components/AddExternalLinkModal.tsx | 236 | Custom icon |
| frontend/src/components/AddExternalLinkModal.tsx | 241 | Remove custom icon |
| frontend/src/components/AddNotificationModal.tsx | 29 | (provider?.provider_type \|\| 'email'); const [printerId, setPrinterId] = useState |
| frontend/src/components/AddNotificationModal.tsx | 30 | (provider?.printer_id \|\| null); const [quietHoursEnabled, setQuietHoursEnabled] = useState(provider?.quiet_hours_enabled \|\| false); const [quietHoursStart, setQuietHoursStart] = useState(provider?.quiet_hours_start \|\| '22:00'); const [quietHoursEnd, setQuietHoursEnd] = useState(provider?.quiet_hours_end \|\| '07:00'); // Daily digest const [dailyDigestEnabled, setDailyDigestEnabled] = useState(provider?.daily_digest_enabled \|\| false); const [dailyDigestTime, setDailyDigestTime] = useState(provider?.daily_digest_time \|\| '08:00'); // Event toggles const [onPrintStart, setOnPrintStart] = useState(provider?.on_print_start ?? false); const [onPrintComplete, setOnPrintComplete] = useState(provider?.on_print_complete ?? true); const [onPrintFailed, setOnPrintFailed] = useState(provider?.on_print_failed ?? true); const [onPrintStopped, setOnPrintStopped] = useState(provider?.on_print_stopped ?? true); const [onPrintProgress, setOnPrintProgress] = useState(provider?.on_print_progress ?? false); const [onPrinterOffline, setOnPrinterOffline] = useState(provider?.on_printer_offline ?? false); const [onPrinterError, setOnPrinterError] = useState(provider?.on_printer_error ?? false); const [onFilamentLow, setOnFilamentLow] = useState(provider?.on_filament_low ?? false); const [onMaintenanceDue, setOnMaintenanceDue] = useState(provider?.on_maintenance_due ?? false); // Provider-specific config const [config, setConfig] = useState |
| frontend/src/components/AddNotificationModal.tsx | 55 | (null); const [error, setError] = useState |
| frontend/src/components/AddNotificationModal.tsx | 260 | Name * |
| frontend/src/components/AddNotificationModal.tsx | 272 | Provider Type * |
| frontend/src/components/AddNotificationModal.tsx | 296 | Configuration |
| frontend/src/components/AddNotificationModal.tsx | 379 | Printer Filter |
| frontend/src/components/AddNotificationModal.tsx | 385 | All printers |
| frontend/src/components/AddNotificationModal.tsx | 392 | Only send notifications for events from this printer |
| frontend/src/components/AddNotificationModal.tsx | 400 | Quiet Hours (Do Not Disturb) |
| frontend/src/components/AddNotificationModal.tsx | 409 | Start |
| frontend/src/components/AddNotificationModal.tsx | 418 | End |
| frontend/src/components/AddNotificationModal.tsx | 434 | Daily Digest |
| frontend/src/components/AddNotificationModal.tsx | 435 | Batch notifications into a single daily summary |
| frontend/src/components/AddNotificationModal.tsx | 444 | Send digest at |
| frontend/src/components/AddNotificationModal.tsx | 451 | Events will be collected and sent as a single summary at this time |
| frontend/src/components/AddNotificationModal.tsx | 460 | Notification Events |
| frontend/src/components/AddNotificationModal.tsx | 464 | Print Events |
| frontend/src/components/AddNotificationModal.tsx | 467 | Start |
| frontend/src/components/AddNotificationModal.tsx | 471 | Complete |
| frontend/src/components/AddNotificationModal.tsx | 475 | Failed |
| frontend/src/components/AddNotificationModal.tsx | 479 | Stopped |
| frontend/src/components/AddNotificationModal.tsx | 484 | Progress |
| frontend/src/components/AddNotificationModal.tsx | 494 | Printer Status |
| frontend/src/components/AddNotificationModal.tsx | 497 | Offline |
| frontend/src/components/AddNotificationModal.tsx | 501 | Error |
| frontend/src/components/AddNotificationModal.tsx | 505 | Low Filament |
| frontend/src/components/AddNotificationModal.tsx | 509 | Maintenance |
| frontend/src/components/AddNotificationModal.tsx | 523 | Cancel |
| frontend/src/components/AddNotificationModal.tsx | 265 | My Notifications |
| frontend/src/components/AddSmartPlugModal.tsx | 18 | (plug?.plug_type \|\| 'tasmota'); const [name, setName] = useState(plug?.name \|\| ''); // Tasmota fields const [ipAddress, setIpAddress] = useState(plug?.ip_address \|\| ''); const [username, setUsername] = useState(plug?.username \|\| ''); const [password, setPassword] = useState(plug?.password \|\| ''); // Home Assistant fields const [haEntityId, setHaEntityId] = useState(plug?.ha_entity_id \|\| ''); // MQTT fields - Power const [mqttPowerTopic, setMqttPowerTopic] = useState(plug?.mqtt_power_topic \|\| plug?.mqtt_topic \|\| ''); const [mqttPowerPath, setMqttPowerPath] = useState(plug?.mqtt_power_path \|\| ''); const [mqttPowerMultiplier, setMqttPowerMultiplier] = useState |
| frontend/src/components/AddSmartPlugModal.tsx | 30 | ( (plug?.mqtt_power_multiplier ?? plug?.mqtt_multiplier ?? 1).toString() ); // MQTT fields - Energy const [mqttEnergyTopic, setMqttEnergyTopic] = useState(plug?.mqtt_energy_topic \|\| ''); const [mqttEnergyPath, setMqttEnergyPath] = useState(plug?.mqtt_energy_path \|\| ''); const [mqttEnergyMultiplier, setMqttEnergyMultiplier] = useState |
| frontend/src/components/AddSmartPlugModal.tsx | 36 | ( (plug?.mqtt_energy_multiplier ?? 1).toString() ); // MQTT fields - State const [mqttStateTopic, setMqttStateTopic] = useState(plug?.mqtt_state_topic \|\| ''); const [mqttStatePath, setMqttStatePath] = useState(plug?.mqtt_state_path \|\| ''); const [mqttStateOnValue, setMqttStateOnValue] = useState(plug?.mqtt_state_on_value \|\| ''); // HA energy sensor entities (optional) const [haPowerEntity, setHaPowerEntity] = useState(plug?.ha_power_entity \|\| ''); const [haEnergyTodayEntity, setHaEnergyTodayEntity] = useState(plug?.ha_energy_today_entity \|\| ''); const [haEnergyTotalEntity, setHaEnergyTotalEntity] = useState(plug?.ha_energy_total_entity \|\| ''); // HA entity search const [haEntitySearch, setHaEntitySearch] = useState(''); const [debouncedSearch, setDebouncedSearch] = useState(''); const [isEntityDropdownOpen, setIsEntityDropdownOpen] = useState(false); const entityDropdownRef = useRef |
| frontend/src/components/AddSmartPlugModal.tsx | 51 | (null); // Energy sensor search states const [powerSensorSearch, setPowerSensorSearch] = useState(''); const [isPowerDropdownOpen, setIsPowerDropdownOpen] = useState(false); const powerDropdownRef = useRef |
| frontend/src/components/AddSmartPlugModal.tsx | 56 | (null); const [energyTodaySearch, setEnergyTodaySearch] = useState(''); const [isEnergyTodayDropdownOpen, setIsEnergyTodayDropdownOpen] = useState(false); const energyTodayDropdownRef = useRef |
| frontend/src/components/AddSmartPlugModal.tsx | 60 | (null); const [energyTotalSearch, setEnergyTotalSearch] = useState(''); const [isEnergyTotalDropdownOpen, setIsEnergyTotalDropdownOpen] = useState(false); const energyTotalDropdownRef = useRef |
| frontend/src/components/AddSmartPlugModal.tsx | 64 | (null); const [printerId, setPrinterId] = useState |
| frontend/src/components/AddSmartPlugModal.tsx | 66 | (plug?.printer_id \|\| null); const [testResult, setTestResult] = useState |
| frontend/src/components/AddSmartPlugModal.tsx | 67 | (null); const [error, setError] = useState |
| frontend/src/components/AddSmartPlugModal.tsx | 68 | (null); // Power alert settings const [powerAlertEnabled, setPowerAlertEnabled] = useState(plug?.power_alert_enabled \|\| false); const [powerAlertHigh, setPowerAlertHigh] = useState |
| frontend/src/components/AddSmartPlugModal.tsx | 72 | (plug?.power_alert_high?.toString() \|\| ''); const [powerAlertLow, setPowerAlertLow] = useState |
| frontend/src/components/AddSmartPlugModal.tsx | 73 | (plug?.power_alert_low?.toString() \|\| ''); // Schedule settings const [scheduleEnabled, setScheduleEnabled] = useState(plug?.schedule_enabled \|\| false); const [scheduleOnTime, setScheduleOnTime] = useState |
| frontend/src/components/AddSmartPlugModal.tsx | 77 | (plug?.schedule_on_time \|\| ''); const [scheduleOffTime, setScheduleOffTime] = useState |
| frontend/src/components/AddSmartPlugModal.tsx | 87 | ([]); const scanPollRef = useRef |
| frontend/src/components/AddSmartPlugModal.tsx | 414 | Tasmota |
| frontend/src/components/AddSmartPlugModal.tsx | 430 | HA |
| frontend/src/components/AddSmartPlugModal.tsx | 446 | MQTT |
| frontend/src/components/AddSmartPlugModal.tsx | 458 | Stop Scanning |
| frontend/src/components/AddSmartPlugModal.tsx | 463 | Discover Tasmota Devices |
| frontend/src/components/AddSmartPlugModal.tsx | 472 | Scanning network... |
| frontend/src/components/AddSmartPlugModal.tsx | 518 | No Tasmota devices found on your network |
| frontend/src/components/AddSmartPlugModal.tsx | 533 | Settings → Network → Home Assistant |
| frontend/src/components/AddSmartPlugModal.tsx | 536 | Select Entity * |
| frontend/src/components/AddSmartPlugModal.tsx | 541 | Choose an entity... |
| frontend/src/components/AddSmartPlugModal.tsx | 552 | Loading entities... |
| frontend/src/components/AddSmartPlugModal.tsx | 574 | Select Entity * |
| frontend/src/components/AddSmartPlugModal.tsx | 613 | Loading... |
| frontend/src/components/AddSmartPlugModal.tsx | 665 | Energy Monitoring (Optional) |
| frontend/src/components/AddSmartPlugModal.tsx | 666 | Search and select sensors that provide power/energy data. |
| frontend/src/components/AddSmartPlugModal.tsx | 686 | Power Sensor (W) |
| frontend/src/components/AddSmartPlugModal.tsx | 747 | No matching sensors |
| frontend/src/components/AddSmartPlugModal.tsx | 770 | Energy Today (kWh) |
| frontend/src/components/AddSmartPlugModal.tsx | 831 | No matching sensors |
| frontend/src/components/AddSmartPlugModal.tsx | 854 | Total Energy (kWh) |
| frontend/src/components/AddSmartPlugModal.tsx | 915 | No matching sensors |
| frontend/src/components/AddSmartPlugModal.tsx | 936 | Settings → Network → MQTT Publishing |
| frontend/src/components/AddSmartPlugModal.tsx | 945 | Monitor Only |
| frontend/src/components/AddSmartPlugModal.tsx | 946 | MQTT plugs receive power/energy data via MQTT subscription. On/off control is not available - use your MQTT broker or home automation system. |
| frontend/src/components/AddSmartPlugModal.tsx | 953 | Power Monitoring |
| frontend/src/components/AddSmartPlugModal.tsx | 955 | Topic |
| frontend/src/components/AddSmartPlugModal.tsx | 966 | JSON Path |
| frontend/src/components/AddSmartPlugModal.tsx | 976 | Multiplier |
| frontend/src/components/AddSmartPlugModal.tsx | 986 | JSON path extracts value from JSON payload (e.g., "power_l1"). Leave empty if topic publishes raw numeric values. |
| frontend/src/components/AddSmartPlugModal.tsx | 987 | Use multiplier 0.001 for mW→W, 1000 for kW→W. |
| frontend/src/components/AddSmartPlugModal.tsx | 994 | Energy Monitoring |
| frontend/src/components/AddSmartPlugModal.tsx | 994 | (optional) |
| frontend/src/components/AddSmartPlugModal.tsx | 996 | Topic |
| frontend/src/components/AddSmartPlugModal.tsx | 1007 | JSON Path |
| frontend/src/components/AddSmartPlugModal.tsx | 1017 | Multiplier |
| frontend/src/components/AddSmartPlugModal.tsx | 1027 | JSON path extracts value from JSON payload. Leave empty for raw values. |
| frontend/src/components/AddSmartPlugModal.tsx | 1028 | Use multiplier 0.001 for Wh→kWh, 1000 for MWh→kWh. |
| frontend/src/components/AddSmartPlugModal.tsx | 1035 | State Monitoring |
| frontend/src/components/AddSmartPlugModal.tsx | 1035 | (optional) |
| frontend/src/components/AddSmartPlugModal.tsx | 1037 | Topic |
| frontend/src/components/AddSmartPlugModal.tsx | 1048 | JSON Path |
| frontend/src/components/AddSmartPlugModal.tsx | 1058 | ON Value |
| frontend/src/components/AddSmartPlugModal.tsx | 1068 | JSON path extracts value from JSON payload. Leave empty for raw values. |
| frontend/src/components/AddSmartPlugModal.tsx | 1069 | ON value: the exact string that means "ON". Leave empty for auto-detect (ON, true, 1). |
| frontend/src/components/AddSmartPlugModal.tsx | 1081 | IP Address * |
| frontend/src/components/AddSmartPlugModal.tsx | 1121 | Connected! |
| frontend/src/components/AddSmartPlugModal.tsx | 1131 | Connection failed |
| frontend/src/components/AddSmartPlugModal.tsx | 1139 | Name * |
| frontend/src/components/AddSmartPlugModal.tsx | 1154 | Username |
| frontend/src/components/AddSmartPlugModal.tsx | 1164 | Password |
| frontend/src/components/AddSmartPlugModal.tsx | 1174 | Leave empty if your Tasmota device doesn't require authentication |
| frontend/src/components/AddSmartPlugModal.tsx | 1183 | Link to Printer |
| frontend/src/components/AddSmartPlugModal.tsx | 1189 | No printer (manual control only) |
| frontend/src/components/AddSmartPlugModal.tsx | 1196 | Linking enables automatic on/off when prints start/complete |
| frontend/src/components/AddSmartPlugModal.tsx | 1207 | Power Alerts |
| frontend/src/components/AddSmartPlugModal.tsx | 1223 | Alert if above (W) |
| frontend/src/components/AddSmartPlugModal.tsx | 1235 | Alert if below (W) |
| frontend/src/components/AddSmartPlugModal.tsx | 1247 | Get notified when power consumption crosses these thresholds. Leave empty to disable that direction. |
| frontend/src/components/AddSmartPlugModal.tsx | 1260 | Daily Schedule |
| frontend/src/components/AddSmartPlugModal.tsx | 1276 | Turn On at |
| frontend/src/components/AddSmartPlugModal.tsx | 1285 | Turn Off at |
| frontend/src/components/AddSmartPlugModal.tsx | 1294 | Automatically turn the plug on/off at these times daily. Leave empty to skip that action. |
| frontend/src/components/AddSmartPlugModal.tsx | 1308 | Show in Switchbar |
| frontend/src/components/AddSmartPlugModal.tsx | 1309 | Quick access from sidebar |
| frontend/src/components/AddSmartPlugModal.tsx | 1331 | Show on Printer Card |
| frontend/src/components/AddSmartPlugModal.tsx | 1332 | Display button on printer card |
| frontend/src/components/AddSmartPlugModal.tsx | 1355 | Cancel |
| frontend/src/components/AddSmartPlugModal.tsx | 588 | Search entities... |
| frontend/src/components/AddSmartPlugModal.tsx | 700 | Search power sensors... |
| frontend/src/components/AddSmartPlugModal.tsx | 784 | Search energy sensors... |
| frontend/src/components/AddSmartPlugModal.tsx | 868 | Search energy sensors... |
| frontend/src/components/AddSmartPlugModal.tsx | 960 | zigbee2mqtt/shelly-working-room |
| frontend/src/components/AddSmartPlugModal.tsx | 971 | power_l1 |
| frontend/src/components/AddSmartPlugModal.tsx | 1001 | Same as power topic, or different |
| frontend/src/components/AddSmartPlugModal.tsx | 1012 | energy_l1 |
| frontend/src/components/AddSmartPlugModal.tsx | 1042 | Same as power topic, or different |
| frontend/src/components/AddSmartPlugModal.tsx | 1053 | state_l1 |
| frontend/src/components/AddSmartPlugModal.tsx | 1063 | ON, true, 1 |
| frontend/src/components/AddSmartPlugModal.tsx | 1144 | Living Room Plug |
| frontend/src/components/AddSmartPlugModal.tsx | 1159 | admin |
| frontend/src/components/AddSmartPlugModal.tsx | 1228 | e.g. 200 |
| frontend/src/components/AddSmartPlugModal.tsx | 1240 | e.g. 10 |
| frontend/src/components/BackupModal.tsx | 128 | ) => Promise |
| frontend/src/components/BackupModal.tsx | 278 | ZIP file will be created. |
| frontend/src/components/BackupModal.tsx | 279 | Includes all 3MF files, thumbnails, timelapses, and photos. This may take a while and result in a large file. |
| frontend/src/components/BackupModal.tsx | 292 | Include Access Codes |
| frontend/src/components/BackupModal.tsx | 293 | For transferring to another machine |
| frontend/src/components/BackupModal.tsx | 302 | Access codes will be included in plain text. Keep this backup file secure! |
| frontend/src/components/BatchProjectModal.tsx | 86 | Assign to Project |
| frontend/src/components/BatchProjectModal.tsx | 121 | Remove from project |
| frontend/src/components/BatchProjectModal.tsx | 122 | Clear project assignment |
| frontend/src/components/BatchProjectModal.tsx | 133 | or assign to |
| frontend/src/components/BatchProjectModal.tsx | 169 | No projects yet. Create one from the Projects page. |
| frontend/src/components/BatchProjectModal.tsx | 179 | Cancel |
| frontend/src/components/BatchTagModal.tsx | 19 | >(new Set()); const [mode, setMode] = useState |
| frontend/src/components/BatchTagModal.tsx | 160 | Existing tags: |
| frontend/src/components/BatchTagModal.tsx | 206 | Cancel |
| frontend/src/components/BatchTagModal.tsx | 216 | Processing... |
| frontend/src/components/BatchTagModal.tsx | 145 | Enter new tag... |
| frontend/src/components/CalendarView.tsx | 32 | (null); const [selectedArchiveId, setSelectedArchiveId] = useState |
| frontend/src/components/CalendarView.tsx | 112 | Today |
| frontend/src/components/CalendarView.tsx | 192 | Prints this month |
| frontend/src/components/CalendarView.tsx | 201 | Successful |
| frontend/src/components/CalendarView.tsx | 210 | Failed |
| frontend/src/components/CalendarView.tsx | 252 | 3MF |
| frontend/src/components/CalendarView.tsx | 281 | No prints on this day |
| frontend/src/components/CalendarView.tsx | 286 | Select a day to see prints |
| frontend/src/components/CompareArchivesModal.tsx | 49 | ) : error ? ( |
| frontend/src/components/CompareArchivesModal.tsx | 53 | Failed to load comparison |
| frontend/src/components/CompareArchivesModal.tsx | 57 | ) : comparison ? ( |
| frontend/src/components/CompareArchivesModal.tsx | 65 | Close |
| frontend/src/components/CompareArchivesModal.tsx | 82 | Setting |
| frontend/src/components/CompareArchivesModal.tsx | 159 | Success/Failure Analysis |
| frontend/src/components/CompareArchivesModal.tsx | 180 | No clear correlations found between settings and outcomes. |
| frontend/src/components/ConfigureAmsSlotModal.tsx | 26 | = 128 && amsId |
| frontend/src/components/ConfigureAmsSlotModal.tsx | 30 | = 0 && amsId |
| frontend/src/components/ConfigureAmsSlotModal.tsx | 219 | (''); const [selectedKProfile, setSelectedKProfile] = useState |
| frontend/src/components/ConfigureAmsSlotModal.tsx | 220 | (null); const [colorHex, setColorHex] = useState |
| frontend/src/components/ConfigureAmsSlotModal.tsx | 221 | (''); // Just the 6-char hex, no alpha const [colorInput, setColorInput] = useState |
| frontend/src/components/ConfigureAmsSlotModal.tsx | 554 | Configure AMS Slot |
| frontend/src/components/ConfigureAmsSlotModal.tsx | 571 | Slot Configured! |
| frontend/src/components/ConfigureAmsSlotModal.tsx | 572 | Settings sent to printer |
| frontend/src/components/ConfigureAmsSlotModal.tsx | 579 | Configuring slot: |
| frontend/src/components/ConfigureAmsSlotModal.tsx | 604 | Filament Profile |
| frontend/src/components/ConfigureAmsSlotModal.tsx | 621 | ) : ( filteredPresets.map((preset) => ( |
| frontend/src/components/ConfigureAmsSlotModal.tsx | 636 | Custom |
| frontend/src/components/ConfigureAmsSlotModal.tsx | 668 | No K profile (use default 0.020) |
| frontend/src/components/ConfigureAmsSlotModal.tsx | 676 | ) : selectedPresetId ? ( |
| frontend/src/components/ConfigureAmsSlotModal.tsx | 678 | No matching K profiles found. Default K=0.020 will be used. |
| frontend/src/components/ConfigureAmsSlotModal.tsx | 682 | Select a filament profile first |
| frontend/src/components/ConfigureAmsSlotModal.tsx | 695 | Custom Color (optional) |
| frontend/src/components/ConfigureAmsSlotModal.tsx | 810 | Resetting... |
| frontend/src/components/ConfigureAmsSlotModal.tsx | 815 | Reset Slot |
| frontend/src/components/ConfigureAmsSlotModal.tsx | 822 | Cancel |
| frontend/src/components/ConfigureAmsSlotModal.tsx | 831 | Configuring... |
| frontend/src/components/ConfigureAmsSlotModal.tsx | 836 | Configure Slot |
| frontend/src/components/ConfigureAmsSlotModal.tsx | 610 | Search presets... |
| frontend/src/components/ConfigureAmsSlotModal.tsx | 753 | Color name or hex (e.g., brown, FF8800) |
| frontend/src/components/ConfigureAmsSlotModal.tsx | 783 | Clear custom color |
| frontend/src/components/ContextMenu.tsx | 23 | (null); const [activeSubmenu, setActiveSubmenu] = useState |
| frontend/src/components/ContextMenu.tsx | 24 | (null); const submenuTimeoutRef = useRef |
| frontend/src/components/Dashboard.tsx | 282 | Reset Layout |
| frontend/src/components/Dashboard.tsx | 301 | Hidden widgets (click to show): |
| frontend/src/components/Dashboard.tsx | 348 | All widgets are hidden. |
| frontend/src/components/Dashboard.tsx | 349 | Reset Layout |
| frontend/src/components/Dashboard.tsx | 103 | Drag to reorder |
| frontend/src/components/Dashboard.tsx | 124 | Hide widget |
| frontend/src/components/EditArchiveModal.tsx | 46 | (archive.printer_id); const [projectId, setProjectId] = useState |
| frontend/src/components/EditArchiveModal.tsx | 47 | (archive.project_id ?? null); const [notes, setNotes] = useState(archive.notes \|\| ''); const [tags, setTags] = useState(archive.tags \|\| ''); const [failureReason, setFailureReason] = useState(archive.failure_reason \|\| ''); const [status, setStatus] = useState(archive.status); const [quantity, setQuantity] = useState(archive.quantity ?? 1); const [photos, setPhotos] = useState |
| frontend/src/components/EditArchiveModal.tsx | 53 | (archive.photos \|\| []); const [externalUrl, setExternalUrl] = useState(archive.external_url \|\| ''); const [uploadingPhoto, setUploadingPhoto] = useState(false); const [showTagSuggestions, setShowTagSuggestions] = useState(false); const tagInputRef = useRef |
| frontend/src/components/EditArchiveModal.tsx | 57 | (null); const photoInputRef = useRef |
| frontend/src/components/EditArchiveModal.tsx | 58 | (null); const blurTimeoutRef = useRef |
| frontend/src/components/EditArchiveModal.tsx | 310 | https://printables.com/model/... |
| frontend/src/components/EmbeddedCameraViewer.tsx | 73 | (null); const [lastTouchCenter, setLastTouchCenter] = useState |
| frontend/src/components/EmbeddedCameraViewer.tsx | 74 | (null); // Stream state const [streamError, setStreamError] = useState(false); const [streamLoading, setStreamLoading] = useState(true); const [imageKey, setImageKey] = useState(Date.now()); const [reconnectAttempts, setReconnectAttempts] = useState(0); const [isReconnecting, setIsReconnecting] = useState(false); const [reconnectCountdown, setReconnectCountdown] = useState(0); const containerRef = useRef |
| frontend/src/components/EmbeddedCameraViewer.tsx | 84 | (null); const imgRef = useRef |
| frontend/src/components/EmbeddedCameraViewer.tsx | 85 | (null); const reconnectTimerRef = useRef |
| frontend/src/components/EmbeddedCameraViewer.tsx | 86 | (null); const countdownIntervalRef = useRef |
| frontend/src/components/EmbeddedCameraViewer.tsx | 87 | (null); const stallCheckIntervalRef = useRef |
| frontend/src/components/EmbeddedCameraViewer.tsx | 557 | Camera unavailable |
| frontend/src/components/EmbeddedCameraViewer.tsx | 561 | Retry |
| frontend/src/components/EmbeddedCameraViewer.tsx | 489 | Refresh stream |
| frontend/src/components/EmbeddedCameraViewer.tsx | 518 | Close |
| frontend/src/components/EmbeddedCameraViewer.tsx | 571 | Camera stream |
| frontend/src/components/EmbeddedCameraViewer.tsx | 589 | Zoom out |
| frontend/src/components/EmbeddedCameraViewer.tsx | 596 | Reset zoom |
| frontend/src/components/EmbeddedCameraViewer.tsx | 604 | Zoom in |
| frontend/src/components/EmbeddedCameraViewer.tsx | 615 | Drag to resize |
| frontend/src/components/ExternalLinksSettings.tsx | 15 | (null); const [deletingLink, setDeletingLink] = useState |
| frontend/src/components/ExternalLinksSettings.tsx | 16 | (null); const [draggedId, setDraggedId] = useState |
| frontend/src/components/ExternalLinksSettings.tsx | 88 | Sidebar Links |
| frontend/src/components/ExternalLinksSettings.tsx | 91 | Add Link |
| frontend/src/components/ExternalLinksSettings.tsx | 97 | Add external links to the sidebar navigation. Drag to reorder. |
| frontend/src/components/ExternalLinksSettings.tsx | 104 | ) : links && links.length > 0 ? ( |
| frontend/src/components/ExternalLinksSettings.tsx | 155 | No external links configured |
| frontend/src/components/ExternalLinksSettings.tsx | 156 | Click "Add Link" to add one |
| frontend/src/components/ExternalLinksSettings.tsx | 135 | Edit |
| frontend/src/components/ExternalLinksSettings.tsx | 143 | Delete |
| frontend/src/components/ExternalLinksSettings.tsx | 176 | Delete Link |
| frontend/src/components/FilamentHoverCard.tsx | 44 | ('top'); const [copied, setCopied] = useState(false); const triggerRef = useRef |
| frontend/src/components/FilamentHoverCard.tsx | 46 | (null); const cardRef = useRef |
| frontend/src/components/FilamentHoverCard.tsx | 47 | (null); const timeoutRef = useRef |
| frontend/src/components/FilamentHoverCard.tsx | 266 | Copy spool UUID |
| frontend/src/components/FilamentTrends.tsx | 164 | Filament Usage Trends |
| frontend/src/components/FilamentTrends.tsx | 185 | Period Filament |
| frontend/src/components/FilamentTrends.tsx | 190 | Period Cost |
| frontend/src/components/FilamentTrends.tsx | 195 | Avg per Print |
| frontend/src/components/FilamentTrends.tsx | 210 | Usage Over Time |
| frontend/src/components/FilamentTrends.tsx | 252 | No data for selected time range |
| frontend/src/components/FilamentTrends.tsx | 261 | By Filament Type |
| frontend/src/components/FilamentTrends.tsx | 307 | No filament data |
| frontend/src/components/FilamentTrends.tsx | 315 | Monthly Comparison |
| frontend/src/components/FileManagerModal.tsx | 49 | (null); const [plates, setPlates] = useState |
| frontend/src/components/FileManagerModal.tsx | 50 | ([]); const [platesLoading, setPlatesLoading] = useState(false); const [selectedPlateId, setSelectedPlateId] = useState |
| frontend/src/components/FileManagerModal.tsx | 107 | (not available) |
| frontend/src/components/FileManagerModal.tsx | 122 | (not sliced) |
| frontend/src/components/FileManagerModal.tsx | 150 | All Plates |
| frontend/src/components/FileManagerModal.tsx | 221 | ) : activeTab === 'gcode' && hasGcode ? ( |
| frontend/src/components/FileManagerModal.tsx | 228 | No preview available for this file |
| frontend/src/components/FileManagerModal.tsx | 293 | >(new Set()); const [searchQuery, setSearchQuery] = useState(''); const [filesToDelete, setFilesToDelete] = useState |
| frontend/src/components/FileManagerModal.tsx | 295 | ([]); const [sortBy, setSortBy] = useState |
| frontend/src/components/FileManagerModal.tsx | 296 | ('name-asc'); const [downloadProgress, setDownloadProgress] = useState |
| frontend/src/components/FileManagerModal.tsx | 297 | (null); const [viewerFile, setViewerFile] = useState |
| frontend/src/components/FileManagerModal.tsx | 542 | ) : !data?.files?.length ? ( |
| frontend/src/components/FileManagerModal.tsx | 544 | No files in this directory |
| frontend/src/components/FileManagerModal.tsx | 668 | Deselect All |
| frontend/src/components/FileManagerModal.tsx | 676 | Select All |
| frontend/src/components/FileManagerModal.tsx | 460 | Close file manager |
| frontend/src/components/FileManagerModal.tsx | 461 | Close file manager |
| frontend/src/components/FileManagerModal.tsx | 503 | Sort files |
| frontend/src/components/FileManagerModal.tsx | 504 | Sort files |
| frontend/src/components/FileManagerModal.tsx | 529 | Go to parent folder |
| frontend/src/components/FileManagerModal.tsx | 530 | Go to parent folder |
| frontend/src/components/FileManagerModal.tsx | 632 | 3D View |
| frontend/src/components/GcodeViewer.tsx | 19 | (null); const previewRef = useRef |
| frontend/src/components/GcodeViewer.tsx | 20 | (null); const renderTimeoutRef = useRef |
| frontend/src/components/GcodeViewer.tsx | 21 | (null); const initRef = useRef(false); const [loading, setLoading] = useState(true); const [error, setError] = useState |
| frontend/src/components/GcodeViewer.tsx | 211 | Loading G-code... |
| frontend/src/components/GcodeViewer.tsx | 220 | G-code not available |
| frontend/src/components/GcodeViewer.tsx | 221 | This file hasn't been sliced yet. G-code preview is only available after slicing in Bambu Studio or Orca Slicer. |
| frontend/src/components/GitHubBackupSettings.tsx | 54 | , failed: |
| frontend/src/components/GitHubBackupSettings.tsx | 55 | , skipped: |
| frontend/src/components/GitHubBackupSettings.tsx | 56 | , running: |
| frontend/src/components/GitHubBackupSettings.tsx | 107 | ('daily'); const [backupKProfiles, setBackupKProfiles] = useState(true); const [backupCloudProfiles, setBackupCloudProfiles] = useState(true); const [backupSettings, setBackupSettings] = useState(false); const [enabled, setEnabled] = useState(true); // Local backup state const [isExporting, setIsExporting] = useState(false); const [isRestoring, setIsRestoring] = useState(false); const [operationStatus, setOperationStatus] = useState |
| frontend/src/components/GitHubBackupSettings.tsx | 116 | (''); const [showRestoreConfirm, setShowRestoreConfirm] = useState(false); const [restoreFile, setRestoreFile] = useState |
| frontend/src/components/GitHubBackupSettings.tsx | 118 | (null); const [restoreResult, setRestoreResult] = useState |
| frontend/src/components/GitHubBackupSettings.tsx | 119 | (null); const fileInputRef = useRef |
| frontend/src/components/GitHubBackupSettings.tsx | 140 | (null); // Auto-save debounce const autoSaveTimerRef = useRef |
| frontend/src/components/GitHubBackupSettings.tsx | 406 | GitHub Backup |
| frontend/src/components/GitHubBackupSettings.tsx | 410 | Enabled |
| frontend/src/components/GitHubBackupSettings.tsx | 424 | Bambu Cloud login required. Sign in under Profiles → Cloud Profiles to enable GitHub backup. |
| frontend/src/components/GitHubBackupSettings.tsx | 430 | Automatically sync your profiles to a private GitHub repository for backup and version history. |
| frontend/src/components/GitHubBackupSettings.tsx | 436 | Repository URL |
| frontend/src/components/GitHubBackupSettings.tsx | 451 | (saved) |
| frontend/src/components/GitHubBackupSettings.tsx | 460 | Fine-grained token with Contents read/write permission |
| frontend/src/components/GitHubBackupSettings.tsx | 468 | Branch |
| frontend/src/components/GitHubBackupSettings.tsx | 478 | Auto-backup |
| frontend/src/components/GitHubBackupSettings.tsx | 491 | Manual only |
| frontend/src/components/GitHubBackupSettings.tsx | 492 | Hourly |
| frontend/src/components/GitHubBackupSettings.tsx | 493 | Daily |
| frontend/src/components/GitHubBackupSettings.tsx | 494 | Weekly |
| frontend/src/components/GitHubBackupSettings.tsx | 501 | Include in backup |
| frontend/src/components/GitHubBackupSettings.tsx | 513 | K-Profiles |
| frontend/src/components/GitHubBackupSettings.tsx | 516 | No printers connected |
| frontend/src/components/GitHubBackupSettings.tsx | 527 | Pressure advance calibration from connected printers |
| frontend/src/components/GitHubBackupSettings.tsx | 539 | Cloud Profiles |
| frontend/src/components/GitHubBackupSettings.tsx | 540 | Filament, printer, and process presets from Bambu Cloud |
| frontend/src/components/GitHubBackupSettings.tsx | 551 | App Settings |
| frontend/src/components/GitHubBackupSettings.tsx | 552 | Bambuddy configuration (excludes sensitive data) |
| frontend/src/components/GitHubBackupSettings.tsx | 570 | No backups yet |
| frontend/src/components/GitHubBackupSettings.tsx | 607 | Backup Now |
| frontend/src/components/GitHubBackupSettings.tsx | 658 | History |
| frontend/src/components/GitHubBackupSettings.tsx | 666 | Clear |
| frontend/src/components/GitHubBackupSettings.tsx | 676 | Date |
| frontend/src/components/GitHubBackupSettings.tsx | 677 | Status |
| frontend/src/components/GitHubBackupSettings.tsx | 678 | Commit |
| frontend/src/components/GitHubBackupSettings.tsx | 717 | Local Backup |
| frontend/src/components/GitHubBackupSettings.tsx | 721 | Create a complete backup of your Bambuddy data including the database, archives, uploads, and all files. |
| frontend/src/components/GitHubBackupSettings.tsx | 728 | Download Backup |
| frontend/src/components/GitHubBackupSettings.tsx | 729 | Complete backup: database + all files (ZIP) |
| frontend/src/components/GitHubBackupSettings.tsx | 759 | Download |
| frontend/src/components/GitHubBackupSettings.tsx | 795 | Restore |
| frontend/src/components/GitHubBackupSettings.tsx | 817 | Reload Now |
| frontend/src/components/GitHubBackupSettings.tsx | 832 | Restore replaces all data. |
| frontend/src/components/GitHubBackupSettings.tsx | 833 | Your current database and files will be completely replaced. A restart is required after restore. |
| frontend/src/components/GitHubBackupSettings.tsx | 897 | Please do not close this page or navigate away. This operation may take several minutes for large backups. |
| frontend/src/components/GitHubBackupSettings.tsx | 443 | https://github.com/username/bambuddy-backup |
| frontend/src/components/GitHubBackupSettings.tsx | 473 | main |
| frontend/src/components/GitHubBackupSettings.tsx | 844 | Restore Backup |
| frontend/src/components/KProfilesView.tsx | 520 | 0.2mm |
| frontend/src/components/KProfilesView.tsx | 521 | 0.4mm |
| frontend/src/components/KProfilesView.tsx | 522 | 0.6mm |
| frontend/src/components/KProfilesView.tsx | 523 | 0.8mm |
| frontend/src/components/KProfilesView.tsx | 538 | ) : ( // Checkboxes for new profile - can select both |
| frontend/src/components/KProfilesView.tsx | 705 | (null); const [showAddModal, setShowAddModal] = useState(false); const [copyingProfile, setCopyingProfile] = useState |
| frontend/src/components/KProfilesView.tsx | 707 | (null); const [searchQuery, setSearchQuery] = useState(''); const [extruderFilter, setExtruderFilter] = useState |
| frontend/src/components/KProfilesView.tsx | 709 | ('all'); const [flowTypeFilter, setFlowTypeFilter] = useState |
| frontend/src/components/KProfilesView.tsx | 710 | ('all'); // Load sort option from localStorage const [sortOption, setSortOption] = useState |
| frontend/src/components/KProfilesView.tsx | 1140 | 0.2mm |
| frontend/src/components/KProfilesView.tsx | 1141 | 0.4mm |
| frontend/src/components/KProfilesView.tsx | 1142 | 0.6mm |
| frontend/src/components/KProfilesView.tsx | 1143 | 0.8mm |
| frontend/src/components/KProfilesView.tsx | 1285 | ) : isOfflineError ? ( |
| frontend/src/components/KProfilesView.tsx | 1299 | ) : filteredProfiles.length > 0 ? ( isDualNozzle ? ( // Dual-nozzle: show Left/Right columns |
| frontend/src/components/KProfilesView.tsx | 1344 | ) : ( // Single-nozzle: show all profiles in one list |
| frontend/src/components/KProfilesView.tsx | 1360 | ) ) : searchQuery \|\| extruderFilter !== 'all' \|\| flowTypeFilter !== 'all' ? ( |
| frontend/src/components/KProfilesView.tsx | 118 | Has note |
| frontend/src/components/KProfilesView.tsx | 139 | Copy profile |
| frontend/src/components/KeyboardShortcutsModal.tsx | 101 | Keyboard Shortcuts |
| frontend/src/components/KeyboardShortcutsModal.tsx | 139 | Press |
| frontend/src/components/KeyboardShortcutsModal.tsx | 140 | Esc |
| frontend/src/components/KeyboardShortcutsModal.tsx | 140 | or click outside to close |
| frontend/src/components/Layout.tsx | 87 | (getSidebarOrder); const [draggedId, setDraggedId] = useState |
| frontend/src/components/Layout.tsx | 88 | (null); const [dragOverId, setDragOverId] = useState |
| frontend/src/components/Layout.tsx | 89 | (null); const hasRedirected = useRef(false); const [dismissedUpdateVersion, setDismissedUpdateVersion] = useState |
| frontend/src/components/Layout.tsx | 91 | (() => sessionStorage.getItem('dismissedUpdateVersion') ); const [plateDetectionAlert, setPlateDetectionAlert] = useState |
| frontend/src/components/Layout.tsx | 473 | ) : ( LinkIcon && |
| frontend/src/components/Layout.tsx | 388 | Open menu |
| frontend/src/components/Layout.tsx | 394 | Bambuddy |
| frontend/src/components/Layout.tsx | 420 | Bambuddy |
| frontend/src/components/Layout.tsx | 594 | You do not have permission to view system information |
| frontend/src/components/Layout.tsx | 698 | You do not have permission to view system information |
| frontend/src/components/LinkSpoolModal.tsx | 85 | Linking AMS tray: |
| frontend/src/components/LinkSpoolModal.tsx | 114 | ) : unlinkedSpools && unlinkedSpools.length > 0 ? ( |
| frontend/src/components/LogViewer.tsx | 39 | >(new Set()); const [searchQuery, setSearchQuery] = useState(''); const [levelFilter, setLevelFilter] = useState |
| frontend/src/components/LogViewer.tsx | 41 | ('ALL'); const [isExpanded, setIsExpanded] = useState(false); const [isStreaming, setIsStreaming] = useState(false); const logContainerRef = useRef |
| frontend/src/components/LogViewer.tsx | 129 | Application Logs |
| frontend/src/components/LogViewer.tsx | 140 | Live |
| frontend/src/components/LogViewer.tsx | 167 | Stop |
| frontend/src/components/LogViewer.tsx | 179 | Start |
| frontend/src/components/LogViewer.tsx | 190 | Clear |
| frontend/src/components/LogViewer.tsx | 282 | No log entries found |
| frontend/src/components/LogViewer.tsx | 283 | Log file may be empty or cleared |
| frontend/src/components/LogViewer.tsx | 341 | Auto-refreshing every 2 seconds |
| frontend/src/components/LogViewer.tsx | 345 | Click Start to enable live log streaming |
| frontend/src/components/LogViewer.tsx | 229 | Search message or logger name... |
| frontend/src/components/MQTTDebugModal.tsx | 18 | >(new Set()); const [searchQuery, setSearchQuery] = useState(''); const [directionFilter, setDirectionFilter] = useState |
| frontend/src/components/MQTTDebugModal.tsx | 20 | ('all'); const logContainerRef = useRef |
| frontend/src/components/MQTTDebugModal.tsx | 258 | ) : filteredLogs.length === 0 ? ( |
| frontend/src/components/ModelViewer.tsx | 48 | ; buildItems: BuildItem[]; plateBounds: Map |
| frontend/src/components/ModelViewer.tsx | 50 | ; plateOffsets: Map |
| frontend/src/components/ModelViewer.tsx | 143 | (); const buildItems: BuildItem[] = []; const plateBounds = new Map |
| frontend/src/components/ModelViewer.tsx | 145 | (); const plateOffsets = new Map |
| frontend/src/components/ModelViewer.tsx | 146 | (); const parser = new DOMParser(); // Helper to load and parse a model file from the zip async function loadModelFile(path: string): Promise |
| frontend/src/components/ModelViewer.tsx | 161 | (); const partExtruderMap = new Map |
| frontend/src/components/ModelViewer.tsx | 162 | (); // Key: "objectId:partId" const objectNameById = new Map |
| frontend/src/components/ModelViewer.tsx | 163 | (); const plateAssignmentsByObjectId = new Map |
| frontend/src/components/ModelViewer.tsx | 446 | Three.js: X right, Y up, Z forward const positions = new Float32Array(mesh.vertices.length); for (let i = 0; i |
| frontend/src/components/ModelViewer.tsx | 591 | (null); const rendererRef = useRef |
| frontend/src/components/ModelViewer.tsx | 592 | (null); const sceneRef = useRef |
| frontend/src/components/ModelViewer.tsx | 593 | (null); const cameraRef = useRef |
| frontend/src/components/ModelViewer.tsx | 594 | (null); const controlsRef = useRef |
| frontend/src/components/ModelViewer.tsx | 595 | (null); const modelGroupRef = useRef |
| frontend/src/components/ModelViewer.tsx | 596 | (null); const plateRef = useRef |
| frontend/src/components/ModelViewer.tsx | 597 | (null); const gridRef = useRef |
| frontend/src/components/ModelViewer.tsx | 598 | (null); const [loading, setLoading] = useState(true); const [error, setError] = useState |
| frontend/src/components/ModelViewer.tsx | 600 | (null); const [parsedData, setParsedData] = useState |
| frontend/src/components/ModelViewer.tsx | 601 | (null); const [stlGeometry, setStlGeometry] = useState |
| frontend/src/components/ModelViewerModal.tsx | 32 | (null); const [capabilities, setCapabilities] = useState |
| frontend/src/components/ModelViewerModal.tsx | 33 | (null); const [loading, setLoading] = useState(true); const [platesData, setPlatesData] = useState |
| frontend/src/components/ModelViewerModal.tsx | 35 | (null); const [platesLoading, setPlatesLoading] = useState(false); const [selectedPlateId, setSelectedPlateId] = useState |
| frontend/src/components/ModelViewerModal.tsx | 37 | (null); const [platePage, setPlatePage] = useState(0); const [isFullscreen, setIsFullscreen] = useState(false); const [platePanelHeight, setPlatePanelHeight] = useState |
| frontend/src/components/ModelViewerModal.tsx | 40 | (null); const [isDraggingDivider, setIsDraggingDivider] = useState(false); const [hasCustomSplit, setHasCustomSplit] = useState(false); const splitContainerRef = useRef |
| frontend/src/components/ModelViewerModal.tsx | 43 | (null); const platesPanelRef = useRef |
| frontend/src/components/ModelViewerModal.tsx | 146 | (null); const platesViewportRef = useRef |
| frontend/src/components/ModelViewerModal.tsx | 357 | ) : activeTab === '3d' && capabilities ? ( |
| frontend/src/components/ModelViewerModal.tsx | 490 | start + i); return ( |
| frontend/src/components/ModelViewerModal.tsx | 589 | ) : activeTab === 'gcode' && capabilities ? ( |
| frontend/src/components/NotificationLogViewer.tsx | 100 | Notification Log |
| frontend/src/components/NotificationLogViewer.tsx | 105 | &times; |
| frontend/src/components/NotificationLogViewer.tsx | 115 | notifications |
| frontend/src/components/NotificationLogViewer.tsx | 138 | Last 24 hours |
| frontend/src/components/NotificationLogViewer.tsx | 139 | Last 7 days |
| frontend/src/components/NotificationLogViewer.tsx | 140 | Last 30 days |
| frontend/src/components/NotificationLogViewer.tsx | 141 | Last 90 days |
| frontend/src/components/NotificationLogViewer.tsx | 191 | ) : logs && logs.length > 0 ? ( |
| frontend/src/components/NotificationLogViewer.tsx | 278 | Title |
| frontend/src/components/NotificationLogViewer.tsx | 282 | Message |
| frontend/src/components/NotificationLogViewer.tsx | 287 | Error |
| frontend/src/components/NotificationProviderCard.tsx | 100 | Error |
| frontend/src/components/NotificationProviderCard.tsx | 112 | Printer: |
| frontend/src/components/NotificationProviderCard.tsx | 118 | All printers |
| frontend/src/components/NotificationProviderCard.tsx | 125 | Start |
| frontend/src/components/NotificationProviderCard.tsx | 128 | Plate Check |
| frontend/src/components/NotificationProviderCard.tsx | 131 | Complete |
| frontend/src/components/NotificationProviderCard.tsx | 134 | Failed |
| frontend/src/components/NotificationProviderCard.tsx | 137 | Stopped |
| frontend/src/components/NotificationProviderCard.tsx | 140 | Progress |
| frontend/src/components/NotificationProviderCard.tsx | 143 | Offline |
| frontend/src/components/NotificationProviderCard.tsx | 146 | Error |
| frontend/src/components/NotificationProviderCard.tsx | 149 | Low Filament |
| frontend/src/components/NotificationProviderCard.tsx | 152 | Maintenance |
| frontend/src/components/NotificationProviderCard.tsx | 155 | AMS Humidity |
| frontend/src/components/NotificationProviderCard.tsx | 158 | AMS Temp |
| frontend/src/components/NotificationProviderCard.tsx | 161 | AMS-HT Humidity |
| frontend/src/components/NotificationProviderCard.tsx | 164 | AMS-HT Temp |
| frontend/src/components/NotificationProviderCard.tsx | 168 | Quiet |
| frontend/src/components/NotificationProviderCard.tsx | 223 | Event Settings |
| frontend/src/components/NotificationProviderCard.tsx | 239 | Enabled |
| frontend/src/components/NotificationProviderCard.tsx | 240 | Send notifications from this provider |
| frontend/src/components/NotificationProviderCard.tsx | 250 | Print Events |
| frontend/src/components/NotificationProviderCard.tsx | 253 | Print Started |
| frontend/src/components/NotificationProviderCard.tsx | 262 | Plate Not Empty |
| frontend/src/components/NotificationProviderCard.tsx | 263 | Objects detected before print |
| frontend/src/components/NotificationProviderCard.tsx | 272 | Print Completed |
| frontend/src/components/NotificationProviderCard.tsx | 280 | Print Failed |
| frontend/src/components/NotificationProviderCard.tsx | 288 | Print Stopped |
| frontend/src/components/NotificationProviderCard.tsx | 297 | Progress Milestones |
| frontend/src/components/NotificationProviderCard.tsx | 298 | Notify at 25%, 50%, 75% |
| frontend/src/components/NotificationProviderCard.tsx | 309 | Printer Status |
| frontend/src/components/NotificationProviderCard.tsx | 312 | Printer Offline |
| frontend/src/components/NotificationProviderCard.tsx | 320 | Printer Error |
| frontend/src/components/NotificationProviderCard.tsx | 328 | Low Filament |
| frontend/src/components/NotificationProviderCard.tsx | 337 | Maintenance Due |
| frontend/src/components/NotificationProviderCard.tsx | 338 | Notify when maintenance is needed |
| frontend/src/components/NotificationProviderCard.tsx | 349 | AMS Alarms |
| frontend/src/components/NotificationProviderCard.tsx | 353 | AMS Humidity High |
| frontend/src/components/NotificationProviderCard.tsx | 354 | Regular AMS humidity exceeds threshold |
| frontend/src/components/NotificationProviderCard.tsx | 364 | AMS Temperature High |
| frontend/src/components/NotificationProviderCard.tsx | 365 | Regular AMS temperature exceeds threshold |
| frontend/src/components/NotificationProviderCard.tsx | 376 | AMS-HT Alarms |
| frontend/src/components/NotificationProviderCard.tsx | 380 | AMS-HT Humidity High |
| frontend/src/components/NotificationProviderCard.tsx | 381 | AMS-HT humidity exceeds threshold |
| frontend/src/components/NotificationProviderCard.tsx | 391 | AMS-HT Temperature High |
| frontend/src/components/NotificationProviderCard.tsx | 392 | AMS-HT temperature exceeds threshold |
| frontend/src/components/NotificationProviderCard.tsx | 403 | Print Queue |
| frontend/src/components/NotificationProviderCard.tsx | 407 | Job Added |
| frontend/src/components/NotificationProviderCard.tsx | 408 | Job added to queue |
| frontend/src/components/NotificationProviderCard.tsx | 418 | Job Assigned |
| frontend/src/components/NotificationProviderCard.tsx | 419 | Model-based job assigned to printer |
| frontend/src/components/NotificationProviderCard.tsx | 429 | Job Started |
| frontend/src/components/NotificationProviderCard.tsx | 430 | Queue job started printing |
| frontend/src/components/NotificationProviderCard.tsx | 440 | Job Waiting |
| frontend/src/components/NotificationProviderCard.tsx | 441 | Job waiting for filament |
| frontend/src/components/NotificationProviderCard.tsx | 451 | Job Skipped |
| frontend/src/components/NotificationProviderCard.tsx | 452 | Job skipped (previous failed) |
| frontend/src/components/NotificationProviderCard.tsx | 462 | Job Failed |
| frontend/src/components/NotificationProviderCard.tsx | 463 | Job failed to start |
| frontend/src/components/NotificationProviderCard.tsx | 473 | Queue Complete |
| frontend/src/components/NotificationProviderCard.tsx | 474 | All queue jobs finished |
| frontend/src/components/NotificationProviderCard.tsx | 488 | Quiet Hours |
| frontend/src/components/NotificationProviderCard.tsx | 498 | No notifications during these hours |
| frontend/src/components/NotificationProviderCard.tsx | 505 | Edit provider to change quiet hours |
| frontend/src/components/NotificationProviderCard.tsx | 515 | Daily Digest |
| frontend/src/components/NotificationProviderCard.tsx | 525 | Batch notifications into a single daily summary |
| frontend/src/components/NotificationProviderCard.tsx | 532 | Edit provider to change digest time |
| frontend/src/components/NotificationProviderCard.tsx | 545 | Edit |
| frontend/src/components/NotificationProviderCard.tsx | 565 | Delete Notification Provider |
| frontend/src/components/NotificationTemplateEditor.tsx | 15 | (null); const [titleTemplate, setTitleTemplate] = useState(template.title_template); const [bodyTemplate, setBodyTemplate] = useState(template.body_template); const [error, setError] = useState |
| frontend/src/components/NotificationTemplateEditor.tsx | 144 | Title |
| frontend/src/components/NotificationTemplateEditor.tsx | 158 | Body |
| frontend/src/components/NotificationTemplateEditor.tsx | 174 | Available Variables |
| frontend/src/components/NotificationTemplateEditor.tsx | 190 | Click to insert at cursor position in body |
| frontend/src/components/NotificationTemplateEditor.tsx | 200 | Live Preview |
| frontend/src/components/NotificationTemplateEditor.tsx | 215 | Loading preview... |
| frontend/src/components/NotificationTemplateEditor.tsx | 217 | ) : preview ? ( |
| frontend/src/components/NotificationTemplateEditor.tsx | 221 | Title: |
| frontend/src/components/NotificationTemplateEditor.tsx | 225 | Body: |
| frontend/src/components/NotificationTemplateEditor.tsx | 230 | Enter template content to see preview |
| frontend/src/components/NotificationTemplateEditor.tsx | 257 | Cancel |
| frontend/src/components/NotificationTemplateEditor.tsx | 152 | Notification title... |
| frontend/src/components/NotificationTemplateEditor.tsx | 167 | Notification body... |
| frontend/src/components/PendingUploadsPanel.tsx | 52 | (upload.project_id); const [showDiscardConfirm, setShowDiscardConfirm] = useState(false); return ( |
| frontend/src/components/PendingUploadsPanel.tsx | 96 | Archive |
| frontend/src/components/PendingUploadsPanel.tsx | 135 | Tags |
| frontend/src/components/PendingUploadsPanel.tsx | 145 | Notes |
| frontend/src/components/PendingUploadsPanel.tsx | 155 | Project |
| frontend/src/components/PendingUploadsPanel.tsx | 161 | No project |
| frontend/src/components/PendingUploadsPanel.tsx | 181 | >(new Set()); const [discardingIds, setDiscardingIds] = useState |
| frontend/src/components/PendingUploadsPanel.tsx | 304 | Archive All |
| frontend/src/components/PendingUploadsPanel.tsx | 319 | Discard All |
| frontend/src/components/PendingUploadsPanel.tsx | 328 | These files were uploaded via the virtual printer. Review and archive them to add to your collection. |
| frontend/src/components/PendingUploadsPanel.tsx | 119 | Discard Upload |
| frontend/src/components/PendingUploadsPanel.tsx | 140 | e.g., functional, prototype, gift |
| frontend/src/components/PendingUploadsPanel.tsx | 149 | Add notes about this print... |
| frontend/src/components/PendingUploadsPanel.tsx | 350 | Archive All Uploads |
| frontend/src/components/PendingUploadsPanel.tsx | 364 | Discard All Uploads |
| frontend/src/components/PhotoGalleryModal.tsx | 83 | Download |
| frontend/src/components/PhotoGalleryModal.tsx | 158 | Delete Photo |
| frontend/src/components/PrintCalendar.tsx | 93 | 0 ? Math.floor((availableWidth - (numWeeks - 1) * gap) / numWeeks) : 12; // Clamp cell size between 8 and 20 pixels const cellSize = Math.max(8, Math.min(20, calculatedCellSize)); const fontSize = cellSize |
| frontend/src/components/PrintCalendar.tsx | 171 | Less |
| frontend/src/components/PrintCalendar.tsx | 179 | More |
| frontend/src/components/PrintModal/FilamentMapping.tsx | 90 | Filament Mapping |
| frontend/src/components/PrintModal/FilamentMapping.tsx | 92 | (Type not found) |
| frontend/src/components/PrintModal/FilamentMapping.tsx | 92 | ) : hasColorMismatch ? ( |
| frontend/src/components/PrintModal/FilamentMapping.tsx | 94 | (Color mismatch) |
| frontend/src/components/PrintModal/FilamentMapping.tsx | 96 | (Ready) |
| frontend/src/components/PrintModal/FilamentMapping.tsx | 108 | Click to change slot assignment |
| frontend/src/components/PrintModal/FilamentMapping.tsx | 116 | Re-read |
| frontend/src/components/PrintModal/FilamentMapping.tsx | 148 | -- Select slot -- |
| frontend/src/components/PrintModal/FilamentMapping.tsx | 159 | ) : item.status === 'type_only' ? ( |
| frontend/src/components/PrintModal/FilamentMapping.tsx | 172 | Required filament type not found in printer. |
| frontend/src/components/PrintModal/FilamentMapping.tsx | 161 | Same type, different color |
| frontend/src/components/PrintModal/FilamentMapping.tsx | 165 | Filament type not loaded |
| frontend/src/components/PrintModal/PlateSelector.tsx | 24 | Select Plate to Print |
| frontend/src/components/PrintModal/PlateSelector.tsx | 27 | Selection required |
| frontend/src/components/PrintModal/PrintOptions.tsx | 36 | Print Options |
| frontend/src/components/PrintModal/PrinterSelector.tsx | 30 | void; /** Callback to update printer config */ onUpdatePrinterConfig?: (printerId: number, config: Partial |
| frontend/src/components/PrintModal/PrinterSelector.tsx | 151 | Custom slot mapping |
| frontend/src/components/PrintModal/PrinterSelector.tsx | 159 | Re-read |
| frontend/src/components/PrintModal/PrinterSelector.tsx | 188 | -- Select slot -- |
| frontend/src/components/PrintModal/PrinterSelector.tsx | 198 | ) : status === 'type_only' ? ( |
| frontend/src/components/PrintModal/PrinterSelector.tsx | 364 | Specific Printer |
| frontend/src/components/PrintModal/PrinterSelector.tsx | 394 | Target Model |
| frontend/src/components/PrintModal/PrinterSelector.tsx | 406 | Select a model... |
| frontend/src/components/PrintModal/PrinterSelector.tsx | 418 | Location Filter (optional) |
| frontend/src/components/PrintModal/PrinterSelector.tsx | 424 | Any location |
| frontend/src/components/PrintModal/PrinterSelector.tsx | 458 | Select all |
| frontend/src/components/PrintModal/PrinterSelector.tsx | 467 | Clear |
| frontend/src/components/PrintModal/PrinterSelector.tsx | 507 | (inactive) |
| frontend/src/components/PrintModal/PrinterSelector.tsx | 541 | Custom mapping |
| frontend/src/components/PrintModal/PrinterSelector.tsx | 570 | Auto |
| frontend/src/components/PrintModal/PrinterSelector.tsx | 599 | show all |
| frontend/src/components/PrintModal/PrinterSelector.tsx | 617 | Select at least one printer |
| frontend/src/components/PrintModal/PrinterSelector.tsx | 625 | Select a target printer model |
| frontend/src/components/PrintModal/PrinterSelector.tsx | 200 | Same type, different color |
| frontend/src/components/PrintModal/PrinterSelector.tsx | 204 | Filament type not loaded |
| frontend/src/components/PrintModal/ScheduleOptions.tsx | 119 | When to print |
| frontend/src/components/PrintModal/ScheduleOptions.tsx | 130 | ASAP |
| frontend/src/components/PrintModal/ScheduleOptions.tsx | 142 | Scheduled |
| frontend/src/components/PrintModal/ScheduleOptions.tsx | 154 | Queue Only |
| frontend/src/components/PrintModal/ScheduleOptions.tsx | 163 | Date & Time |
| frontend/src/components/PrintModal/ScheduleOptions.tsx | 212 | Please enter a valid date and time |
| frontend/src/components/PrintModal/ScheduleOptions.tsx | 228 | Only start if previous print succeeded |
| frontend/src/components/PrintModal/ScheduleOptions.tsx | 243 | Power off printer when done |
| frontend/src/components/PrintModal/ScheduleOptions.tsx | 182 | Open calendar |
| frontend/src/components/PrintModal/index.tsx | 616 | Send |
| frontend/src/components/PrintModal/index.tsx | 617 | to printer(s) |
| frontend/src/components/PrintModal/index.tsx | 621 | Print Job |
| frontend/src/components/PrintModal/index.tsx | 676 | Archive data unavailable. The source file may have been deleted. Filament mapping is disabled. |
| frontend/src/components/PrintModal/index.tsx | 717 | Cancel |
| frontend/src/components/PrinterQueueWidget.tsx | 48 | Next in queue |
| frontend/src/components/ProjectPageModal.tsx | 28 | (null); const [editData, setEditData] = useState |
| frontend/src/components/ProjectPageModal.tsx | 178 | Edit |
| frontend/src/components/ProjectPageModal.tsx | 184 | Cancel |
| frontend/src/components/ProjectPageModal.tsx | 193 | Save |
| frontend/src/components/ProjectPageModal.tsx | 216 | Failed to load project page data |
| frontend/src/components/ProjectPageModal.tsx | 224 | No project page data found in this 3MF file. |
| frontend/src/components/ProjectPageModal.tsx | 225 | Project pages are typically included in files downloaded from MakerWorld. |
| frontend/src/components/ProjectPageModal.tsx | 260 | ) : ( projectPage.designer && ( |
| frontend/src/components/ProjectPageModal.tsx | 297 | ) : ( projectPage.license && ( |
| frontend/src/components/ProjectPageModal.tsx | 318 | Description |
| frontend/src/components/ProjectPageModal.tsx | 341 | Print Profile |
| frontend/src/components/ProjectPageModal.tsx | 416 | View on MakerWorld |
| frontend/src/components/ProjectPageModal.tsx | 240 | Title |
| frontend/src/components/ProjectPageModal.tsx | 257 | Designer |
| frontend/src/components/ProjectPageModal.tsx | 294 | License |
| frontend/src/components/ProjectPageModal.tsx | 325 | Enter description... |
| frontend/src/components/ProjectPageModal.tsx | 350 | Profile Title |
| frontend/src/components/ProjectPageModal.tsx | 356 | Profile description... |
| frontend/src/components/QRCodeModal.tsx | 42 | QR Code |
| frontend/src/components/QRCodeModal.tsx | 63 | Scan to open this archive |
| frontend/src/components/QRCodeModal.tsx | 67 | Download QR Code |
| frontend/src/components/QRCodeModal.tsx | 59 | QR Code |
| frontend/src/components/RestoreModal.tsx | 10 | ; skipped?: Record |
| frontend/src/components/RestoreModal.tsx | 11 | ; skipped_details?: Record |
| frontend/src/components/RestoreModal.tsx | 12 | ; files_restored?: number; total_skipped?: number; new_api_keys?: Array |
| frontend/src/components/RestoreModal.tsx | 42 | ('options'); const [overwrite, setOverwrite] = useState(false); const [selectedFile, setSelectedFile] = useState |
| frontend/src/components/RestoreModal.tsx | 44 | (null); const [result, setResult] = useState |
| frontend/src/components/RestoreModal.tsx | 45 | (null); const [expandedCategories, setExpandedCategories] = useState |
| frontend/src/components/RestoreModal.tsx | 46 | >(new Set()); const fileInputRef = useRef |
| frontend/src/components/RestoreModal.tsx | 137 | ) : state === 'result' && !result?.success ? ( |
| frontend/src/components/RestoreModal.tsx | 197 | Click to select backup file (.json or .zip) |
| frontend/src/components/RestoreModal.tsx | 208 | How duplicate handling works: |
| frontend/src/components/RestoreModal.tsx | 210 | Printers |
| frontend/src/components/RestoreModal.tsx | 210 | - matched by serial number |
| frontend/src/components/RestoreModal.tsx | 211 | Smart Plugs |
| frontend/src/components/RestoreModal.tsx | 211 | - matched by IP address |
| frontend/src/components/RestoreModal.tsx | 212 | Notification Providers |
| frontend/src/components/RestoreModal.tsx | 212 | - matched by name |
| frontend/src/components/RestoreModal.tsx | 213 | Filaments |
| frontend/src/components/RestoreModal.tsx | 213 | - matched by name + type + brand |
| frontend/src/components/RestoreModal.tsx | 214 | Archives |
| frontend/src/components/RestoreModal.tsx | 214 | - matched by content hash (always skipped) |
| frontend/src/components/RestoreModal.tsx | 215 | Pending Uploads |
| frontend/src/components/RestoreModal.tsx | 215 | - matched by filename |
| frontend/src/components/RestoreModal.tsx | 216 | Settings & Templates |
| frontend/src/components/RestoreModal.tsx | 216 | - always overwritten |
| frontend/src/components/RestoreModal.tsx | 249 | Caution: |
| frontend/src/components/RestoreModal.tsx | 249 | Overwriting will replace your current configurations with data from the backup. Printer access codes are never overwritten for security. |
| frontend/src/components/RestoreModal.tsx | 258 | Cancel |
| frontend/src/components/RestoreModal.tsx | 267 | Restore |
| frontend/src/components/RestoreModal.tsx | 278 | Processing backup file... |
| frontend/src/components/RestoreModal.tsx | 290 | Items Restored |
| frontend/src/components/RestoreModal.tsx | 294 | Items Skipped |
| frontend/src/components/RestoreModal.tsx | 302 | Restored |
| frontend/src/components/RestoreModal.tsx | 316 | Files (3MF, thumbnails, etc.) |
| frontend/src/components/RestoreModal.tsx | 328 | Skipped (already exist) |
| frontend/src/components/RestoreModal.tsx | 374 | New API Keys Generated |
| frontend/src/components/RestoreModal.tsx | 378 | These keys are only shown once. Copy them now! |
| frontend/src/components/RestoreModal.tsx | 404 | No data was found to restore in the backup file. |
| frontend/src/components/RestoreModal.tsx | 412 | Close |
| frontend/src/components/RichTextEditor.tsx | 108 | Bold |
| frontend/src/components/RichTextEditor.tsx | 115 | Italic |
| frontend/src/components/RichTextEditor.tsx | 122 | Underline |
| frontend/src/components/RichTextEditor.tsx | 132 | Bullet List |
| frontend/src/components/RichTextEditor.tsx | 139 | Numbered List |
| frontend/src/components/RichTextEditor.tsx | 149 | Align Left |
| frontend/src/components/RichTextEditor.tsx | 156 | Align Center |
| frontend/src/components/RichTextEditor.tsx | 163 | Align Right |
| frontend/src/components/RichTextEditor.tsx | 173 | Add Link |
| frontend/src/components/RichTextEditor.tsx | 180 | Remove Link |
| frontend/src/components/SmartPlugCard.tsx | 131 | ) : plug.plug_type === 'homeassistant' ? ( |
| frontend/src/components/SmartPlugCard.tsx | 152 | ) : plug.plug_type === 'mqtt' ? ( /* MQTT plugs - show badge and checkmark when receiving data */ |
| frontend/src/components/SmartPlugCard.tsx | 156 | MQTT |
| frontend/src/components/SmartPlugCard.tsx | 158 | ) : plug.plug_type === 'homeassistant' ? ( |
| frontend/src/components/SmartPlugCard.tsx | 161 | HA |
| frontend/src/components/SmartPlugCard.tsx | 165 | ) : isReachable ? ( |
| frontend/src/components/SmartPlugCard.tsx | 174 | Offline |
| frontend/src/components/SmartPlugCard.tsx | 186 | Admin |
| frontend/src/components/SmartPlugCard.tsx | 196 | Linked to: |
| frontend/src/components/SmartPlugCard.tsx | 206 | Monitor Only |
| frontend/src/components/SmartPlugCard.tsx | 212 | Alerts |
| frontend/src/components/SmartPlugCard.tsx | 261 | Power |
| frontend/src/components/SmartPlugCard.tsx | 267 | kWh Today |
| frontend/src/components/SmartPlugCard.tsx | 293 | Show in Switchbar |
| frontend/src/components/SmartPlugCard.tsx | 294 | Quick access from sidebar |
| frontend/src/components/SmartPlugCard.tsx | 314 | Enabled |
| frontend/src/components/SmartPlugCard.tsx | 315 | Enable automation for this plug |
| frontend/src/components/SmartPlugCard.tsx | 331 | Auto On |
| frontend/src/components/SmartPlugCard.tsx | 332 | Turn on when print starts |
| frontend/src/components/SmartPlugCard.tsx | 348 | Auto Off |
| frontend/src/components/SmartPlugCard.tsx | 349 | Turn off when print completes (one-shot) |
| frontend/src/components/SmartPlugCard.tsx | 366 | Turn Off Delay Mode |
| frontend/src/components/SmartPlugCard.tsx | 376 | Time |
| frontend/src/components/SmartPlugCard.tsx | 387 | Temp |
| frontend/src/components/SmartPlugCard.tsx | 395 | Delay (minutes) |
| frontend/src/components/SmartPlugCard.tsx | 407 | Temperature threshold (C) |
| frontend/src/components/SmartPlugCard.tsx | 416 | Turns off when nozzle cools below this temperature |
| frontend/src/components/SmartPlugCard.tsx | 432 | Edit |
| frontend/src/components/SmartPlugCard.tsx | 184 | Open plug admin page |
| frontend/src/components/SmartPlugCard.tsx | 452 | Delete Smart Plug |
| frontend/src/components/SmartPlugCard.tsx | 467 | Turn On Smart Plug |
| frontend/src/components/SmartPlugCard.tsx | 482 | Turn Off Smart Plug |
| frontend/src/components/SpoolmanSettings.tsx | 149 | Spoolman Integration |
| frontend/src/components/SpoolmanSettings.tsx | 167 | Spoolman Integration |
| frontend/src/components/SpoolmanSettings.tsx | 178 | Connect to Spoolman for filament inventory tracking. AMS data will sync automatically. |
| frontend/src/components/SpoolmanSettings.tsx | 187 | How Sync Works |
| frontend/src/components/SpoolmanSettings.tsx | 189 | Only official Bambu Lab spools with RFID are synced |
| frontend/src/components/SpoolmanSettings.tsx | 190 | New spools are auto-created in Spoolman on first sync |
| frontend/src/components/SpoolmanSettings.tsx | 191 | Non-Bambu Lab spools (third-party, refilled) are skipped |
| frontend/src/components/SpoolmanSettings.tsx | 193 | Linking Existing Spools |
| frontend/src/components/SpoolmanSettings.tsx | 194 | To link existing Spoolman spools to your AMS, hover over an AMS slot and click "Link to Spoolman". |
| frontend/src/components/SpoolmanSettings.tsx | 204 | Enable Spoolman |
| frontend/src/components/SpoolmanSettings.tsx | 205 | Sync filament data with Spoolman server |
| frontend/src/components/SpoolmanSettings.tsx | 222 | Spoolman URL |
| frontend/src/components/SpoolmanSettings.tsx | 233 | URL of your Spoolman server (e.g., http://localhost:7912) |
| frontend/src/components/SpoolmanSettings.tsx | 240 | Sync Mode |
| frontend/src/components/SpoolmanSettings.tsx | 249 | Automatic |
| frontend/src/components/SpoolmanSettings.tsx | 250 | Manual Only |
| frontend/src/components/SpoolmanSettings.tsx | 308 | Status: |
| frontend/src/components/SpoolmanSettings.tsx | 310 | ) : status?.connected ? ( |
| frontend/src/components/SpoolmanSettings.tsx | 313 | Connected |
| frontend/src/components/SpoolmanSettings.tsx | 318 | Disconnected |
| frontend/src/components/SpoolmanSettings.tsx | 366 | Sync AMS Data |
| frontend/src/components/SpoolmanSettings.tsx | 367 | Manually sync printer AMS data to Spoolman |
| frontend/src/components/SpoolmanSettings.tsx | 379 | All Printers |
| frontend/src/components/SpoolmanSettings.tsx | 466 | Errors: |
| frontend/src/components/SpoolmanSettings.tsx | 227 | http://192.168.1.100:7912 |
| frontend/src/components/SwitchbarPopover.tsx | 64 | ) : isMqtt ? ( /* MQTT plugs show power and monitor-only indicator */ isReachable ? ( |
| frontend/src/components/SwitchbarPopover.tsx | 73 | Monitor |
| frontend/src/components/SwitchbarPopover.tsx | 78 | Waiting |
| frontend/src/components/SwitchbarPopover.tsx | 79 | ) ) : isReachable ? ( |
| frontend/src/components/SwitchbarPopover.tsx | 96 | Offline |
| frontend/src/components/SwitchbarPopover.tsx | 166 | Smart Switches |
| frontend/src/components/SwitchbarPopover.tsx | 176 | ) : switchbarPlugs.length === 0 ? ( |
| frontend/src/components/SwitchbarPopover.tsx | 180 | No switches in switchbar |
| frontend/src/components/SwitchbarPopover.tsx | 181 | Enable "Show in Switchbar" in Settings &gt; Smart Plugs |
| frontend/src/components/SwitchbarPopover.tsx | 114 | Turn On |
| frontend/src/components/SwitchbarPopover.tsx | 126 | Turn Off |
| frontend/src/components/TagManagementModal.tsx | 18 | (null); const [editValue, setEditValue] = useState(''); const [deleteConfirm, setDeleteConfirm] = useState |
| frontend/src/components/TagManagementModal.tsx | 20 | (null); const [sortBy, setSortBy] = useState |
| frontend/src/components/TagManagementModal.tsx | 134 | Manage Tags |
| frontend/src/components/TagManagementModal.tsx | 162 | Sort by Count |
| frontend/src/components/TagManagementModal.tsx | 163 | Sort by Name |
| frontend/src/components/TagManagementModal.tsx | 178 | ) : !filteredTags?.length ? ( |
| frontend/src/components/TagManagementModal.tsx | 222 | ) : deleteConfirm === tag.name ? ( // Delete confirmation |
| frontend/src/components/TagManagementModal.tsx | 251 | ) : ( // Normal display |
| frontend/src/components/TagManagementModal.tsx | 286 | Close |
| frontend/src/components/TagManagementModal.tsx | 151 | Search tags... |
| frontend/src/components/TagManagementModal.tsx | 264 | Rename tag |
| frontend/src/components/TagManagementModal.tsx | 271 | Delete tag |
| frontend/src/components/TimelapseEditorModal.tsx | 44 | (null); const audioRef = useRef |
| frontend/src/components/TimelapseEditorModal.tsx | 45 | (null); // Video state const [isPlaying, setIsPlaying] = useState(false); const [currentTime, setCurrentTime] = useState(0); const [duration, setDuration] = useState(0); // Editor state const [trimStart, setTrimStart] = useState(0); const [trimEnd, setTrimEnd] = useState(0); const [speed, setSpeed] = useState(1); const [audioFile, setAudioFile] = useState |
| frontend/src/components/TimelapseEditorModal.tsx | 56 | (null); const [audioUrl, setAudioUrl] = useState |
| frontend/src/components/TimelapseEditorModal.tsx | 244 | Loading video info... |
| frontend/src/components/TimelapseEditorModal.tsx | 257 | Edit Timelapse |
| frontend/src/components/TimelapseEditorModal.tsx | 269 | Processing... |
| frontend/src/components/TimelapseEditorModal.tsx | 274 | Save |
| frontend/src/components/TimelapseEditorModal.tsx | 322 | Trim |
| frontend/src/components/TimelapseEditorModal.tsx | 437 | Speed |
| frontend/src/components/TimelapseEditorModal.tsx | 461 | Music Overlay |
| frontend/src/components/TimelapseEditorModal.tsx | 507 | Drop audio file or click to upload |
| frontend/src/components/TimelapseEditorModal.tsx | 510 | MP3, WAV, M4A, AAC, OGG |
| frontend/src/components/TimelapseEditorModal.tsx | 526 | Original: |
| frontend/src/components/TimelapseEditorModal.tsx | 529 | Output: |
| frontend/src/components/TimelapseEditorModal.tsx | 539 | Processing timelapse... |
| frontend/src/components/TimelapseEditorModal.tsx | 540 | This may take a few moments |
| frontend/src/components/TimelapseViewer.tsx | 125 | Edit |
| frontend/src/components/TimelapseViewer.tsx | 130 | Download |
| frontend/src/components/TimelapseViewer.tsx | 207 | Speed: |
| frontend/src/components/TimelapseViewer.tsx | 182 | Skip back 5s |
| frontend/src/components/TimelapseViewer.tsx | 199 | Skip forward 5s |
| frontend/src/components/UploadModal.tsx | 27 | (null); const [files, setFiles] = useState |
| frontend/src/components/VirtualPrinterSettings.tsx | 19 | ('immediate'); const [localModel, setLocalModel] = useState('3DPrinter-X1-Carbon'); const [localTargetPrinterId, setLocalTargetPrinterId] = useState |
| frontend/src/components/VirtualPrinterSettings.tsx | 21 | (null); const [localRemoteInterfaceIp, setLocalRemoteInterfaceIp] = useState(''); const [showAccessCode, setShowAccessCode] = useState(false); const [pendingAction, setPendingAction] = useState |
| frontend/src/components/icons/WifiSignal.tsx | 8 | = -50 dBm (excellent) * - 3 bars: >= -60 dBm (good) * - 2 bars: >= -70 dBm (fair) * - 1 bar: |
| frontend/src/contexts/AuthContext.tsx | 11 | Promise |
| frontend/src/contexts/AuthContext.tsx | 11 | ; logout: () => void; refreshUser: () => Promise |
| frontend/src/contexts/AuthContext.tsx | 13 | ; refreshAuth: () => Promise |
| frontend/src/contexts/ToastContext.tsx | 30 | , error: |
| frontend/src/contexts/ToastContext.tsx | 31 | , warning: |
| frontend/src/contexts/ToastContext.tsx | 32 | , info: |
| frontend/src/contexts/ToastContext.tsx | 33 | , loading: |
| frontend/src/contexts/ToastContext.tsx | 46 | ([]); const timeoutRefs = useRef |
| frontend/src/pages/ArchivesPage.tsx | 149 | >([]); const [showQRCode, setShowQRCode] = useState(false); const [showPhotos, setShowPhotos] = useState(false); const [showProjectPage, setShowProjectPage] = useState(false); const [showSchedule, setShowSchedule] = useState(false); const [showDeleteSource3mfConfirm, setShowDeleteSource3mfConfirm] = useState(false); const [showDeleteF3dConfirm, setShowDeleteF3dConfirm] = useState(false); const [contextMenu, setContextMenu] = useState |
| frontend/src/pages/ArchivesPage.tsx | 156 | (null); const [currentPlateIndex, setCurrentPlateIndex] = useState |
| frontend/src/pages/ArchivesPage.tsx | 157 | (null); const [showPlateNav, setShowPlateNav] = useState(false); const source3mfInputRef = useRef |
| frontend/src/pages/ArchivesPage.tsx | 159 | (null); const f3dInputRef = useRef |
| frontend/src/pages/ArchivesPage.tsx | 822 | = 95 && archive.time_accuracy |
| frontend/src/pages/ArchivesPage.tsx | 957 | ) : ( // Source file only - must open in slicer first |
| frontend/src/pages/ArchivesPage.tsx | 1143 | Select Timelapse |
| frontend/src/pages/ArchivesPage.tsx | 1144 | No auto-match found. Select the timelapse for this print: |
| frontend/src/pages/ArchivesPage.tsx | 1300 | >([]); const [showQRCode, setShowQRCode] = useState(false); const [showPhotos, setShowPhotos] = useState(false); const [showProjectPage, setShowProjectPage] = useState(false); const [showDeleteSource3mfConfirm, setShowDeleteSource3mfConfirm] = useState(false); const [showDeleteF3dConfirm, setShowDeleteF3dConfirm] = useState(false); const [contextMenu, setContextMenu] = useState |
| frontend/src/pages/ArchivesPage.tsx | 1306 | (null); const source3mfInputRef = useRef |
| frontend/src/pages/ArchivesPage.tsx | 1307 | (null); const f3dInputRef = useRef |
| frontend/src/pages/ArchivesPage.tsx | 1937 | Select Timelapse |
| frontend/src/pages/ArchivesPage.tsx | 1938 | No auto-match found. Select the timelapse for this print: |
| frontend/src/pages/ArchivesPage.tsx | 2072 | (null); const [search, setSearch] = useState(''); const [filterPrinter, setFilterPrinter] = useState |
| frontend/src/pages/ArchivesPage.tsx | 2078 | (() => localStorage.getItem('archiveFilterMaterial') ); const [filterColors, setFilterColors] = useState |
| frontend/src/pages/ArchivesPage.tsx | 2085 | (() => (localStorage.getItem('archiveColorFilterMode') as 'or' \| 'and') \|\| 'or' ); const [filterFavorites, setFilterFavorites] = useState(() => localStorage.getItem('archiveFilterFavorites') === 'true' ); const [hideFailed, setHideFailed] = useState(() => localStorage.getItem('archiveHideFailed') === 'true' ); const [filterTag, setFilterTag] = useState |
| frontend/src/pages/ArchivesPage.tsx | 2094 | (() => localStorage.getItem('archiveFilterTag') ); const [filterFileType, setFilterFileType] = useState |
| frontend/src/pages/ArchivesPage.tsx | 2097 | (() => (localStorage.getItem('archiveFilterFileType') as 'all' \| 'gcode' \| 'source') \|\| 'all' ); const [showUpload, setShowUpload] = useState(false); const [uploadFiles, setUploadFiles] = useState |
| frontend/src/pages/ArchivesPage.tsx | 2101 | ([]); const [isDraggingOver, setIsDraggingOver] = useState(false); const [selectedIds, setSelectedIds] = useState |
| frontend/src/pages/ArchivesPage.tsx | 2103 | >(new Set()); const [isSelectionMode, setIsSelectionMode] = useState(false); const [showBulkDeleteConfirm, setShowBulkDeleteConfirm] = useState(false); const [showBatchTag, setShowBatchTag] = useState(false); const [showBatchProject, setShowBatchProject] = useState(false); const [viewMode, setViewMode] = useState |
| frontend/src/pages/ArchivesPage.tsx | 2108 | (() => (localStorage.getItem('archiveViewMode') as ViewMode) \|\| 'grid' ); const [sortBy, setSortBy] = useState |
| frontend/src/pages/ArchivesPage.tsx | 2111 | (() => (localStorage.getItem('archiveSortBy') as SortOption) \|\| 'date-desc' ); const [collection, setCollection] = useState |
| frontend/src/pages/ArchivesPage.tsx | 2114 | (() => (localStorage.getItem('archiveCollection') as Collection) \|\| 'all' ); const [showExportMenu, setShowExportMenu] = useState(false); const [isExporting, setIsExporting] = useState(false); const [showCompareModal, setShowCompareModal] = useState(false); const [showTagManagement, setShowTagManagement] = useState(false); const [highlightedArchiveId, setHighlightedArchiveId] = useState |
| frontend/src/pages/ArchivesPage.tsx | 2461 | Drop .3mf files here |
| frontend/src/pages/ArchivesPage.tsx | 2471 | Close |
| frontend/src/pages/ArchivesPage.tsx | 2479 | Select All |
| frontend/src/pages/ArchivesPage.tsx | 2490 | Tags |
| frontend/src/pages/ArchivesPage.tsx | 2500 | Project |
| frontend/src/pages/ArchivesPage.tsx | 2520 | Favorite |
| frontend/src/pages/ArchivesPage.tsx | 2530 | Delete |
| frontend/src/pages/ArchivesPage.tsx | 2539 | Archives |
| frontend/src/pages/ArchivesPage.tsx | 2599 | Export as CSV |
| frontend/src/pages/ArchivesPage.tsx | 2628 | Export as Excel |
| frontend/src/pages/ArchivesPage.tsx | 2646 | Select |
| frontend/src/pages/ArchivesPage.tsx | 2655 | Upload 3MF |
| frontend/src/pages/ArchivesPage.tsx | 2688 | All Printers |
| frontend/src/pages/ArchivesPage.tsx | 2705 | All Materials |
| frontend/src/pages/ArchivesPage.tsx | 2720 | All Files |
| frontend/src/pages/ArchivesPage.tsx | 2721 | Sliced (GCODE) |
| frontend/src/pages/ArchivesPage.tsx | 2722 | Source Only |
| frontend/src/pages/ArchivesPage.tsx | 2735 | Favorites |
| frontend/src/pages/ArchivesPage.tsx | 2747 | Hide Failed |
| frontend/src/pages/ArchivesPage.tsx | 2757 | All Tags |
| frontend/src/pages/ArchivesPage.tsx | 2819 | Reset |
| frontend/src/pages/ArchivesPage.tsx | 2827 | Colors: |
| frontend/src/pages/ArchivesPage.tsx | 2861 | Clear |
| frontend/src/pages/ArchivesPage.tsx | 2875 | ) : filteredArchives?.length === 0 ? ( |
| frontend/src/pages/ArchivesPage.tsx | 2882 | Archives are created automatically when prints complete |
| frontend/src/pages/ArchivesPage.tsx | 2886 | ) : viewMode === 'calendar' ? ( |
| frontend/src/pages/ArchivesPage.tsx | 2899 | ) : viewMode === 'grid' ? ( |
| frontend/src/pages/ArchivesPage.tsx | 2916 | ) : viewMode === 'list' ? ( |
| frontend/src/pages/ArchivesPage.tsx | 2923 | Name |
| frontend/src/pages/ArchivesPage.tsx | 2924 | Printer |
| frontend/src/pages/ArchivesPage.tsx | 2925 | Date |
| frontend/src/pages/ArchivesPage.tsx | 2926 | Size |
| frontend/src/pages/ArchivesPage.tsx | 2927 | Actions |
| frontend/src/pages/CameraPage.tsx | 15 | (); const id = parseInt(printerId \|\| '0', 10); const [streamMode, setStreamMode] = useState |
| frontend/src/pages/CameraPage.tsx | 31 | (null); const [lastTouchCenter, setLastTouchCenter] = useState |
| frontend/src/pages/CameraPage.tsx | 32 | (null); const imgRef = useRef |
| frontend/src/pages/CameraPage.tsx | 33 | (null); const containerRef = useRef |
| frontend/src/pages/CameraPage.tsx | 34 | (null); const reconnectTimerRef = useRef |
| frontend/src/pages/CameraPage.tsx | 35 | (null); const countdownIntervalRef = useRef |
| frontend/src/pages/CameraPage.tsx | 36 | (null); const stallCheckIntervalRef = useRef |
| frontend/src/pages/CameraPage.tsx | 52 | Bambuddy |
| frontend/src/pages/FileManagerPage.tsx | 267 | ('project'); const [selectedId, setSelectedId] = useState |
| frontend/src/pages/FileManagerPage.tsx | 376 | ) ) : ( archives && archives.length > 0 ? ( archives.map((archive: Archive) => ( |
| frontend/src/pages/FileManagerPage.tsx | 440 | ([]); const [isDragging, setIsDragging] = useState(false); const [isUploading, setIsUploading] = useState(false); const [preserveZipStructure, setPreserveZipStructure] = useState(true); const [createFolderFromZip, setCreateFolderFromZip] = useState(false); const [generateStlThumbnails, setGenerateStlThumbnails] = useState(true); const fileInputRef = useRef |
| frontend/src/pages/FileManagerPage.tsx | 446 | (null); const handleDragOver = (e: DragEvent |
| frontend/src/pages/FileManagerPage.tsx | 1036 | 3D Preview |
| frontend/src/pages/FileManagerPage.tsx | 1117 | (initialFolderId); const [selectedFiles, setSelectedFiles] = useState |
| frontend/src/pages/FileManagerPage.tsx | 1118 | ([]); const [showNewFolderModal, setShowNewFolderModal] = useState(false); const [showMoveModal, setShowMoveModal] = useState(false); const [showUploadModal, setShowUploadModal] = useState(false); const [linkFolder, setLinkFolder] = useState |
| frontend/src/pages/FileManagerPage.tsx | 1122 | (null); const [deleteConfirm, setDeleteConfirm] = useState |
| frontend/src/pages/FileManagerPage.tsx | 1123 | (null); const [printFile, setPrintFile] = useState |
| frontend/src/pages/FileManagerPage.tsx | 1124 | (null); const [printMultiFile, setPrintMultiFile] = useState |
| frontend/src/pages/FileManagerPage.tsx | 1125 | (null); const [scheduleFile, setScheduleFile] = useState |
| frontend/src/pages/FileManagerPage.tsx | 1126 | (null); const [renameItem, setRenameItem] = useState |
| frontend/src/pages/FileManagerPage.tsx | 1127 | (null); const [thumbnailVersions, setThumbnailVersions] = useState |
| frontend/src/pages/FileManagerPage.tsx | 1129 | (null); const [viewMode, setViewMode] = useState |
| frontend/src/pages/FileManagerPage.tsx | 1185 | ('all'); const [filterUsername, setFilterUsername] = useState(''); const [sortField, setSortField] = useState |
| frontend/src/pages/FileManagerPage.tsx | 1959 | ) : files?.length === 0 ? ( |
| frontend/src/pages/FileManagerPage.tsx | 1981 | ) : filteredAndSortedFiles.length === 0 ? ( |
| frontend/src/pages/FileManagerPage.tsx | 1994 | ) : viewMode === 'grid' ? ( |
| frontend/src/pages/GroupsPage.tsx | 35 | (null); const [deleteGroupId, setDeleteGroupId] = useState |
| frontend/src/pages/GroupsPage.tsx | 36 | (null); const [formData, setFormData] = useState |
| frontend/src/pages/GroupsPage.tsx | 278 | ); return ( |
| frontend/src/pages/LoginPage.tsx | 47 | Bambuddy |
| frontend/src/pages/MaintenancePage.tsx | 561 | (null); const [intervalInput, setIntervalInput] = useState(''); const [intervalTypeInput, setIntervalTypeInput] = useState |
| frontend/src/pages/MaintenancePage.tsx | 563 | ('hours'); const [showAddType, setShowAddType] = useState(false); const [newTypeName, setNewTypeName] = useState(''); const [newTypeInterval, setNewTypeInterval] = useState('100'); const [newTypeIntervalType, setNewTypeIntervalType] = useState |
| frontend/src/pages/MaintenancePage.tsx | 567 | ('hours'); const [newTypeIcon, setNewTypeIcon] = useState('Wrench'); const [newTypeWikiUrl, setNewTypeWikiUrl] = useState(''); const [selectedPrinters, setSelectedPrinters] = useState |
| frontend/src/pages/MaintenancePage.tsx | 570 | >(new Set()); const [expandedType, setExpandedType] = useState |
| frontend/src/pages/MaintenancePage.tsx | 599 | (null); const [editTypeName, setEditTypeName] = useState(''); const [editTypeInterval, setEditTypeInterval] = useState(''); const [editTypeIntervalType, setEditTypeIntervalType] = useState |
| frontend/src/pages/MaintenancePage.tsx | 781 | https://wiki.bambulab.com/... |
| frontend/src/pages/PrintersPage.tsx | 380 | 0.85) return 'White'; // Low saturation = gray if (s |
| frontend/src/pages/PrintersPage.tsx | 392 | = 45 && h |
| frontend/src/pages/PrintersPage.tsx | 394 | = 345) return 'Red'; if (h |
| frontend/src/pages/PrintersPage.tsx | 602 | ; if (temp |
| frontend/src/pages/PrintersPage.tsx | 967 | (null); const [linkSpoolModal, setLinkSpoolModal] = useState |
| frontend/src/pages/PrintersPage.tsx | 971 | (null); const [configureSlotModal, setConfigureSlotModal] = useState |
| frontend/src/pages/PrintersPage.tsx | 980 | (null); const [showFirmwareModal, setShowFirmwareModal] = useState(false); const [plateCheckResult, setPlateCheckResult] = useState |
| frontend/src/pages/PrintersPage.tsx | 993 | (null); const [isCheckingPlate, setIsCheckingPlate] = useState(false); const [isCalibrating, setIsCalibrating] = useState(false); const [editingRoi, setEditingRoi] = useState |
| frontend/src/pages/PrintersPage.tsx | 1286 | (null); // Track if we've seen the printer enter "busy" state (ams_status_main !== 0) const seenBusyStateRef = useRef |
| frontend/src/pages/PrintersPage.tsx | 1288 | (false); // Fallback timeout ref const refreshTimeoutRef = useRef |
| frontend/src/pages/PrintersPage.tsx | 1290 | \| null>(null); // Minimum display time passed const minTimePassedRef = useRef |
| frontend/src/pages/PrintersPage.tsx | 1849 | ) : ( /* Expanded: Full status section */ |
| frontend/src/pages/PrintersPage.tsx | 1985 | L / R |
| frontend/src/pages/PrintersPage.tsx | 2018 | L |
| frontend/src/pages/PrintersPage.tsx | 2020 | R |
| frontend/src/pages/PrintersPage.tsx | 2261 | ) : tray?.tray_type ? ( |
| frontend/src/pages/PrintersPage.tsx | 2266 | ); // Wrapper with menu button, dropdown, and loading overlay (outside hover card) return ( |
| frontend/src/pages/PrintersPage.tsx | 2440 | ) : tray?.tray_type ? ( |
| frontend/src/pages/PrintersPage.tsx | 2445 | ); return ( |
| frontend/src/pages/PrintersPage.tsx | 2631 | ); return ( |
| frontend/src/pages/PrintersPage.tsx | 2729 | On |
| frontend/src/pages/PrintersPage.tsx | 2744 | Off |
| frontend/src/pages/PrintersPage.tsx | 2779 | HA: |
| frontend/src/pages/PrintersPage.tsx | 2882 | Files |
| frontend/src/pages/PrintersPage.tsx | 2915 | ) : plateCheckResult.is_empty ? ( |
| frontend/src/pages/PrintersPage.tsx | 2921 | Build Plate Check |
| frontend/src/pages/PrintersPage.tsx | 3151 | Calibrating... |
| frontend/src/pages/PrintersPage.tsx | 3286 | ) : objectsData.objects.length === 0 ? ( |
| frontend/src/pages/PrintersPage.tsx | 3425 | ID |
| frontend/src/pages/PrintersPage.tsx | 3887 | H2C |
| frontend/src/pages/PrintersPage.tsx | 3888 | H2D |
| frontend/src/pages/PrintersPage.tsx | 3889 | H2D Pro |
| frontend/src/pages/PrintersPage.tsx | 3890 | H2S |
| frontend/src/pages/PrintersPage.tsx | 3893 | X1E |
| frontend/src/pages/PrintersPage.tsx | 3894 | X1 Carbon |
| frontend/src/pages/PrintersPage.tsx | 3895 | X1 |
| frontend/src/pages/PrintersPage.tsx | 3898 | P2S |
| frontend/src/pages/PrintersPage.tsx | 3899 | P1S |
| frontend/src/pages/PrintersPage.tsx | 3900 | P1P |
| frontend/src/pages/PrintersPage.tsx | 3903 | A1 |
| frontend/src/pages/PrintersPage.tsx | 3904 | A1 Mini |
| frontend/src/pages/PrintersPage.tsx | 3958 | (null); const [isUploading, setIsUploading] = useState(false); const [pollInterval, setPollInterval] = useState |
| frontend/src/pages/PrintersPage.tsx | 4055 | ) : prepareInfo && !isUploading && !uploadStatus ? ( |
| frontend/src/pages/PrintersPage.tsx | 4262 | H2C |
| frontend/src/pages/PrintersPage.tsx | 4263 | H2D |
| frontend/src/pages/PrintersPage.tsx | 4264 | H2D Pro |
| frontend/src/pages/PrintersPage.tsx | 4265 | H2S |
| frontend/src/pages/PrintersPage.tsx | 4268 | X1E |
| frontend/src/pages/PrintersPage.tsx | 4269 | X1 Carbon |
| frontend/src/pages/PrintersPage.tsx | 4270 | X1 |
| frontend/src/pages/PrintersPage.tsx | 4273 | P2S |
| frontend/src/pages/PrintersPage.tsx | 4274 | P1S |
| frontend/src/pages/PrintersPage.tsx | 4275 | P1P |
| frontend/src/pages/PrintersPage.tsx | 4278 | A1 |
| frontend/src/pages/PrintersPage.tsx | 4279 | A1 Mini |
| frontend/src/pages/PrintersPage.tsx | 4284 | Location / Group |
| frontend/src/pages/PrintersPage.tsx | 4396 | (null); const [sortBy, setSortBy] = useState |
| frontend/src/pages/PrintersPage.tsx | 4596 | (['printerStatus', a.id]); const statusB = queryClient.getQueryData |
| frontend/src/pages/PrintersPage.tsx | 4739 | No printers with smart plugs |
| frontend/src/pages/PrintersPage.tsx | 4760 | ) : printers?.length === 0 ? ( |
| frontend/src/pages/PrintersPage.tsx | 4774 | ) : groupedPrinters ? ( /* Grouped by location view */ |
| frontend/src/pages/PrintersPage.tsx | 4813 | ) : ( /* Regular grid view */ |
| frontend/src/pages/PrintersPage.tsx | 3864 | 01P00A000000000 |
| frontend/src/pages/PrintersPage.tsx | 3886 | H2 Series |
| frontend/src/pages/PrintersPage.tsx | 3892 | X1 Series |
| frontend/src/pages/PrintersPage.tsx | 3897 | P Series |
| frontend/src/pages/PrintersPage.tsx | 3902 | A1 Series |
| frontend/src/pages/PrintersPage.tsx | 4261 | H2 Series |
| frontend/src/pages/PrintersPage.tsx | 4267 | X1 Series |
| frontend/src/pages/PrintersPage.tsx | 4272 | P Series |
| frontend/src/pages/PrintersPage.tsx | 4277 | A1 Series |
| frontend/src/pages/ProfilesPage.tsx | 114 | ('email'); const [email, setEmail] = useState(''); const [password, setPassword] = useState(''); const [code, setCode] = useState(''); const [token, setToken] = useState(''); const [region, setRegion] = useState('global'); const [verificationType, setVerificationType] = useState |
| frontend/src/pages/ProfilesPage.tsx | 120 | (null); const [tfaKey, setTfaKey] = useState |
| frontend/src/pages/ProfilesPage.tsx | 591 | ) : detail ? ( |
| frontend/src/pages/ProfilesPage.tsx | 708 | (loadCustomTemplates); const [filterType, setFilterType] = useState |
| frontend/src/pages/ProfilesPage.tsx | 709 | ('all'); const [editingId, setEditingId] = useState |
| frontend/src/pages/ProfilesPage.tsx | 714 | (null); const [deleteConfirmId, setDeleteConfirmId] = useState |
| frontend/src/pages/ProfilesPage.tsx | 918 | Save |
| frontend/src/pages/ProfilesPage.tsx | 921 | Cancel |
| frontend/src/pages/ProfilesPage.tsx | 1005 | ; rightPreset: Record |
| frontend/src/pages/ProfilesPage.tsx | 1225 | , removed: |
| frontend/src/pages/ProfilesPage.tsx | 1226 | , changed: |
| frontend/src/pages/ProfilesPage.tsx | 1227 | , same: |
| frontend/src/pages/ProfilesPage.tsx | 1289 | ('common'); const [presetType, setPresetType] = useState |
| frontend/src/pages/ProfilesPage.tsx | 1304 | (null); const [fieldSearch, setFieldSearch] = useState(''); const [isDragging, setIsDragging] = useState(false); const [customFieldKey, setCustomFieldKey] = useState(''); const [showCustomFieldInput, setShowCustomFieldInput] = useState(false); const [customTemplates, setCustomTemplates] = useState |
| frontend/src/pages/ProfilesPage.tsx | 1309 | (loadCustomTemplates); const [showSaveTemplate, setShowSaveTemplate] = useState(false); const [newTemplateName, setNewTemplateName] = useState(''); const [newTemplateDesc, setNewTemplateDesc] = useState(''); const [newTemplateShowInModal, setNewTemplateShowInModal] = useState(true); const [appliedTemplateName, setAppliedTemplateName] = useState |
| frontend/src/pages/ProfilesPage.tsx | 2234 | : (isEditMode ? |
| frontend/src/pages/ProfilesPage.tsx | 2266 | ('all'); const [filterOwner, setFilterOwner] = useState |
| frontend/src/pages/ProfilesPage.tsx | 2267 | ('all'); const [filterPrinter, setFilterPrinter] = useState('all'); const [filterNozzle, setFilterNozzle] = useState('all'); const [filterFilament, setFilterFilament] = useState('all'); const [filterLayerHeight, setFilterLayerHeight] = useState('all'); const [selectedSetting, setSelectedSetting] = useState |
| frontend/src/pages/ProfilesPage.tsx | 2272 | (null); const [showCreateModal, setShowCreateModal] = useState(false); const [showTemplatesModal, setShowTemplatesModal] = useState(false); const [duplicateData, setDuplicateData] = useState |
| frontend/src/pages/ProfilesPage.tsx | 2280 | ([null, null]); const [showCompareModal, setShowCompareModal] = useState(false); const [comparePresets, setComparePresets] = useState |
| frontend/src/pages/ProfilesPage.tsx | 2282 | , Record |
| frontend/src/pages/ProfilesPage.tsx | 2298 | (); const filaments = new Set |
| frontend/src/pages/ProfilesPage.tsx | 2299 | (); const layerHeights = new Set |
| frontend/src/pages/ProfilesPage.tsx | 2824 | ('cloud'); const [lastSyncTime, setLastSyncTime] = useState |
| frontend/src/pages/ProfilesPage.tsx | 2932 | ) : settingsLoading ? ( |
| frontend/src/pages/ProfilesPage.tsx | 2936 | ) : settings ? ( |
| frontend/src/pages/ProfilesPage.tsx | 197 | your@email.com |
| frontend/src/pages/ProfilesPage.tsx | 256 | eyJ... |
| frontend/src/pages/ProfilesPage.tsx | 386 | Scroll to top |
| frontend/src/pages/ProfilesPage.tsx | 2113 | custom_field_name |
| frontend/src/pages/ProjectDetailPage.tsx | 293 | (null); const [editBomName, setEditBomName] = useState(''); const [editBomQty, setEditBomQty] = useState(1); const [editBomPrice, setEditBomPrice] = useState(''); const [editBomUrl, setEditBomUrl] = useState(''); const [editBomRemarks, setEditBomRemarks] = useState(''); // Confirm modal state const [confirmModal, setConfirmModal] = useState |
| frontend/src/pages/ProjectDetailPage.tsx | 819 | ) : project.notes ? ( |
| frontend/src/pages/ProjectDetailPage.tsx | 985 | ) : bomItems && bomItems.length > 0 ? ( |
| frontend/src/pages/ProjectDetailPage.tsx | 1054 | ) : ( // Display mode |
| frontend/src/pages/ProjectDetailPage.tsx | 1177 | ) : timeline && timeline.length > 0 ? ( |
| frontend/src/pages/ProjectsPage.tsx | 309 | ) : project.target_count ? ( |
| frontend/src/pages/ProjectsPage.tsx | 317 | ) : project.completed_count > 0 ? ( |
| frontend/src/pages/ProjectsPage.tsx | 482 | ) : project.completed_count > 0 \|\| project.failed_count > 0 ? ( |
| frontend/src/pages/ProjectsPage.tsx | 586 | (); const [statusFilter, setStatusFilter] = useState |
| frontend/src/pages/ProjectsPage.tsx | 587 | ('active'); const [deleteConfirm, setDeleteConfirm] = useState |
| frontend/src/pages/ProjectsPage.tsx | 838 | ) : projects?.length === 0 ? ( |
| frontend/src/pages/QueuePage.tsx | 135 | ) => void; onClose: () => void; isSaving: boolean; t: (key: string, options?: Record |
| frontend/src/pages/QueuePage.tsx | 140 | ('unchanged'); const [manualStart, setManualStart] = useState |
| frontend/src/pages/QueuePage.tsx | 141 | ('unchanged'); const [autoOffAfter, setAutoOffAfter] = useState |
| frontend/src/pages/QueuePage.tsx | 142 | ('unchanged'); const [requirePreviousSuccess, setRequirePreviousSuccess] = useState |
| frontend/src/pages/QueuePage.tsx | 143 | ('unchanged'); const [bedLevelling, setBedLevelling] = useState |
| frontend/src/pages/QueuePage.tsx | 144 | ('unchanged'); const [flowCali, setFlowCali] = useState |
| frontend/src/pages/QueuePage.tsx | 145 | ('unchanged'); const [vibrationCali, setVibrationCali] = useState |
| frontend/src/pages/QueuePage.tsx | 146 | ('unchanged'); const [layerInspect, setLayerInspect] = useState |
| frontend/src/pages/QueuePage.tsx | 147 | ('unchanged'); const [timelapse, setTimelapse] = useState |
| frontend/src/pages/QueuePage.tsx | 148 | ('unchanged'); const [useAms, setUseAms] = useState |
| frontend/src/pages/QueuePage.tsx | 375 | ) : position !== undefined ? ( |
| frontend/src/pages/QueuePage.tsx | 395 | ) : item.library_file_thumbnail ? ( |
| frontend/src/pages/QueuePage.tsx | 426 | ) : item.library_file_id ? ( |
| frontend/src/pages/QueuePage.tsx | 601 | (null); const [filterStatus, setFilterStatus] = useState |
| frontend/src/pages/QueuePage.tsx | 602 | (''); const [filterLocation, setFilterLocation] = useState |
| frontend/src/pages/QueuePage.tsx | 603 | (''); const [showClearHistoryConfirm, setShowClearHistoryConfirm] = useState(false); const [editItem, setEditItem] = useState |
| frontend/src/pages/QueuePage.tsx | 605 | (null); const [requeueItem, setRequeueItem] = useState |
| frontend/src/pages/QueuePage.tsx | 606 | (null); const [confirmAction, setConfirmAction] = useState |
| frontend/src/pages/QueuePage.tsx | 610 | (null); const [selectedItems, setSelectedItems] = useState |
| frontend/src/pages/QueuePage.tsx | 611 | ([]); const [showBulkEditModal, setShowBulkEditModal] = useState(false); const [historySortBy, setHistorySortBy] = useState |
| frontend/src/pages/QueuePage.tsx | 1049 | ) : queue?.length === 0 ? ( |
| frontend/src/pages/SettingsPage.tsx | 48 | (null); const [showPlugModal, setShowPlugModal] = useState(false); const [editingPlug, setEditingPlug] = useState |
| frontend/src/pages/SettingsPage.tsx | 50 | (null); const [showNotificationModal, setShowNotificationModal] = useState(false); const [editingProvider, setEditingProvider] = useState |
| frontend/src/pages/SettingsPage.tsx | 52 | (null); const [editingTemplate, setEditingTemplate] = useState |
| frontend/src/pages/SettingsPage.tsx | 53 | (null); const [showLogViewer, setShowLogViewer] = useState(false); const [defaultView, setDefaultViewState] = useState |
| frontend/src/pages/SettingsPage.tsx | 55 | (getDefaultView()); // Initialize tab from URL params const tabParam = searchParams.get('tab'); const initialTab = tabParam && validTabs.includes(tabParam as TabType) ? tabParam as TabType : 'general'; const [activeTab, setActiveTab] = useState |
| frontend/src/pages/SettingsPage.tsx | 79 | (null); const [showDeleteAPIKeyConfirm, setShowDeleteAPIKeyConfirm] = useState |
| frontend/src/pages/SettingsPage.tsx | 80 | (null); const [testApiKey, setTestApiKey] = useState(''); // Confirm modal states const [showClearLogsConfirm, setShowClearLogsConfirm] = useState(false); const [showClearStorageConfirm, setShowClearStorageConfirm] = useState(false); const [showBulkPlugConfirm, setShowBulkPlugConfirm] = useState |
| frontend/src/pages/SettingsPage.tsx | 96 | (null); const [deleteUserId, setDeleteUserId] = useState |
| frontend/src/pages/SettingsPage.tsx | 97 | (null); const [deleteUserItemCounts, setDeleteUserItemCounts] = useState |
| frontend/src/pages/SettingsPage.tsx | 98 | (null); const [deleteUserLoading, setDeleteUserLoading] = useState(false); const [userFormData, setUserFormData] = useState |
| frontend/src/pages/SettingsPage.tsx | 116 | (null); const [deleteGroupId, setDeleteGroupId] = useState |
| frontend/src/pages/SettingsPage.tsx | 117 | (null); const [groupFormData, setGroupFormData] = useState |
| frontend/src/pages/SettingsPage.tsx | 127 | >(new Set()); // Home Assistant test connection state const [haTestResult, setHaTestResult] = useState |
| frontend/src/pages/SettingsPage.tsx | 130 | (null); const [haTestLoading, setHaTestLoading] = useState(false); // External camera test state const [extCameraTestResults, setExtCameraTestResults] = useState |
| frontend/src/pages/SettingsPage.tsx | 1099 | Date Format |
| frontend/src/pages/SettingsPage.tsx | 1109 | US (MM/DD/YYYY) |
| frontend/src/pages/SettingsPage.tsx | 1110 | EU (DD/MM/YYYY) |
| frontend/src/pages/SettingsPage.tsx | 1111 | ISO (YYYY-MM-DD) |
| frontend/src/pages/SettingsPage.tsx | 1117 | Time Format |
| frontend/src/pages/SettingsPage.tsx | 1127 | 12-hour (3:30 PM) |
| frontend/src/pages/SettingsPage.tsx | 1128 | 24-hour (15:30) |
| frontend/src/pages/SettingsPage.tsx | 1135 | Default Printer |
| frontend/src/pages/SettingsPage.tsx | 1153 | Pre-select this printer for uploads, reprints, and other operations. |
| frontend/src/pages/SettingsPage.tsx | 1160 | Drag items in the sidebar to reorder. Reset to default order here. |
| frontend/src/pages/SettingsPage.tsx | 1169 | Reset |
| frontend/src/pages/SettingsPage.tsx | 1179 | Appearance |
| frontend/src/pages/SettingsPage.tsx | 1188 | (active) |
| frontend/src/pages/SettingsPage.tsx | 1192 | Background |
| frontend/src/pages/SettingsPage.tsx | 1198 | Neutral |
| frontend/src/pages/SettingsPage.tsx | 1199 | Warm |
| frontend/src/pages/SettingsPage.tsx | 1200 | Cool |
| frontend/src/pages/SettingsPage.tsx | 1201 | OLED Black |
| frontend/src/pages/SettingsPage.tsx | 1202 | Slate Blue |
| frontend/src/pages/SettingsPage.tsx | 1203 | Forest Green |
| frontend/src/pages/SettingsPage.tsx | 1207 | Accent |
| frontend/src/pages/SettingsPage.tsx | 1213 | Green |
| frontend/src/pages/SettingsPage.tsx | 1214 | Teal |
| frontend/src/pages/SettingsPage.tsx | 1215 | Blue |
| frontend/src/pages/SettingsPage.tsx | 1216 | Orange |
| frontend/src/pages/SettingsPage.tsx | 1217 | Purple |
| frontend/src/pages/SettingsPage.tsx | 1218 | Red |
| frontend/src/pages/SettingsPage.tsx | 1222 | Style |
| frontend/src/pages/SettingsPage.tsx | 1228 | Classic |
| frontend/src/pages/SettingsPage.tsx | 1229 | Glow |
| frontend/src/pages/SettingsPage.tsx | 1230 | Vibrant |
| frontend/src/pages/SettingsPage.tsx | 1240 | (active) |
| frontend/src/pages/SettingsPage.tsx | 1244 | Background |
| frontend/src/pages/SettingsPage.tsx | 1250 | Neutral |
| frontend/src/pages/SettingsPage.tsx | 1251 | Warm |
| frontend/src/pages/SettingsPage.tsx | 1252 | Cool |
| frontend/src/pages/SettingsPage.tsx | 1256 | Accent |
| frontend/src/pages/SettingsPage.tsx | 1262 | Green |
| frontend/src/pages/SettingsPage.tsx | 1263 | Teal |
| frontend/src/pages/SettingsPage.tsx | 1264 | Blue |
| frontend/src/pages/SettingsPage.tsx | 1265 | Orange |
| frontend/src/pages/SettingsPage.tsx | 1266 | Purple |
| frontend/src/pages/SettingsPage.tsx | 1267 | Red |
| frontend/src/pages/SettingsPage.tsx | 1271 | Style |
| frontend/src/pages/SettingsPage.tsx | 1277 | Classic |
| frontend/src/pages/SettingsPage.tsx | 1278 | Glow |
| frontend/src/pages/SettingsPage.tsx | 1279 | Vibrant |
| frontend/src/pages/SettingsPage.tsx | 1285 | Toggle between dark and light mode using the sun/moon icon in the sidebar. |
| frontend/src/pages/SettingsPage.tsx | 1298 | Auto-archive prints |
| frontend/src/pages/SettingsPage.tsx | 1299 | Automatically save 3MF files when prints complete |
| frontend/src/pages/SettingsPage.tsx | 1316 | Extract and save preview images from 3MF files |
| frontend/src/pages/SettingsPage.tsx | 1333 | Take a photo from printer camera when print completes |
| frontend/src/pages/SettingsPage.tsx | 1351 | ffmpeg not installed |
| frontend/src/pages/SettingsPage.tsx | 1354 | brew install ffmpeg |
| frontend/src/pages/SettingsPage.tsx | 1355 | apt install ffmpeg |
| frontend/src/pages/SettingsPage.tsx | 1355 | (Linux). |
| frontend/src/pages/SettingsPage.tsx | 1371 | Camera |
| frontend/src/pages/SettingsPage.tsx | 1377 | Camera View Mode |
| frontend/src/pages/SettingsPage.tsx | 1398 | Configure external cameras to replace the built-in printer camera. Supports MJPEG streams, RTSP, HTTP snapshots, and USB cameras (V4L2). When enabled, the external camera is used for live view and finish photos. |
| frontend/src/pages/SettingsPage.tsx | 1434 | MJPEG Stream |
| frontend/src/pages/SettingsPage.tsx | 1435 | RTSP Stream |
| frontend/src/pages/SettingsPage.tsx | 1436 | HTTP Snapshot |
| frontend/src/pages/SettingsPage.tsx | 1437 | USB Camera (V4L2) |
| frontend/src/pages/SettingsPage.tsx | 1485 | Default filament cost (per kg) |
| frontend/src/pages/SettingsPage.tsx | 1500 | Currency |
| frontend/src/pages/SettingsPage.tsx | 1506 | USD ($) |
| frontend/src/pages/SettingsPage.tsx | 1507 | EUR (€) |
| frontend/src/pages/SettingsPage.tsx | 1508 | GBP (£) |
| frontend/src/pages/SettingsPage.tsx | 1509 | CHF (Fr.) |
| frontend/src/pages/SettingsPage.tsx | 1510 | JPY (¥) |
| frontend/src/pages/SettingsPage.tsx | 1511 | CNY (¥) |
| frontend/src/pages/SettingsPage.tsx | 1512 | CAD ($) |
| frontend/src/pages/SettingsPage.tsx | 1513 | AUD ($) |
| frontend/src/pages/SettingsPage.tsx | 1517 | Electricity cost per kWh |
| frontend/src/pages/SettingsPage.tsx | 1532 | Energy display mode |
| frontend/src/pages/SettingsPage.tsx | 1556 | File Manager |
| frontend/src/pages/SettingsPage.tsx | 1563 | Create Archive Entry When Printing |
| frontend/src/pages/SettingsPage.tsx | 1575 | When printing from File Manager, optionally create an archive entry |
| frontend/src/pages/SettingsPage.tsx | 1582 | Low Disk Space Warning |
| frontend/src/pages/SettingsPage.tsx | 1595 | GB |
| frontend/src/pages/SettingsPage.tsx | 1597 | Show warning when free disk space falls below this threshold |
| frontend/src/pages/SettingsPage.tsx | 1612 | Updates |
| frontend/src/pages/SettingsPage.tsx | 1618 | Automatically check for new versions on startup |
| frontend/src/pages/SettingsPage.tsx | 1635 | Check for printer firmware updates from Bambu Lab |
| frontend/src/pages/SettingsPage.tsx | 1716 | ) : updateStatus?.status === 'complete' ? ( |
| frontend/src/pages/SettingsPage.tsx | 1720 | ) : updateStatus?.status === 'error' ? ( |
| frontend/src/pages/SettingsPage.tsx | 1724 | ) : updateCheck?.is_docker ? ( |
| frontend/src/pages/SettingsPage.tsx | 1727 | Update via Docker Compose: |
| frontend/src/pages/SettingsPage.tsx | 1730 | docker compose pull && docker compose up -d |
| frontend/src/pages/SettingsPage.tsx | 1748 | ) : updateCheck?.error ? ( |
| frontend/src/pages/SettingsPage.tsx | 1752 | ) : updateCheck && !updateCheck.update_available ? ( |
| frontend/src/pages/SettingsPage.tsx | 1754 | You're running the latest version |
| frontend/src/pages/SettingsPage.tsx | 1796 | Reset |
| frontend/src/pages/SettingsPage.tsx | 1802 | Backup & Restore |
| frontend/src/pages/SettingsPage.tsx | 1803 | Export/import settings and configure GitHub backup |
| frontend/src/pages/SettingsPage.tsx | 1812 | Go to Backup |
| frontend/src/pages/SettingsPage.tsx | 1831 | External URL |
| frontend/src/pages/SettingsPage.tsx | 1836 | The external URL where Bambuddy is accessible. Used for notification images and external integrations. |
| frontend/src/pages/SettingsPage.tsx | 1840 | Bambuddy URL |
| frontend/src/pages/SettingsPage.tsx | 1850 | Include protocol and port (e.g., http://192.168.1.100:8000) |
| frontend/src/pages/SettingsPage.tsx | 1860 | FTP Retry |
| frontend/src/pages/SettingsPage.tsx | 1865 | Retry FTP operations when printer WiFi is unreliable. Applies to 3MF downloads, print uploads, timelapse downloads, and firmware updates. |
| frontend/src/pages/SettingsPage.tsx | 1872 | Automatically retry failed FTP operations |
| frontend/src/pages/SettingsPage.tsx | 1890 | Retry attempts |
| frontend/src/pages/SettingsPage.tsx | 1908 | Retry delay |
| frontend/src/pages/SettingsPage.tsx | 1925 | Connection timeout |
| frontend/src/pages/SettingsPage.tsx | 1940 | Increase for printers with weak WiFi |
| frontend/src/pages/SettingsPage.tsx | 1958 | Home Assistant |
| frontend/src/pages/SettingsPage.tsx | 1972 | Connect to Home Assistant to control smart plugs via HA's REST API. Supports switch, light, input_boolean, and script entities. |
| frontend/src/pages/SettingsPage.tsx | 1995 | Home Assistant URL |
| frontend/src/pages/SettingsPage.tsx | 2008 | Long-Lived Access Token |
| frontend/src/pages/SettingsPage.tsx | 2018 | Create a token in HA: Profile → Long-Lived Access Tokens → Create Token |
| frontend/src/pages/SettingsPage.tsx | 2057 | MQTT Publishing |
| frontend/src/pages/SettingsPage.tsx | 2071 | Publish BamBuddy events to an external MQTT broker for integration with Node-RED, Home Assistant, and other automation systems. |
| frontend/src/pages/SettingsPage.tsx | 2078 | Publish events to external MQTT broker |
| frontend/src/pages/SettingsPage.tsx | 2096 | Broker hostname |
| frontend/src/pages/SettingsPage.tsx | 2110 | Port |
| frontend/src/pages/SettingsPage.tsx | 2147 | Username (optional) |
| frontend/src/pages/SettingsPage.tsx | 2160 | Password (optional) |
| frontend/src/pages/SettingsPage.tsx | 2173 | Topic prefix |
| frontend/src/pages/SettingsPage.tsx | 2214 | Prometheus Metrics |
| frontend/src/pages/SettingsPage.tsx | 2219 | Expose printer metrics at |
| frontend/src/pages/SettingsPage.tsx | 2220 | /api/v1/metrics |
| frontend/src/pages/SettingsPage.tsx | 2220 | for Prometheus/Grafana monitoring. |
| frontend/src/pages/SettingsPage.tsx | 2242 | Bearer Token (optional) |
| frontend/src/pages/SettingsPage.tsx | 2252 | If set, requests must include |
| frontend/src/pages/SettingsPage.tsx | 2253 | Authorization: Bearer &lt;token&gt; |
| frontend/src/pages/SettingsPage.tsx | 2260 | bambuddy_printer_connected |
| frontend/src/pages/SettingsPage.tsx | 2260 | - Connection status |
| frontend/src/pages/SettingsPage.tsx | 2261 | bambuddy_printer_state |
| frontend/src/pages/SettingsPage.tsx | 2261 | - Printer state (idle/printing/etc) |
| frontend/src/pages/SettingsPage.tsx | 2262 | bambuddy_print_progress |
| frontend/src/pages/SettingsPage.tsx | 2262 | - Print progress 0-100% |
| frontend/src/pages/SettingsPage.tsx | 2263 | bambuddy_bed_temp_celsius |
| frontend/src/pages/SettingsPage.tsx | 2263 | - Bed temperature |
| frontend/src/pages/SettingsPage.tsx | 2264 | bambuddy_nozzle_temp_celsius |
| frontend/src/pages/SettingsPage.tsx | 2264 | - Nozzle temperature |
| frontend/src/pages/SettingsPage.tsx | 2265 | bambuddy_prints_total |
| frontend/src/pages/SettingsPage.tsx | 2265 | - Total prints by result |
| frontend/src/pages/SettingsPage.tsx | 2266 | ...and more (layers, fans, queue, filament usage) |
| frontend/src/pages/SettingsPage.tsx | 2314 | Smart Plugs |
| frontend/src/pages/SettingsPage.tsx | 2317 | Connect smart plugs (Tasmota or Home Assistant) to automate power control and track energy usage for your printers. |
| frontend/src/pages/SettingsPage.tsx | 2363 | Add Smart Plug |
| frontend/src/pages/SettingsPage.tsx | 2387 | Current Power |
| frontend/src/pages/SettingsPage.tsx | 2392 | W |
| frontend/src/pages/SettingsPage.tsx | 2402 | Today |
| frontend/src/pages/SettingsPage.tsx | 2407 | kWh |
| frontend/src/pages/SettingsPage.tsx | 2419 | Yesterday |
| frontend/src/pages/SettingsPage.tsx | 2424 | kWh |
| frontend/src/pages/SettingsPage.tsx | 2436 | Total |
| frontend/src/pages/SettingsPage.tsx | 2441 | kWh |
| frontend/src/pages/SettingsPage.tsx | 2449 | ) : !energyLoading ? ( |
| frontend/src/pages/SettingsPage.tsx | 2451 | Enable plugs to see energy summary |
| frontend/src/pages/SettingsPage.tsx | 2462 | ) : smartPlugs && smartPlugs.length > 0 ? ( |
| frontend/src/pages/SettingsPage.tsx | 2543 | Add |
| frontend/src/pages/SettingsPage.tsx | 2613 | ) : notificationProviders && notificationProviders.length > 0 ? ( |
| frontend/src/pages/SettingsPage.tsx | 2663 | ) : notificationTemplates && notificationTemplates.length > 0 ? ( |
| frontend/src/pages/SettingsPage.tsx | 2880 | ) : apiKeys && apiKeys.length > 0 ? ( |
| frontend/src/pages/SettingsPage.tsx | 2949 | GET |
| frontend/src/pages/SettingsPage.tsx | 2950 | /api/v1/webhook/status |
| frontend/src/pages/SettingsPage.tsx | 2954 | GET |
| frontend/src/pages/SettingsPage.tsx | 2955 | /api/v1/webhook/status/:id |
| frontend/src/pages/SettingsPage.tsx | 2959 | POST |
| frontend/src/pages/SettingsPage.tsx | 2960 | /api/v1/webhook/queue |
| frontend/src/pages/SettingsPage.tsx | 2964 | POST |
| frontend/src/pages/SettingsPage.tsx | 2965 | /api/v1/webhook/printer/:id/pause |
| frontend/src/pages/SettingsPage.tsx | 2969 | POST |
| frontend/src/pages/SettingsPage.tsx | 2970 | /api/v1/webhook/printer/:id/resume |
| frontend/src/pages/SettingsPage.tsx | 2974 | POST |
| frontend/src/pages/SettingsPage.tsx | 2975 | /api/v1/webhook/printer/:id/stop |
| frontend/src/pages/SettingsPage.tsx | 3102 | °C |
| frontend/src/pages/SettingsPage.tsx | 3119 | °C |
| frontend/src/pages/SettingsPage.tsx | 3334 | View on GitHub |
| frontend/src/pages/SettingsPage.tsx | 3378 | ) : user?.is_admin && ( |
| frontend/src/pages/SettingsPage.tsx | 3467 | ) : usersData.length === 0 ? ( |
| frontend/src/pages/SettingsPage.tsx | 3547 | ) : groupsData.length === 0 ? ( |
| frontend/src/pages/SettingsPage.tsx | 3715 | Groups |
| frontend/src/pages/SettingsPage.tsx | 3730 | (System) |
| frontend/src/pages/SettingsPage.tsx | 3756 | Creating... |
| frontend/src/pages/SettingsPage.tsx | 3761 | Create User |
| frontend/src/pages/SettingsPage.tsx | 3819 | Password |
| frontend/src/pages/SettingsPage.tsx | 3820 | (leave blank to keep current) |
| frontend/src/pages/SettingsPage.tsx | 3854 | Groups |
| frontend/src/pages/SettingsPage.tsx | 3869 | (System) |
| frontend/src/pages/SettingsPage.tsx | 3893 | Saving... |
| frontend/src/pages/SettingsPage.tsx | 3898 | Save Changes |
| frontend/src/pages/SettingsPage.tsx | 3932 | ) : deleteUserItemCounts && (deleteUserItemCounts.archives + deleteUserItemCounts.queue_items + deleteUserItemCounts.library_files > 0) ? ( |
| frontend/src/pages/SettingsPage.tsx | 4060 | Description |
| frontend/src/pages/SettingsPage.tsx | 4245 | Current Password |
| frontend/src/pages/SettingsPage.tsx | 4258 | New Password |
| frontend/src/pages/SettingsPage.tsx | 4272 | Confirm New Password |
| frontend/src/pages/SettingsPage.tsx | 4330 | Changing... |
| frontend/src/pages/SettingsPage.tsx | 4335 | Change Password |
| frontend/src/pages/SettingsPage.tsx | 1847 | http://192.168.1.100:8000 |
| frontend/src/pages/SettingsPage.tsx | 2002 | http://192.168.1.100:8123 |
| frontend/src/pages/SettingsPage.tsx | 2015 | eyJ0eXAiOiJKV1QiLC... |
| frontend/src/pages/SettingsPage.tsx | 2103 | mqtt.example.com or 192.168.1.100 |
| frontend/src/pages/SettingsPage.tsx | 2180 | bambuddy |
| frontend/src/pages/SetupPage.tsx | 83 | Bambuddy |
| frontend/src/pages/StatsPage.tsx | 287 | = 95 && acc |
| frontend/src/pages/StreamOverlayPage.tsx | 181 | Bambuddy |
| frontend/src/pages/StreamOverlayPage.tsx | 234 | Bambuddy |
| frontend/src/pages/UsersPage.tsx | 27 | (null); const [deleteUserId, setDeleteUserId] = useState |
| frontend/src/pages/UsersPage.tsx | 28 | (null); const [formData, setFormData] = useState |
