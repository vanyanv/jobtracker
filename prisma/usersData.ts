import { use } from 'react';

const users = [
  {
    email: 'john.doe@example.com',
    password: 'hashedpassword1',
    name: 'John Doe',
    applications: [
      {
        companyName: 'Google',
        jobTitle: 'Software Engineer',
        status: 'APPLIED', // Matches ApplicationStatus enum
        notes: 'Initial application, waiting for response.',
      },
      {
        companyName: 'Facebook',
        jobTitle: 'Frontend Developer',
        status: 'INTERVIEW',
        notes: 'Scheduled technical interview.',
      },
      {
        companyName: 'Amazon',
        jobTitle: 'Backend Developer',
        status: 'OFFERED',
        notes: 'Offer received, considering.',
      },
      {
        companyName: 'Netflix',
        jobTitle: 'Full Stack Engineer',
        status: 'REJECTED',
        notes: 'Rejected after final round.',
      },
    ],
  },
  {
    email: 'jane.smith@example.com',
    password: 'hashedpassword2',
    name: 'Jane Smith',
    applications: [
      {
        companyName: 'Microsoft',
        jobTitle: 'DevOps Engineer',
        status: 'IN_REVIEW',
        notes: 'Application in review, awaiting feedback.',
      },
      {
        companyName: 'Spotify',
        jobTitle: 'Cloud Engineer',
        status: 'APPLIED',
        notes: 'Initial application submitted, no response yet.',
      },
      {
        companyName: 'Tesla',
        jobTitle: 'AI Engineer',
        status: 'INTERVIEW',
        notes: 'First interview completed, awaiting second round.',
      },
    ],
  },
  {
    email: 'mike.jones@example.com',
    password: 'hashedpassword3',
    name: 'Mike Jones',
    applications: [
      {
        companyName: 'LinkedIn',
        jobTitle: 'Site Reliability Engineer',
        status: 'OFFERED',
        notes: 'Job offer received, considering salary negotiation.',
      },
      {
        companyName: 'Shopify',
        jobTitle: 'Backend Developer',
        status: 'APPLIED',
        notes: 'Application submitted, waiting for recruiter response.',
      },
      {
        companyName: 'Apple',
        jobTitle: 'iOS Developer',
        status: 'REJECTED',
        notes: 'Rejected after the technical interview round.',
      },
    ],
  },
  {
    email: 'susan.brown@example.com',
    password: 'hashedpassword4',
    name: 'Susan Brown',
    applications: [
      {
        companyName: 'Stripe',
        jobTitle: 'Payment Integration Engineer',
        status: 'INTERVIEW',
        notes: 'Second interview scheduled with the team lead.',
      },
      {
        companyName: 'Slack',
        jobTitle: 'Frontend Engineer',
        status: 'APPLIED',
        notes: 'Applied via job portal, awaiting response.',
      },
    ],
  },
];

export default users;
