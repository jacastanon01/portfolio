'use client';

import { setCookie } from 'cookies-next';

import { useTheme } from '@/context/ThemeProvider';
import { ModeType } from '@/types';

import MoonIcon from './MoonIcon';
import SunIcon from './SunIcon';

const ThemeSwitch = () => {
  const { mode, setMode } = useTheme();

  const setTheme = (theme: ModeType) => {
    setCookie('theme', theme);
    setMode(theme);
  };
  return (
    <div
      aria-roledescription='Theme switch button'
      onClick={() => setTheme(mode === 'light' ? 'dark' : 'light')}
      className='hover:cursor-pointer'
    >
      {mode === 'dark' ? (
        <SunIcon key='light' />
      ) : (
        <MoonIcon key='dark' />
      )}
    </div>
  );
};

export default ThemeSwitch;
