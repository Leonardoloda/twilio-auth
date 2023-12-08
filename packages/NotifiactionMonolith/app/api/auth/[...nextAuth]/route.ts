import NextAuth from "next-auth";

import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient, User } from "@prisma/client";
import type { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUser } from "../../../actions/getUser";

const prismaClient = new PrismaClient();

export const authConfig = {
  pages: {
    signIn: "/login",
    verifyRequest: "/verify",
    newUser: "/register",
  },
  session: {
    strategy: "jwt",
    maxAge: 3000,
  },
  providers: [
    CredentialsProvider({
      id: "credentials",
      credentials: {
        email: { label: "mail@mail.com", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize({ email, password }) {
        if (!email || !password) return null;

        const user = await getUser(<string>email);

        if (!user) return null;

        return user;
      },
    }),
  ],
  adapter: PrismaAdapter(prismaClient),
  secret: process.env.SECRET,
} satisfies NextAuthConfig;

export const {
  auth,
  signIn,
  signOut,
  update,
  handlers: { GET, POST },
} = NextAuth(authConfig);
