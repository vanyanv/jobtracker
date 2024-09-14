import React from 'react';

import Dashboard from '../components/ui/Dashboard';
import { auth } from '@/auth';
import { getMostRecentJobs } from '../actions/dashboard';

export default async function page() {
  const session = await auth();

  const user = session?.user || {};

  const jobs = await getMostRecentJobs();
  return (
    <>
      <Dashboard user={user} jobs={jobs.data ?? []} />
    </>
  );
}
