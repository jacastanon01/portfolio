'use client';

import Link from 'next/link';

import { menu } from '../menu';
import { usePathname } from 'next/navigation';

const NavMenuItems = () => {
  const pathname = usePathname();
  return (
    <>
      {menu.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`${
            pathname === item.href
              ? 'font-semibold text-primary dark:text-primary-dark max-sm:rounded-xl max-sm:bg-primary max-sm:text-white-800 max-sm:dark:bg-primary-dark'
              : 'text-slate-500 dark:text-white-800'
          }`}
        >
          {item.title}
        </Link>
      ))}
    </>
  );
};

export default NavMenuItems;
