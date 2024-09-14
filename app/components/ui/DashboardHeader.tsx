import { User } from '@/app/libs/definitions';
import React from 'react';

export default async function DashboardHeader({ user }: { user: User }) {
  return (
    <>
      <div className='mb-8'>
        <h1 className='text-4xl font-semibold text-gray-900'>
          {`Welcome back, ${user?.name}!`}
        </h1>
        <p className='text-gray-600 mt-2'>
          Here’s your job search progress at a glance.
        </p>
      </div>
    </>
  );
}
