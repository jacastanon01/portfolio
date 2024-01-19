import React from 'react';

export type ModeType = 'light' | 'dark';
export interface IThemeContext {
  mode: ModeType;
  setMode: React.Dispatch<React.SetStateAction<ModeType>>;
}
