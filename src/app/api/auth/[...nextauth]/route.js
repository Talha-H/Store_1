import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
export const authOPtion = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "name", type: "text", placeholder: "Talha" },
        password: { label: "password", type: "password" },
        email: { label: "email", type: "email" },
      },
      authorize: async (credentials) => {
        if (!credentials.username || !credentials.password) {
          throw new Error("Username and Password are required");
        }
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });
        if (!user) {
          return null;
        }
        // If the user exists, we verify the password using bcrypt compareSync() function
        const passwordMatched = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );
        if (!passwordMatched) {
          return null;
        }
        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOPtion);
export { handler as GET, handler as POST };
