import Image from 'next/image';
import React from 'react';

import { urlFor } from '@/sanity/lib/sanity';

const StackIconsList = ({ skills }: { skills: any[] }) => {
  return (
    <ul className='flex flex-wrap gap-12'>
      {skills?.map((skill) => (
        <li
          key={skill.ref}
          className='relative size-6 sm:size-10 xl:size-14'
        >
          {/* <ImageComponent data={skill} /> */}
          <Image
            src={urlFor(skill.ref).url()}
            alt={skill.name}
            fill
            className={`rounded-lg shadow-lg dark:shadow-sm dark:shadow-white-500`}
          />
        </li>
      ))}
    </ul>
  );
};

export default StackIconsList;
