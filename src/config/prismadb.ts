import { PrismaClient } from "../../prisma/generated/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const getClient = () => {
  if (!globalThis.prisma) {
    globalThis.prisma = new PrismaClient();
  }

  return globalThis.prisma;
};

export default getClient();
// singleton for prisma client