import { ApplicationStatus, PrismaClient } from '@prisma/client';
import users from './usersData';
const prisma = new PrismaClient();
async function main() {
  //go thru each user
  for (const profile of users) {
    console.log(profile);
    await prisma.user.create({
      data: {
        email: profile.email,
        name: profile.name,
        password: profile.password,
        applications: {
          createMany: {
            data: profile.applications.map(application => ({
              ...application,
              status: application.status as ApplicationStatus
            })),
          },
        },
      },
    });
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
