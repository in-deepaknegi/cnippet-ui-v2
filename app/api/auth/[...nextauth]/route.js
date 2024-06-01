import { NextResponse } from "next/server";
import NextAuth from "next-auth/next"
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from "next-auth/providers/github";
import connectDb from '@/atoms/library/mongo';
import User from '@/atoms/models/googleUser';

const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],
    callbacks: {
        async signIn({ user, account }) {

            const { name, email } = user;
            console.log(user);
            try {
                await connectDb();

                const userExists = await User.findOne({ email });

                
                if (!userExists) {
                    await User.create({ name, email });

                    try {
                        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/resend/`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({ name, email }),
                        });
    
                        const json = await res.json();
                        console.log(json);
    
                    } catch (error) {
                        console.error("Error:", error);
                    }

                    return NextResponse.json(
                        { message: "User Registered" },
                        { status: 201 }
                    );
                }
            } catch (error) {
                console.log(error);
            }

            return user;
        }
    }
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }