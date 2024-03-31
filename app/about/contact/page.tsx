"use client";
import Navbar from "@/components/NavBar";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function page() {
  const Router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = async (e: {
    preventDefault: () => void;
    target: any;
  }) => {
    e.preventDefault();

    // if(!name || !email || !phone || !message) {
    //     setErrors('All field are neccessary');
    //     return
    // }
    if (!name || !email || !phone || !message) {
      setErrors("All field are neccessary");
      return;
    }

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
    });

    if (res.ok) {
      Router.push("/confirmations/message");
    } else {
      console.error("Registration Error");
      Router.push("/confirmations/error");
    }
  };

  return (
    <>
      <main>
        <Navbar />
        <div className="ms-4 me-4 xl:ms-32 lg:ms-32 xl:me-32 lg:me-32 pt-6">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Name:</label> <br />
              <input
                type="text"
                className="w-full border-2 border-blue-700 border-solid rounded-lg ps-5 pe-5 outline-none"
                name="name"
                placeholder="John Doe"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <label htmlFor="email">Email:</label> <br />
              <input
                type="email"
                className="w-full border-2 border-blue-700 border-solid rounded-lg ps-5 pe-5 outline-none"
                name="email"
                placeholder="example@mail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <label htmlFor="phone">Phone Number:</label> <br />
              <input
                type="text"
                className="w-full border-2 border-blue-700 border-solid rounded-lg ps-5 pe-5 outline-none"
                name="phone"
                placeholder="+234"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <label htmlFor="message">Message:</label> <br />
              <textarea
                name="message"
                // cols="30"
                // rows="10"
                placeholder="Your Message Here"
                className="w-full h-32 border-2 border-blue-700 border-solid rounded-lg ps-5 pe-5 pt-3 outline-none"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            {errors && (
              <div className="bg-red-500 text-white w-fit  text-sm py-1 px-3 rounded-md mt-2">
                {errors}
              </div>
            )}
            <div className="mt-4 mb-4">
              <input
                type="submit"
                value="SEND MESSAGE"
                className="w-full bg-blue-700 text-white text-xl font-mono cursor-pointer hover:rounded-full"
              />
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
