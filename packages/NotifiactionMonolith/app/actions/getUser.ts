"use server";

import { PrismaClient, User } from "@prisma/client";

const client = new PrismaClient();

export const getUser = async (email?: string | null): Promise<User | null> => {
  if (!email) return null;

  return client.user.findFirst({
    where: {
      email,
    },
  });
};
