import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email } = body;

        // Check if the email  already exists
        const existinngUserByEmail = await db.email.findUnique({
            where: { email: email }
        });

        if(existinngUserByEmail) {
            return NextResponse.json({ user: null, message: "User with this email already exist" }, { status: 409 })
        }

        // Save to database
        const newMail = await db.email.create({
            data: {
                email
            }
        });
        return NextResponse.json({ user: newMail, message: "User created successfully" }, { status: 201 })

    } catch (error) {
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
    }
}
