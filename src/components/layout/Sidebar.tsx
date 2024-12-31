import React from 'react';
import { useSidebarState } from '../../hooks/useSidebarState';
import { SidebarLogo } from './sidebar/SidebarLogo';
import { SidebarToggle } from './sidebar/SidebarToggle';
import { SidebarNav } from './sidebar/SidebarNav';
import { motion } from 'framer-motion';

export const Sidebar = () => {
  const { isCollapsed } = useSidebarState();

  return (
    <motion.aside 
      initial={{ x: 300 }}
      animate={{ 
        width: isCollapsed ? 80 : 280,
        x: 0
      }}
      transition={{ 
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.8
      }}
      className={`
        fixed right-0 top-0 h-screen 
        bg-white/90 backdrop-blur-md
        border-l shadow-lg
        py-6 z-30 overflow-hidden
      `}
    >
      <SidebarToggle />
      <SidebarLogo />
      <SidebarNav />
    </motion.aside>
  );
};