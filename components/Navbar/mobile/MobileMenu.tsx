'use client';

import { motion } from 'framer-motion';
import React from 'react';
import NavMenuItems from '../NavMenuItems';

const MobileMenu = ({
  menuState,
}: {
  menuState: { isMenuOpen: boolean; toggleMenu: () => void };
}) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: 'easeOut',
      }}
      className='absolute top-0 z-20 size-full bg-white-800 px-2 py-4'
    >
      <div className='flex-between flex-col'>
        <NavMenuItems />
      </div>
    </motion.div>
  );
};

export default MobileMenu;
