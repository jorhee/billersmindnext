// src/app/api/auth/[...nextauth]/route.js

import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";

export const GET = NextAuth(authOptions);
export const POST = NextAuth(authOptions);
