import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import Chat from "@/models/Chat";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],

    callbacks: {
        async signIn({ user, account }) {
            await connectDB();

            const existingUser = await User.findOne({ email: user.email });

            if (!existingUser) {
                await User.create({
                    name: user.name,
                    email: user.email,
                    image: user.image,
                    provider: account.provider,
                    plan: "lite",
                    credits: 20,
                });
            }
            
            return true;
        },
        
        async session({ session }) {
            await connectDB();
            const dbUser = await User.findOne({ email: session.user.email });

            if (dbUser) {
                session.user.id = dbUser._id.toString();
                // Keep session light and authoritative values server-side.
                // Do not inject mutable credit counts here; fetch credits via server APIs when needed.
            }

            return session;
        },
    },

    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
