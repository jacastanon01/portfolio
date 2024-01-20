import { createClient } from 'next-sanity';

import { config } from './config';

export const client = createClient(config);

//* HOME PAGE *\\
export const fetchSpecificSkills = async <T extends String>(
  skill: T | T[]
) => {
  const fetchedSkills = await client.fetch<any[]>(
    `*[_type == "skills" && name ${
      Array.isArray(skill) && !(skill instanceof String)
        ? `in [${skill.map((skill) => `"${skill}"`).join(', ')}]`
        : `match ${skill.trim()}`
    }]{
      ...,
      "ref": icon.asset._ref
    }`
  );

  if (!fetchedSkills) {
    console.error('Error fetching those skill', fetchedSkills);
    return null;
  }

  return fetchedSkills;
};

//* PROJECT PAGE *\\
export const fetchProjects = async () =>
  await client.fetch<any[]>(`*[_type == "projects"]`);

export const fetchProjectCardInfo = async (projectId: string) => {
  const projectCardInfo = await client.fetch<
    any[]
  >(`*[_id == ${projectId}]{
    name,
    description,
    "img": [_id == imgUrl.assets._ref]->url
  }`);

  if (!projectCardInfo) {
    console.error('Error fetching card info', projectCardInfo);
    return null;
  }
  return projectCardInfo;
};

//* CASE STUDY PAGE *\\
export const fetchProjectDetailsForCaseStudy = async (
  projectId: string
) => {
  const projectInfo = await fetchProjectCardInfo(projectId);
  const caseStudy = await client.fetch<any[]>(``);
};
