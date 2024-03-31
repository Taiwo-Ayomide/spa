'use client'
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import Router from "next/router";



export default function application() {


    const Router = useRouter()

    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [confirmPhoneNumber, setConfirmPhoneNumber] = useState("");
    const [error, setError] = useState("");

    // console.log("Email: ", email)

    const handleSubmit = async (e: { preventDefault: () => void; target: any; }) => {
    // const handleSubmit = async () => {
        e.preventDefault();

        if (!email || !confirmEmail || !phoneNumber || !confirmPhoneNumber ) {
            setError("All fields are neccessary.");
            return;
        }
        const res = await fetch('/api/sign', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email, confirmEmail, phoneNumber, confirmPhoneNumber
            })
        });

        
        if(res.ok) {
            Router.push('/confirmations/emailconfirm')
        } else {
            Router.push('/confirmations/errorconfirm')
        }
    };

    return(
        <>
            <main className="w-full h-auto bg-gray-100 pb-6">
                <div className="pt-24 text-center">
                    <h1 className="font-semibold text-2xl text-blue-700">SEXUAL PURITY ACADEMY</h1>
                    <p className="italic">...The home of Love, Vision and Purity</p>
                </div>
                {/* ms-16 xl:ms-96 lg:ms-96 border-b-8 */}
                <section  className="flex justify-center items-center ms-4 me-4">
                    <div className="bg-white w-96 mt-6 pb-2 pt-6 xl:w-100 lg:w-100 h-auto rounded-lg ">
                        <div className="text-center">
                            <h1 className="text-2xl font-sans ">Create a SPA account</h1>
                            <p className="text-xl text-gray-400 font-sans">One account for everything, including <br/> admission</p>
                        </div>
                        <div className="ms-4 me-4 pt-6">
                            <form onSubmit={handleSubmit} >
                                <div>
                                    <label htmlFor="email">Email:</label> <br/>
                                    <input type="text"
                                        className="w-full border-2 border-blue-700 border-solid rounded-lg"
                                        name="email"
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="mt-4">
                                    <label htmlFor="email-confirm">Confirm Email:</label> <br/>
                                    <input type="text"
                                        className="w-full border-2 border-blue-700 border-solid rounded-lg"
                                        name="confirmEmail"
                                        onChange={e => setConfirmEmail(e.target.value)}
                                    />
                                </div>
                                <div className="mt-4">
                                    <label htmlFor="phone-number">Mobile Number:</label> <br/>
                                    <input type="text"
                                        className="w-full border-2 border-blue-700 border-solid rounded-lg"
                                        name="phoneNumber"
                                        onChange={e => setPhoneNumber(e.target.value)}
                                    />
                                </div>
                                <div className="mt-4">
                                    <label htmlFor="phone-number-confirm">Confirm Mobile Number:</label> <br/>
                                    <input type="text"
                                        className="w-full border-2 border-blue-700 border-solid rounded-lg"
                                        name="confirmPhoneNumber"
                                        onChange={e => setConfirmPhoneNumber(e.target.value)}                                    />
                                </div>
                                {/* {error && (
                                    <div className="bg-red-500 text-white w-fit  text-sm py-1 px-3 rounded-md mt-2">
                                        {error}
                                    </div>
                                )} */}
                                <div className="mt-4">
                                    <input type="submit"
                                    value="CREATE ACCOUNT"
                                    className="w-full bg-blue-700 hover:bg-green-700 text-white text-xl font-sans cursor-pointer hover:rounded-full"
                                />
                                </div>
                            </form>
                            <div className="text-center mt-4 mb-6">
                                <p>By selecting Create Account, you agree to our <Link href="/about/application" className="text-blue-700 underline">Terms</Link> and have read and acknowledge our Rules and Regulations</p>
                            </div>
                            <div className="text-center mt-4 mb-6">
                                <p>Already have an account? sign in <Link className="text-blue-700 underline" href="/about/signup/login">Here</Link></p>
                                <p>Return Home <Link className="text-blue-700 underline" href="/">Here</Link></p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}