import React from 'react';

import Dashboard from '../components/ui/Dashboard';
import { auth } from '@/auth';

export default async function page() {
  const session = await auth();

  const user = session?.user || {};

  return (
    <>
      <Dashboard user={user} />
    </>
  );
}
