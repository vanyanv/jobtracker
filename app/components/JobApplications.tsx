import { ApplicationTypes } from '@/app/libs/definitions';
import { applications } from '@/app/libs/placeholder-data';

export default function JobApplications() {
  return (
    <div className='p-8 bg-gradient-to-br from-blue-100 via-purple-100 to-blue-50 min-h-screen'>
      {/* Header */}
      <div className='mb-8'>
        <h1 className='text-4xl font-semibold text-gray-900'>
          Job Applications
        </h1>
        <p className='text-gray-600 mt-2'>
          Here&rsquo;s a list of jobs you&rsquo;ve applied to.
        </p>
      </div>

      {/* Applications List */}
      <div className='bg-white p-6 rounded-lg shadow-lg'>
        <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
          Your Applications
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
      <div className='flex justify-end mt-8'>
        <button className='bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white py-3 px-6 rounded-lg font-semibold shadow-md transition-all duration-300'>
          + Add New Application
        </button>
      </div>
    </div>
  );
}
