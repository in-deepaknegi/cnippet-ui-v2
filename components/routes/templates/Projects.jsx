import React from "react";
import Image from "next/image";
import templates from "@/data/templates";

const Projects = () => {
    return (
        <section id="product-catalyst" className="mt-28 ">
            <div className="mx-auto max-w-[90%] px-6 lg:px-8">
                
                <p className="mt-4 text-3xl font-extrabold tracking-[-0.04em] text-black sm:text-5xl sm:leading-[3.5rem]">
                    Modern website templates, crafted with Tailwind CSS.
                </p>

                {templates.map((item, i) => (
                    <div
                        key={i}
                        className="relative mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:flex lg:gap-0"
                    >
                        <div className="sm:pt-2 lg:relative lg:w-[15.5rem] lg:flex-none">
                            <div className="flex items-center gap-2">
                                <h2 className="text-base font-semibold text-slate-900">
                                    <a href={`templates/${item.slug}`}>
                                        <span className="absolute inset-0 lg:left-8"></span>
                                        {item.title}
                                    </a>
                                </h2>
                            </div>
                            <p className="text-sm capitalize leading-6 text-slate-600">
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

                        <div className="lg:relative lg:flex">
                            <div className="sticky left-0 z-10 hidden w-8 flex-none bg-gradient-to-r from-white lg:block"></div>

                            <div className="space-x-10 lg:relative lg:flex lg:flex-none lg:items-start">
                                <a
                                    tabIndex="-1"
                                    className="hidden lg:absolute lg:inset-y-0 lg:-left-8 lg:right-8 lg:z-10 lg:block"
                                    href={`templates/${item.slug}`}
                                >
                                    <span className="sr-only">View {item.title} template</span>
                                </a>

                                {item.gallery.map((sub, j) => (
                                    <Image
                                        key={j}
                                        src={sub.href}
                                        alt=""
                                        height={380}
                                        width={560}
                                        className="h-[14rem] w-full rounded-xl border bg-slate-100 object-cover object-top lg:w-[19.1666666rem] lg:flex-none"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
