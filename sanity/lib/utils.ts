import { createClient } from 'next-sanity';

import { ICaseStudy, IProjectCard, ISkillIcon } from '@/types';
import { caseStudyTitles } from '@/constants';

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
export const fetchCaseStudyByProject = async (name: string) => {
  const project =
    await client.fetch<ICaseStudy>(`*[_type == 'caseStudies' && defined(project) && project->_type == 'projects' && project->name == ${name}][0]{
    project->{
      title,
      description,
      "img": imgUrl.asset->url,
      codeLink,
      projectLink
    },
    summary,
    challenges,
    result,
    "summaryTitle": '${caseStudyTitles.summary}',
    "challengesTitle": '${caseStudyTitles.challenges}',
    "resultTitle": '${caseStudyTitles.result}',
  }`);

  if (!project)
    console.error('Error fetching project by name', project);

  return project;
};
