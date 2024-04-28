"use client"
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react';

import fetchPro from '@/atoms/library/getPro';

import Payment from '@/components/routes/home/Pricing';

const Auth = ({ components }) => {
    const [activeTab, setActiveTab] = useState([0, 0, 0, 0, 0]);
    const [activeTab1, setActiveTab1] = useState([0, 0, 0, 0, 0]);
    const { data: session } = useSession();

    const email = session?.user?.email;
    // console.log(email);
    const { pro, loading } = fetchPro(email);

    // console.log(pro); //displayed in browser

    const changeTab = (index, tabIndex) => {
        const newActiveTab = [...activeTab];
        newActiveTab[index] = tabIndex;
        setActiveTab(newActiveTab);
    };
    const changeTab1 = (index, tabIndex) => {
        const newActiveTab = [...activeTab1];
        newActiveTab[index] = tabIndex;
        setActiveTab1(newActiveTab);
    };

    const nonComponents = components.filter(component => component.pro === false);

    const proComponents = components.filter(component => component.pro === true);
    // console.log(proComponents)

    return (
        <div className="mt-10 space-y-28 bg-white pb-px">
            {nonComponents.map((component, index) => (
                <section key={index} id={`${component.title}`}>
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
                                    onClick={() => changeTab(index, 1)}
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
                                        Code
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

            {proComponents.map((component, index) => (
                <section key={index} id={`${component.title}`}>
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
                                    onClick={() => changeTab1(index, 0)}
                                    className={`flex items-center rounded-md py-[0.45rem] pl-2 pr-2 text-sm font-semibold lg:pr-3 ${activeTab1[index] === 0 ? "bg-white shadow" : ""} transition-all ease-in-out duration-500`}
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
                                {pro ? (
                                    <button
                                        onClick={() => changeTab1(index, 1)}
                                        className={`flex items-center rounded-md py-[0.45rem] pl-2 pr-2 text-sm font-semibold lg:pr-3 ${activeTab1[index] === 1 ? "bg-white shadow" : ""} transition-all ease-in-out duration-500`}
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
                                            Code
                                        </span>
                                    </button>
                                ) : (
                                    <a
                                        href='#payment'
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
                                            Upgrade
                                        </span>
                                    </a>
                                )}

                            </div>
                        </div>

                        <div className="col-span-2 row-start-2 mt-3 min-w-0 overflow-hidden rounded-2xl border border-gray-300">
                            {activeTab1[index] === 0 ? (
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

            {loading ? (
                <div className=" mt-10 max-w-4xl">
                    <span className="text-xl">Loading ...</span>
                </div>
            ) : (
                <>
                    {!pro && (
                        <>
                            <Payment />
                        </>
                    )}
                </>
            )}
        </div>
    )
}

export default Auth