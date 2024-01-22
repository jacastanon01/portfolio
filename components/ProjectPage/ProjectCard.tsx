'use client';

import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

import type { IProjectCard } from '@/types';

import { MotionDiv } from '../Motion';

const projectCardVariants = (index: number) => ({
  visible: { opacity: 1, transition: { duration: 1 } },
  hidden: {
    opacity: 0,
    transition: { duration: 1 },
  },
});

const ProjectCard = ({
  project,
  index,
}: {
  project: IProjectCard;
  index: number;
}) => {
  const [ref, isInView] = useInView({
    threshold: 0.5,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, isInView]);

  return (
    <MotionDiv
      className={`${index % 2 === 0 ? 'col-start-[-1] col-end-[-1]' : 'col-span-full'} h-[70vh] w-full bg-white-800 dark:bg-primary`}
      ref={ref}
      initial='hidden'
      animate={controls}
      variants={projectCardVariants(index)}
    >
      <div className='flex-center size-full flex-col'>
        <div className='relative size-full'>
          <Image
            src={project.img}
            alt={project.title}
            fill
            className='object-contain'
          />
        </div>
        <h1 className='text-4xl font-semibold'>{project.title}</h1>
        <p className='font-figtree font-medium leading-tight'>
          {project.description}
        </p>
      </div>
    </MotionDiv>
  );
};

export default ProjectCard;
