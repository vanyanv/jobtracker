import React from 'react';
import { Application } from '@prisma/client';
import Job from '../Job';

export default async function RecentApplications({
  jobs,
}: {
  jobs: Application[];
}) {
  return (
    <>
      <div className='bg-white p-6 rounded-lg shadow-lg'>
        <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
          Your Applications
        </h2>
        {jobs?.length === 0 ? (
          <p className='text-gray-500'>You have not applied to any jobs yet.</p>
        ) : (
          <ul className='space-y-4'>
            {jobs?.map((job: Application) => (
              <Job key={job.id} job={job} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
