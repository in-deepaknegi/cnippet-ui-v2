"use client";
import React, { useState } from "react";

const data = [
    {
        question: "What's the best thing about Switzerland",
        answer:
            "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: "What do you call someone with no body and no nose?",
        answer:
            "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: "Why do you never see elephants hiding in trees?",
        answer:
            "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
];
const S2 = () => {
    const [active, setActive] = useState(null);

    const toggleActive = (index) => {
        setActive(active === index ? null : index);
    };

    return (
        <section className="relative isolate bg-white py-10 lg:py-20">
            <div className="mx-auto max-w-4xl px-6 lg:px-8 ">
                <div className="flex flex-col space-y-8">
                    <div className="border-b border-gray-300 pb-3">
                        <h2 className="text-2xl font-bold leading-10 text-gray-800">
                            Frequently asked questions
                        </h2>
                        <p className="mt-2 leading-7 text-gray-500">
                            Can&apos;t find the answer you&apos;re looking for? Reach out to
                            our
                            <a href="#" className="text-blue-600 font-semibold">
                                {" "}
                                customer support{" "}
                            </a>
                            team.
                        </p>
                    </div>
                    <dl className="w-full space-y-6">
                        {data.map((item, index) => (
                            <div key={index}>
                                <dt>
                                    <button
                                        onClick={() => toggleActive(index)}
                                        className="flex w-full items-start justify-between text-left"
                                    >
                                        <span className="text-base font-semibold leading-7 text-gray-900">
                                            {item.question}
                                        </span>
                                        <span>
                                            {active === index ? (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M5 12h14" />
                                                </svg>
                                            ) : (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M5 12h14" />
                                                    <path d="M12 5v14" />
                                                </svg>
                                            )}
                                        </span>
                                    </button>
                                </dt>
                                {active === index && (
                                    <dd className="mt-2 text-base leading-7 text-gray-600">
                                        {item.answer}
                                    </dd>
                                )}
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
};

export default S2;
