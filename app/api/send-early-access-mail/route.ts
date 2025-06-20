import { sendEmail } from "@/utils/sendEmail";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { email } = body;

    try {
        await sendEmail(email);
        console.log('Email Sent!');
    } catch (error) {
        console.error('Error Sending Early Access Signup Email', error);
        return NextResponse.json({
            message: 'Error Sending Early Access Signup Email'
        }, {
            status: 500
        })
    }

    return NextResponse.json({
        message: 'Succes Sending Conformation Email'
    }, {
        status: 200
    });
}