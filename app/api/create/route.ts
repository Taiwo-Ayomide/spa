import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from 'bcrypt';



export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { surname, firstname, lastname, religion, churchName, pastorName, education, address, country, state, local, password, email } = body;


        const hashPassword = await hash(password, 10);
        
        const newApplicant = await db.form.create({
            data: {
                surname,
                firstname,
                lastname,
                religion,
                churchName,
                pastorName,
                education,
                address,
                country,
                state,
                local,
                password: hashPassword,
                email
            }
        });

        return NextResponse.json({ applicant: newApplicant, message: "User created successfully" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
    }
}