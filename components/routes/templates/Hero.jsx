"use client"
import React from "react";
import Image from "next/image";
import T1 from "@/public/t1.webp";
import T2 from "@/public/t2.webp";
import Link from "next/link";

import toSection from "@/atoms/library/toSection";

import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
    return (
        <section className="relative isolate z-10 bg-white py-16 font-swir lg:py-20">
            <div className="mx-auto max-w-full px-6 md:max-w-[90%] lg:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center">
                    <p
                        className="flex flex-row items-center justify-center gap-4 text-center text-lg text-gray-700"
                        data-aos="fade-right"
                        data-aos-duration="500"
                    >
                        <span className="h-0.5 w-16 bg-black"></span>
                        Templates
                    </p>
                    <h1
                        className="mt-6 text-center text-4xl text-black md:text-6xl"
                        data-aos="fade-left"
                        data-aos-duration="500"
                    >
                        Modern website templates, crafted with Tailwind CSS.
                    </h1>
                    <div className="mt-4 flex flex-wrap gap-6">
                        <div className="flex items-center text-sm text-white bg-black px-3 py-0.5 rounded-full">
                            <span className="">React</span>
                        </div>
                        <div className="flex items-center text-sm text-white bg-black px-3 py-0.5 rounded-full">
                            <span>Next.js</span>
                        </div>
                    </div>
                    <p className="mt-6 text-center text-lg text-gray-600 md:text-lg">
                        Visually-stunning, easy to customize site templates built with React and Next.js. The perfect starting point for your next project and the ultimate resource for learning how experts build real websites with Tailwind CSS.
                    </p>
                    <div className="mt-6 mx-auto flex max-w-4xl flex-col items-center justify-between gap-6 md:flex-row">
                        <button
                            onClick={() => toSection('templates')}
                            className="flex items-center gap-2 rounded-full bg-black text-white px-5 py-2 text-sm font-swim uppercase"
                        >
                            Browse templates
                            <FaArrowRight className="h-3 w-3" />
                        </button>
                        <Link
                            href=""
                            className="flex items-center gap-2 rounded-full text-black px-5 py-2 text-sm font-swim uppercase"
                        >
                            Get access to everything
                            <FaArrowRight className="h-3 w-3" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
