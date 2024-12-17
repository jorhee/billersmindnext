import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    // Using Google Auth (you need to set up Google OAuth credentials)
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Providers.Facebook({
    	clientId: process.env.FACEBOOK_CLIENT_ID,
    	clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    })

    // Using a Credentials Provider (username/password authentication)
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        if (email === "test@example.com" && password === "password") {
          return { id: 1, name: "Test User", email };
        }

        return null;
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/auth/signin",
  },
  
  secret: process.env.NEXTAUTH_SECRET,
};
