import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSidebarState } from '../../../hooks/useSidebarState';
import { SidebarMenuItem } from './SidebarMenuItem';
import { menuItems, menuGroups } from './menuItems';
import { motion } from 'framer-motion';

export const SidebarNav = () => {
  const location = useLocation();
  const { isCollapsed } = useSidebarState();

  // Group menu items by category
  const groupedItems = Object.entries(menuGroups).map(([key, label]) => ({
    key,
    label,
    items: menuItems.filter(item => item.group === key)
  }));

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: 20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <motion.nav 
      variants={container}
      initial="hidden"
      animate="show"
      className="px-3 overflow-y-auto max-h-[calc(100vh-8rem)] scrollbar-thin scrollbar-thumb-gray-200 hover:scrollbar-thumb-gray-300"
    >
      <div className="space-y-6">
        {groupedItems.map(({ key, label, items }) => (
          <div key={key}>
            {!isCollapsed && (
              <motion.div 
                variants={item}
                className="text-xs font-medium text-gray-400 px-4 mb-2"
              >
                {label}
              </motion.div>
            )}
            <motion.div variants={item} className="space-y-1">
              {items.map((item) => (
                <SidebarMenuItem
                  key={item.path}
                  {...item}
                  isActive={location.pathname === item.path}
                  isCollapsed={isCollapsed}
                />
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </motion.nav>
  );
};