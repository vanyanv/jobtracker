import { signOut } from '@/auth';
import React from 'react';

export default function Settings() {
  return (
    <div className='p-4 sm:p-8 bg-gradient-to-br from-blue-100 via-purple-100 to-blue-50 min-h-screen'>
      {/* Page Header */}
      <div className='mb-8'>
        <h1 className='text-2xl sm:text-3xl font-bold text-gray-800 text-center sm:text-left'>
          Settings
        </h1>
        <p className='text-center sm:text-left text-gray-600'>
          Manage your preferences and account settings
        </p>
      </div>

      {/* User Info Section */}
      <div className='bg-white p-4 sm:p-6 rounded-lg shadow-md mb-6'>
        <h3 className='text-lg font-semibold text-gray-900'>
          Account Information
        </h3>
        <p className='mt-2 text-gray-600'>
          {/* <strong>Name:</strong> {user.name} */}
        </p>
        <p className='text-gray-600'>
          {/* <strong>Email:</strong> {user.email} */}
        </p>
      </div>

      {/* Settings Options */}
      <div className='space-y-6'>
        {/* Notifications */}
        <div className='bg-white p-4 sm:p-6 rounded-lg shadow-md flex justify-between items-center'>
          <h3 className='text-lg font-semibold text-gray-900'>Notifications</h3>
          <div>
            <label className='inline-flex items-center'>
              <input
                type='checkbox'
                className='form-checkbox h-6 w-6 text-purple-600'
              />
              <span className='ml-2 text-gray-600'>Enable</span>
            </label>
          </div>
        </div>

        {/* Dark Mode */}
        <div className='bg-white p-4 sm:p-6 rounded-lg shadow-md flex justify-between items-center'>
          <h3 className='text-lg font-semibold text-gray-900'>Dark Mode</h3>
          <div>
            <label className='inline-flex items-center'>
              <input
                type='checkbox'
                className='form-checkbox h-6 w-6 text-purple-600'
              />
              <span className='ml-2 text-gray-600'>Enable</span>
            </label>
          </div>
        </div>

        {/* Password Change */}
        <div className='bg-white p-4 sm:p-6 rounded-lg shadow-md'>
          <h3 className='text-lg font-semibold text-gray-900'>
            Change Password
          </h3>
          <p className='text-gray-600 mt-2'>
            It&rsquo;s a good idea to use a strong password that you&rsquo;re
            not using elsewhere.
          </p>
          <button className='mt-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white py-2 px-4 rounded-lg font-semibold shadow-md transition-all duration-300'>
            Update Password
          </button>
        </div>

        {/* Logout */}
        <div className='flex justify-end pt-6'>
          <form
            action={async () => {
              'use server';
              await signOut({ redirectTo: '/' });
            }}
            className='flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-200'
          >
            <i className='fas fa-sign-out-alt mr-4'></i>
            <button className='mt-4 bg-gradient-to-r from-red-500 to-orange-500 hover:from-purple-600 hover:to-blue-600 text-white py-2 px-4 rounded-lg font-semibold shadow-md transition-all duration-300'>
              Logout
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
