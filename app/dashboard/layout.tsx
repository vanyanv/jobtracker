import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import React from 'react';
import Navbar from '../components/ui/Navbar';
import Sidebar from '../components/ui/Sidebar';

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  //check to see if there is a session otherwise re-direct to login
  if (!session) {
    redirect('/');
  }
  const user = session?.user || {};
  //also check if a user exists
  if (!user) {
    redirect('/');
  }

  return (
    <div className='flex flex-col min-h-screen'>
      {/* <Navbar user={user} /> */}
      <div className='flex flex-1'>
        <Sidebar />
        <main className='flex-1 p-6 bg-gray-100'>{children}</main>
      </div>
    </div>
  );
}
