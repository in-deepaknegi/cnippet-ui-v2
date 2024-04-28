"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, PieChart, Fingerprint } from "lucide-react";

import H1 from "@/public/images/hero/hero11.jpg";
import H2 from "@/public/images/hero/hero8.jpg";

const menu = [
    {
        title: "Soluction",
        image: H1,
        solutions: [
            {
                name: "Analytics",
                description: "Get a better understanding of your traffic",
                href: "#",
                icon: PieChart,
            },
            {
                name: "Integrations",
                description: "Build strategic funnels that will convert",
                href: "#",
                icon: Fingerprint,
            },
        ],
    },
    {
        title: "Analytics",
        image: H2,
        solutions: [
            {
                name: "Analytics",
                description: "Get a better understanding of your traffic",
                href: "#",
                icon: PieChart,
            },
            {
                name: "Integrations",
                description: "Build strategic funnels that will convert",
                href: "#",
                icon: Fingerprint,
            },
        ],
    },
];

const S1 = () => {
    const [open, setOpen] = useState(null);

    const toggleOpen = (index) => {
        setOpen(open === index ? null : index);
    };

    return (
        <header className="relative isolate overflow-visible py-8 md:pb-64">
            <div className="relative ml-40 flex max-w-md justify-between">
                {menu.map((item, i) => (
                    <div key={i} className="relative hidden lg:flex lg:gap-x-12">
                        <button
                            onMouseEnter={() => toggleOpen(i)}
                            onMouseLeave={() => toggleOpen(i)}
                            className="inline-flex items-center justify-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
                        >
                            <span>{item.title}</span>
                            <ChevronDown className="h-5 w-5" aria-hidden="true" />

                            {open === i && (
                                <div className="absolute -left-5 top-1 z-10 mt-5 flex w-screen max-w-max px-4 pt-2">
                                    <div className="w-screen max-w-[38rem] flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                                        <div className="p-2">
                                            <div className="grid grid-cols-2">
                                                {item.solutions.map((item, j) => (
                                                    <div
                                                        key={j}
                                                        className="group relative flex flex-col gap-y-3 rounded-lg p-4 text-left hover:bg-gray-100"
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
                                                            <p className="mt-1 font-medium text-gray-600">
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </button>
                    </div>
                ))}
            </div>
        </header>
    );
};

export default S1;
