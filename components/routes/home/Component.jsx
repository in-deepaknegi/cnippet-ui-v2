import Image from "next/image";
import React from "react";
import components from "@/data/components";

const Components = () => {
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
                        Components
                    </p>
                    <h2
                        className="mt-6 text-center text-4xl text-black md:text-5xl"
                        data-aos="fade-left"
                        data-aos-duration="500"
                    >
                        Beautifully crafted UI components
                    </h2>
                    <p className="mt-6 text-center text-lg text-gray-600 md:text-lg">
                        Over 500+ professionally designed, fully responsive, expertly
                        crafted component examples you can drop into your Tailwind projects
                        and customize to your heart&apos;s content.
                    </p>
                </div>

                <div className="relative mt-10 md:mt-8">
                    <div className="grid-cols-[repeat(auto-fill,minmax(12rem, 1fr))] grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {components.slice(0, 4).map((component, i) => (
                            <div key={i}>
                                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                                    <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                                        <Image
                                            src={component.image}
                                            alt="navbar-img"
                                            className="absolute inset-0 h-full w-full"
                                        />
                                    </div>
                                    <h3 className="mt-4 font-swim text-md text-slate-800 group-hover:text-indigo-600">
                                        <a href={`components/${component.slug}`}>
                                            <span className="absolute -inset-2.5 z-10"></span>
                                            <span className="relative">{component.name}</span>
                                        </a>
                                    </h3>
                                    <p className="relative mt-1.5 text-sm font-medium text-slate-500 ">
                                        {component.number}
                                    </p>
                                </div>
                            </div>
                        ))}

                        <div className="pointer-events-none absolute -inset-x-2.5 -bottom-2.5 h-[16.6%] bg-gradient-to-t from-white to-white/25 sm:h-[13.3%]"></div>
                    </div>
                </div>
                <div className="pointer-events-none relative z-10 -mt-5 flex justify-center">
                    <a
                        className="bg-primary pointer-events-auto inline-flex justify-center rounded-lg px-4 py-3 font-swim text-md text-black "
                        href="/components"
                    >
                        <span>Show more...</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Components;
