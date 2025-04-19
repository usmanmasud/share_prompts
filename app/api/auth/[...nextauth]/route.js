import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToDb } from "./utils/database";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  async session({ session }) {},
  async signIn({ profile }) {
    try {
      await connectToDb();
    } catch (error) {}
  },
});

export { handler as Get, handler as Post };
