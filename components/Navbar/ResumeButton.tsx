import React from 'react';

import { fetchResumeFromPersonalInfo } from '@/sanity/lib/utils';

import DownloadIcon from './mobile/DownloadIcon';

const ResumeButton = async ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { url } = await fetchResumeFromPersonalInfo();
  return (
    <a
      target='_blank'
      download='jacob-castanon-resume'
      href={url}
      className={className}
    >
      <div>
        <DownloadIcon />
      </div>
      {children}
    </a>
  );
};

export default ResumeButton;
