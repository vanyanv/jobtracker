//this is a server side rendered component

import SidebarLinks from '../SidebarLinks';
import { auth } from '@/auth';
import Link from 'next/link';

export default async function Sidebar() {
  //get user session
  const session = await auth();
  //
  const user = session?.user || {};

  const navigationLinks: { [key: string]: string } = {
    Dashboard: '/dashboard',
    Ai: '/dashboard/ai',
    'Job Applications': '/dashboard/applications',
    Interviews: '/dashboard/interviews',
    Analytics: '/dashboard/analytics',
  };

  return (
    <aside className='w-64 bg-white shadow-lg min-h-screen flex flex-col p-6 fixed'>
      {/* User Profile */}
      <div className='flex items-center space-x-4 pb-8 border-b border-gray-200'>
        <img
          src={user?.image || '/default-avatar.png'}
          alt='User Profile'
          className='h-12 w-12 rounded-full'
        />
        <div>
          <h2 className='text-lg font-semibold text-gray-900'>{user.name}</h2>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className='mt-8 space-y-6'>
        {Object.keys(navigationLinks).map((key) => (
          <SidebarLinks
            key={key}
            navigation={navigationLinks[key]}
            name={key}
          />
        ))}
      </nav>
      {/* Footer Links */}
      <div className='mt-auto space-y-6'>
        <Link
          href='/dashboard/settings'
          className='flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-200'
        >
          <i className='fas fa-cog mr-4'></i>
          <span className='text-base font-medium'>Settings</span>
        </Link>
      </div>
    </aside>
  );
}
