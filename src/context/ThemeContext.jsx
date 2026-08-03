/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

import { getItem, setItem } from '@/utils/storage';
import { STORAGE_KEYS } from '@/utils/constants';

const ThemeContext = createContext(null);

/**
 * Theme context (light/dark). Applies a `data-theme` attribute on <html>.
 */
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() =>
    getItem(STORAGE_KEYS.theme, 'light'),
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    setItem(STORAGE_KEYS.theme, theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme: () => setTheme((t) => (t === 'light' ? 'dark' : 'light')),
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
