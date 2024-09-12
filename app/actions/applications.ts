'use server';
import prisma from '../libs/prisma';
import { auth } from '@/auth';
import { Schema, z } from 'zod';
// model Application {
//     id          String            @id @default(uuid())
//     companyName String
//     jobTitle    String
//     status      ApplicationStatus
//     notes       String?
//     createdAt   DateTime          @default(now())
//     updatedAt   DateTime          @updatedAt

//     userID String
//     user   User   @relation(fields: [userID], references: [id])
//   }

const jobFormSchema = z.object({
  companyName: z.string(),
  jobTitle: z.string(),
  status: z.string(),
  notes: z.optional(z.string()),
});

export default async function addJob(formData: FormData) {
  'use server';

  const session = await auth();
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
}
