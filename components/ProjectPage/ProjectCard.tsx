'use client';

import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { IProjectCard } from '@/types';

import { MotionDiv } from '../Motion';

const projectCardVariants = (index: number) => ({
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, x: index % 2 === 0 ? -300 : 300 },
});

const ProjectCard = ({
  project,
  index,
}: {
  project: IProjectCard;
  index: number;
}) => {
  const [ref, isInView] = useInView();
  const controls = useAnimation();

  console.log(project, 'project card!!!!x');

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, isInView]);

  return (
    <MotionDiv
      className='size-full'
      ref={ref}
      initial='hidden'
      animate={controls}
      variants={projectCardVariants(index)}
    >
      {project.title}
    </MotionDiv>
  );
};

export default ProjectCard;
