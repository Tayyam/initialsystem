import React from 'react';

type Props = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  suffix?: string;
  min?: number;
  required?: boolean;
};

export const NumberInput = ({ 
  label, 
  value, 
  onChange, 
  suffix,
  min = 0, 
  required = false 
}: Props) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 text-right mb-1">
        {label}
        {required && <span className="text-red-500 mr-1">*</span>}
      </label>
      <div className="flex items-center gap-2">
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full p-3 border rounded-lg text-right focus:ring-2 focus:ring-primary-500"
          min={min}
          step="0.01"
          required={required}
        />
        {suffix && (
          <span className="text-gray-600">{suffix}</span>
        )}
      </div>
    </div>
  );
};