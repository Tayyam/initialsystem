import React from 'react';
import { AlertTriangle, AlertCircle, HelpCircle, Info } from 'lucide-react';
import { Modal } from './Modal';

type ConfirmType = 'danger' | 'warning' | 'info' | 'question';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  type?: ConfirmType;
  confirmText?: string;
  cancelText?: string;
};

const typeConfig = {
  danger: {
    icon: AlertCircle,
    iconColor: 'text-red-500',
    buttonColor: 'bg-red-500 hover:bg-red-600',
  },
  warning: {
    icon: AlertTriangle,
    iconColor: 'text-yellow-500',
    buttonColor: 'bg-yellow-500 hover:bg-yellow-600',
  },
  info: {
    icon: Info,
    iconColor: 'text-blue-500',
    buttonColor: 'bg-blue-500 hover:bg-blue-600',
  },
  question: {
    icon: HelpCircle,
    iconColor: 'text-primary-500',
    buttonColor: 'bg-primary-500 hover:bg-primary-600',
  },
};

export const ConfirmDialog = ({ 
  isOpen, 
  onClose, 
  onConfirm, 
  title, 
  message, 
  type = 'question',
  confirmText = 'نعم',
  cancelText = 'إلغاء'
}: Props) => {
  const config = typeConfig[type];
  const Icon = config.icon;

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="" width="400px">
      <div className="text-center">
        <div className={`mx-auto w-12 h-12 rounded-full ${config.iconColor} mb-4 
                        flex items-center justify-center`}>
          <Icon size={24} />
        </div>
        
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-6">{message}</p>

        <div className="flex justify-center gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 
                     hover:bg-gray-50 transition-colors"
          >
            {cancelText}
          </button>
          <button
            onClick={handleConfirm}
            className={`px-4 py-2 rounded-lg text-white transition-colors ${config.buttonColor}`}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </Modal>
  );
};