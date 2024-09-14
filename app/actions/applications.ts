'use server';

import prisma from '../libs/prisma';
import { auth } from '@/auth';
import { ApplicationStatus } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const jobFormSchema = z.object({
  companyName: z.string(),
  jobTitle: z.string(),
  status: z.string(),
  notes: z.optional(z.string()),
});

export async function addJob(formData: FormData) {
  const session = await auth();

  if (!session) {
    throw new Error('Authentication failed');
  }

  const user = session.user;

  if (!user) {
    throw new Error('User not found');
  }

  const rawFormData = {
    companyName: formData.get('companyName'),
    jobTitle: formData.get('jobTitle'),
    status: formData.get('status'),
    notes: formData.get('notes'),
  };

  console.log('In AddJob', rawFormData);
  const validatedField = jobFormSchema.safeParse(rawFormData);
  console.log('In AddJob', validatedField);
  if (!validatedField.success) {
    throw new Error('Invalid form data');
  }

  try {
    const newJob = await prisma.application.create({
      data: {
        companyName: rawFormData.companyName as string,
        jobTitle: rawFormData.jobTitle as string,
        status: rawFormData.status as ApplicationStatus,
        notes: rawFormData.notes as string,
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    });
    revalidatePath('/');
    console.log('In AddJob', newJob);
    return { message: `New Job added successfully ${newJob}` };
  } catch (error) {
    return { message: `Failed to add new Job` };
  }
}

export async function getAllJobs() {
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
      where: {
        userID: user.id,
      },
    });

    return { data: jobs };
  } catch (error) {
    return { message: `Failed to get All Jobs` };
  }
}

export async function deleteAJob(id: string) {
  const session = await auth();

  if (!session) {
    throw new Error('Authentication failed');
  }

  const user = session.user;

  if (!user) {
    throw new Error('User not found');
  }

  const job = await prisma.application.delete({
    where: {
      id,
    },
  });

  revalidatePath('/');
  return job;
}
