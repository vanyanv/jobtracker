import { Application } from '@prisma/client';
import React from 'react';
import { deleteAJob } from '../actions/applications';

export default async function Job({ job }: { job: Application }) {
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
        <div className='flex items-center space-x-4'>
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
          <form
            action={async () => {
              const deletedJob = await deleteAJob(job.id);
              return deletedJob;
            }}
          >
            <button className='px-2 py-1 text-sm text-white bg-red-600 rounded hover:bg-red-700 focus:outline-none'>
              Delete
            </button>
          </form>
        </div>
      </li>
    </>
  );
}
