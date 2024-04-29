"use client"
import React, { useEffect, useState } from "react";
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from "next/navigation";

import Image from "next/image";
import H1 from '@/public/images/svg/login.svg';
import GoogleLogo from "@/public/images/svg/google-logo.svg";
import Github from "@/public/images/svg/github.svg";


const Hero = () => {

    const { status, data: session } = useSession();
    const [loading, setLoading] = useState(false);
    const [loading1, setLoading1] = useState(false);
    const router = useRouter();

    const handleLogin = async () => {
        setLoading(true);

        await signIn("google");
    }

    const handleLogingit = async () => {
        setLoading1(true);

        await signIn("github");
    }

    useEffect(() => {
        if (status === "authenticated") {
            router.push('/');
        }
    }, [status, router]);

    return (
        <section className="relative flex flex-1 flex-col overflow-hidden px-4 py-1 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-full md:max-w-[80%]">
                <div className="flex gap-20 items-center justify-center h-screen mx-auto">
                    <div className="w-full md:block hidden">
                        <Image
                            src={H1}
                            alt=""
                            className="w-full"
                        />
                    </div>

                    <div className="w-full max-w-xl px-4 py-16 rounded-xl shadow-lg border-t font-swir">
                        <div className="relative flex w-full items-center flex-1 flex-col justify-center ">
                            <div className="relative mr-auto">
                                <a href="/" className="flex gap-6 items-center text-gray-600 hover:text-gray-900">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="22"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className="text-blue-700"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="m12 19-7-7 7-7" />
                                        <path d="M19 12H5" />
                                    </svg>
                                    Back to home
                                </a>
                            </div>

                            <div className="mt-24 text-center text-4xl">
                                Welcome Back to Cnippet Ui
                            </div>
                            <p className="mt-8 text-center text-gray-600">
                                Lorem ipsum dolor sit amet consectetur. Velit eget turpis mi facilisis pellentesque sit bibendum sed in.
                            </p>

                            <div className="mt-8 w-full max-w-sm">
                                <button
                                    onClick={handleLogin}
                                    className="flex w-full items-center justify-center rounded-lg border px-4 py-2.5 text-base hover:bg-gray-100 transition-all duration-500 ease-in">
                                    {loading && (
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                    )}
                                    <Image
                                        src={GoogleLogo}
                                        alt="google-logo"
                                        width={20}
                                        height={20}
                                        className="mx-3"
                                    />
                                    {status === 'authenticated' ? `Welcome back` : 'Log in with Google'}
                                </button>
                            </div>
                            <div className="my-3 flex max-w-full md:max-w-sm items-center">
                                <div className="h-[0.025rem] w-[24rem] bg-gray-200"></div>
                                <div className="mx-2">or</div>
                                <div className="h-[0.025rem] w-full bg-gray-200"></div>
                            </div>

                            <div className="w-full max-w-sm">
                                <button
                                    onClick={handleLogingit}
                                    className="inline-flex w-full items-center justify-center rounded-lg border px-4 py-2.5 text-base hover:bg-gray-100 transition-all duration-500 ease-in">
                                    {loading1 && (
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                    )}
                                    <Image
                                        src={Github}
                                        alt="google-logo"
                                        width={24}
                                        height={24}
                                        className="mx-3"
                                    />
                                    {status === 'authenticated' ? `Welcome back` : 'Log in with GitHub'}
                                </button>
                            </div>
                        </div>

                        <div className="mt-16 relative shrink-0">
                            <div className="space-y-4 text-sm text-gray-900 sm:flex sm:items-center sm:justify-center sm:space-x-4 sm:space-y-0">
                                <p className="text-center sm:text-left">
                                    Having trouble logging in?
                                </p>
                                <a
                                    className="items-center inline-flex justify-center rounded-lg px-4 py-2.5 text-sm text-slate-900 ring-1 ring-slate-900/10 hover:ring-slate-900/20"
                                    href="/contacts"
                                >
                                    <span>
                                        Contact us
                                        <span aria-hidden="true"></span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </section>
    );
};

export default Hero;
