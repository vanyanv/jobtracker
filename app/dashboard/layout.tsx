import React from 'react';
import Sidebar from '../components/ui/Sidebar';

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex min-h-screen'>
      {/* Sidebar */}
      <div className='w-full sm:w-64 h-full bg-gray-100'>
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className='flex-grow p-2 sm:p-1 bg-white'>{children}</main>
    </div>
  );
}
