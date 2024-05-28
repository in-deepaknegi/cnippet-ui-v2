import React from "react";
import type { Metadata } from "next";
import Image from "next/image";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import components from "@/data/components";

export const metadata: Metadata = {
    title: "Components",
    description:
        "Dive into our curated collection of React, Next.js, and Tailwind CSS components at Cnippet UI. Elevate your web projects with ease and efficiency.",
    applicationName: "Cnippet Ui",

    openGraph: {
        title: "Components",
        description:
            "Dive into our curated collection of React, Next.js, and Tailwind CSS components at Cnippet UI. Elevate your web projects with ease and efficiency.",
        url: "http://ui.cnippet.com/components",
        images: ["/images/meta/site.png"],
    },

    twitter: {
        card: "summary_large_image",
        title: "Components",
        description:
            "Dive into our curated collection of React, Next.js, and Tailwind CSS components at Cnippet UI. Elevate your web projects with ease and efficiency.",
        images: ["/images/meta/site.png"],
    },
};

const page = () => {
    return (
        <>
            <Navbar />
            <main>
                <section className="relative isolate z-10 mx-auto bg-white px-6 py-10 font-swir lg:px-8 lg:py-20">
                    <div className="mx-auto max-w-full px-6 md:max-w-[90%] lg:px-7 xl:max-w-[95%]">
                        <div className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center">
                            <p
                                className="flex flex-row items-center justify-center gap-4 text-center text-lg text-gray-700"
                                data-aos="fade-right"
                                data-aos-duration="500"
                            >
                                <span className="h-0.5 w-16 bg-black"></span>
                                Components
                            </p>
                            <h1 className="mt-6 text-center text-4xl text-black md:text-6xl">
                                Beautifully crafted UI components
                            </h1>
                            <p className="mt-6 text-center text-lg text-gray-600 md:text-lg">
                                Over 500+ professionally designed, fully responsive, expertly
                                crafted component examples you can drop into your Tailwind
                                projects and customize to your heart&apos;s content.
                            </p>
                        </div>

                        <div className="relative mt-10 md:mt-20">
                            <ul className="grid-cols-[repeat(auto-fill,minmax(12rem, 1fr))] grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                {components.map((component, i) => (
                                    <li key={i}>
                                        <div className="group relative font-swim before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                                            <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                                                <Image
                                                    src={component.image}
                                                    alt="navbar-img"
                                                    className="absolute inset-0 h-full w-full"
                                                />
                                            </div>
                                            <h4 className="mt-4 text-md text-slate-700 group-hover:text-black">
                                                <a href={`components/${component.slug}`}>
                                                    <span className="absolute -inset-2.5 z-10"></span>
                                                    <span className="relative">{component.name}</span>
                                                </a>
                                            </h4>
                                            <p className="relative mt-1.5 text-sm text-slate-400 ">
                                                {component.number}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default page;
