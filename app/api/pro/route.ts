import { NextRequest, NextResponse } from 'next/server';

import connectDb from '@/atoms/library/mongo';
import User from '@/atoms/models/googleUser';

export async function POST(request: NextRequest) {
    const { email } = await request.json();
    // console.log(email)

    await connectDb();
    const user = await User.findOne({ email });
    const pro = user.pro;
    // console.log(pro);

    if (pro == false) {
        return NextResponse.json(
            { message: 'no pro record found', pro },
            { status: 200 }
        );
    }

    return NextResponse.json(
        { message: 'payment verification failed', pro },
        { status: 200 }
    );

}