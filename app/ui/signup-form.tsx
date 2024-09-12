import * as motion from 'framer-motion/client';

export function SignupForm() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-[#1d1d40] to-[#09092e] flex items-center justify-center overflow-hidden relative'>
      {/* Floating orbs with Framer Motion */}
      <motion.div
        className='absolute top-1/4 left-10 w-32 h-32 bg-purple-600 rounded-full blur-xl opacity-40'
        animate={{ y: [0, 20, -20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
      />
      <motion.div
        className='absolute bottom-10 right-20 w-24 h-24 bg-blue-700 rounded-full blur-xl opacity-50'
        animate={{ y: [0, 15, -15, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
      />

      <motion.div
        className='relative w-full max-w-md mx-auto p-8 space-y-8 bg-[#23234f] rounded-2xl shadow-2xl border border-gray-700'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className='text-4xl font-bold text-white text-center'>Sign Up</h1>
        <form className='space-y-6'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <label
              htmlFor='name'
              className='block text-sm font-medium text-gray-400'
            >
              Name
            </label>
            <input
              id='name'
              name='Name'
              type='text'
              autoComplete='name'
              required
              className='appearance-none block w-full px-4 py-2 bg-[#13132b] border border-gray-600 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500'
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-400'
            >
              Email
            </label>
            <input
              id='email'
              name='email'
              type='email'
              autoComplete='email'
              required
              className='appearance-none block w-full px-4 py-2 bg-[#13132b] border border-gray-600 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500'
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <label
              htmlFor='password'
              className='block text-sm font-medium text-gray-400'
            >
              Password
            </label>
            <input
              id='password'
              name='password'
              type='password'
              autoComplete='current-password'
              required
              className='appearance-none block w-full px-4 py-2 bg-[#13132b] border border-gray-600 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500'
            />
          </motion.div>
          <motion.button
            type='submit'
            className='w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 shadow-lg transform hover:scale-105'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign In
          </motion.button>
        </form>
        <p className='text-sm text-center text-gray-400'>
          Don&apos;t have an account?{' '}
          <a
            href='#'
            className='text-purple-500 hover:text-purple-400 transition-colors duration-200'
          >
            Sign up here
          </a>
        </p>
      </motion.div>
    </div>
  );
}
