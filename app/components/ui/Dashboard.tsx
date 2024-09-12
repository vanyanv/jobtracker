'use client';
import { ApplicationTypes } from '@/app/libs/definitions';
import { applications } from '@/app/libs/placeholder-data';
import React, { useState } from 'react';
import ApplicationForm from './ApplicationForm';

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  return (
    <div className='p-8 bg-gradient-to-br from-blue-100 via-purple-100 to-blue-50 max-h-screen'>
      {/* Header */}
      <div className='mb-8'>
        <h1 className='text-4xl font-semibold text-gray-900'>
          Welcome back, Vardan!
        </h1>
        <p className='text-gray-600 mt-2'>
          Here’s your job search progress at a glance.
        </p>
      </div>

      {/* Overview Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-5'>
        <div className='bg-white p-4 rounded-lg shadow-lg flex flex-col items-center text-center'>
          <h3 className='text-lg font-semibold text-gray-900'>
            Total Applications
          </h3>
          <p className='text-3xl font-bold text-blue-600 mt-2'>28</p>
        </div>
        <div className='bg-white p-4 rounded-lg shadow-lg flex flex-col items-center text-center'>
          <h3 className='text-lg font-semibold text-gray-900'>In Progress</h3>
          <p className='text-3xl font-bold text-yellow-500 mt-2'>5</p>
        </div>
        <div className='bg-white p-4 rounded-lg shadow-lg flex flex-col items-center text-center'>
          <h3 className='text-lg font-semibold text-gray-900'>Offers</h3>
          <p className='text-3xl font-bold text-green-500 mt-2'>2</p>
        </div>
        <div className='bg-white p-4 rounded-lg shadow-lg flex flex-col items-center text-center'>
          <h3 className='text-lg font-semibold text-gray-900'>Rejections</h3>
          <p className='text-3xl font-bold text-red-500 mt-2'>4</p>
        </div>
      </div>

      {/* Recent Applications */}
      <div className='bg-white p-6 rounded-lg shadow-lg mb-8'>
        <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
          Recent Applications
        </h2>
        {applications.length === 0 ? (
          <p className='text-gray-500'>You have not applied to any jobs yet.</p>
        ) : (
          <ul className='space-y-4'>
            {applications.map((job: ApplicationTypes) => (
              <li
                key={job.id}
                className='flex items-center justify-between p-4 border rounded-lg shadow-sm bg-gray-50'
              >
                <div className='flex flex-col'>
                  <h3 className='text-lg font-semibold text-gray-900'>
                    {job.title}
                  </h3>
                  <p className='text-sm text-gray-600'>{job.company}</p>
                </div>
                <span
                  className={`px-3 py-1 text-sm font-medium rounded-full ${
                    job.status === 'Applied'
                      ? 'bg-blue-100 text-blue-800'
                      : job.status === 'Interview'
                      ? 'bg-yellow-100 text-yellow-800'
                      : job.status === 'Rejected'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-green-100 text-green-800'
                  }`}
                >
                  {job.status}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Add New Application Button */}
      <div className='flex justify-end'>
        <button
          onClick={() => setOpen(true)}
          className='bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white py-3 px-6 rounded-lg font-semibold shadow-md transition-all duration-300'
        >
          + Add New Application
        </button>
      </div>

      {open && <ApplicationForm setOpen={setOpen} />}
    </div>
  );
}
