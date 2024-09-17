import { getAllJobs } from '../actions/applications';
import { Application } from '@prisma/client';
import ApplicationList from './ApplicationList';
export default async function JobApplications() {
  const jobs = await getAllJobs();
  console.log('In JobApplications', jobs.data);

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
      <ApplicationList jobs={jobs.data as Application[]} />
      {/* Add New Application Button */}
      <div className='flex justify-end mt-8'>
        <button className='bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white py-3 px-6 rounded-lg font-semibold shadow-md transition-all duration-300'>
          + Add New Application
        </button>
      </div>
    </div>
  );
}
