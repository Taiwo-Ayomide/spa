import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { email, emailNew, emailUpdate, password, passwordNew, passwordUpdate } = body;


        
        const newUserEmail = await db.user.findUnique({
            where: { email: email }
        });
        if(newUserEmail) {
            const newEmailUser = await db.user.update({
                where: { email: emailNew },
                data: undefined
            })
            return NextResponse.json({ user: null, message: "User with this email already exist"}, { status: 409 })
        }
                // Save the data to database

        // const newUSer = await db.user.create({
        //     data:  {
        //         // email,
        //         // confirmEmail,
        //         // phoneNumber,
        //         // confirmPhoneNumber
        //     }
        // });         

        // return NextResponse.json({ user: newUSer, message: "User created successfully"}, { status: 201 });

        
    } catch (error) {
        return NextResponse.json({ user: null, message: "Password or Email cannot be changed" }, { status: 504 })
    }
}