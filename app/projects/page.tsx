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
        <h1 className='text-gradient text-[64px] font-medium leading-tight -tracking-wider'>
          My projects
        </h1>
        <p className='mt-6 font-figtree leading-normal tracking-tight text-white-500'>
          Click on any case study or check out my github{' '}
          <Link
            className='relative size-20'
            href='https://github.com/jacastanon01'
            target='_blank'
          >
            <SkillIcon className='object-contain' icon={githubLogo} />
            Here
          </Link>
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
