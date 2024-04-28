import { NextResponse } from "next/server";
import NextAuth from "next-auth/next"
import GoogleProvider from 'next-auth/providers/google'

import connectDb from '@/atoms/library/mongo';
import User from '@/atoms/models/googleUser';

const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        })
    ],
    callbacks: {
        async signIn({ user, account }) {

            if (account.provider === "google") {
                const { name, email } = user;
                console.log(user);
                try {
                    await connectDb();

                    const userExists = await User.findOne({ email });

                    if (!userExists) {
                        await User.create({ name, email });

                        return NextResponse.json({
                            message: "User Registered"
                        },
                            { status: 201 }
                        );
                    }
                } catch (error) {
                    console.log(error);
                }
            }
            return user;
        }
    }
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }