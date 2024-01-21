import React from 'react';

import { ISkillIcon } from '@/types';

import SkillIcon from './SkillIcon';

const StackIconsList = ({ skills }: { skills: ISkillIcon[] }) => {
  return (
    <>
      {skills?.map((skill) => (
        <div
          key={skill.url}
          className='relative size-10 sm:size-12 lg:size-10 '
        >
          <SkillIcon icon={skill} />
        </div>
      ))}
    </>
  );
};

export default StackIconsList;
