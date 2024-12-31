// src/hooks/useSidebarState.ts
import { create } from 'zustand';

type SidebarState = {
  isCollapsed: boolean;
  width: number;
  toggle: () => void;
};

export const useSidebarState = create<SidebarState>((set) => ({
  isCollapsed: false,
  width: 280, // Default expanded width
  toggle: () => set((state) => ({ 
    isCollapsed: !state.isCollapsed,
    width: state.isCollapsed ? 280 : 80
  })),
}));
