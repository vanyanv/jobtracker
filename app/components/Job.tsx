import { Application } from '@prisma/client';
import React from 'react';

export default function Job({ job }: { job: Application }) {
  return (
    <>
      <li
        key={job.id}
        className='flex items-center justify-between p-4 border rounded-lg shadow-sm bg-gray-50'
      >
        <div className='flex flex-col'>
          <h3 className='text-lg font-semibold text-gray-900'>
            {job.jobTitle}
          </h3>
          <p className='text-sm text-gray-600'>{job.companyName}</p>
        </div>
        <span
          className={`px-3 py-1 text-sm font-medium rounded-full ${
            job.status === 'APPLIED'
              ? 'bg-blue-100 text-blue-800'
              : job.status === 'INTERVIEW'
              ? 'bg-yellow-100 text-yellow-800'
              : job.status === 'REJECTED'
              ? 'bg-red-100 text-red-800'
              : 'bg-green-100 text-green-800'
          }`}
        >
          {job.status}
        </span>
      </li>
    </>
  );
}
