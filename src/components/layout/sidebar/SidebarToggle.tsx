// src/components/layout/sidebar/SidebarToggle.tsx
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSidebarState } from '../../../hooks/useSidebarState';
import { motion } from 'framer-motion';

export const SidebarToggle = () => {
  const { isCollapsed, toggle } = useSidebarState();

  return (
    <motion.button
      onClick={toggle}
      whileHover={{ scale: 1.1, x: isCollapsed ? -2 : 2 }}
      whileTap={{ scale: 0.95 }}
      className="absolute -left-4 top-8 bg-white border rounded-full p-2.5 
                shadow-lg hover:shadow-xl cursor-pointer z-50
                hover:bg-primary-50 hover:border-primary-100
                transition-all duration-200 ease-in-out"
      style={{
        transform: `translateX(${isCollapsed ? '0px' : '0px'})`,
      }}
      title={isCollapsed ? 'توسيع' : 'طي'}
    >
      <div className="flex items-center justify-center w-5 h-5">
        {isCollapsed ? (
          <ChevronLeft className="text-primary-500" size={20} />
        ) : (
          <ChevronRight className="text-primary-500" size={20} />
        )}
      </div>
    </motion.button>
  );
};
