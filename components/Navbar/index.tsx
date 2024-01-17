import React from 'react';
import Logo from './logo';
import DesktopNav from './desktop';
import MobileNav from './mobile';

const Navbar = () => {
  return (
    <header className='flex-between bg-slate-300'>
      <Logo />
      <DesktopNav />
      <MobileNav />
    </header>
  );
};

export default Navbar;
