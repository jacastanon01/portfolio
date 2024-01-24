import Image from 'next/image';
import React from 'react';

import { ISkillIcon } from '@/types';

const SkillIcon = ({
  className,
  icon,
}: {
  className?: string;
  icon: ISkillIcon;
}) => {
  return (
    <>
      <Image
        src={icon.url}
        alt={icon.name}
        fill
        className={`rounded-lg bg-white-800 shadow-lg dark:shadow-sm dark:shadow-white-500 ${className}`}
      />
    </>
  );
};

export default SkillIcon;
