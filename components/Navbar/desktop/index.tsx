import ThemeSwitch from '@/components/Theme';

import NavMenuItems from '../NavMenuItems';
import ResumeButton from '../ResumeButton';

const DesktopNav = () => {
  return (
    <nav className='hidden w-full sm:flex'>
      <div className='flex-between items-center gap-6'>
        <div className='flex gap-6'>
          <NavMenuItems />
        </div>
        <div className='flex select-none items-center gap-6 dark:text-white-800'>
          <ResumeButton className='flex-center gap-1 text-gray-700 hover:cursor-pointer dark:text-white-800'>
            Resume
          </ResumeButton>
          |
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
