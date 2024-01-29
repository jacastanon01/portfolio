'use client';

import React, { useState, useEffect } from 'react';

import { fetchResumeFromPersonalInfo } from '@/sanity/lib/utils';

import DownloadIcon from './mobile/DownloadIcon';

const ResumeButton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [url, setUrl] = useState('');
  useEffect(() => {
    async function fetchResume() {
      const { url } = await fetchResumeFromPersonalInfo();
      setUrl(url);
    }
    fetchResume();
  }, []);
  return (
    <a
      target='_blank'
      download='jacob-castanon-resume'
      href={`${url}?dl`}
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
