'use client';

import { motion } from 'framer-motion';
import React from 'react';
import NavMenuItems from '../NavMenuItems';
import CloseIcon from './CloseIcon';
import DownloadIcon from './DownloadIcon';

const MobileMenu = ({
  menuState: { isMenuOpen, toggleMenu },
}: {
  menuState: { isMenuOpen: boolean; toggleMenu: () => void };
}) => {
  return (
    <motion.div
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -200, opacity: 0 }}
      transition={{
        duration: 0.4,
        ease: 'easeOut',
      }}
      className='absolute right-[0.5px] top-2 z-20 w-[95vw] bg-white-900'
    >
      <div className='flex flex-col gap-6 p-4'>
        <div className='flex w-full justify-end'>
          <button aria-label='close' onClick={toggleMenu}>
            <CloseIcon />
          </button>
        </div>
        <div className='flex-between flex-col gap-2'>
          <NavMenuItems />
        </div>

        <a
          className='flex-center alt-btn gap-2 sm:text-black'
          href='/'
          download='resume'
        >
          <div className='self-center'>
            <DownloadIcon />
          </div>
          Resume
        </a>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
