'use client';

import { getCookie } from 'cookies-next';
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';

import { IThemeContext, ModeType } from '@/types';

const ThemeContext = createContext<IThemeContext | undefined>(
  undefined
);

export const ThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [mode, setMode] = useState<ModeType>('light');

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
