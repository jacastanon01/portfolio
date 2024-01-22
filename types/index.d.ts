import React from 'react';

export type ModeType = 'light' | 'dark';
export interface IThemeContext {
  mode: ModeType;
  setMode: React.Dispatch<React.SetStateAction<ModeType>>;
}

export interface ISkillIcon {
  name: string;
  bgColor: string;
  url: string;
}

export interface IProjectCard {
  name: string;
  img: string;
  description: string;
}
