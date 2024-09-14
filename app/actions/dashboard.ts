'use server';

import { auth } from '@/auth';
import prisma from '../libs/prisma';

export async function getMostRecentJobs() {
  const session = await auth();

  if (!session) {
    throw new Error('Authentication failed');
  }

  const user = session.user;

  if (!user) {
    throw new Error('User not found');
  }

  try {
    const jobs = await prisma.application.findMany({
      take: 4,
      where: {
        userID: user.id,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return { data: jobs };
  } catch (error) {
    return { message: `Failed to get All Jobs` };
  }
}
