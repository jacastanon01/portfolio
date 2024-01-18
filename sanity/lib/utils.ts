import client from './sanity';
import getImage from './getImage';

//* PROJECT PAGE *\\
export const fetchProjects = await client.fetch<any[]>(
  `*[_type == "projects"]`
);

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
