'use client';
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function admin() {
    
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/api/create')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, [])


    return(
        <>
            <div className="text-center">
                <h1 className="font-bold font-sans text-3xl text-green-900">2023/2024 LAUTECH ADMISSION ACCEPTANCE PANEL</h1>
                <p className="font-bold text-red-600 text-xl">FOR OFFICE USE ONLY</p>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>surname</th>
                        <th>firstname</th>
                        <th>lastname</th>
                        <th>religion</th>
                        {/* <th>churchName</th> */}
                        {/* <th>pastorName</th> */}
                        <th>education</th>
                        <th>address</th>
                        <th>country</th>
                        <th>state</th>
                        <th>local</th>
                        <th>password</th>
                        <th>email</th>
                        <th>Admission Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Adeleke</td>
                        <td>Samuel</td>
                        <td>James</td>
                        <td>Christian</td>
                        <td>SSCE</td>
                        <td>Kinira Ogbomoso</td>
                        <td>Nigeria</td>
                        <td>Oyo</td>
                        <td>Ogbomoso North</td>
                        <td>lautech</td>
                        <td>samuel@gmail.com</td>
                        <td>
                            <div className="block">
                                <div>
                                    <button className="bg-green-700 w-32 text-white hover:bg-green-900">Accept</button>
                                </div>
                                <div className="mt-1">
                                    <button className="bg-red-700 w-32 text-white hover:bg-red-900">Reject</button>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Adeleke</td>
                        <td>Samuel</td>
                        <td>James</td>
                        <td>Christian</td>
                        <td>SSCE</td>
                        <td>Kinira Ogbomoso</td>
                        <td>Nigeria</td>
                        <td>Oyo</td>
                        <td>Ogbomoso North</td>
                        <td>lautech</td>
                        <td>samuel@gmail.com</td>
                        <td>
                            <div className="block">
                                <div>
                                    <button className="bg-green-700 w-32 text-white hover:bg-green-900">Accept</button>
                                </div>
                                <div className="mt-1">
                                    <button className="bg-red-700 w-32 text-white hover:bg-red-900">Reject</button>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Adeleke</td>
                        <td>Samuel</td>
                        <td>James</td>
                        <td>Christian</td>
                        <td>SSCE</td>
                        <td>Kinira Ogbomoso</td>
                        <td>Nigeria</td>
                        <td>Oyo</td>
                        <td>Ogbomoso North</td>
                        <td>lautech</td>
                        <td>samuel@gmail.com</td>
                        <td>
                            <div className="block">
                                <div>
                                    <button className="bg-green-700 w-32 text-white hover:bg-green-900">Accept</button>
                                </div>
                                <div className="mt-1">
                                    <button className="bg-red-700 w-32 text-white hover:bg-red-900">Reject</button>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Adeleke</td>
                        <td>Samuel</td>
                        <td>James</td>
                        <td>Christian</td>
                        <td>SSCE</td>
                        <td>Kinira Ogbomoso</td>
                        <td>Nigeria</td>
                        <td>Oyo</td>
                        <td>Ogbomoso North</td>
                        <td>lautech</td>
                        <td>samuel@gmail.com</td>
                        <td>
                            <div className="block">
                                <div>
                                    <button className="bg-green-700 w-32 text-white hover:bg-green-900">Accept</button>
                                </div>
                                <div className="mt-1">
                                    <button className="bg-red-700 w-32 text-white hover:bg-red-900">Reject</button>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Adeleke</td>
                        <td>Samuel</td>
                        <td>James</td>
                        <td>Christian</td>
                        <td>SSCE</td>
                        <td>Kinira Ogbomoso</td>
                        <td>Nigeria</td>
                        <td>Oyo</td>
                        <td>Ogbomoso North</td>
                        <td>lautech</td>
                        <td>samuel@gmail.com</td>
                        <td>
                            <div className="block">
                                <div>
                                    <button className="bg-green-700 w-32 text-white hover:bg-green-900">Accept</button>
                                </div>
                                <div className="mt-1">
                                    <button className="bg-red-700 w-32 text-white hover:bg-red-900">Reject</button>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}