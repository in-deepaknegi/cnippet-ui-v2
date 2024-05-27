"use client";
import React, { useState } from "react";
import Link from "next/link";

import { FaLocationDot } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

const Hero = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [budget, setBudget] = useState("");
    const [service, setService] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const [error, setError] = useState([]);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        console.log(name);
        console.log(budget);
        console.log(service);
        console.log(message);

        const formData = {
            name,
            email,
            budget: parseFloat(budget),
            service,
            message,
        };

        const res = await fetch("api/contact", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const { msg, success } = await res.json();
        setError(msg);
        setSuccess(success);

        setLoading(false);

        if (success) {
            setName("");
            setEmail("");
            setBudget("");
            setService("");
            setMessage("");
        }
    };

    return (
        <section id='contact' className="relative isolate overflow-hidden py-8 font-swir lg:py-16">
            <div className="mx-auto  max-w-full px-6 md:max-w-[90%] lg:px-8">
                <div className="flex flex-col md:flex-row">
                    <div className="mx-auto max-w-full md:max-w-lg">
                        <h3 className="text-4xl md:text-5xl">Get in touch</h3>
                        <p className="mt-4 text-gray-700">
                            We help you automate your workflows, automate repetitive tasks,
                            and elevate your business.
                        </p>
                        <div className="mt-6 flex flex-row items-start gap-5">
                            <FaLocationDot className="mt-1 h-6 w-6 text-yellow-400" />
                            <div>
                                <h3 className="font-swim text-2xl text-black">Our office</h3>
                                <p className="text-base text-gray-600">
                                    <span className=" text-lg text-black">Dehradun Branch: </span>
                                    Thano road, Bhaniyawala 248140, IN
                                </p>
                            </div>
                        </div>
                        <div className="mt-8 flex flex-row items-start gap-5 pr-3">
                            <MdMail className="mt-1 h-6 w-6 text-yellow-400" />
                            <div>
                                <h3 className="font-swim text-2xl text-black">Email us</h3>
                                <div className="mt-3 flex max-w-md flex-col gap-2">
                                    <Link href="mailto:info@cnippet.com">info@cnippet.com</Link>
                                    <Link href="mailto:office@cnippet.com">
                                        Office@cnippet.com
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="form mx-auto max-w-xl space-y-5">
                        <div className="group relative">
                            <label className="sr-only">Your name</label>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="name"
                                id="name"
                                placeholder="Your Name"
                                required
                            />
                            <HoverCode />
                        </div>

                        <div className="group relative">
                            <label className="sr-only">Your email</label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                id="email"
                                placeholder="Your Email"
                                required
                            />

                            <HoverCode />
                        </div>

                        <div className="group relative">
                            <select
                                value={service}
                                onChange={(e) => setService(e.target.value)}
                            >
                                <option defaultValue="true">What we can help you with?</option>
                                <option>Website Design</option>
                                <option>Website Development</option>
                                <option>Custom Development</option>
                            </select>

                            <HoverCode />
                        </div>

                        <div className="group relative">
                            <label className="sr-only">Your Budget </label>
                            <input
                                value={budget}
                                onChange={(e) => setBudget(e.target.value)}
                                type="budget"
                                id="budget"
                                placeholder="What approximate budget do you have for this project? (Optional)"
                            />

                            <HoverCode />
                        </div>

                        <div className="group relative">
                            <label className="sr-only">Your message</label>
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                id="message"
                                rows={5}
                                placeholder="Please describe your requirements and goals with short detials of your project
                            "
                            ></textarea>

                            <HoverCode />
                        </div>

                        <p className="text-sm text-gray-500">
                            By submitting this form you agree to our
                            <span className="text-black">
                                <a href="/terms"> terms and conditions </a>
                            </span>
                            and our
                            <span className="text-black">
                                <a href="/privacy"> privacy policy</a>
                            </span>
                            .
                        </p>

                        <div>
                            <button
                                type="submit"
                                className="rounded-full bg-yellow-400 px-8 py-2 text-center text-lg font-medium text-black"
                            >


                                <span className="flex items-center">
                                    {loading && (
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                    )}
                                    Submit
                                </span>
                            </button>

                            <div className='my-auto mt-3'>
                                {error && error.map((e) => (
                                    <div key={e} className={`flex items-center ${success ? 'text-green-600' : 'text-red-500'} text-base`}>
                                        <svg className="w-4 h-4 mr-3 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"></path>
                                        </svg>
                                        <span className='my-auto'>{e}</span>
                                    </div>
                                ))
                                }
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Hero;

const HoverCode = () => (
    <>
        <span
            className={`scale-x absolute bottom-0 left-0 h-[0.035rem] w-full origin-left transform bg-gray-300`}
        ></span>
        <span
            className={`absolute bottom-0 left-0 h-[0.035rem] w-full origin-left scale-x-0 transform transition-transform duration-500 group-hover:scale-x-[100%] group-hover:bg-black`}
        ></span>
    </>
);
