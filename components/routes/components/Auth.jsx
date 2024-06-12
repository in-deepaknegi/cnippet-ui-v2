"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import fetchPro from "@/atoms/library/getPro";
import toSection from "@/atoms/library/toSection";
import Payment from "@/components/routes/home/Pricing";

const Auth = ({ components }) => {
    const [activeTab, setActiveTab] = useState([0, 0, 0, 0, 0]);
    const [activeTab1, setActiveTab1] = useState([0, 0, 0, 0, 0]);
    const [language, setLanguage] = useState(components.map(() => "javascript"));
    const { data: session } = useSession();

    const email = session?.user?.email;
    // console.log(email);
    const { pro } = fetchPro(email);

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

    const handleLanguageChange = (index, value) => {
        const newSelectedLanguages = [...language];
        newSelectedLanguages[index] = value;
        setLanguage(newSelectedLanguages);
    };

    const nonComponents = components.filter(
        (component) => component.pro === false,
    );

    const proComponents = components.filter(
        (component) => component.pro === true,
    );
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

                            {component.tech.slice(0, 2).map((p, q) => (
                                <p
                                    key={q}
                                    className="ml-3 hidden whitespace-nowrap rounded-full bg-slate-200 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 lg:block"
                                >
                                    {p}
                                </p>
                            ))}

                            {component.tech.slice(2).map((p, q) => (
                                <p
                                    key={q}
                                    className="ml-3 hidden whitespace-nowrap rounded-full bg-dusk-700 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-100 lg:block"
                                >
                                    {p}
                                </p>
                            ))}
                        </div>
                        <div className="p-0.5">
                            <div className="flex space-x-1 rounded-lg bg-slate-100 p-0.5">
                                <button
                                    onClick={() => changeTab(index, 0)}
                                    className={`flex items-center rounded-md py-[0.45rem] pl-2 pr-2 text-sm font-semibold lg:pr-3 ${activeTab[index] === 0 ? "bg-white shadow" : ""} transition-all duration-500 ease-in-out`}
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
                                    className={`flex items-center rounded-md py-[0.45rem] pl-2 pr-2 text-sm font-semibold lg:pr-3 ${activeTab[index] === 1 ? "bg-white shadow" : ""} transition-all duration-500 ease-in-out`}
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
                            {component.tech.slice(0, 2).map((p, q) => (
                                <p
                                    key={q}
                                    className="ml-3 hidden whitespace-nowrap rounded-full bg-slate-200 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 lg:block"
                                >
                                    {p}
                                </p>
                            ))}

                            {component.tech.slice(2).map((p, q) => (
                                <p key={q} className="ml-3 hidden lg:flex gap-1 whitespace-nowrap">
                                    <span className="rounded-full bg-dusk-700 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-100 lg:block">
                                        {p}
                                    </span>
                                    <sup className=" mt-2 text-xs font-semibold leading-[0] text-black">
                                        NEW
                                    </sup>
                                </p>
                            ))}
                        </div>

                        <div className="flex items-center gap-4 md:gap-10 p-0.5">
                            <div className="flex space-x-1 rounded-lg bg-slate-100 p-0.5">
                                <button
                                    onClick={() => changeTab1(index, 0)}
                                    className={`flex items-center rounded-md py-[0.45rem] pl-2 pr-2 text-sm font-semibold lg:pr-3 ${activeTab1[index] === 0 ? "bg-white shadow" : ""} transition-all duration-500 ease-in-out`}
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
                                        className={`flex items-center rounded-md py-[0.45rem] pl-2 pr-2 text-sm font-semibold lg:pr-3 ${activeTab1[index] === 1 ? "bg-white shadow" : ""} transition-all duration-500 ease-in-out`}
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
                                    <button
                                        onClick={() => toSection("payment")}
                                        className={`flex items-center rounded-md py-[0.45rem] pl-2 pr-2 text-sm font-semibold lg:pr-3 ${activeTab[index] === 1 ? "bg-white shadow" : ""} transition-all duration-500 ease-in-out`}
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
                                    </button>
                                )}
                            </div>

                            <div className="border-l-2 pl-2 md:pl-4">
                                <select
                                    value={language[index]}
                                    onChange={(e) => handleLanguageChange(index, e.target.value)}
                                    className="px-2 py-1 text-sm font-semibold text-slate-900"
                                >
                                    <option value="javascript">JavaScript</option>
                                    <option value="typescript">TypeScript</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-span-2 row-start-2 mt-3 min-w-0 overflow-hidden rounded-2xl border border-gray-300">
                            {activeTab1[index] === 0 ? (
                                component.component
                            ) : (
                                <div className="overflow-y-auto break-words text-sm">
                                    {component.code[language[index]]}
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            ))}

            {!pro && (
                <>
                    <Payment />
                </>
            )}
        </div>
    );
};

export default Auth;
