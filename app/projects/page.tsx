import Link from 'next/link';
import Image from 'next/image';

import { fetchProjects } from '@/sanity/lib/utils';
import ProjectCard from '@/components/ProjectPage/ProjectCard';

export default async function ProjectPage() {
  const projects = await fetchProjects();

  return (
    <div className='flex-center flex-col'>
      <section className='mb-12 text-center lg:max-w-[800px]'>
        <h1 className='text-gradient text-[64px] font-medium leading-tight -tracking-wider'>
          My projects
        </h1>
        <p className='mt-6 max-w-md font-figtree font-medium leading-normal tracking-tight text-white-500'>
          Click on any case study or check out my
          <Link
            className='hover:text-stroke inline-flex size-fit items-center justify-center gap-1 rounded-lg from-primary-dark to-primary px-2 pl-1 leading-normal tracking-normal shadow-md outline-1 hover:bg-gradient-to-r hover:text-white-800'
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
          </Link>
          to see my recent work
        </p>
      </section>

      <section className='flex min-h-screen w-full flex-col'>
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
