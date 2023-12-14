import { AuthError } from "next-auth";
import { signIn } from "next-auth/react";

import { z } from "zod";

export async function authenticate(formData: FormData) {
  const credentials = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const credentialsSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  });

  try {
    const credentialsValidated = credentialsSchema.parse(credentials);

    await signIn("credentials", {
      redirect: true,
      callbackUrl: "/home",
      ...credentialsValidated,
    });
    
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}
