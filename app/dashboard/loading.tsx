import React from 'react';

export default function loading() {
  return (
    <div className='p-4 sm:p-6 bg-gradient-to-br from-blue-100 via-purple-100 to-blue-50 min-h-screen sm:max-h-full'>
      {/* Header Skeleton */}
      <div className='mb-8'>
        <div className='h-8 w-1/3 bg-gray-300 rounded animate-pulse'></div>
        <div className='mt-2 h-4 w-2/3 bg-gray-300 rounded animate-pulse'></div>
      </div>

      {/* Overview Cards Skeleton */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-5'>
        {Array(4)
          .fill(0)
          .map((_, idx) => (
            <div
              key={idx}
              className='bg-white p-4 rounded-lg shadow-lg flex flex-col items-center text-center animate-pulse'
            >
              <div className='h-6 w-2/3 bg-gray-300 rounded mb-2'></div>
              <div className='h-8 w-1/2 bg-gray-300 rounded'></div>
            </div>
          ))}
      </div>

      {/* Recent Applications Skeleton */}
      <div className='bg-white p-6 rounded-lg shadow-lg mb-8'>
        <div className='h-6 w-1/4 bg-gray-300 rounded mb-4 animate-pulse'></div>
        <div className='space-y-4'>
          {Array(3)
            .fill(0)
            .map((_, idx) => (
              <div
                key={idx}
                className='flex items-center justify-between p-4 border rounded-lg shadow-sm bg-gray-50 animate-pulse'
              >
                <div className='flex flex-col space-y-2'>
                  <div className='h-4 w-32 bg-gray-300 rounded'></div>
                  <div className='h-3 w-20 bg-gray-300 rounded'></div>
                </div>
                <div className='h-6 w-16 bg-gray-300 rounded-full'></div>
              </div>
            ))}
        </div>
      </div>

      {/* Add New Application Button Skeleton */}
      <div className='flex justify-end'>
        <div className='h-10 w-40 bg-gray-300 rounded-lg animate-pulse'></div>
      </div>
    </div>
  );
}
