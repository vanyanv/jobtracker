import { signOut } from '@/auth';
import React from 'react';

export type User = {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
};

type NavbarProps = {
  user: User;
};

export default function Navbar({ user }: NavbarProps) {
  return (
    <nav className='flex items-center justify-between p-4 bg-gray-800 text-white shadow-md'>
      {/* User Profile */}
      <div className='flex items-center space-x-4'>
        <img
          src={user?.image || '/default-avatar.png'}
          alt='user image'
          className='w-12 h-12 rounded-full object-cover'
        />
        <div>
          <h1 className='text-xl font-semibold'>{user?.name || 'Guest'}</h1>
          <h2 className='text-sm text-gray-400'>{user?.email || 'No email'}</h2>
        </div>
      </div>

      <form
        action={async () => {
          'use server';
          await signOut({ redirectTo: '/' });
        }}
      >
        <button className='bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md transition duration-200'>
          Sign Out
        </button>
      </form>
    </nav>
  );
}
