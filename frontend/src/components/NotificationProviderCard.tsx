import { useState } from 'react';
import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
import { Bell, Trash2, Settings2, Edit2, Send, Loader2, CheckCircle, XCircle, Moon, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { api } from '../api/client';
import type { NotificationProvider, NotificationProviderUpdate } from '../api/client';
import { Card, CardContent } from './Card';
import { Button } from './Button';
import { ConfirmModal } from './ConfirmModal';

interface NotificationProviderCardProps {
  provider: NotificationProvider;
  onEdit: (provider: NotificationProvider) => void;
}

const PROVIDER_LABELS: Record<string, string> = {
  callmebot: 'CallMeBot/WhatsApp',
  ntfy: 'ntfy',
  pushover: 'Pushover',
  telegram: 'Telegram',
  email: 'Email',
};

export function NotificationProviderCard({ provider, onEdit }: NotificationProviderCardProps) {
  const queryClient = useQueryClient();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [testResult, setTestResult] = useState<{ success: boolean; message: string } | null>(null);

  // Fetch printers for linking
  const { data: printers } = useQuery({
    queryKey: ['printers'],
    queryFn: api.getPrinters,
  });

  const linkedPrinter = printers?.find(p => p.id === provider.printer_id);

  // Update mutation
  const updateMutation = useMutation({
    mutationFn: (data: NotificationProviderUpdate) => api.updateNotificationProvider(provider.id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notification-providers'] });
    },
  });

  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: () => api.deleteNotificationProvider(provider.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notification-providers'] });
    },
  });

  // Test mutation
  const testMutation = useMutation({
    mutationFn: () => api.testNotificationProvider(provider.id),
    onSuccess: (result) => {
      setTestResult(result);
      queryClient.invalidateQueries({ queryKey: ['notification-providers'] });
    },
    onError: (err: Error) => {
      setTestResult({ success: false, message: err.message });
    },
  });

  // Format time for display
  const formatTime = (time: string | null) => {
    if (!time) return '';
    return time;
  };

  return (
    <>
      <Card className="relative">
        <CardContent className="p-4">
          {/* Header Row */}
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${provider.enabled ? 'bg-bambu-green/20' : 'bg-bambu-dark'}`}>
                <Bell className={`w-5 h-5 ${provider.enabled ? 'text-bambu-green' : 'text-bambu-gray'}`} />
              </div>
              <div>
                <h3 className="font-medium text-white">{provider.name}</h3>
                <p className="text-sm text-bambu-gray">{PROVIDER_LABELS[provider.provider_type] || provider.provider_type}</p>
              </div>
            </div>

            {/* Status indicator */}
            <div className="flex items-center gap-2">
              {provider.last_success && (
                <span className="text-xs text-bambu-green">Last sent: {new Date(provider.last_success).toLocaleDateString()}</span>
              )}
              {provider.last_error && (
                <span className="text-xs text-red-400" title={provider.last_error}>Error</span>
              )}
            </div>
          </div>

          {/* Linked Printer */}
          {linkedPrinter && (
            <div className="mb-3 px-2 py-1.5 bg-bambu-dark rounded-lg">
              <span className="text-xs text-bambu-gray">Printer: </span>
              <span className="text-sm text-white">{linkedPrinter.name}</span>
            </div>
          )}
          {!linkedPrinter && !provider.printer_id && (
            <div className="mb-3 px-2 py-1.5 bg-bambu-dark rounded-lg">
              <span className="text-xs text-bambu-gray">All printers</span>
            </div>
          )}

          {/* Event summary - show all event tags */}
          <div className="mb-3 flex flex-wrap gap-1">
            {provider.on_print_start && (
              <span className="px-2 py-0.5 bg-blue-500/20 text-blue-400 text-xs rounded">Start</span>
            )}
            {provider.on_print_complete && (
              <span className="px-2 py-0.5 bg-bambu-green/20 text-bambu-green text-xs rounded">Complete</span>
            )}
            {provider.on_print_failed && (
              <span className="px-2 py-0.5 bg-red-500/20 text-red-400 text-xs rounded">Failed</span>
            )}
            {provider.on_print_stopped && (
              <span className="px-2 py-0.5 bg-orange-500/20 text-orange-400 text-xs rounded">Stopped</span>
            )}
            {provider.on_print_progress && (
              <span className="px-2 py-0.5 bg-yellow-500/20 text-yellow-400 text-xs rounded">Progress</span>
            )}
            {provider.on_printer_offline && (
              <span className="px-2 py-0.5 bg-gray-500/20 text-gray-400 text-xs rounded">Offline</span>
            )}
            {provider.on_printer_error && (
              <span className="px-2 py-0.5 bg-orange-500/20 text-orange-400 text-xs rounded">Error</span>
            )}
            {provider.on_filament_low && (
              <span className="px-2 py-0.5 bg-amber-500/20 text-amber-400 text-xs rounded">Low Filament</span>
            )}
            {provider.quiet_hours_enabled && (
              <span className="px-2 py-0.5 bg-purple-500/20 text-purple-400 text-xs rounded flex items-center gap-1">
                <Moon className="w-3 h-3" />
                Quiet
              </span>
            )}
          </div>

          {/* Test Button */}
          <div className="mb-3">
            <Button
              size="sm"
              variant="secondary"
              disabled={testMutation.isPending}
              onClick={() => {
                setTestResult(null);
                testMutation.mutate();
              }}
              className="w-full"
            >
              {testMutation.isPending ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
              Send Test Notification
            </Button>
          </div>

          {/* Test Result */}
          {testResult && (
            <div className={`mb-3 p-2 rounded-lg flex items-center gap-2 text-sm ${
              testResult.success
                ? 'bg-bambu-green/20 text-bambu-green'
                : 'bg-red-500/20 text-red-400'
            }`}>
              {testResult.success ? (
                <CheckCircle className="w-4 h-4" />
              ) : (
                <XCircle className="w-4 h-4" />
              )}
              <span>{testResult.message}</span>
            </div>
          )}

          {/* Toggle Settings Panel */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between py-2 text-sm text-bambu-gray hover:text-white transition-colors border-t border-bambu-dark-tertiary"
          >
            <span className="flex items-center gap-2">
              <Settings2 className="w-4 h-4" />
              Event Settings
            </span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>

          {/* Expanded Settings */}
          {isExpanded && (
            <div className="pt-3 border-t border-bambu-dark-tertiary space-y-4">
              {/* Enabled Toggle */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white">Enabled</p>
                  <p className="text-xs text-bambu-gray">Send notifications from this provider</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={provider.enabled}
                    onChange={(e) => updateMutation.mutate({ enabled: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-bambu-dark-tertiary peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-bambu-green"></div>
                </label>
              </div>

              {/* Print Lifecycle Events */}
              <div className="space-y-2">
                <p className="text-xs text-bambu-gray uppercase tracking-wide">Print Events</p>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-white">Print Started</p>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={provider.on_print_start}
                      onChange={(e) => updateMutation.mutate({ on_print_start: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-bambu-dark-tertiary peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-bambu-green"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-white">Print Completed</p>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={provider.on_print_complete}
                      onChange={(e) => updateMutation.mutate({ on_print_complete: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-bambu-dark-tertiary peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-bambu-green"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-white">Print Failed</p>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={provider.on_print_failed}
                      onChange={(e) => updateMutation.mutate({ on_print_failed: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-bambu-dark-tertiary peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-bambu-green"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-white">Print Stopped</p>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={provider.on_print_stopped}
                      onChange={(e) => updateMutation.mutate({ on_print_stopped: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-bambu-dark-tertiary peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-bambu-green"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white">Progress Milestones</p>
                    <p className="text-xs text-bambu-gray">Notify at 25%, 50%, 75%</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={provider.on_print_progress}
                      onChange={(e) => updateMutation.mutate({ on_print_progress: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-bambu-dark-tertiary peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-bambu-green"></div>
                  </label>
                </div>
              </div>

              {/* Printer Status Events */}
              <div className="space-y-2">
                <p className="text-xs text-bambu-gray uppercase tracking-wide">Printer Status</p>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-white">Printer Offline</p>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={provider.on_printer_offline}
                      onChange={(e) => updateMutation.mutate({ on_printer_offline: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-bambu-dark-tertiary peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-bambu-green"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-white">Printer Error</p>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={provider.on_printer_error}
                      onChange={(e) => updateMutation.mutate({ on_printer_error: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-bambu-dark-tertiary peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-bambu-green"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-white">Low Filament</p>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={provider.on_filament_low}
                      onChange={(e) => updateMutation.mutate({ on_filament_low: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-bambu-dark-tertiary peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-bambu-green"></div>
                  </label>
                </div>
              </div>

              {/* Quiet Hours */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Moon className="w-4 h-4 text-purple-400" />
                    <p className="text-sm text-white">Quiet Hours</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={provider.quiet_hours_enabled}
                      onChange={(e) => updateMutation.mutate({ quiet_hours_enabled: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-bambu-dark-tertiary peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-bambu-green"></div>
                  </label>
                </div>

                {provider.quiet_hours_enabled && (
                  <div className="pl-4 border-l-2 border-bambu-dark-tertiary space-y-2">
                    <p className="text-xs text-bambu-gray">No notifications during these hours</p>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-bambu-gray" />
                      <span className="text-sm text-white">
                        {formatTime(provider.quiet_hours_start) || '22:00'} - {formatTime(provider.quiet_hours_end) || '07:00'}
                      </span>
                    </div>
                    <p className="text-xs text-bambu-gray">Edit provider to change quiet hours</p>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-2">
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => onEdit(provider)}
                  className="flex-1"
                >
                  <Edit2 className="w-4 h-4" />
                  Edit
                </Button>
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => setShowDeleteConfirm(true)}
                  className="text-red-400 hover:text-red-300"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Delete Confirmation */}
      {showDeleteConfirm && (
        <ConfirmModal
          title="Delete Notification Provider"
          message={`Are you sure you want to delete "${provider.name}"? This cannot be undone.`}
          confirmText="Delete"
          variant="danger"
          onConfirm={() => {
            deleteMutation.mutate();
            setShowDeleteConfirm(false);
          }}
          onCancel={() => setShowDeleteConfirm(false)}
        />
      )}
    </>
  );
}
