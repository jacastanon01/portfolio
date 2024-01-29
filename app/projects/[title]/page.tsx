import { fetchCaseStudyByProject } from '@/sanity/lib/utils';
import DetailsGrid from '@/components/CaseStudy/DetailsGrid';
import Overview from '@/components/CaseStudy/Overview';

export const revalidate = 0;

export default async function CaseStudyPage({
  params: { title },
}: {
  params: { title: string };
}) {
  const caseStudy = await fetchCaseStudyByProject(title);
  if (!caseStudy) return null;
  const { project } = caseStudy;
  return (
    <div className='flex min-h-screen flex-col justify-between gap-8 md:gap-14 lg:px-24'>
      <Overview project={project} />
      <DetailsGrid caseStudy={caseStudy} />
    </div>
  );
}
