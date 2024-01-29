'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { menu } from '@/constants';
import { useMediumQuery } from '@/hooks/useMediaQuery';

const NavMenuItems = () => {
  const pathname = usePathname();
  const isMedium = useMediumQuery();
  return (
    <>
      {menu.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`py-2 max-sm:px-4 ${
            pathname === item.href ||
            (pathname.startsWith(item.href) && item.href !== '/')
              ? 'text-stroke text-primary dark:text-primary-dark max-sm:rounded-3xl max-sm:bg-primary max-sm:text-white-800 max-sm:dark:bg-primary-dark max-sm:dark:text-white-900'
              : 'text-slate-500 dark:text-white-800'
          }`}
        >
          {item.title}
          {pathname === item.href && isMedium && (
            <span className='flex-center relative'>
              <div className='size-2 animate-pulse rounded-full bg-primary dark:bg-primary-dark' />
            </span>
          )}
        </Link>
      ))}
    </>
  );
};

export default NavMenuItems;
