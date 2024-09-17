'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function SidebarLinks({
  navigation,
  name,
}: {
  navigation: string;
  name: string;
}) {
  const pathname = usePathname();

  return (
    <>
      <Link
        href={navigation}
        className={clsx(
          'flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-200 hover:underline',
          {
            'text-blue-500 grow-1': pathname === navigation,
          }
        )}
      >
        <i className='fas fa-home text-gray-400 mr-4'></i>
        <span className='text-base font-medium'>{name}</span>
      </Link>
    </>
  );
}
