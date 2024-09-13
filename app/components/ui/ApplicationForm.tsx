import { addJob } from '@/app/actions/applications';
import { motion } from 'framer-motion';
import React from 'react';

export default function ApplicationForm({
  setOpen,
}: {
  setOpen: (action: boolean) => void;
}) {
  return (
    <>
      <motion.div
        className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
          <h2 className='text-2xl font-semibold text-gray-900 mb-6'>
            Add New Application
          </h2>
          <form action={addJob}>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-medium mb-2'>
                Company Name
              </label>
              <input
                type='text'
                name='companyName'
                className='w-full px-3 py-2 border border-gray-300 rounded'
                required
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-medium mb-2'>
                Job Title
              </label>
              <input
                type='text'
                name='jobTitle'
                className='w-full px-3 py-2 border border-gray-300 rounded'
                required
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-medium mb-2'>
                Status
              </label>
              <select
                className='w-full px-3 py-2 border border-gray-300 rounded'
                name='status'
              >
                <option value='APPLIED'>Applied</option>
                <option value='INTERVIEW'>Interview</option>
                <option value='OFFERED'>Offered</option>
                <option value='REJECTED'>Rejected</option>
                <option value='IN_REVIEW'>In Review</option>
                <option value='FOLLOW_UP'>Follow Up</option>
              </select>
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-medium mb-2'>
                Notes
              </label>
              <textarea
                name='notes'
                className='w-full px-3 py-2 border border-gray-300 rounded'
              />
            </div>
            <div className='flex justify-end'>
              <button
                onClick={() => setOpen(false)}
                type='button'
                className='bg-gray-500 text-white px-4 py-2 rounded mr-2'
              >
                Cancel
              </button>
              <button
                onClick={() => setOpen(false)}
                type='submit'
                className='bg-blue-500 text-white px-4 py-2 rounded'
              >
                Add Application
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </>
  );
}
