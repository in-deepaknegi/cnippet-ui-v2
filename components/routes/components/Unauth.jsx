"use client";
import React, { useState } from "react";

import toSection from "@/atoms/library/toSection";
import Login from "@/components/routes/login/Hero";

const Unauth = ({ components }) => {
    const [activeTab, setActiveTab] = useState([0, 0, 0, 0, 0]);

    const changeTab = (index, tabIndex) => {
        const newActiveTab = [...activeTab];
        newActiveTab[index] = tabIndex;
        setActiveTab(newActiveTab);
    };

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
                                {component.tech.slice(0, 1).map((p, q) => (
                                    <p
                                        key={q}
                                        className="ml-3 hidden whitespace-nowrap rounded-full bg-slate-200 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 lg:block"
                                    >
                                        {p}
                                    </p>
                                ))}

                                {component.tech.slice(1).map((p, q) => (
                                    <p
                                        key={q}
                                        className="ml-3 hidden whitespace-nowrap rounded-full bg-dusk-700 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-100 lg:block"
                                    >
                                        {p}
                                    </p>
                                ))}
                            </div>
                            <div className="p-0.5 font-swim">
                                <div className="flex space-x-1 rounded-lg bg-slate-100 p-0.5">
                                    <button
                                        onClick={() => changeTab(index, 0)}
                                        className={`flex items-center rounded-md py-[0.45rem] pl-2 pr-2 text-sm tracking-wide lg:pr-3 ${activeTab[index] === 0 ? "bg-white shadow" : ""} transition-all duration-500 ease-in-out`}
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
                                        >
                                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                            <circle cx="12" cy="12" r="3" />
                                        </svg>
                                        <span className="sr-only text-black lg:not-sr-only lg:ml-2">
                                            Preview
                                        </span>
                                    </button>
                                    <button
                                        onClick={() => toSection("login")}
                                        className={`flex items-center rounded-md py-[0.45rem] pl-2 pr-2 text-sm tracking-wide lg:pr-3 ${activeTab[index] === 1 ? "bg-white shadow" : ""} transition-all duration-500 ease-in-out`}
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
                                        <span className="sr-only text-black lg:not-sr-only lg:ml-2">
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

            <section id="login">
                <Login />
            </section>
        </>
    );
};

export default Unauth;
