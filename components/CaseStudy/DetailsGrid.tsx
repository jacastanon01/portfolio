import React from 'react';

import { ICaseStudy } from '@/types';

const DetailsGrid = ({ caseStudy }: { caseStudy: ICaseStudy }) => {
  if (!caseStudy) return null;
  return (
    <div className='flex flex-col items-center justify-between gap-10'>
      {['summary', 'challenges', 'result'].map((section) => (
        <section key={section} className='grid grid-cols-4'>
          <div className='col-span-1 hidden items-center lg:flex'>
            <h2 className='text-xl font-semibold text-primary'>
              {caseStudy[section + 'Title']}
            </h2>
          </div>
          <div className='col-span-4 whitespace-pre-wrap border-t border-t-primary-dark pt-4 xl:col-span-3'>
            <p className='font-figtree'>{caseStudy[section]}</p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default DetailsGrid;
