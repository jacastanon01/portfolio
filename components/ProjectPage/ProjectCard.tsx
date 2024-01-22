'use client';

import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import type { IProjectCard } from '@/types';

import { MotionDiv } from '../Motion';

const projectCardVariants = (index: number) => ({
  visible: { x: 0, transition: { duration: 1 } },
  hidden: {
    x: index % 2 === 0 ? -300 : 300,
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
    threshold: 1,
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
      className={`col-span-2 size-full bg-white-800 dark:bg-primary`}
      ref={ref}
      initial='hidden'
      animate={controls}
      variants={projectCardVariants(index)}
    >
      <div className='size-full'>{project.title}</div>
    </MotionDiv>
  );
};

export default ProjectCard;
