import React from "react";
import Image from "next/image";

import Hero1 from "@/public/images/hero/hero8.jpg";

const features = [
    {
        name: "Push to deploy.",
        description:
            "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    },
    {
        name: "SSL certificates.",
        description:
            "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    },
];

const Feature2 = () => {
    return (
        <section className="relative bg-white py-16 sm:py-20">
            <div className="mx-auto max-w-full px-6 md:max-w-[90%] lg:px-8">
                <div className="mx-auto flex h-full flex-col gap-x-0 gap-y-10 lg:flex-row lg:gap-x-10 lg:gap-y-0">
                    <div className="order-last max-w-full lg:order-first">
                        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                            Everything you need to deploy your app
                        </h2>
                        <p className="mt-6 text-base text-gray-700 md:text-lg">
                            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
                            Suspendisse eget egestas a elementum pulvinar et feugiat blandit
                            at. In mi viverra elit nunc.
                        </p>

                        <div className="mt-10 grid max-w-xl gap-x-4 space-y-4 text-base leading-7 text-gray-600 md:grid-cols-2 md:space-y-0 lg:max-w-none">
                            {features.map((feature) => (
                                <div key={feature.name}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="28"
                                        height="28"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <rect width="6" height="16" x="4" y="2" rx="2" />
                                        <rect width="6" height="9" x="14" y="9" rx="2" />
                                        <path d="M22 22H2" />
                                    </svg>
                                    <h2 className="text-2x my-2 font-semibold text-gray-900">
                                        {feature.name}
                                    </h2>
                                    <p>{feature.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 flex gap-x-6">
                            <a
                                href="#"
                                className="rounded-full bg-black px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800"
                            >
                                Discover more
                            </a>
                            <a
                                href="#"
                                className="my-auto text-sm font-semibold leading-6 text-gray-900"
                            >
                                Join us <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                    <div className="relative order-first mx-auto lg:order-last lg:max-w-[40%]">
                        <Image
                            src={Hero1}
                            alt="Product screenshot"
                            quality={100}
                            loading="eager"
                            className="h-full w-full rounded-2xl object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature2;
