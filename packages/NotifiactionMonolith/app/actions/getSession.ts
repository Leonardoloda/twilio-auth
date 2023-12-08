import { Session } from "next-auth";
import { auth } from "../api/auth/[...nextAuth]/route";

export const getSession = async (): Promise<Session | null> => {
  return auth();
};
