import SidebarLinks from '../SidebarLinks';
import { signOut } from '@/auth';
type User = {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
};

type SidebarProps = {
  user: User;
};

export default function Sidebar({ user }: SidebarProps) {
  const navigationLinks: { [key: string]: string } = {
    Dashboard: '/dashboard',
    'Job Applications': '/dashboard/applications',
    'Saved Jobs': '/dashboard/saved',
    Interviews: '/dashboard/interviews',
    Analytics: '/dashboard/analytics',
  };

  return (
    <aside className='w-64 bg-white shadow-lg min-h-screen flex flex-col p-6'>
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
        <a
          href='#'
          className='flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-200'
        >
          <i className='fas fa-cog mr-4'></i>
          <span className='text-base font-medium'>Settings</span>
        </a>
        <form
          action={async () => {
            'use server';
            await signOut({ redirectTo: '/' });
          }}
          className='flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-200'
        >
          <i className='fas fa-sign-out-alt mr-4'></i>
          <button className='text-base font-medium'>Logout</button>
        </form>
      </div>
    </aside>
  );
}
