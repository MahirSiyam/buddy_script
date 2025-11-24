import NextAuth, { AuthOptions, User as NextAuthUser } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import bcrypt from 'bcryptjs';
import { connectToDatabase } from '@/lib/mongodb';
import { User } from '@/models/User';

interface CustomUser extends NextAuthUser {
  firstName: string;
  lastName: string;
}

interface GoogleProfile {
  email: string;
  name?: string;
  picture?: string;
  sub: string;
}

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials): Promise<CustomUser | null> {
        try {
          if (!credentials?.email || !credentials?.password) {
            throw new Error('Email and password are required');
          }

          const { db } = await connectToDatabase();

          const normalizedEmail = credentials.email.toLowerCase().trim();
          const user = await db.collection<User>('users').findOne({ 
            email: normalizedEmail 
          });

          if (!user) {
            throw new Error('No user found with this email');
          }

          if (!user.password) {
            throw new Error('Account was created with a social provider');
          }

          const isPasswordValid = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (!isPasswordValid) {
            throw new Error('Invalid password');
          }

          return {
            id: user._id?.toString() || '',
            email: user.email,
            name: `${user.firstName} ${user.lastName}`,
            firstName: user.firstName,
            lastName: user.lastName,
          };
        } catch (error) {
          console.error('Authorization error:', error);
          throw error;
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user, account, profile }) {
      if (user) {
        const customUser = user as CustomUser;
        token.firstName = customUser.firstName;
        token.lastName = customUser.lastName;
        
        // Handle Google provider
        if (account?.provider === 'google' && profile) {
          const googleProfile = profile as GoogleProfile;
          const { db } = await connectToDatabase();
          
          // Check if user exists in database
          const existingUser = await db.collection<User>('users').findOne({ 
            email: googleProfile.email 
          });

          if (!existingUser) {
            // Create new user for Google sign-in
            const names = googleProfile.name?.split(' ') || ['', ''];
            const newUser: User = {
              firstName: names[0],
              lastName: names[1] || '',
              email: googleProfile.email,
              password: '', // No password for social login
              image: googleProfile.picture || null,
              createdAt: new Date(),
              updatedAt: new Date(),
            };

            const result = await db.collection<User>('users').insertOne(newUser);
            token.id = result.insertedId.toString();
            token.firstName = newUser.firstName;
            token.lastName = newUser.lastName;
          } else {
            token.id = existingUser._id?.toString();
            token.firstName = existingUser.firstName;
            token.lastName = existingUser.lastName;
          }
        } else {
          token.id = user.id;
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.firstName = token.firstName as string;
        session.user.lastName = token.lastName as string;
      }
      return session;
    },
    async signIn({ user, account, profile }) {
      if (account?.provider === 'google' && profile) {
        try {
          const googleProfile = profile as GoogleProfile;
          const { db } = await connectToDatabase();
          
          // Check if user exists
          const existingUser = await db.collection<User>('users').findOne({ 
            email: googleProfile.email 
          });

          if (existingUser) {
            // Update user with Google info if needed
            await db.collection<User>('users').updateOne(
              { email: googleProfile.email },
              { 
                $set: { 
                  image: googleProfile.picture || null,
                  emailVerified: new Date(),
                  updatedAt: new Date()
                } 
              }
            );
          }
          
          return true;
        } catch (error) {
          console.error('Error in Google sign-in:', error);
          return false;
        }
      }
      return true;
    }
  },
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },
  debug: process.env.NODE_ENV === 'development',
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };