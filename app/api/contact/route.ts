import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';




export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone, message } = body;

        // Send activation link to user email on registration
        const emaili = process.env.EMAIL;
        const pass = process.env.EMAIL_PASS;

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: emaili,
                pass
            },
        });

        const mailOptions = {
            from: emaili,
            to: email,
            subject: "Complain receive",
            message:  `Hi ${name} your complain has been received. We will reply you within 24hours. Thank you!`
        }
        
        await transporter.sendMail(mailOptions)


        const mailReceiver = {
            from: email,
            to:  emaili,
            subject: 'You have a complaint',
            messsage: `Hi you  have a complain from ${name}, ${email}. Please reply urgently. Thank you!`
        }

        await transporter.sendMail(mailReceiver)


        const newMessage = await db.contact.create({
            data:  {
                name,
                email,
                phone,
                message
            }
        });
        

        return NextResponse.json({ applicant: newMessage, message: "User created successfully" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
    }
}
