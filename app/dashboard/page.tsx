import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import React from 'react';
import Navbar from '../components/ui/Navbar';
import Sidebar from '../components/ui/Sidebar';
import JobApplications from '../components/JobApplications';


export default async function page() {
  const session = await auth();

  //check to see if there is a session otherwise re-direct to login
  if (!session) {
    redirect('/');
  }
  const user = session?.user || {};

  if (!user) {
    redirect('/');
  }
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <Navbar user={user} />
        <div className='flex flex-1'>
          <Sidebar />
          <main className='flex-1 p-6 bg-gray-100'>
            <JobApplications />
          </main>
        </div>
      </div>
    </>
  );
}
