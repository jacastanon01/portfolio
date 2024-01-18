'use client';

import { getCookie } from 'cookies-next';
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [mode, setMode] = useState<'light' | 'dark'>();

  const themeCookie = getCookie('theme');

  function handleThemeChange() {
    if (themeCookie === 'dark') {
      setMode('light');
      document.documentElement.classList.remove('dark');
    } else {
      setMode('dark');
      document.documentElement.classList.add('dark');
    }
  }

  useEffect(() => {
    handleThemeChange();
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) throw Error('Error accessing theme context');

  return context;
};
