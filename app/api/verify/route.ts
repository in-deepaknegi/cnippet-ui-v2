import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

import connectDb from '@/atoms/library/mongo';
import User from '@/atoms/models/googleUser';

const generatedSignature = (
    razorpayOrderId: string,
    razorpayPaymentId: string
) => {
    const keySecret = process.env.RAZORPAY_KEY;
    if (!keySecret) {
        throw new Error(
            'Razorpay key secret is not defined in environment variables.'
        );
    }
    const sig = crypto
        .createHmac('sha256', keySecret)
        .update(razorpayOrderId + '|' + razorpayPaymentId)
        .digest('hex');
    return sig;
};


export async function POST(request: NextRequest) {
    const { orderCreationId, razorpayPaymentId, razorpaySignature, email } =
        await request.json();

    const signature = generatedSignature(orderCreationId, razorpayPaymentId);
    console.log(signature);
    console.log(email);

    if (signature !== razorpaySignature) {
        return NextResponse.json(
            { message: 'payment verification failed', isOk: false },
            { status: 400 }
        );
    }
    try {
        await connectDb();
        const user = await User.findOne({ email });
        user.pro = true;
        await user.save();
        
        // console.log("user updated")

        return NextResponse.json(
            { message: 'user update success', isOk: true  },
            { status: 200 },
        );
    } catch (error) {
        console.log(error)
    }
    return NextResponse.json(
        { message: 'payment verified successfully', isOk: false },
        { status: 400 }
    );
}