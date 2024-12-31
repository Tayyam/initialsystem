// src/components/common/Modal.tsx
import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom'; // Add this import
import { X } from 'lucide-react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  width?: string;
};

export const Modal = ({ isOpen, onClose, title, children, width = "400px" }: Props) => {
  if (!isOpen) return null;

  // Use createPortal to render the modal outside the table structure
  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className={`bg-white rounded-lg p-6 relative`} style={{ width }}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>
        <h2 className="text-2xl font-bold mb-6 text-right">{title}</h2>
        {children}
      </div>
    </div>,
    document.body // Mount modal directly to body
  );
};
