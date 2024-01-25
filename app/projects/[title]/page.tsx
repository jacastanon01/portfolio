import Image from 'next/image';

import { fetchCaseStudyByProject } from '@/sanity/lib/utils';
import DetailsGrid from '@/components/CaseStudy/DetailsGrid';

export const revalidate = 0;

export default async function CaseStudyPage({
  params: { title },
}: {
  params: { title: string };
}) {
  const caseStudy = await fetchCaseStudyByProject(title);
  const { project } = caseStudy;
  return (
    <div className='flex min-h-screen flex-col justify-between gap-8 md:gap-14 lg:px-24'>
      <section className='mx-auto'>
        <h1 className='h1-bold text-gradient mb-4 w-full text-center text-[64px] uppercase'>
          {project.title}
        </h1>
        <p className='font-figtree dark:text-white-500 lg:px-12'>
          {project.description}
        </p>
      </section>
      <section className='relative h-80 w-full lg:h-96'>
        <Image
          src={project.img}
          alt={project.title}
          className='object-cover'
          fill
        />
      </section>

      <DetailsGrid caseStudy={caseStudy} />
    </div>
  );
}
