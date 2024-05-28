import React from "react";
import Image from "next/image";
import templates from "@/data/templates";

const Projects = () => {
    return (
        <section id="templates" className=" relative isolate py-10 md:py-16 font-swir">
            <div className="mx-auto max-w-[90%] px-6 lg:px-8">
                {templates.map((item, i) => (
                    <div
                        key={i}
                        className="relative mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:flex lg:gap-0"
                    >
                        <div className="sm:pt-2 lg:relative lg:w-[15.5rem] lg:flex-none">
                            <div className="flex items-center gap-2">
                                <h2 className="text-2xl font-swim">
                                    <a href={`templates/${item.slug}`}>
                                        <span className="absolute inset-0 lg:left-8"></span>
                                        {item.title}
                                    </a>
                                </h2>
                            </div>
                            <p className="text-sm mt-2 text-slate-700">
                                {item.sub}
                            </p>
                            <p className="mt-3 text-sm leading-6 text-slate-600">
                                {item.description}
                            </p>
                            <div className="mt-4 h-px w-6 bg-slate-300"></div>
                            <p className="mt-4 text-sm leading-6 text-slate-600">
                                <strong className="font-semibold text-slate-900">
                                    ${item.rate}
                                </strong>{" "}
                                or included with all-access
                            </p>
                        </div>

                        <div className="lg:relative lg:flex items-center w-full">
                            <div className="sticky left-0 z-10 hidden w-8 flex-none bg-gradient-to-r from-white lg:block"></div>

                            <div className="space-x-10 lg:flex w-full lg:items-start">
                                <a
                                    tabIndex="-1"
                                    className="hidden lg:absolute lg:inset-y-0 lg:-left-8 lg:right-8 lg:z-10 lg:block"
                                    href={`templates/${item.slug}`}
                                >
                                    <span className="sr-only">View {item.title} template</span>
                                </a>

                                <ul className="flex gap-5 ">
                                    {item.gallery.slice(0, 3).map((sub, j) => (
                                        <li key={j}>
                                            <Image
                                                src={sub.href}
                                                alt=""
                                                height={380}
                                                width={560}
                                                className="rounded-xl border bg-slate-100 object-cover shadow-lg"
                                            />
                                        </li>

                                    ))}
                                </ul>


                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
