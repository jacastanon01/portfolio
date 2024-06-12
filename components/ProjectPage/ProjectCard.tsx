'use client';

import { useAnimation } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { useMediumQuery } from '@/hooks/useMediaQuery';
import type { IProjectCard } from '@/types';

import { MotionDiv } from '../Motion';

const projectCardVariants = (index: number) => ({
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  hidden: {
    opacity: 0,
    x: index % 2 === 0 ? '-20%' : '20%',
    transition: { duration: 1 },
  },
  center: {
    opacity: 1,
    x: index % 2 === 0 ? '-100%' : '100%',
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
  const [ref, isInView, entry] = useInView({
    threshold: [0.35, 0.65],
  });
  const controls = useAnimation();
  const isMedium = useMediumQuery();

  const encodedTitle = encodeURIComponent(project.title);

  useEffect(() => {
    if (!isMedium) {
      controls.start('visible');
      return;
    }

    if (entry?.intersectionRatio! > 65) {
      controls.start('center');
    }
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, isInView, isMedium]);

  return (
    <MotionDiv
      className={`${index % 2 === 0 ? 'self-start' : 'self-end'} flex flex-col border-black-200 p-4 dark:border-white-500 max-md:border-b lg:h-[50vh] xl:h-[70vh]`}
      ref={ref}
      initial={isMedium ? 'hidden' : 'visible'}
      animate={controls}
      variants={projectCardVariants(index)}
    >
      <div className='flex-center h-96 max-w-[600px] flex-col sm:gap-4 lg:h-full'>
        <h1 className='text-gradient text-4xl font-semibold uppercase'>
          {project.title}
        </h1>
        <p className='font-figtree font-medium'>
          {project.description}
        </p>
        <Link
          href={`/projects/${encodedTitle}`}
          className='relative h-64 w-full md:h-80'
        >
          <Image
            src={project.img}
            alt={project.title}
            fill
            className='object-contain'
          />
        </Link>
      </div>
    </MotionDiv>
  );
};

export default ProjectCard;
