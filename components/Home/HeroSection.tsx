import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
  return (
    <>
      <Image
        src='/assets/dev.png'
        alt='dev-img'
        width={1000}
        height={21}
        className='max-h-[70vh] rounded-lg object-contain object-center max-lg:row-start-1  2xl:max-h-[50vh]'
      />
    </>
  );
};

export default HeroSection;
