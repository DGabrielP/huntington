import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const post1 = await prisma.creature.upsert({
    where: { title: 'Aliens' },
    update: {},
    create: {
      title: 'wizard',
      description: 'Magic arts Student',
      lastSee: "Machangara",
      countLastSee:12,  
      extinct: false,
    },
  });

    const post2 = await prisma.creature.upsert({
    where: { title: 'Vampires' },
    update: {},
    create: {
      title: 'Vampires',
      description: 'leave its grave at night to drink the blood of the humans',
      lastSee:
        "Cruz del vado",
      countLastSee:5,  
      extinct: false,
    },
  });



  console.log({ post1, post2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });