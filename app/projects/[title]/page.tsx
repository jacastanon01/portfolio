import DetailsGrid from '@/components/CaseStudy/DetailsGrid';
import Overview from '@/components/CaseStudy/Overview';
import { fetchCaseStudyByProject } from '@/sanity/lib/utils';

export const revalidate = 0;

export default async function CaseStudyPage({
  params: { title },
}: {
  params: { title: string };
}) {
  const decodedTitle = decodeURIComponent(title);
  const caseStudy = await fetchCaseStudyByProject(decodedTitle);

  if (!caseStudy) return null;
  const { project } = caseStudy;
  return (
    <div className='flex min-h-screen flex-col justify-between gap-8 md:gap-14 lg:px-24'>
      <Overview project={project} />
      <DetailsGrid caseStudy={caseStudy} />
    </div>
  );
}
