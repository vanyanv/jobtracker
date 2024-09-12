import React from 'react';

export default function loading() {
  return (
    <div className='p-6 bg-white shadow-lg rounded-lg animate-pulse'>
      <h2 className='text-2xl font-semibold mb-4 bg-gray-200 h-8 w-64 rounded'></h2>

      {/* Loading state when no applications */}
      <ul className='space-y-4'>
        {[...Array(3)].map((_, index) => (
          <li
            key={index}
            className='flex items-center justify-between p-4 border rounded-lg shadow-sm bg-gray-50'
          >
            <div className='flex flex-col space-y-2'>
              <div className='bg-gray-200 h-5 w-48 rounded'></div>
              <div className='bg-gray-200 h-4 w-32 rounded'></div>
            </div>
            <span className='bg-gray-200 h-6 w-20 rounded-full'></span>
          </li>
        ))}
      </ul>
    </div>
  );
}
