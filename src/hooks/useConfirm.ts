import { useState } from 'react';

export const useConfirm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [config, setConfig] = useState<{
    title: string;
    message: string;
    onConfirm: () => void;
    type?: 'danger' | 'warning' | 'info' | 'question';
  } | null>(null);

  const confirm = (options: {
    title: string;
    message: string;
    onConfirm: () => void;
    type?: 'danger' | 'warning' | 'info' | 'question';
  }) => {
    setConfig(options);
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
    setConfig(null);
  };

  return {
    isOpen,
    config,
    confirm,
    close
  };
};