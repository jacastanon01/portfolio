import React from 'react';
import Logo from './logo';
import DesktopNav from './desktop';

const Navbar = () => {
  return (
    <header className='flex-between bg-slate-300'>
      <Logo />
      <DesktopNav />
      {/* MobileMenu */}
    </header>
  );
};

export default Navbar;
