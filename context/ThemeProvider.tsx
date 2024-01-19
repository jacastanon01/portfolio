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
  defaultTheme,
}: {
  children: React.ReactNode;
  defaultTheme: string;
}) => {
  const [mode, setMode] = useState<ModeType>(
    defaultTheme as ModeType
  );

  const themeCookie = getCookie('theme');

  useEffect(() => {
    function handleThemeChange() {
      if (themeCookie === 'dark') {
        setMode('dark');
        document.documentElement.classList.add('dark');
      } else {
        setMode('light');
        document.documentElement.classList.remove('dark');
      }
    }

    handleThemeChange();
  }, [mode, themeCookie]);

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
