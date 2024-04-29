"use client"
import React, { useEffect, useState } from "react";
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from "next/navigation";

import Image from "next/image";
import H1 from '@/public/images/svg/logic.svg';
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
            <div className="relative mx-10 mt-10 w-10">
                <a href="/">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="rounded-full border text-gray-700"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="m12 19-7-7 7-7" />
                        <path d="M19 12H5" />
                    </svg>
                </a>
            </div>

            <div className="flex gap-20 items-center mx-auto pt-28">
                <div>
                    <div className="relative flex flex-1 flex-col items-center justify-center ">
                        <a href="/" className="mx-auto mb-10 flex w-auto">
                            <div className="my-auto ml-3 text-2xl">Cnippet Ui</div>
                        </a>



                        <div className="w-full mt-6 max-w-sm">
                            <button
                                onClick={handleLogin}
                                className="inline-flex w-full justify-center rounded-lg border px-4 py-2.5 text-base">
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
                                {status === 'authenticated' ? `Welcome back ${session.user.name}` : 'Log in with Google'}
                            </button>
                        </div>
                        <div className="mt-4 w-full max-w-sm">
                            <button
                                onClick={handleLogingit}
                                className="inline-flex w-full justify-center rounded-lg border px-4 py-2.5 text-base">
                                {loading1 && (
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                )}
                                <Image
                                    src={Github}
                                    alt="google-logo"
                                    width={20}
                                    height={20}
                                    className="mx-3"
                                />
                                {status === 'authenticated' ? `Welcome back ${session.user.name}` : 'Log in with GitHub'}
                            </button>
                        </div>
                        <div className="my-4 flex max-w-sm items-center">
                            <div className="h-[0.025rem] w-[24rem] bg-gray-200"></div>
                            <div className="mx-2">or</div>
                            <div className="h-[0.025rem] w-full bg-gray-200"></div>
                        </div>

                    </div>
                    <div className="relative shrink-0">
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
                <div className="">
                    <Image
                        src={H1}
                        alt=""
                        className="w-80"
                    />
                </div>
            </div>

        </section>
    );
};

export default Hero;
