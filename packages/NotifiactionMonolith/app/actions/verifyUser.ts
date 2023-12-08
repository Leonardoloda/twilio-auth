"use server";

import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
import { checkVerification } from "../../Client/SidecarClient";

const client = new PrismaClient();

export const confirmUser = async (formData: FormData) => {
  const email = <string | null>formData.get("email");
  const code = <string | null>formData.get("code");

  if (!email || !code) return;

  const user = await client.user.findFirst({ where: { email: <string>email } });

  if (user && user.verified) redirect("/home");

  if(!user || !user.phone)
    throw new Error("Missing config")

  await checkVerification({
    to: user?.phone,
    code
  });

  await client.user.update({
    where: {
      email,
    },
    data: {
      verified: new Date(),
    },
  });

  redirect("/home");
};
