"use server";

import { signOut } from "../api/auth/[...nextAuth]/route";

export const logout = async () => {
  await signOut({
    redirect: true,
    redirectTo: "/login",
  });
};
