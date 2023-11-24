import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const getClient = () => {
  if (process.env.NODE_ENV !== 'production') {
    if (!globalThis.prisma) {
      globalThis.prisma = new PrismaClient();
    }

    return globalThis.prisma;
  } else {
    return new PrismaClient();
  }
};

export default getClient();


// prisma singleton