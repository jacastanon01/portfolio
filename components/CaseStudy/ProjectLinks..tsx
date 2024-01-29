import Link from 'next/link';

import { IProjectDetails } from '@/types';

const ProjectLinks = ({ project }: { project: IProjectDetails }) => {
  return (
    <div className='flex w-full justify-around xl:gap-x-2'>
      <Link
        className='h-6 w-fit text-orange-400 hover:border-b-2 hover:border-orange-300 hover:text-orange-300 hover:duration-300  max-sm:text-sm'
        aria-roledescription='Code'
        href={project.projectLink}
      >
        Check it out!
      </Link>
      <Link
        className='h-6 w-fit text-orange-400 hover:border-b-2 hover:border-orange-300 hover:text-orange-300 hover:duration-300  max-sm:text-sm'
        aria-roledescription='Demo'
        href={project.codeLink}
      >
        Take a peak at how it was built
      </Link>
    </div>
  );
};
export default ProjectLinks;
