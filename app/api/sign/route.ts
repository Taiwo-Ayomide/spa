import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, confirmEmail, phoneNumber, confirmPhoneNumber } = body;

        // check if the email already exists
        const existingUserByEmail = await db.user.findUnique({
            where: { email: email }
        });
        if(existingUserByEmail) {
            return NextResponse.json({ user: null, message: "User with this email already exist"}, { status: 409 })
        }

        // Send activation link to user email on registration
        const emaili = process.env.EMAIL;
        const pass = process.env.EMAIL_PASS;


        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: emaili,
                pass
            },
        });

        const mailOptions = {
            from: emaili,
            to: email,
            subject: 'Verify your account',
            html: `Hi SPA Lovers, This application is still in building, kindly wait untill we officially opens the portal for registration.</h1>`,
            message: `We will get to you through our social media platforms, ensure you follow us.`
        }


        await transporter.sendMail(mailOptions);


        // Save the data to database
        const newUSer = await db.user.create({
            data: {
                email,
                confirmEmail,
                phoneNumber,
                confirmPhoneNumber
            }
        });         

        return NextResponse.json({ user: newUSer, message: "User created successfully"}, { status: 201 });

    } catch (error) {
        return NextResponse.json({ message: "Something went wrong!"}, { status: 500 });
    }
}