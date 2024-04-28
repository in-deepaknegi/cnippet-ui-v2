import Image from "next/image";
import React from "react";
import components from "@/data/components";

const Components = () => {
    return (
        <section className="relative isolate z-10 bg-white py-10 lg:py-20">
            <div className="mx-auto max-w-[90%] px-6 lg:px-7">
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
                        Over 500+ professionally designed, fully responsive, expertly crafted
                        component examples you can drop into your Tailwind projects and
                        customize to your heart&apos;s content.
                    </p>

                </div>

                <div className="relative mt-10 md:mt-8">
                    <ul className="grid-cols-[repeat(auto-fill,minmax(12rem, 1fr))] grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {components.slice(0, 4).map((component, i) => (
                            <li key={i}>
                                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                                        <Image
                                            src={component.image}
                                            alt="navbar-img"
                                            className="absolute inset-0 h-full w-full"
                                        />
                                    </div>
                                    <h4 className="mt-4 text-sm font-medium text-slate-800 group-hover:text-indigo-600 ">
                                        <a href={`components/${component.slug}`}>
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

                        <div className="pointer-events-none absolute -inset-x-2.5 -bottom-2.5 h-[16.6%] bg-gradient-to-t from-white to-white/25 sm:h-[13.3%]"></div>
                    </ul>
                </div>
                <div className="pointer-events-none relative z-10 -mt-5 flex justify-center">
                    <a
                        className="bg-primary pointer-events-auto inline-flex justify-center rounded-lg px-4 py-3 text-sm font-semibold text-black "
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
