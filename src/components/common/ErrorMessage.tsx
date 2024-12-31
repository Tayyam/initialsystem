import React from 'react';
import { AlertCircle } from 'lucide-react';

type Props = {
  message: string;
  onRetry?: () => void;
};

export const ErrorMessage = ({ message, onRetry }: Props) => {
  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center justify-between">
      <div className="flex items-center gap-2 text-red-700">
        <AlertCircle size={20} />
        <span>{message}</span>
      </div>
      {onRetry && (
        <button
          onClick={onRetry}
          className="text-red-600 hover:text-red-700 font-medium"
        >
          إعادة المحاولة
        </button>
      )}
    </div>
  );
};