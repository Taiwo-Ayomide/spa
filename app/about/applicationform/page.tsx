'use client'
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';


export default function apply() {

    const Router = useRouter()



    const [surname, setSurname] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [religion, setReligion] = useState("")
    const [churchName, setChurchname] = useState("")
    const [pastorName, setpastorName] = useState("")
    const [education, setEducation] = useState("")
    const [address, setAddress] = useState("")
    const [country, setNationality] = useState("")
    const [state, setState] = useState("")
    const [local, setLocal] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [errors, setErrors] = useState("")



    const submitHandle = async (e: { preventDefault: () => void; target: any; }) => {
        e.preventDefault();

        if(!surname || !firstname || !lastname || !religion || !churchName || !pastorName || !education || !address || !country || !state || !local || !password || !email) {
            setErrors("All Field are necessary");
            return
        }

        const res = await fetch('/api/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                surname, firstname, lastname, religion, churchName, pastorName, education, address, country, state, local, password, email
            })
        });

        if(res.ok) {
            Router.push('/about/signup/upload')
        } else {
            Router.push('/confirmations/regerror')
        }
    }

    return(
        <>
            <main>
                <div className="w-full h-6 bg-red-700"></div>
                <div className='text-center'>
                    <h1 className='text-2xl text-blue-700 font-bold'>ADMISSION APPLICATION FORM</h1>
                </div>
                <section className='ms-6 me-6 xl:ms-24 lg:ms-24 md:ms-32 xl:me-40 lg:me-40 mt-12'>
                    <form onSubmit={submitHandle}>
                        <aside className='block xl:flex lg:flex md:block'>
                            <div>
                                <label className='font-bold' htmlFor="surnameb">SURNAME:</label> <br/>
                                <input
                                    type="text"
                                    name="surname"
                                    className="border-solid border-2 border-blue-700 rounded-lg w-full xl:w-96 lg:w-64 h-10" 
                                    onChange={e => setSurname(e.target.value)}
                                />
                            </div>
                            <div className='xl:ms-6 lg:ms-6 md:ms-6'>
                                <label className='font-bold' htmlFor="firstname">FIRSTNAME:</label> <br/>
                                <input
                                    type="text"
                                    name="firstname"
                                    className="border-solid border-2 border-blue-700 rounded-lg w-full xl:w-96 lg:w-64 h-10"
                                    onChange={e => setFirstname(e.target.value)}
                                />
                            </div>
                            <div className='xl:ms-6 lg:ms-6 md:ms-6'>
                                <label className='font-bold' htmlFor="lastname">LASTNAME:</label> <br/>
                                <input
                                    type="text"
                                    name="lastname"
                                    className="border-solid border-2 border-blue-700 rounded-lg w-full xl:w-96 lg:w-64 h-10"
                                    onChange={e => setLastname(e.target.value)}
                                    id='lastname'
                                />
                            </div>
                        </aside>
                        <aside className='block xl:flex lg:flex md:flex xl:mt-10 lg:mt-10'>
                            <div>
                                <label className='font-bold' htmlFor="religion">ARE YOU BORN AGAIN?</label> <br/>
                                <select name="religion" className="border-solid border-2 border-blue-700 rounded-lg w-full xl:w-96 lg:w-64 h-10" onChange={e => setReligion(e.target.value)}>
                                    <option value="placeholder">Please Select</option>
                                    <option value="yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div className='xl:ms-6 lg:ms-6 md:ms-6'>
                                <label className='font-bold' htmlFor="churchName">NAME OF CHURCH ATTENDING:</label> <br/>
                                <input
                                    type="text"
                                    name="churchName"
                                    className="border-solid border-2 border-blue-700 rounded-lg w-full xl:w-96 lg:w-64 h-10"
                                    onChange={e => setChurchname(e.target.value)}
                                    id='churchName'
                                />
                            </div>
                            <div className='xl:ms-6 lg:ms-6 md:ms-6'>
                                <label className='font-bold' htmlFor="pastor-names">NAME OF CHURCH PASTOR:</label> <br/>
                                <input
                                    type="text"
                                    name="pastorName"
                                    className="border-solid border-2 border-blue-700 rounded-lg w-full xl:w-96 lg:w-64 h-10"
                                    onChange={e => setpastorName(e.target.value)}
                                    id='pastor-names'
                                />
                            </div>
                        </aside>
                        <aside className='block xl:flex lg:flex md:flex xl:mt-10 lg:mt-10'>
                            <div>
                                <label className='font-bold' htmlFor="religion">EDUCATIONAL BACKGROUND</label> <br/>
                                <select name="education" className="border-solid border-2 border-blue-700 rounded-lg w-full xl:w-96 lg:w-64 h-10" onChange={e => setEducation(e.target.value)}>
                                    <option value="yes">Please Select</option>
                                    <option value="SSCE">SSCE</option>
                                    <option value="UNDERGRADUATE">UNDERGRADUATE</option>
                                    <option value="GRADUATE">GRADUATE</option>
                                    <option value="SERVING CORPER">SERVING CORPER</option>
                                    <option value="POST GRADUATE">POST GRADUATE</option>
                                </select>
                            </div>
                            <div className='xl:ms-6 lg:ms-6 md:ms-6'>
                                <label className='font-bold' htmlFor="address">ADDRESS:</label> <br/>
                                <input
                                    type="text"
                                    name="address"
                                    className="border-solid border-2 border-blue-700 rounded-lg w-full xl:w-96 lg:w-64 h-10"
                                    onChange={e => setAddress(e.target.value)}
                                    id='address'
                                />
                            </div>
                            <div className='xl:ms-6 lg:ms-6 md:ms-6'>
                                <label className='font-bold' htmlFor="pastor-name">NATIONALITY:</label> <br/>
                                <select name="country" className="border-solid border-2 border-blue-700 rounded-lg w-full xl:w-96 lg:w-64 h-10" onChange={e => setNationality(e.target.value)}>
                                    <option value="placeholder">Please Select</option>
                                    <option value="nigerian">NIGERIAN</option>
                                    <option value="foreigner">FOREIGNER</option>
                                </select>
                            </div>
                        </aside>
                        <aside className='block xl:flex lg:flex md:flex xl:mt-10 lg:mt-10'>
                            <div>
                                <label className='font-bold' htmlFor="religion">STATE:</label> <br/>
                                <select name="state" className="border-solid border-2 border-blue-700 rounded-lg w-full xl:w-96 lg:w-64 h-10" onChange={e => setState(e.target.value)}>
                                    <option value="placeholder">Please Select</option>
                                    <option value="osun">Osun</option>
                                    <option value="oyo">Oyo</option>
                                </select>
                            </div>
                            <div className='xl:ms-6 lg:ms-6 md:ms-6'>
                                <label className='font-bold' htmlFor="pastor-name">LOCAL GOVERNMENT</label> <br/>
                                <select name="local" className="border-solid border-2 border-blue-700 rounded-lg w-full xl:w-96 lg:w-64 h-10" onChange={e => setLocal(e.target.value)}>
                                    <option value="neutral">Please Select</option>
                                    <option value="neutral">Ayedaade</option>
                                    <option value="neutral">Ife North</option>
                                </select>
                            </div>
                            <div className='xl:ms-6 lg:ms-6 md:ms-6'>
                                <label className='font-bold' htmlFor="pastor-name">PASSWORD</label> <br/>
                                <input
                                    type="password"
                                    name="password"
                                    className="border-solid border-2 border-blue-700 rounded-lg w-full xl:w-96 lg:w-64 h-10"
                                    onChange={e => setPassword(e.target.value)}>
                                </input>
                            </div>
                        </aside>
                        {errors && (
                            <div className="bg-red-500 text-white w-fit  text-sm py-1 px-3 rounded-md mt-2">
                                {errors}
                            </div>
                        )}
                        <aside className='block xl:flex lg:flex md:flex xl:mt-10 lg:mt-10'>
                            <div className='xl:ms-6 lg:ms-6 md:ms-6'>
                                <label className='font-bold' htmlFor="pastor-name">EMAIL:</label> <br/>
                                <input
                                    type="email"
                                    name="email"
                                    className="border-solid border-2 border-blue-700 rounded-lg w-full xl:w-96 lg:w-64 h-10"
                                    onChange={e => setEmail(e.target.value)}>
                                </input>
                            </div>
                            <div className='mt-10 mb-6'>
                                <input
                                    type="submit"
                                    value="SUBMIT" 
                                    className="w-full bg-blue-700 text-white text-xl font-sans cursor-pointer hover:rounded-full lg:w-96 xl:w-96 md:w-96 sm:w-96"
                                />
                            </div>
                        </aside>
                    </form>
                </section>
            </main>
        </>
    )
}