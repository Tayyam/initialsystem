import { useEffect, useCallback, useRef } from 'react';
import { ref, onValue } from 'firebase/database';
import { realtimeDb } from '../lib/firebase';

export const useDataRefresh = (onRefresh: () => void, delay: number = 5000) => {
  const lastRefreshTime = useRef<number>(Date.now());

  const handleRefresh = useCallback(() => {
    const now = Date.now();
    // Only refresh if enough time has passed since last refresh
    if (now - lastRefreshTime.current >= delay) {
      onRefresh();
      lastRefreshTime.current = now;
    }
  }, [onRefresh, delay]);

  useEffect(() => {
    const refreshRef = ref(realtimeDb, 'refresh_trigger');
    const unsubscribe = onValue(refreshRef, handleRefresh);
    return () => unsubscribe();
  }, [handleRefresh]);
};