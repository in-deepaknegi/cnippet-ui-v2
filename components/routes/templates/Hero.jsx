import React from "react";
import Image from "next/image";
import T1 from "@/public/t1.webp";
import T2 from "@/public/t2.webp";

const Hero = () => {
    return (
        <div className="max-w-[90%] mx-auto px-4 pt-4 sm:px-6 lg:flex lg:px-8 overflow-hidden">
            <div className="relative mx-auto max-w-[40rem] pb-16 pt-16 lg:mx-0 lg:w-[40rem] lg:max-w-none lg:flex-none lg:pb-24 lg:pr-4 lg:pt-20">
                <h1 className="text-base font-semibold leading-7 text-sky-500">
                    By the makers of Tailwind CSS
                </h1>

                <p className="mt-4 text-3xl font-extrabold tracking-[-0.04em] text-black sm:text-5xl sm:leading-[3.5rem]">
                    Modern website templates, crafted with Tailwind CSS.
                </p>

                <div className="mt-4 flex flex-wrap gap-6">
                    <div className="flex items-center text-sm font-medium text-slate-500">
                        
                        <span className="ml-2.5">React</span>
                    </div>
                    <div className="flex items-center text-sm font-medium text-slate-500">
                        
                        <span className="ml-2.5">Next.js</span>
                    </div>
                </div>
                <p className="mt-4 text-base leading-7 text-slate-600">
                    Visually-stunning, easy to customize site templates built with React
                    and Next.js. The perfect starting point for your next project and the
                    ultimate resource for learning how experts build real websites with
                    Tailwind CSS.
                </p>
                <div className="mt-8 flex gap-4">
                    <a
                        href="#browse"
                        className="inline-flex justify-center rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-700"
                    >
                        <span>
                            Browse <span className="hidden sm:inline">templates</span>
                            <span aria-hidden="true" className="text-slate-400 sm:inline">
                                →
                            </span>
                        </span>
                    </a>
                    <a
                        className="inline-flex justify-center rounded-lg bg-white/0 px-4 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-900/10 hover:bg-white/25 hover:ring-slate-900/15 "
                        href="/all-access"
                    >
                        <span>
                            Get <span className="hidden sm:inline">everything</span>
                            with all-access{" "}
                            <span aria-hidden="true" className="text-black/25 sm:inline">
                                →
                            </span>
                        </span>
                    </a>
                </div>
            </div>
            <div className="relative z-10 hidden lg:block overflow-visible">
                <div className="mt-6 flex">
                    <div className="relative flex-shrink-0 p-4">
                        <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-900/5">
                            <Image alt="" className="h-fit w-[316px]" src={T1} />
                        </div>
                    </div>
                    <div className="relative mt-14 flex-shrink-0 p-4">
                        <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-900/5">
                            <Image alt="" className="h-fit w-[316px]" src={T2} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
