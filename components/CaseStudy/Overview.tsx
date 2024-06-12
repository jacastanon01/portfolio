import Image from 'next/image';

import { IProjectDetails } from '@/types';

import StackIconsList from '../shared/StackIconsList';
import ProjectLinks from './ProjectLinks.';

const Overview = ({ project }: { project: IProjectDetails }) => {
  return (
    <section className='flex flex-col space-y-6 xl:flex-row xl:space-x-3'>
      <div className='flex flex-col justify-evenly space-y-6 max-xl:items-center'>
        <h1 className='h1-bold text-gradient text-[64px] uppercase'>
          {project.title}
        </h1>
        <div>
          <p className='mt-[-15px] font-figtree text-white-500 xl:mt-[-35px]'>
            {project.description}
          </p>
        </div>
        <div className='flex flex-wrap gap-8'>
          <StackIconsList skills={project.skills} />
        </div>
        <ProjectLinks project={project} />
      </div>

      <div className='relative h-80 w-full xl:h-96'>
        <Image
          src={project.img}
          alt={project.title}
          className='object-contain'
          fill
        />
      </div>
    </section>
  );
};

export default Overview;
