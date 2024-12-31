import React from 'react';
import { useSidebarState } from '../../../hooks/useSidebarState';
import { motion } from 'framer-motion';

export const SidebarLogo = () => {
  const { isCollapsed } = useSidebarState();

  return (
    <motion.div 
      className="flex justify-center mb-8"
      animate={{ opacity: isCollapsed ? 0 : 1 }}
      transition={{ duration: 0.2 }}
    >
      <img 
        src="https://ithraa.group/wp-content/uploads/2024/11/%D8%A5%D8%AB%D8%B1%D8%A7%D8%A1-%D8%A7%D9%84%D8%AE%D9%8A%D8%B1%D9%A1-1959x2048.png"
        alt="إثراء الخير"
        className={`h-16 transition-all duration-300 ${isCollapsed ? 'scale-0' : 'scale-100'}`}
      />
    </motion.div>
  );
};