import { signIn, providerMap } from '@/auth';
import { AuthError } from 'next-auth';

export default async function SigninForm() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 p-4'>
      <div className='w-full max-w-md bg-white shadow-md rounded-lg p-6'>
        <h1 className='text-2xl font-bold text-center text-gray-800 mb-6'>
          Sign In
        </h1>

        <form
          action={async (formData) => {
            'use server';
            try {
              await signIn('credentials', formData);
            } catch (error) {
              if (error instanceof AuthError) {
                // Handle error
              }
              throw error;
            }
          }}
          className='space-y-4'
        >
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700'
            >
              Email
            </label>
            <input
              name='email'
              id='email'
              type='email'
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              placeholder='Enter your email'
              required
            />
          </div>

          <div>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-gray-700'
            >
              Password
            </label>
            <input
              name='password'
              id='password'
              type='password'
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              placeholder='Enter your password'
              required
            />
          </div>

          <div>
            <input
              type='submit'
              value='Sign In'
              className='w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200'
            />
          </div>
        </form>

        <div className='mt-6'>
          <p className='text-center text-gray-600'>Or sign in with:</p>
          <div className='flex flex-col gap-2 mt-4'>
            {Object.values(providerMap).map((provider) => (
              <form
                key={provider.id}
                action={async () => {
                  'use server';
                  try {
                    await signIn(provider.id);
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
                  className='w-full flex justify-center items-center bg-gray-100 text-gray-700 py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-200 transition duration-200'
                >
                  <span>Sign in with {provider.name}</span>
                </button>
              </form>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
