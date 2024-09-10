import React from 'react';
import Link from 'next/link';

export default async function Sidebar() {
  return (
    <div>
      <aside className='w-64 bg-gray-800 text-white min-h-screen flex flex-col'>
        <nav className='flex-1 overflow-y-auto'>
          <ul className='space-y-1 p-4'>
            <li>
              <Link href='/dashboard'>
                <div className='flex items-center p-3 rounded-lg hover:bg-gray-700 transition duration-200'>
                  <svg
                    className='w-6 h-6 text-gray-300'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M3 10h18M3 6h18M3 14h18m-9 4h9M5 21h14'
                    />
                  </svg>
                  <span className='ml-3'>Dashboard</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href='/jobs'>
                <div className='flex items-center p-3 rounded-lg hover:bg-gray-700 transition duration-200'>
                  <svg
                    className='w-6 h-6 text-gray-300'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M3 13l4 4L10 10l4 4 4-4'
                    />
                  </svg>
                  <span className='ml-3'>Jobs</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href='/settings'>
                <div className='flex items-center p-3 rounded-lg hover:bg-gray-700 transition duration-200'>
                  <svg
                    className='w-6 h-6 text-gray-300'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M12 4v16m8-8H4'
                    />
                  </svg>
                  <span className='ml-3'>Settings</span>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
}
