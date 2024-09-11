import * as motion from 'framer-motion/client';
import { FcGoogle } from 'react-icons/fc';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

export function SigninForm() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1d1d40] to-[#09092e] overflow-hidden relative p-4'>
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
        <h1 className='text-4xl font-bold text-white text-center'>Sign In</h1>

        <div className='mt-6'>
          <p className='text-center text-gray-300 mb-4'>
            Sign in your Google account:
          </p>

          <form
            action={async () => {
              'use server';
              try {
                await signIn('google', { redirectTo: '/dashboard' });
              } catch (error) {
                if (error instanceof AuthError) {
                  // Handle error
                }
                throw error;
              }
            }}
          >
            <button
              type='submit'
              className='w-full flex justify-center items-center bg-white text-gray-800 py-3 px-4 rounded-md shadow-md hover:bg-gray-100 transition duration-200'
            >
              <FcGoogle className='w-10 h-6' />
              <span>Sign In With Google</span>
            </button>
          </form>
        </div>

        <p className='text-sm text-center text-gray-400'>
          Dont have an account?{' '}
          <a
            href='/signUp'
            className='text-purple-500 hover:text-purple-400 transition-colors duration-200'
          >
            Sign up here
          </a>
        </p>
      </motion.div>
    </div>
  );
}
