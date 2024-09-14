import { signOut } from '@/auth';
import React from 'react';

export default async function SignOutButton() {
  return (
    <>
      <form
        action={async () => {
          'use server';
          await signOut({ redirectTo: '/' });
        }}
        className='flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-200'
      >
        <i className='fas fa-sign-out-alt mr-4'></i>
        <button className='text-base font-medium'>Logout</button>
      </form>
    </>
  );
}
