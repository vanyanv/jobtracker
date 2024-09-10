import React from 'react';

const applications = [
  {
    id: '1',
    title: 'Frontend Developer',
    company: 'Tech Co.',
    status: 'Applied',
  },
  {
    id: '2',
    title: 'Backend Engineer',
    company: 'Innovate Inc.',
    status: 'Interview',
  },
  {
    id: '3',
    title: 'Full Stack Developer',
    company: 'Future Solutions',
    status: 'Offer',
  },
  {
    id: '4',
    title: 'UI/UX Designer',
    company: 'Creative Labs',
    status: 'Rejected',
  },
];

export default function JobApplications() {
  return (
    <div className='p-6 bg-white shadow-lg rounded-lg'>
      <h2 className='text-2xl font-semibold mb-4'>Your Job Applications</h2>
      {applications.length === 0 ? (
        <p className='text-gray-500'>You have not applied to any jobs yet.</p>
      ) : (
        <ul className='space-y-4'>
          {applications.map((job) => (
            <li
              key={job.id}
              className='flex items-center justify-between p-4 border rounded-lg shadow-sm bg-gray-50'
            >
              <div className='flex flex-col'>
                <h3 className='text-lg font-semibold'>{job.title}</h3>
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
  );
}
