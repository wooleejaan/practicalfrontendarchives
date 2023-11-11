import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function ProductPage() {
  // use zod-prisma-types
  const product = await prisma.product.findUnique({
    where: {
      id: 1,
    },
  });

  return <div>product-page</div>;
}
