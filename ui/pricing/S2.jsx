"use client";
import React, { useState } from "react";

const packages = [
    {
        name: "Freelancer",
        para: "The essentials to provide your best work for clients.",
        mrate: 15,
        yrate: 144,
        link: "www.example.com",
        features: [
            "5 products",
            "Up to 1,000 subscribers",
            "Basic analytics",
            "48-hour support response time",
        ],
    },
    {
        name: "Startup",
        para: "A plan that scales with your rapidly growing business.",
        mrate: 30,
        yrate: 288,
        link: "www.example.com",
        features: [
            "25 products",
            "Up to 10,000 subscribers",
            "Advanced analytics",
            "24-hour support response time",
            "Marketing automations",
        ],
    },
    {
        name: "Enterprise",
        para: "Dedicated support and infrastructure for your company",
        mrate: 60,
        yrate: 588,
        link: "www.example.com",
        features: [
            "Unlimited products",
            "Unlimited subscribers",
            "Advanced analytics",
            "1-hour, dedicated support response time",
            "marketing automations",
            "custom report tools",
        ],
    },
];

const Pricing2 = () => {
    const [isYearly, setIsYearly] = useState(false);

    const toggleBillingPeriod = () => {
        setIsYearly(!isYearly);
    };

    return (
        <section className="relative isolate bg-white py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-700">
                        Pricing
                    </h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Pricing plans for teams of all sizes
                    </p>
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
                    Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
                    quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.
                </p>
                <div className="mt-16 flex justify-center">
                    <div className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-gray-300">
                        <div
                            onClick={toggleBillingPeriod}
                            className={`cursor-pointer rounded-full px-[0.625rem] py-1 ${isYearly ? "text-gray-500" : "bg-indigo-600 text-white"}`}
                        >
                            Monthly
                        </div>
                        <div
                            onClick={toggleBillingPeriod}
                            className={`cursor-pointer rounded-full px-[0.625rem] py-1 ${isYearly ? "bg-indigo-600 text-white" : "text-gray-500"}`}
                        >
                            Yearly
                        </div>
                    </div>
                </div>
                <div className="isolate mx-auto mt-10 grid max-w-md gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {packages.map((pack, index) => (
                        <div
                            key={index}
                            className="rounded-3xl p-8 shadow-md ring-1 ring-gray-200 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:ring-2 hover:ring-indigo-500 lg:p-10"
                        >
                            <h3 className="text-lg font-semibold leading-8 text-gray-900">
                                {pack.name}
                            </h3>
                            <p className="mt-4 text-sm leading-6 text-gray-600">
                                {pack.para}
                            </p>
                            <p className="mt-6 flex items-baseline gap-x-1">
                                <span className="text-4xl font-bold tracking-tight text-gray-900">
                                    {isYearly ? `$${pack.yrate}` : `$${pack.mrate}`}
                                </span>
                                <span className="text-sm font-semibold">
                                    {isYearly ? "/year" : "/month"}
                                </span>
                            </p>
                            <a
                                href="#"
                                className="mt-6 block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-xl"
                            >
                                Buy plan
                            </a>
                            <ul className="mt-8 space-y-4 text-sm leading-6 xl:mt-10">
                                {pack.features.map((feature, i) => (
                                    <li key={i} className="flex gap-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="h-5 w-5 text-indigo-700"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing2;
