"use client";

import { useState } from "react";

export default function page() {
    const [email, setEmail] = useState("")
    const [emailNew, setEmailNew] = useState("")
    const [emailUpdate, setEmailUpdate] = useState("")
    const [password, setPassword] = useState("")
    const [passwordNew, setPasswordNew] = useState("")
    const [passwordUpdate, setPasswordUpdate] = useState("")

    return(
        <>
            <main>
                <div>
                    <h1 className="font-bold text-xl uppercase">Change email or Password</h1>
                </div>
                <section className="xl:mt-36 lg:mt-36 md:mt-10 mt-5">
                    <aside>
                        <div>
                            <h1 className="font-bold text-2xl uppercase text-blue-700">I want to change my: </h1>
                        </div>
                    </aside>
                </section>
                <fieldset className="block xl:flex lg:flex">
                    <section className="xl:mt-5 lg:mt-5 mt-2" id="show">
                        <div>
                            <h1 className="font-bold text-2xl uppercase font-serif">EMAIL:</h1>
                            <form>
                                <div>
                                    <input type="email" placeholder="Input your current email" className="w-full xl:w-80 lg:w-80 border-2 border-solid border-blue-500 rounded-lg ps-5 pe-5 placeholder:text-blue-500" onChange={e => setEmail(e.target.value)} />
                                </div>
                                <div className="mt-2">
                                    <input type="email" placeholder="Input new Email" className="w-full xl:w-80 lg:w-80 border-2 border-solid border-blue-500 rounded-lg ps-5 pe-5 placeholder:text-blue-500" onChange={e => setEmailNew(e.target.value)} />
                                </div>
                                <div className="mt-2">
                                    <input type="email" placeholder="Confirm new Email" className="w-full xl:w-80 lg:w-80 border-2 border-solid border-blue-500 rounded-lg ps-5 pe-5 placeholder:text-blue-500" onChange={e => setEmailUpdate(e.target.value)} />
                                </div>
                                <div className="mt-2">
                                    <input type="submit" value="Change Email"  className="xl:w-80 lg:w-80 bg-blue-700 hover:bg-green-700 text-white text-xl font-sans cursor-pointer hover:rounded-full"/>
                                </div>
                            </form>
                        </div>
                    </section>
                    <section className="xl:mt-5 lg:mt-5 mt-12 xl:ms-56 lg:ms-20 md:mt-12 sm:mt-12">
                        <div>
                            <h1 className="font-bold text-2xl uppercase font-serif">password:</h1>
                            <form>
                                <div>
                                    <input type="password" placeholder="Input your current Password" className="w-full xl:w-80 lg:w-80 border-2 border-solid border-blue-500 rounded-lg ps-5 pe-5 placeholder:text-blue-500" onChange={e => setPassword(e.target.value)} />
                                </div>
                                <div className="mt-2">
                                    <input type="password" placeholder="Input new Password" className="w-full xl:w-80 lg:w-80 border-2 border-solid border-blue-500 rounded-lg ps-5 pe-5 placeholder:text-blue-500" onChange={e => setPasswordNew(e.target.value)} />
                                </div>
                                <div className="mt-2">
                                    <input type="password" placeholder="Confirm new Password" className="w-full xl:w-80 lg:w-80 border-2 border-solid border-blue-500 rounded-lg ps-5 pe-5 placeholder:text-blue-500" onChange={e => setPasswordUpdate(e.target.value)} />
                                </div>
                                <div className="mt-2">
                                    <input type="submit" value="Change Password"  className="xl:w-80 lg:w-80 bg-blue-700 hover:bg-green-700 text-white text-xl font-sans cursor-pointer hover:rounded-full"/>
                                </div>
                            </form>
                        </div>
                    </section>
                </fieldset>
            </main>
        </>
    )
}