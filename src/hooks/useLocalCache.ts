// src/hooks/useLocalCache.ts
import { useState, useEffect } from 'react';

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

type CacheItem<T> = {
  data: T;
  timestamp: number;
};

export function useLocalCache<T>(
  key: string,
  duration: number = CACHE_DURATION
) {
  const [cache, setCache] = useState<CacheItem<T> | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(key);
    if (stored) {
      const item: CacheItem<T> = JSON.parse(stored);
      if (Date.now() - item.timestamp < duration) {
        setCache(item);
      } else {
        localStorage.removeItem(key);
      }
    }
  }, [key]);

  const updateCache = (data: T) => {
    const item: CacheItem<T> = {
      data,
      timestamp: Date.now(),
    };
    localStorage.setItem(key, JSON.stringify(item));
    setCache(item);
  };

  return {
    data: cache?.data,
    updateCache,
    isValid: cache !== null && Date.now() - cache.timestamp < duration,
  };
}
