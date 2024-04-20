import NextAuth from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import connectDb from '@/Database/Mongodb';
import User from '@/Models/User';

export const authOptions:any = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        // Define the credentials you expect from users
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials:any) => {
        const { email, password } = credentials;
        try {
          await connectDb();
          const currentUser = await User.findOne({ email });
          if (!currentUser) {
            return null;
          }
          const currentPassword = await bcrypt.compare(password, currentUser.password);
          if (!currentPassword) {
            return null;
          }
          return currentUser;
        } catch (error) {
          console.error("Error during authentication:", error);
          return null; 
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};
