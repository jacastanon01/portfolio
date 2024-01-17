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
        <div className='flex items-center gap-6 hover:cursor-pointer'>
          <a
            download='resume'
            href='/public'
            className='flex-center gap-1 text-black'
          >
            <div className=''>
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