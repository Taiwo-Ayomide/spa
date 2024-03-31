'use client'
import React, { FormEvent, useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function application() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();


    const handleSubmit = async (e: FormEvent) => {

        const form = new FormData(e.target as HTMLFormElement);
        e.preventDefault()

        try {
            const res = await signIn("credentials", {
                email: form.get('email'),
                password: form.get('password'),
                callbackUrl: '/dashboard'
            });


        } catch (error) {
            console.log(error)
        }
    };

    return(
        <>
            <main className="w-full h-auto bg-gray-100 pb-48">
                <div className="pt-24 text-center">
                    <h1 className="font-semibold text-2xl text-blue-700">SEXUAL PURITY ACADEMY</h1>
                    <p className="italic">...The home of Love, Vision and Purity</p>
                </div>
                {/* ms-16 xl:ms-96 lg:ms-96 border-b-8 */}
                <section  className="flex justify-center items-center ms-4 me-4">
                    <div className="bg-white w-96 mt-6 pb-2 pt-6 xl:w-100 lg:w-100 h-auto rounded-lg">
                        <div className="text-center">
                            <h1 className="text-2xl font-sans ">Welcome back, Please Login</h1>
                            {/* <p className="text-xl text-gray-400 font-sans">One account for everything, including <br/> admission</p> */}
                        </div>
                        <div className="ms-4 me-4 pt-6">
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email">Email:</label> <br/>
                                    <input type="text"
                                        className="w-full border-2 border-blue-700 border-solid rounded-lg"
                                        name="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="mt-4">
                                    <label htmlFor="password">Password</label> <br/>
                                    <input type="password"
                                        className="w-full border-2 border-blue-700 border-solid rounded-lg"
                                        name="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="mt-4">
                                    <input type="submit"
                                    value="LOGIN"
                                    className="w-full bg-blue-700 text-white text-xl font-sans cursor-pointer hover:rounded-full"
                                />
                                </div>
                                {error && (
                                    <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                                        {error}
                                    </div>
                                )}
                            </form>
                            <div className="text-center mt-4 mb-6">
                                <p>Don't have an account? sign up <Link className="text-blue-700" href="/about/signup">Here</Link></p>
                                <p>Return Home <Link className="text-blue-700 underline" href="/">Here</Link></p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
