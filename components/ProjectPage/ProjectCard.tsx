'use client';

import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';

import type { IProjectCard } from '@/types';
import { useMediumQuery } from '@/hooks/useMediaQuery';

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
  const isMedium = useMediumQuery();

  useEffect(() => {
    if (!isMedium) {
      controls.start('visible');
      return;
    }
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, isInView, isMedium]);

  return (
    <MotionDiv
      className={`${index % 2 === 0 ? 'self-start' : 'self-end'} h-[70vh] p-4`}
      ref={ref}
      initial={isMedium ? 'hidden' : 'visible'}
      animate={controls}
      variants={projectCardVariants(index)}
    >
      <div className='flex-center h-full max-w-[600px] flex-col'>
        <Link
          href={`/projects/${project.title}`}
          className='relative size-full'
        >
          <Image
            src={project.img}
            alt={project.title}
            fill
            className='object-contain'
          />
        </Link>
        <h1 className='text-gradient text-4xl font-semibold uppercase'>
          {project.title}
        </h1>
        <p className='font-figtree font-medium'>
          {project.description}
        </p>
      </div>
    </MotionDiv>
  );
};

export default ProjectCard;
