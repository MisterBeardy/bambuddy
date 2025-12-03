import { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../../api/client';
import type { Printer, PrinterStatus } from '../../api/client';
import { X, Loader2, AlertTriangle, ChevronDown } from 'lucide-react';
import { Card, CardContent } from '../Card';

interface PrintOptionsModalProps {
  printer: Printer;
  status: PrinterStatus | null | undefined;
  onClose: () => void;
}

// Checkbox component matching Bambu Studio style
function Checkbox({
  checked,
  onChange,
  disabled,
  loading,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  loading?: boolean;
}) {
  return (
    <button
      onClick={() => !disabled && !loading && onChange(!checked)}
      disabled={disabled || loading}
      className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
        checked
          ? 'bg-bambu-green border-bambu-green'
          : 'bg-transparent border-bambu-gray'
      } ${disabled || loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
    >
      {loading ? (
        <Loader2 className="w-3 h-3 animate-spin text-white" />
      ) : checked ? (
        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      ) : null}
    </button>
  );
}

// Sensitivity dropdown component
function SensitivityDropdown({
  value,
  onChange,
  disabled,
  loading,
}: {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  loading?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const options = ['Low', 'Medium', 'High'];

  const displayValue = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  const isDisabled = disabled || loading;

  return (
    <div className="relative">
      <button
        onClick={() => !isDisabled && setIsOpen(!isOpen)}
        disabled={isDisabled}
        className={`flex items-center gap-2 px-3 py-1.5 bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded text-sm text-white min-w-[100px] justify-between ${
          isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:border-bambu-gray'
        }`}
      >
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin text-bambu-green" />
        ) : (
          <span>{displayValue}</span>
        )}
        <ChevronDown className="w-4 h-4 text-bambu-gray" />
      </button>
      {isOpen && !isDisabled && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
          <div className="absolute top-full left-0 mt-1 w-full bg-bambu-dark-secondary border border-bambu-dark-tertiary rounded shadow-lg z-20">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => {
                  onChange(option.toLowerCase());
                  setIsOpen(false);
                }}
                className={`w-full px-3 py-2 text-left text-sm hover:bg-bambu-dark-tertiary ${
                  value.toLowerCase() === option.toLowerCase() ? 'text-bambu-green' : 'text-white'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export function PrintOptionsModal({ printer, status, onClose }: PrintOptionsModalProps) {
  const queryClient = useQueryClient();
  const printOptions = status?.print_options;
  const isConnected = status?.connected ?? false;

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Set print option mutation - track both UI and API module names
  const setOptionMutation = useMutation({
    mutationFn: ({
      apiModuleName,
      enabled,
      printHalt,
      sensitivity,
    }: {
      uiModuleName: string;  // The module name from the UI (for loading state) - accessed via variables
      apiModuleName: string; // The module name sent to API (may differ due to firmware quirk)
      enabled: boolean;
      printHalt?: boolean;
      sensitivity?: string;
    }) => api.setPrintOption(printer.id, apiModuleName, enabled, printHalt, sensitivity),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['printerStatuses'] });
    },
  });

  const handleToggle = (moduleName: string, enabled: boolean, sensitivity?: string) => {
    const printHalt = enabled && sensitivity !== undefined && sensitivity !== 'never_halt';
    setOptionMutation.mutate({
      uiModuleName: moduleName,
      apiModuleName: moduleName,
      enabled,
      printHalt,
      sensitivity: sensitivity ?? 'medium'
    });
  };

  const handleSensitivityChange = (moduleName: string, sensitivity: string) => {
    // Spaghetti and Pileup sensitivities are linked in firmware
    // For pileup, we send spaghetti_detector to set the shared sensitivity
    // All other detectors use their own module name
    let apiModuleName = moduleName;
    if (moduleName === 'pileup_detector') {
      // Pileup sensitivity is linked to spaghetti - use spaghetti_detector
      apiModuleName = 'spaghetti_detector';
    }

    setOptionMutation.mutate({
      uiModuleName: moduleName,
      apiModuleName,
      enabled: true,
      printHalt: true,
      sensitivity
    });
  };

  // Check loading state using the UI module name (not API module name)
  const isToggling = (moduleName: string) =>
    setOptionMutation.isPending && setOptionMutation.variables?.uiModuleName === moduleName;

  // Check if sensitivity is being changed for a specific detector
  // This also returns true for linked detectors (e.g., spaghetti loading shows for pileup too)
  const isSensitivityLoading = (moduleName: string) => {
    if (!setOptionMutation.isPending || !setOptionMutation.variables?.sensitivity) return false;
    const uiModule = setOptionMutation.variables.uiModuleName;
    // Direct match
    if (uiModule === moduleName) return true;
    // Linked: spaghetti and pileup share sensitivity
    if ((uiModule === 'spaghetti_detector' && moduleName === 'pileup_detector') ||
        (uiModule === 'pileup_detector' && moduleName === 'spaghetti_detector')) return true;
    return false;
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <Card className="w-full max-w-xl max-h-[90vh] flex flex-col" onClick={(e: React.MouseEvent) => e.stopPropagation()}>
        <CardContent className="p-0 flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-bambu-dark-tertiary">
            <span className="text-sm font-medium text-white">Print Options</span>
            <button
              onClick={onClose}
              className="p-1 rounded hover:bg-bambu-dark-tertiary text-bambu-gray hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Content - Scrollable */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {!isConnected && (
              <div className="flex items-center gap-2 p-3 bg-red-500/20 border border-red-500/50 rounded text-red-400">
                <AlertTriangle className="w-4 h-4" />
                <span className="text-sm">Printer not connected. Options cannot be changed.</span>
              </div>
            )}

            {!printOptions ? (
              <div className="flex items-center gap-2 text-bambu-gray">
                <AlertTriangle className="w-4 h-4" />
                <span className="text-sm">Print options not available. Try refreshing.</span>
              </div>
            ) : (
              <>
                {/* AI Detections Section */}
                <div>
                  <h3 className="text-base font-semibold text-white mb-1">AI Detections</h3>
                  <p className="text-xs text-bambu-gray mb-4">
                    Printer will send assistant message or pause printing if any of the following problem is detected.
                  </p>
                  <div className="space-y-5">
                    {/* Spaghetti Detection */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Checkbox
                          checked={printOptions.spaghetti_detector}
                          onChange={(checked) => handleToggle('spaghetti_detector', checked, printOptions.halt_print_sensitivity)}
                          disabled={!isConnected}
                          loading={isToggling('spaghetti_detector')}
                        />
                        <span className="text-sm font-medium text-white">Spaghetti Detection</span>
                      </div>
                      <p className="text-xs text-bambu-gray ml-8">
                        Detects spaghetti failure (scattered loose filament).
                      </p>
                      <div className="flex items-center gap-3 ml-8">
                        <span className="text-xs text-bambu-gray">Pausing Sensitivity:</span>
                        <SensitivityDropdown
                          value={printOptions.halt_print_sensitivity || 'medium'}
                          onChange={(value) => handleSensitivityChange('spaghetti_detector', value)}
                          disabled={!isConnected || !printOptions.spaghetti_detector}
                          loading={isSensitivityLoading('spaghetti_detector')}
                        />
                      </div>
                    </div>

                    {/* Purge Chute Pile-Up Detection */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Checkbox
                          checked={printOptions.pileup_detector}
                          onChange={(checked) => handleToggle('pileup_detector', checked, printOptions.pileup_sensitivity)}
                          disabled={!isConnected}
                          loading={isToggling('pileup_detector')}
                        />
                        <span className="text-sm font-medium text-white">Purge Chute Pile-Up Detection</span>
                      </div>
                      <p className="text-xs text-bambu-gray ml-8">
                        Monitors if the waste is piled up in the purge chute.
                      </p>
                      <div className="flex items-center gap-3 ml-8">
                        <span className="text-xs text-bambu-gray">Pausing Sensitivity:</span>
                        <SensitivityDropdown
                          value={printOptions.pileup_sensitivity || 'medium'}
                          onChange={(value) => handleSensitivityChange('pileup_detector', value)}
                          disabled={!isConnected || !printOptions.pileup_detector}
                          loading={isSensitivityLoading('pileup_detector')}
                        />
                      </div>
                    </div>

                    {/* Nozzle Clumping Detection */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Checkbox
                          checked={printOptions.nozzle_clumping_detector}
                          onChange={(checked) => handleToggle('clump_detector', checked, printOptions.nozzle_clumping_sensitivity)}
                          disabled={!isConnected}
                          loading={isToggling('clump_detector')}
                        />
                        <span className="text-sm font-medium text-white">Nozzle Clumping Detection</span>
                      </div>
                      <p className="text-xs text-bambu-gray ml-8">
                        Checks if the nozzle is clumping by filaments or other foreign objects.
                      </p>
                      <div className="flex items-center gap-3 ml-8">
                        <span className="text-xs text-bambu-gray">Pausing Sensitivity:</span>
                        <SensitivityDropdown
                          value={printOptions.nozzle_clumping_sensitivity || 'medium'}
                          onChange={(value) => handleSensitivityChange('clump_detector', value)}
                          disabled={!isConnected || !printOptions.nozzle_clumping_detector}
                          loading={isSensitivityLoading('clump_detector')}
                        />
                      </div>
                    </div>

                    {/* Air Printing Detection */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Checkbox
                          checked={printOptions.airprint_detector}
                          onChange={(checked) => handleToggle('airprint_detector', checked, printOptions.airprint_sensitivity)}
                          disabled={!isConnected}
                          loading={isToggling('airprint_detector')}
                        />
                        <span className="text-sm font-medium text-white">Air Printing Detection</span>
                      </div>
                      <p className="text-xs text-bambu-gray ml-8">
                        Detects air printing caused by nozzle clogging or filament grinding.
                      </p>
                      <div className="flex items-center gap-3 ml-8">
                        <span className="text-xs text-bambu-gray">Pausing Sensitivity:</span>
                        <SensitivityDropdown
                          value={printOptions.airprint_sensitivity || 'medium'}
                          onChange={(value) => handleSensitivityChange('airprint_detector', value)}
                          disabled={!isConnected || !printOptions.airprint_detector}
                          loading={isSensitivityLoading('airprint_detector')}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="border-bambu-dark-tertiary" />

                {/* Build Plate Detection Section */}
                <div>
                  <h3 className="text-base font-semibold text-white mb-1">Build Plate Detection</h3>
                  <p className="text-xs text-bambu-gray mb-4">
                    Ensures the build plate type and placement are correct.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Checkbox
                        checked={printOptions.buildplate_marker_detector}
                        onChange={(checked) => handleToggle('buildplate_marker_detector', checked)}
                        disabled={!isConnected}
                        loading={isToggling('buildplate_marker_detector')}
                      />
                      <span className="text-sm font-medium text-white">Type Detection</span>
                    </div>
                    <p className="text-xs text-bambu-gray ml-8">
                      Pauses printing when the detected build plate type does not match the selected one.
                    </p>
                  </div>
                </div>

                <hr className="border-bambu-dark-tertiary" />

                {/* Other Options */}
                <div className="space-y-5">
                  {/* Auto-recover from step loss */}
                  <div className="flex items-center gap-3">
                    <Checkbox
                      checked={printOptions.auto_recovery_step_loss}
                      onChange={(checked) => handleToggle('auto_recovery_step_loss', checked)}
                      disabled={!isConnected}
                      loading={isToggling('auto_recovery_step_loss')}
                    />
                    <span className="text-sm font-medium text-white">Auto-recover from step loss</span>
                  </div>

                  {/* Store Sent Files on External Storage - Read-only (no MQTT command available) */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Checkbox
                        checked={status?.store_to_sdcard ?? false}
                        onChange={() => {}}
                        disabled={true}
                      />
                      <span className="text-sm font-medium text-white">Store Sent Files on External Storage</span>
                      <span className="text-xs text-bambu-gray italic">(read-only)</span>
                    </div>
                    <p className="text-xs text-bambu-gray ml-8">
                      Save the printing files initiated from Bambu Studio, Bambu Handy and MakerWorld on External Storage.
                      This option can only be changed on the printer's touchscreen.
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>

        </CardContent>
      </Card>
    </div>
  );
}
