import * as motion from 'framer-motion/client';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-[#1d1d40] to-[#09092e] flex items-center justify-center overflow-hidden relative'>
      {/* Floating orbs with Framer Motion */}
      <motion.div
        className='absolute top-1/3 left-10 w-40 h-40 bg-purple-600 rounded-full blur-xl opacity-30'
        animate={{ y: [0, 20, -20, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
      />
      <motion.div
        className='absolute bottom-20 right-10 w-32 h-32 bg-blue-700 rounded-full blur-xl opacity-40'
        animate={{ y: [0, 15, -15, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: 'easeInOut' }}
      />

      <motion.div
        className='relative w-full max-w-lg mx-auto p-8 bg-[#23234f] rounded-3xl shadow-2xl border border-gray-700'
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className='text-center mb-8'>
          <h1 className='text-5xl font-extrabold text-white mb-4'>
            Welcome to JobTracker
          </h1>
          <p className='text-lg text-gray-300'>
            Manage your job applications effortlessly and stay organized.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <Link href='/login'>
            <motion.div
              className='block py-3 px-6 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold text-center focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 shadow-lg transform hover:scale-105'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Login
            </motion.div>
          </Link>
          <Link href='/signup'>
            <motion.div
              className='block py-3 px-6 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold text-center focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 shadow-lg transform hover:scale-105'
              whileHover={{ scale: 1.05 }}
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
              className='text-purple-500 hover:text-purple-400 transition-colors duration-200'
            >
              Learn more
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
