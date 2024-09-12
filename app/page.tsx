import * as motion from 'framer-motion/client';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-[#1d1d40] to-[#09092e] flex items-center justify-center overflow-hidden relative'>
      {/* Floating orbs with Framer Motion */}
      <motion.div
        className='absolute top-1/3 left-10 w-36 h-36 bg-purple-500 rounded-full blur-xl opacity-25'
        animate={{ y: [0, 20, -20, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
      />
      <motion.div
        className='absolute bottom-20 right-10 w-28 h-28 bg-blue-500 rounded-full blur-lg opacity-30'
        animate={{ y: [0, 15, -15, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: 'easeInOut' }}
      />

      <motion.div
        className='relative w-full max-w-lg mx-auto p-10 bg-[#282850] rounded-2xl shadow-2xl border border-gray-700'
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className='text-center mb-8'>
          <h1 className='text-4xl font-bold text-white mb-4'>
            Welcome to JobTracker
          </h1>
          <p className='text-md text-gray-300'>
            Manage your job applications effortlessly and stay organized.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <Link href='/signIn'>
            <motion.div
              className='block py-3 px-6 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 rounded-lg text-white font-medium text-center shadow-md transition-transform duration-300 transform hover:scale-105'
              whileTap={{ scale: 0.95 }}
            >
              Login
            </motion.div>
          </Link>
          <Link href='/signUp'>
            <motion.div
              className='block py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-lg text-white font-medium text-center shadow-md transition-transform duration-300 transform hover:scale-105'
              whileTap={{ scale: 0.95 }}
            >
              Sign Up
            </motion.div>
          </Link>
        </div>

        <div className='mt-8 text-center'>
          <p className='text-sm text-gray-400'>
            Need more information?{' '}
            <Link
              href='/about'
              className='text-blue-400 hover:text-blue-300 transition-colors duration-200'
            >
              Learn more
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
