'use client';
import { User } from '@/app/libs/definitions';
import React, { useState } from 'react';
import ApplicationForm from './ApplicationForm';
import DashboardHeader from './DashboardHeader';
import RecentApplications from './RecentApplications';
import { Application } from '@prisma/client';

type DashboardProps = {
  user: User;
  jobs: Application[];
};

export default function Dashboard({ user, jobs }: DashboardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className='min-h-screen flex flex-col p-4 sm:p-6 bg-gradient-to-br from-blue-100 via-purple-100 to-blue-50'>
      {/* Header */}
      <DashboardHeader user={user} />

      {/* Overview Cards */}
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6 flex-grow'>
        {/* Total Applications */}
        <div className='bg-white p-4 sm:p-6 rounded-lg shadow-md transition-shadow hover:shadow-lg flex flex-col items-center text-center'>
          <h3 className='text-base sm:text-lg font-semibold text-gray-900'>
            Total Applications
          </h3>
          <p className='text-2xl sm:text-3xl font-bold text-blue-600 mt-2'>
            28
          </p>
        </div>

        {/* In Progress */}
        <div className='bg-white p-4 sm:p-6 rounded-lg shadow-md transition-shadow hover:shadow-lg flex flex-col items-center text-center'>
          <h3 className='text-base sm:text-lg font-semibold text-gray-900'>
            In Progress
          </h3>
          <p className='text-2xl sm:text-3xl font-bold text-yellow-500 mt-2'>
            5
          </p>
        </div>

        {/* Offers */}
        <div className='bg-white p-4 sm:p-6 rounded-lg shadow-md transition-shadow hover:shadow-lg flex flex-col items-center text-center'>
          <h3 className='text-base sm:text-lg font-semibold text-gray-900'>
            Offers
          </h3>
          <p className='text-2xl sm:text-3xl font-bold text-green-500 mt-2'>
            2
          </p>
        </div>

        {/* Rejections */}
        <div className='bg-white p-4 sm:p-6 rounded-lg shadow-md transition-shadow hover:shadow-lg flex flex-col items-center text-center'>
          <h3 className='text-base sm:text-lg font-semibold text-gray-900'>
            Rejections
          </h3>
          <p className='text-2xl sm:text-3xl font-bold text-red-500 mt-2'>4</p>
        </div>
      </div>

      {/* Recent Applications */}
      <RecentApplications jobs={jobs} />

      {/* Add New Application Button */}
      <div className='flex justify-end pt-4'>
        <button
          onClick={() => setOpen(true)}
          className='w-full sm:w-auto bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white py-3 px-6 rounded-lg font-semibold shadow-md transition-all duration-300'
        >
          + Add New Application
        </button>
      </div>

      {open && <ApplicationForm setOpen={setOpen} />}
    </div>
  );
}
