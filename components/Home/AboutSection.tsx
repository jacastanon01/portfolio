import Link from 'next/link';
import React from 'react';

import { fetchMainSkillsForHomePage } from '@/sanity/lib/utils';

import StackIconsList from '../shared/StackIconsList';

const AboutSection = async () => {
  const skills = await fetchMainSkillsForHomePage();
  return (
    <section className='flex flex-col justify-evenly'>
      <div className='flex justify-evenly lg:order-3'>
        <StackIconsList skills={skills} />
      </div>
      <p className='font-figtree text-2xl max-lg:my-10 xl:text-3xl'>
        My name is <span className='text-gradient'>Jacob</span>! I
        believe in leveraging the power of code to make a{' '}
        <span className='text-gradient'>positive impact </span> and
        help others. I am dedicated to crafting solutions that
        contribute to a better, more connected world.
      </p>
      <p className='font-figtree text-2xl'>
        <Link
          aria-roledescription='Link to my work'
          href='/projects'
          className=' border-b-2 border-orange-400 transition hover:text-orange-400 hover:duration-300'
        >
          Click here
        </Link>{' '}
        to see what I&apos;ve been working on lately.
      </p>
    </section>
  );
};

export default AboutSection;
