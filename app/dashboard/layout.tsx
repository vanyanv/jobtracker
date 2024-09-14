import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import React from 'react';

import Sidebar from '../components/ui/Sidebar';

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  // check to see if there is a session otherwise redirect to login
  if (!session) {
    redirect('/');
  }
  const user = session?.user || {};
  // also check if a user exists
  if (!user) {
    redirect('/');
  }

  return (
    <div className='flex min-h-screen'>
      {/* Sidebar */}
      <div className='w-full sm:w-64 h-full bg-gray-100'>
        <Sidebar user={user} />
      </div>

      {/* Main Content */}
      <main className='flex-grow p-2 sm:p-1 bg-white'>{children}</main>
    </div>
  );
}
