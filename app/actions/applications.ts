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

export default async function addJob(formData: FormData) {
  'use server';

  const session = await auth();

  if (!session) {
    return;
  }

  const user = session?.user;

  console.log(user);
  const rawFormData = {
    companyName: formData.get('companyName'),
    jobTitle: formData.get('jobTitle'),
    status: formData.get('status'),
    notes: formData.get('notes'),
  };

  const validatedField = jobFormSchema.safeParse({
    rawFormData,
  });
  // Return early if the form data is invalid
  if (!validatedField.success) {
    return {
      errors: validatedField.error.flatten().fieldErrors,
    };
  }

  const newJob = await prisma.application.create({
    data: {
      companyName: rawFormData.companyName as string,
      jobTitle: rawFormData.jobTitle as string,
      status: rawFormData.status as ApplicationStatus,
      notes: rawFormData.notes as string,
      user: {
        connect: {
          id: user?.id,
        },
      },
    },
  });
  revalidatePath('/');
  return newJob;
}
