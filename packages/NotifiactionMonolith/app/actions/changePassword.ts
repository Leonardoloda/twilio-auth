"use server";

import { PrismaClient } from "@prisma/client";
import { getSession } from "./getSession";
import { redirect } from "next/navigation";

const client = new PrismaClient();

export const changePassword = async (_: string, formData: FormData) => {
  const newPassword = <string>formData.get("password");
  const session = await getSession();

  if (!session?.user?.email) return redirect("/login");

  await client.user.update({
    where: {
      email: session?.user?.email,
    },
    data: {
      password: newPassword,
    },
  });

  return "Password changed successfully";
};
