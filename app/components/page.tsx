import React from "react";
import type { Metadata } from "next";
import Image from "next/image";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import components from "@/data/components";

export const metadata: Metadata = {
    title: "Components | Cnippet Ui",
    description:
        "Dive into our curated collection of React, Next.js, and Tailwind CSS components at Cnippet UI. Elevate your web projects with ease and efficiency.",
    applicationName: "Cnippet Ui",

    openGraph: {
        title: "Cnippet Ui",
        description:
            "Dive into our curated collection of React, Next.js, and Tailwind CSS components at Cnippet UI. Elevate your web projects with ease and efficiency.",
        url: "http://ui.cnippet.com/components",
        images: ["/images/meta/components.png"],
    },

    twitter: {
        card: "summary_large_image",
        title: "Cnippet Ui",
        description:
            "Dive into our curated collection of React, Next.js, and Tailwind CSS components at Cnippet UI. Elevate your web projects with ease and efficiency.",
        images: ["/images/meta/components.png"],
    },
};

const page = () => {
    return (
        <>
            <Navbar />
            <main>
                <section className="relative isolate z-10 mx-auto bg-white px-6 py-10 lg:px-8 lg:py-20">
                    <div className="mx-auto max-w-[95%] px-6 lg:px-7">
                        <div className="max-w-2xl">
                            <h2 className="text-base font-semibold leading-7 text-indigo-600">
                                Components
                            </h2>
                            <p className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 ">
                                Beautifully crafted UI components, ready for your next project.
                            </p>
                        </div>
                        <div className="max-w-xl">
                            <p className="mt-4 text-base leading-7 text-slate-700 ">
                                Over 500+ professionally designed, fully responsive, expertly
                                crafted component examples you can drop into your Tailwind
                                projects and customize to your heart&apos;s content.
                            </p>
                        </div>

                        <div className="relative mt-10 md:mt-8">
                            <ul className="grid-cols-[repeat(auto-fill,minmax(12rem, 1fr))] grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                {components.map((component, i) => (
                                    <li key={i}>
                                        <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                                            <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                                                <Image
                                                    src={component.image}
                                                    alt="navbar-img"
                                                    className="absolute w-full object-cover"
                                                />
                                            </div>
                                            <h4 className="mt-4 text-sm font-medium text-slate-800 group-hover:text-indigo-600 ">
                                                <a href={`/components/${component.slug}`}>
                                                    <span className="absolute -inset-2.5 z-10"></span>
                                                    <span className="relative">{component.name}</span>
                                                </a>
                                            </h4>
                                            <p className="relative mt-1.5 text-xs font-medium text-slate-500 ">
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
