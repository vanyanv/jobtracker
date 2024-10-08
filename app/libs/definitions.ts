import { z } from 'zod';

export const SignupFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long' })
    .trim(),
  email: z.string().email({ message: 'Please enter a valid email' }).trim(),
  password: z
    .string()
    .min(6, { message: 'Please enter a password at least 6 characters long' })
    .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
    .regex(/[0-9]/, { message: 'Contain at least one number.' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Contain at least one special character.',
    })
    .trim(),
});

//need to understand this
export type FormState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

export type ApplicationTypes = {
  id: string;
  title: string;
  company: string;
  status: string;
};

export type User = {
  id?: string | null | undefined;
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
};
