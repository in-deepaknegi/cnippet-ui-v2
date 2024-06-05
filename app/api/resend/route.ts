import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import MessageUsEmail from '@/components/EmailMessage';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: any): Promise<NextResponse> {
    const { name, email }: { name: string, email: string } = await req.json();
    console.log(email);

    try {
        const data = await resend.emails.send({
            from: 'Cnippet Ui <welcome@cnippet.com>', // your verified domain
            to: email, // the email address you want to send a message
            subject: `Welcome to Cnippet Ui`,
            react: MessageUsEmail({ name, email }),
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}