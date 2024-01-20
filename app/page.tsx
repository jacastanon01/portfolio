import Image from 'next/image';
import Link from 'next/link';

import { MotionDiv } from '@/components/Motion';
import {
  fetchProjects,
  fetchSpecificSkills,
} from '@/sanity/lib/utils';
import { mainSkills } from '@/constants';
import GetImage from '@/sanity/lib/getImage';
import { ImageComponent, urlFor } from '@/sanity/lib/sanity';

export default async function Home() {
  const skills = await fetchSpecificSkills(mainSkills);
  console.log(skills);
  return (
    <main className=''>
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { ease: 'easeOut', duration: 0.4 },
        }}
      >
        <h1 className='h1-bold text-gradient mb-16 mt-8 !size-full text-center text-[60px]'>
          Welcome
        </h1>
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
          <p className='text-center font-figtree text-xl lg:text-start xl:text-3xl'>
            My name is <span className='text-gradient'>Jacob</span>! I
            believe in leveraging the power of code to make a{' '}
            <span className='text-gradient'>positive impact </span>{' '}
            and help others. I am dedicated to crafting solutions that
            contribute to a better, more connected world.{' '}
            <Link
              href='/projects'
              className=' border-b-2 border-orange-400 transition hover:text-orange-400 hover:duration-300'
            >
              Click here
            </Link>{' '}
            to see what I've been working on lately.
          </p>
          <Image
            src='/assets/dev.png'
            alt='dev-img'
            width={1000}
            height={21}
            className='max-h-[70vh] rounded-lg bg-black-400 bg-cover object-contain object-center dark:bg-transparent max-lg:row-start-1 2xl:max-h-[50vh]'
          />
        </div>
      </MotionDiv>
    </main>
  );
}
