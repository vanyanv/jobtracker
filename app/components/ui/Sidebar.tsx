import SidebarLinks from '../SidebarLinks';

export default function Sidebar() {
  const navigationLinks = [
    'Dashboard',
    'Job Applications',
    'Saved Jobs',
    'Interviews',
    'Analytics',
  ];
  return (
    <aside className='w-64 bg-white shadow-lg min-h-screen flex flex-col p-6'>
      {/* User Profile */}
      <div className='flex items-center space-x-4 pb-8 border-b border-gray-200'>
        <img
          src='/user-profile.jpg'
          alt='User Profile'
          className='h-12 w-12 rounded-full'
        />
        <div>
          <h2 className='text-lg font-semibold text-gray-900'>John Doe</h2>
          <p className='text-sm text-gray-500'>Software Engineer</p>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className='mt-8 space-y-6'>
        {navigationLinks.map((nav: string) => (
          <SidebarLinks key={nav} navigation={nav} />
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
        <a
          href='#'
          className='flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-200'
        >
          <i className='fas fa-sign-out-alt mr-4'></i>
          <span className='text-base font-medium'>Logout</span>
        </a>
      </div>
    </aside>
  );
}
