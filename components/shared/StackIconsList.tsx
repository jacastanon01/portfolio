import Image from 'next/image';
import React from 'react';

import { ISkillIcon } from '@/types';

const StackIconsList = ({ skills }: { skills: ISkillIcon[] }) => {
  return (
    <>
      {skills?.map((skill) => (
        <div
          key={skill.url}
          className='relative size-10 sm:size-12 lg:size-10 '
        >
          {/* <ImageComponent data={skill} /> */}
          <Image
            src={skill.url}
            alt={skill.name}
            fill
            className={`rounded-lg bg-white-800 shadow-lg dark:shadow-sm dark:shadow-white-500`}
          />
        </div>
      ))}
    </>
  );
};

export default StackIconsList;
