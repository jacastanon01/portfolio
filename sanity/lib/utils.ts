import { createClient } from 'next-sanity';

import { IProjectCard, ISkillIcon } from '@/types';

import { config } from './config';

export const client = createClient(config);

export const fetchResumeFromPersonalInfo = async () => {
  const fetchedResume = await client.fetch<{ url: string }>(
    `*[_type == 'personalInfo'][0]{
      "url": resume.asset->url
    }`
  );

  if (!fetchedResume) {
    throw Error('Error fetching resume', fetchedResume);
  }

  return fetchedResume;
};

//* HOME PAGE *\\
export const fetchMainSkillsForHomePage = async () => {
  const fetchedSkills = await client.fetch<ISkillIcon[]>(
    `*[ _type == "skills" && isMain == true]{
      name, bgColor, "url": icon.asset->url 
    }`
  );

  if (!fetchedSkills) {
    throw Error('Error fetching skills', fetchedSkills);
  }

  return fetchedSkills;
};

//* PROJECT PAGE *\\
export const fetchProjects = async () =>
  await client.fetch<
    (IProjectCard & { skills: ISkillIcon[] })[]
  >(`*[_type == "projects"] | order(_createdAt asc) {
    title,
    description,
    "img": imgUrl.asset->url,
    skills[]->{
      name,    
      bgColor,
      "url": icon.asset->url
    },
  }`);

export const fetchProjectCardInfo = async (projectId: string) => {
  const projectCardInfo = await client.fetch<
    IProjectCard[]
  >(`*[_id == ${projectId}]{
    name,
    description,
    "img": [_id == imgUrl.assets._ref]->url
  }`);

  if (!projectCardInfo) {
    throw Error('Error fetching card info', projectCardInfo);
  }
  return projectCardInfo;
};

//* CASE STUDY PAGE *\\
