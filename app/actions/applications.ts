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
  'use server';

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

  const validatedField = jobFormSchema.safeParse(rawFormData);

  if (!validatedField.success) {
    throw new Error('Invalid form data');
  }

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
  return newJob;
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

  const jobs = await prisma.application.findMany({
    where: {
      userID: user.id,
    },
  });

  revalidatePath('/');
  return jobs;
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
