import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { socials } from '@/constants';

const Socials = () => {
  return (
    <div className='flex justify-around'>
      {socials.map((social) => (
        <Link
          target='_blank'
          aria-roledescription={`Link to ${social.title}`}
          href={social.href}
          key={social.title}
          className='flex items-center space-x-1 rounded-lg bg-gray-100 p-2 shadow-md hover:scale-105 dark:bg-black-200'
        >
          <Image
            width={40}
            height={40}
            src={social.icon}
            alt={social.title}
          />
          <span className='sr-only'>{social.title}</span>
          <span className='font-figtree font-medium leading-normal'>
            {social.title}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
