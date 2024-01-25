import React from 'react';

import { ICaseStudy } from '@/types';

const DetailsGrid = ({ caseStudy }: { caseStudy: ICaseStudy }) => {
  if (!caseStudy) return null;
  return (
    <div className='flex flex-col items-center justify-between gap-10'>
      {['summary', 'challenges', 'results'].map((section) => (
        <section key={section} className='grid grid-cols-4'>
          <div className='col-span-1 hidden items-center lg:flex'>
            <p className='text-xl font-semibold'>
              {caseStudy[section + 'Title']}
            </p>
          </div>
          <div className='col-span-4 border-b border-b-primary-dark pb-4 lg:col-span-3 lg:border-none'>
            <p className='font-figtree'>{caseStudy[section]}</p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default DetailsGrid;
