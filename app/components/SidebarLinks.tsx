import React from 'react';
import Link from 'next/link';

export default function SidebarLinks({
  key,
  navigation,
}: {
  key: string;
  navigation: string;
}) {
  return (
    <>
      <Link
        key={key}
        href={`/${navigation}`}
        className='flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-200 hover:underline'
      >
        <i className='fas fa-home text-gray-400 mr-4'></i>
        <span className='text-base font-medium'>{navigation}</span>
      </Link>
    </>
  );
}