"use client";
import React, { useState } from "react";
import { ChevronDown, PieChart } from "lucide-react";

const solutions = [
    {
        name: "Analytics",
        description: "Get a better understanding of your traffic",
        href: "#",
        icon: PieChart,
    },
];

const S1 = () => {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(!open);
    };

    return (
        <header className="relative isolate overflow-visible py-8 md:pb-40">
            <div className="relative mx-auto max-w-lg">
                <div className="relative hidden lg:flex lg:gap-x-12">
                    <button
                        onMouseEnter={toggleOpen}
                        onMouseLeave={toggleOpen}
                        className="inline-flex items-center justify-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
                    >
                        <span>Solutions</span>
                        <ChevronDown className="h-5 w-5" aria-hidden="true" />

                        {open && (
                            <div className="absolute -left-5 top-3 z-10 flex w-screen max-w-max px-4 pt-4">
                                <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                                    <div className="p-2">
                                        {solutions.map((item) => (
                                            <div
                                                key={item.name}
                                                className="group relative flex gap-x-6 rounded-3xl p-2 hover:bg-gray-50"
                                            >
                                                <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                    <item.icon
                                                        className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                                        aria-hidden="true"
                                                    />
                                                </div>
                                                <div>
                                                    <a
                                                        href={item.href}
                                                        className="font-semibold text-gray-900"
                                                    >
                                                        {item.name}
                                                        <span className="absolute inset-0" />
                                                    </a>
                                                    <p className="mt-1 text-gray-600">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default S1;
