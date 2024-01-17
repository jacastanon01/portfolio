'use client';

import ThemeSwitch from '@/components/Theme';
import NavMenuItems from '../NavMenuItems';

const DesktopNav = () => {
  return (
    <nav className='hidden sm:flex'>
      <div className='flex items-center gap-6 bg-red-50 px-6'>
        <NavMenuItems />
        <a download='resume' href='/public' className='text-black'>
          Resume
        </a>
        |
        <ThemeSwitch />
      </div>
    </nav>
  );
};

export default DesktopNav;
