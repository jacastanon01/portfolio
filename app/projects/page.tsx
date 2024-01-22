import Link from 'next/link';

import { fetchProjects } from '@/sanity/lib/utils';
import SkillIcon from '@/components/shared/SkillIcon';
import ProjectCard from '@/components/ProjectPage/ProjectCard';

export default async function ProjectPage() {
  const projects = await fetchProjects();
  const githubLogo = projects[0].skills.filter(
    (skill) => skill.name === 'Github'
  )[0];
  return (
    <div className='flex-center flex-col gap-12'>
      <section className='mb-12 lg:max-w-[800px]'>
        <h1 className='text-gradient text-4xl font-medium leading-tight -tracking-wider sm:text-[64px]'>
          My projects
        </h1>
        <p className='mt-6 max-w-md font-figtree font-medium leading-normal tracking-tight text-white-500'>
          Click on any case study or check out my
          <Link
            className='hover:text-stroke inline-flex size-fit items-center gap-1 rounded-lg from-primary-dark to-primary px-2 pl-1 leading-normal tracking-normal shadow-md outline-1 hover:bg-gradient-to-r hover:text-white-800'
            href='https://github.com/jacastanon01'
            target='_blank'
          >
            github
            <span className='relative size-4'>
              <SkillIcon
                className='object-contain'
                icon={githubLogo}
              />
            </span>
          </Link>{' '}
          to see my recent work
        </p>
      </section>

      <section className='grid min-h-screen min-w-96 gap-16 md:grid-cols-2'>
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
