import { createClient } from 'next-sanity';

import { IProjectCard, ISkillIcon } from '@/types';

import { config } from './config';

export const client = createClient(config);

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
  await client.fetch(`*[_type == "projects"]{
    name,
    description,
    "img": imgUrl.asset->url,
    skills[]->{
      name,    
      bgColor,
      "url": icon.asset.->url
    }
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
