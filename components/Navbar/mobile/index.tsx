'use client';
import { useState } from 'react';

import ThemeSwitch from '@/components/Theme';
import HamburgerIcon from './HamburgerIcon';
import MobileMenu from './MobileMenu';

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <nav className='relative flex w-full items-center justify-end p-4 sm:hidden'>
      <div className='flex items-center gap-4'>
        <ThemeSwitch />
        <button onClick={toggleMenu}>
          <HamburgerIcon />
        </button>
      </div>
      {isMenuOpen && (
        <MobileMenu menuState={{ isMenuOpen, toggleMenu }} />
      )}
    </nav>
  );
};

export default MobileNav;
