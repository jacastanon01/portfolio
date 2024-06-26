import Image from 'next/image';
import Link from 'next/link';

import ProjectCard from '@/components/ProjectPage/ProjectCard';
import { fetchProjects } from '@/sanity/lib/utils';

export const revalidate = 0;

export default async function ProjectPage() {
  const projects = await fetchProjects();

  return (
    <div className='flex-center flex-col'>
      <section className='mb-12 text-center lg:max-w-[800px]'>
        <h1 className='text-gradient text-[64px] font-medium leading-tight -tracking-wider'>
          My projects
        </h1>
        <p className='mt-6 max-w-md font-figtree font-medium leading-normal tracking-tight text-white-500'>
          As a continuous learner, I am always look for ways to
          improve and enhance my skills. Click on any case study or
          check out my{' '}
          <Link
            className='hover:text-stroke inline-flex size-fit items-center justify-center gap-1 rounded-lg from-primary-dark to-primary pl-1 leading-normal tracking-normal shadow-md outline-1 hover:bg-gradient-to-r hover:text-white-800'
            href='https://github.com/jacastanon01'
            target='_blank'
          >
            github
            <span className='relative size-4'>
              <Image
                src={'/assets/github.svg'}
                alt={'github'}
                fill
                className={`rounded-lg bg-white-800 shadow-lg dark:shadow-sm dark:shadow-white-500`}
              />
            </span>
          </Link>{' '}
          to see my recent work and let me know what you think!
        </p>
      </section>

      <section className='flex w-full flex-col '>
        {projects.map((project, i) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={i}
          />
        ))}
      </section>
    </div>
  );
}
