import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const prisma = PrismaClient();
export const authOPtion = {
  adapter: PrismaAdapter(prisma),
};
