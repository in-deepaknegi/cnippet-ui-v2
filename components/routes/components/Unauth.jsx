"use client"
import React from 'react'
import { signIn } from "next-auth/react";
import GetSession from '@/atoms/library/getSession';
import toSection from '@/atoms/library/toSection';

import Image from "next/image";
import { useState } from 'react';
import Hero1 from "@/public/gradient/g4.jpg";
import GoogleLogo from "@/public/images/svg/google-logo.svg";
import Github from "@/public/images/svg/github.svg";
import L1 from '@/public/auth.svg'

const Unauth = ({ components }) => {
    const [load, setLoad] = useState(false);
    const [load1, setLoad1] = useState(false);
    const { status, session, loading } = GetSession();

    const [activeTab, setActiveTab] = useState([0, 0, 0, 0, 0]);

    const changeTab = (index, tabIndex) => {
        const newActiveTab = [...activeTab];
        newActiveTab[index] = tabIndex;
        setActiveTab(newActiveTab);
    };

    const handleLogin = async () => {
        setLoad(true);

        await signIn("google");
    };

    const handleLogingit = async () => {
        setLoad1(true);

        await signIn("github");
    }


    return (
        <>
            <div className="mt-10 space-y-28 bg-white pb-px">
                {components.slice(0, 1).map((component, index) => (
                    <section key={index} id={`${component.title}${component.id}`}>
                        <div className="grid grid-cols-[1fr,auto] items-center">
                            <div className="flex min-w-0">
                                <h2 className="truncate text-base font-medium leading-7 text-slate-900">
                                    {component.title}
                                </h2>
                                <p className="ml-3 hidden whitespace-nowrap rounded-lg bg-slate-200 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 lg:block">
                                    TailwindCss
                                </p>
                                <p className="ml-3 hidden whitespace-nowrap rounded-lg bg-dusk-700 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-100 lg:block">
                                    React
                                </p>
                            </div>
                            <div className="p-0.5">
                                <div className="flex space-x-1 rounded-lg bg-slate-100 p-0.5">
                                    <button
                                        onClick={() => changeTab(index, 0)}
                                        className={`flex items-center rounded-md py-[0.45rem] pl-2 pr-2 text-sm font-semibold lg:pr-3 ${activeTab[index] === 0 ? "bg-white shadow" : ""} transition-all ease-in-out duration-500`}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#0950f6"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-purple-600"
                                        >
                                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                            <circle cx="12" cy="12" r="3" />
                                        </svg>
                                        <span className="sr-only text-stone-900 lg:not-sr-only lg:ml-2">
                                            Preview
                                        </span>
                                    </button>
                                    <button
                                        onClick={() => toSection('login')}
                                        className={`flex items-center rounded-md py-[0.45rem] pl-2 pr-2 text-sm font-semibold lg:pr-3 ${activeTab[index] === 1 ? "bg-white shadow" : ""} transition-all ease-in-out duration-500`}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#3e75f4"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <polyline points="16 18 22 12 16 6" />
                                            <polyline points="8 6 2 12 8 18" />
                                        </svg>
                                        <span className="sr-only text-stone-900 lg:not-sr-only lg:ml-2">
                                            Log in to view code
                                        </span>
                                    </button>
                                </div>
                            </div>

                            <div className="col-span-2 row-start-2 mt-3 min-w-0 overflow-hidden rounded-2xl border border-gray-300">
                                {activeTab[index] === 0 ? (
                                    component.component
                                ) : (
                                    <div className="overflow-y-auto break-words text-sm">
                                        {component.code}
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                ))}
            </div>

            <section id='login' className="bg-white py-8 sm:py-16">
                <div className="mx-auto max-w-[90%] px-6 lg:px-8">
                    <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200  sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                        <div className="p-8 sm:p-10 lg:flex-auto">
                            <h3 className="text-2xl font-bold tracking-tight text-gray-900 ">
                                Login to view all the components
                            </h3>
                            <p className="mt-6 text-base leading-7 text-slate-800 ">
                                Start using our exceptional and reliable services today and take
                                your business to the next level of success and growth.
                            </p>

                            <div className="h-full w-full pt-8">
                                <div className="relative flex flex-1 flex-col items-center justify-center">
                                    <div className="w-full max-w-sm">
                                        <button
                                            onClick={handleLogin}
                                            className="border-olive-300 inline-flex w-full justify-center rounded-lg border border-gray-300 px-4 py-2.5 text-base text-black hover:bg-gray-100 transition-all duration-500 ease-in"
                                        >
                                            {load && (
                                                <svg
                                                    className="-ml-1 mr-3 h-5 w-5 animate-spin black"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <circle
                                                        className="opacity-10"
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                    ></circle>
                                                    <path
                                                        className="opacity-75"
                                                        fill="currentColor"
                                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                    ></path>
                                                </svg>
                                            )}
                                            <Image
                                                src={GoogleLogo}
                                                alt="google-logo"
                                                width={20}
                                                height={20}
                                                className="text-olive-200 mx-3"
                                            />
                                            Log in with Google
                                        </button>
                                    </div>
                                    
                                    <div className="mt-3 w-full max-w-sm">
                                        <button
                                            onClick={handleLogingit}
                                            className="inline-flex w-full items-center justify-center rounded-lg border px-4 py-2.5 text-base hover:bg-gray-100 transition-all duration-500 ease-in">
                                            {load1 && (
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
                                <div className="mt-6 relative shrink-0">
                                    <div className="space-y-4 text-sm text-dusk-700 sm:flex sm:items-center sm:justify-center sm:space-x-4 sm:space-y-0">
                                        <p className="text-center sm:text-left">
                                        Having trouble logging in?
                                        </p>
                                        <a
                                            className="inline-flex justify-center rounded-lg px-4 py-2.5 text-sm text-dusk-900 ring-1 ring-dusk-300 hover:bg-black hover:ring-dusk-300 hover:text-dusk-200"
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
                        <div className=" p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                            <div className="rounded-2xl bg-gray-50 py-10 px-4 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                                <Image
                                    src={L1}
                                    alt='login-logo'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Unauth