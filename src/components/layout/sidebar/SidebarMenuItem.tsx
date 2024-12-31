import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

type Props = {
  path: string;
  icon: LucideIcon;
  label: string;
  isActive: boolean;
  isCollapsed: boolean;
};

export const SidebarMenuItem = ({ path, icon: Icon, label, isActive, isCollapsed }: Props) => {
  return (
    <Link
      to={path}
      className={`
        flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all text-right
        group relative hover:scale-[1.02]
        ${isActive 
          ? 'bg-primary-50 text-primary-600 font-medium shadow-sm' 
          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
        }
      `}
    >
      <motion.div
        whileHover={{ rotate: 20 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Icon 
          size={20} 
          className={`shrink-0 transition-colors ${isActive ? 'text-primary-500' : ''}`}
        />
      </motion.div>
      
      <motion.span 
        initial={false}
        animate={{ 
          width: isCollapsed ? 0 : 'auto',
          opacity: isCollapsed ? 0 : 1
        }}
        transition={{ duration: 0.2 }}
        className="whitespace-nowrap overflow-hidden"
      >
        {label}
      </motion.span>

      {isCollapsed && (
        <div className="
          absolute right-full mr-2 px-2 py-1 
          bg-gray-900 text-white text-sm
          rounded opacity-0 group-hover:opacity-100 
          transition-opacity whitespace-nowrap
          pointer-events-none z-50
        ">
          {label}
        </div>
      )}
    </Link>
  );
};