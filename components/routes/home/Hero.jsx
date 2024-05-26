import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FiArrowUpRight } from "react-icons/fi";

import H1 from "@/public/images/home/T1.webp";
import H2 from "@/public/images/home/T2.webp";
import H3 from "@/public/images/home/T3.webp";
import H4 from "@/public/images/home/T4.webp";

const Hero = () => {
    return (
        <section className="relative isolate overflow-hidden bg-white font-swir h-full">
            <div className="mx-auto max-w-full md:max-w-[90%] px-6 py-4 lg:px-7">
                <div className="mx-auto gap-0 md:gap-x-12 lg:mx-0 md:flex lg:max-w-none">

                    <div className="mt-28 w-full max-w-full lg:max-w-2xl lg:flex-shrink">
                        <p
                            className="flex flex-col items-center justify-start gap-4 text-center text-lg text-gray-700 md:flex-row">
                            <span className="h-0.5 w-16 bg-black"></span>
                            Cnippet helped to get startups around $200 million funding
                        </p>
                        <h1 className="mt-6 text-4xl text-center md:text-left text-black md:text-6xl">
                            Enhance your code with our advanced materials.
                        </h1>

                        <p className="mt-8 text-center text-lg text-gray-700 md:text-left md:text-lg">
                            Created with precision using tailwindcss and next.js, these components and templates are perfect for starting your next project and achieving a polished and professional result.
                        </p>


                        <Link
                            href={"/contacts#contact"}
                            className="mt-8 rounded-full w-fit bg-yellow-400 px-5 gap-2 py-2 text-base uppercase flex items-center justify-center mx-auto md:mx-0"
                        >
                            Get started
                            <FiArrowUpRight className="h-4 w-4" />
                        </Link>
                    </div>

                    <div className="mt-10 hidden md:flex w-full justify-end py-10 sm:justify-start sm:gap-8 md:mt-16 lg:gap-6 xl:mt-0 translate-x-16 lg:translate-x-0">
                        <div className="hidden w-1/2 flex-none md:block lg:w-1/2 pt-16">
                            <div className="relative">
                                <Image
                                    src={H4}
                                    alt="C image 2"
                                    loading="eager"
                                    priority={false}
                                    className="h-full w-full rounded-2xl border bg-gray-50 object-cover shadow-lg"
                                />
                            </div>
                            <div className="relative">
                                <Image
                                    src={H1}
                                    alt="C image 2"
                                    loading="eager"
                                    priority={false}
                                    className="mt-8  h-full w-full rounded-2xl border bg-gray-50 object-cover shadow-lg"
                                />
                            </div>
                        </div>
                        <div className="w-full flex-none md:w-1/2 lg:w-1/2">
                            <div className="relative">
                                <Image
                                    src={H3}
                                    alt="C image 2"
                                    loading="eager"
                                    priority={false}
                                    className="h-full w-full rounded-2xl border bg-gray-50 object-cover shadow-lg"
                                />
                            </div>
                            <div className="relative hidden md:block">
                                <Image
                                    src={H2}
                                    alt="C image 2"
                                    loading="eager"
                                    priority={false}
                                    className="mt-8 h-full w-full rounded-2xl border bg-gray-50 object-cover shadow-lg"
                                />
                            </div>
                            {/* <div className="relative hidden md:block">
                                <Image
                                    src={H4}
                                    alt="C image 2"
                                    loading="eager"
                                    priority={false}
                                    className="mt-8 h-full w-full rounded-2xl border bg-gray-50 object-cover shadow-lg"
                                />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
