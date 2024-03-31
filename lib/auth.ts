import { NextAuthOptions } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';


export const authOptions: NextAuthOptions = {
    pages: {
        signIn: '/about/signup/login'
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Email", type: "email", placeholder: "john@gmail.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const user = { id: "1", name: "j Smith", email: "jsmith@exxample.com" }

                if (user) {
                    return user
                } else {
                    return null
                }
            }
        })
    ]
}