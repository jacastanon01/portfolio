'use client';

import ThemeSwitch from '@/components/Theme';

import NavMenuItems from '../NavMenuItems';
import DownloadIcon from '../mobile/DownloadIcon';

const DesktopNav = () => {
  return (
    <nav className='hidden w-full sm:flex'>
      <div className='flex-between items-center gap-6'>
        <div className='flex gap-6'>
          <NavMenuItems />
        </div>
        <div className='flex select-none items-center gap-6 dark:text-white-800'>
          <a
            download='resume'
            href='/public'
            className='flex-center gap-1 text-gray-700 hover:cursor-pointer dark:text-white-800'
          >
            <div>
              <DownloadIcon />
            </div>
            Resume
          </a>
          |
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
