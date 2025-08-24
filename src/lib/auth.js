// /lib/auth.js

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { MongoClient } from "mongodb";
import bcrypt from "bcrypt";
import connectMongo from "@/lib/mongodb";
import User from "@/models/User";

const clientPromise = connectMongo();

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Email" },
        password: { label: "Password", type: "password", placeholder: "Password" }
      },
      async authorize(credentials) {
        try {
          await connectMongo();

          const user = await User.findOne({ email: credentials.email });

          if (user && await bcrypt.compare(credentials.password, user.password)) {
            return user;
          }

          throw new Error("Invalid email or password");
        } catch (error) {
          console.error("Authorization error:", error.message);
          return null;
        }
      }
    })
  ],
  adapter: MongoDBAdapter(await clientPromise),
  secret: process.env.NEXTAUTH_SECRET
};
