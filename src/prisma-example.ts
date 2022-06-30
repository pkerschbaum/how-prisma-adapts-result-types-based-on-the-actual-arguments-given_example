import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function run() {
  const user = await prisma.user.findUniqueOrThrow({
    where: { id: 1 },
    include: { orgUnit: true },
  });
  user.id;
  user.orgUnit;
  user.orgUnit.id;

  await prisma.user.findUniqueOrThrow({
    where: { id: 1 },
    include: { orgUnit: true },
    foo: "bar",
  });
}
