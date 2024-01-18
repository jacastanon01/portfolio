import DesktopNav from './desktop';
import MobileNav from './mobile';

const Navbar = () => {
  return (
    <header className='flex h-24 items-center'>
      <DesktopNav />
      <MobileNav />
    </header>
  );
};

export default Navbar;
