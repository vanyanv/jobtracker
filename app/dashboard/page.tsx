import { auth, signOut } from '@/auth';

import { redirect } from 'next/navigation';
import React from 'react';

export default async function page() {
  const session = await auth();
  const user = session?.user;
  console.log(user);
  if (!user) {
    redirect('/signIn');
  }
  return (
    <div className='flex items-center justify-between p-4 bg-gray-800 text-white shadow-md'>
      {/* User Profile */}
      <div className='flex items-center space-x-4'>
        <img
          src={user.image}
          alt='user image'
          className='w-10 h-10 rounded-full object-cover'
        />
        <div>
          <h1 className='text-lg font-semibold'>{user.name}</h1>
          <h2 className='text-sm text-gray-400'>{user.email}</h2>
        </div>
      </div>

      {/* Sign-out Section */}
      <form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <button
          type='submit'
          className='bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md transition duration-200'
        >
          Sign Out
        </button>
      </form>
    </div>
  );
}
