import React from 'react';

import { caseStudyTitles } from '@/constants';

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
  title: string;
  img: string;
  description: string;
}

export interface IProjectDetails extends IProjectCard {
  projectLink: string;
  codeLink: string;
  skills: ISkillIcon[];
}

export interface ICaseStudy {
  project: IProjectDetails;
  summary: string;
  challenges: string;
  result: string;
  challengesTitle?: caseStudyTitles.challenges;
  resultTitle?: caseStudyTitles.result;
  summaryTitle?: caseStudyTitles.summary;
  [key: string]: string;
}
