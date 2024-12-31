import React, { useState } from 'react';
import { Bell, Search, User, Edit2, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useSidebarState } from '../../hooks/useSidebarState';

export const Header = () => {
  const { isCollapsed } = useSidebarState();
  const [isEditingName, setIsEditingName] = useState(false);
  const [newName, setNewName] = useState(localStorage.getItem('userName') || '');

  const handleSaveName = () => {
    if (newName.trim()) {
      updateUsername(newName.trim());
      setIsEditingName(false);
    }
  };

  return (
    <>
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white/80 backdrop-blur-lg border-b fixed top-0 right-0 left-0 z-20"
        style={{ 
          paddingRight: isCollapsed ? '4rem' : '16rem',
          transition: 'padding-right 300ms'
        }}
      >
        <div className="h-16 flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
            >
              <Bell size={20} className="text-gray-600" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </motion.button>
            <div className="relative">
              <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="بحث..."
                className="bg-gray-50/50 border border-gray-200 rounded-lg py-2 pr-10 pl-4 w-64 
                         text-right focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                         transition-all hover:bg-gray-50"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            {isEditingName ? (
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="border rounded px-2 py-1 text-sm text-right focus:ring-2 focus:ring-primary-500"
                  placeholder="اسم المستخدم"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleSaveName}
                  className="p-1 hover:bg-green-50 rounded-full text-green-600 transition-colors"
                >
                  <Check size={16} />
                </motion.button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsEditingName(true)}
                  className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <Edit2 size={16} className="text-gray-600" />
                </motion.button>
                <span className="text-sm text-gray-700">{newName}</span>
              </div>
            )}
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <User size={20} className="text-gray-600" />
            </motion.button>
          </div>
        </div>
      </motion.header>
      <div className="h-16"></div>
    </>
  );
};