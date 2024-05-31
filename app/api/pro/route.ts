import { NextRequest, NextResponse } from 'next/server';

import connectDb from '@/atoms/library/mongo';
import User from '@/atoms/models/googleUser';

export async function POST(request: NextRequest) {

    try {
        const { email } = await request.json();
        console.log(email)

        await connectDb();
        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json(
                { message: 'User not found' },
                { status: 404 }
            );
        }

        const pro = user.pro;
        console.log(pro);

        return NextResponse.json(
            { message: 'pro fetch successfull', pro },
            { status: 200 }
        );
    } catch (error) {
        console.log(error);

        return NextResponse.json(
            { message: 'Internal Server Error' },
            { status: 500 }
        );
    }
}