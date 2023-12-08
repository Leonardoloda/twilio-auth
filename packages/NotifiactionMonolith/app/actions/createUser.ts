"use server";

import { z } from "zod";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";

const client = new PrismaClient();

export async function createUser(_: unknown, formData: FormData) {
  const user = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    password: formData.get("password"),
    enable2fa: !!formData.get("enable2fa"),
  };

  const userSchema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    phone: z.string().min(9),
    password: z.string().min(8),
    enable2fa: z.boolean(),
  });

  try {
    const userValidated = userSchema.parse(user);

    await client.user.create({
      data: {
        ...userValidated,
        verified: userValidated.enable2fa ? null : new Date(),
      },
    });
  } catch (error) {
    console.error("Failed to create an user", error);

    return { message: "Failed to create an user" };
  }

  redirect("/login");
}
