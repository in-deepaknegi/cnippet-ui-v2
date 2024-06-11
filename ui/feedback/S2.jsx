import React from "react";
import Image from "next/image";

import { RiDoubleQuotesL } from "react-icons/ri";
import Profile1 from "@/public/images/profile/profile3.jpg";

const Feedback2 = () => {
    return (
        <section className="isolate overflow-hidden bg-white py-8 sm:py-16">
            <div className="relative mx-auto max-w-2xl px-6 lg:max-w-[75%] lg:px-8">
                <figure className="grid items-center gap-8 lg:grid-cols-3">
                    <div className="hidden w-40 lg:block lg:w-72">
                        <Image
                            src={Profile1}
                            alt="profile 1"
                            className="aspect-[1/1] h-auto w-full rounded-full object-cover"
                        />
                    </div>

                    <div className="lg:col-span-2">
                        <div className="relative">
                            <RiDoubleQuotesL className="absolute top-[-5rem] z-[-10] h-44 w-44 text-slate-200" />
                            <blockquote className="text-xl text-gray-900 sm:text-2xl">
                                <p>
                                    Commodo amet fugiat excepteur sunt qui ea elit cupidatat
                                    ullamco consectetur ipsum elit consequat. Elit sunt proident
                                    ea nulla ad nulla dolore ad pariatur tempor non. Sint veniam
                                    minim et ea.
                                </p>
                            </blockquote>
                        </div>

                        <figcaption className="mt-8 flex gap-4">
                            <div className="block lg:hidden">
                                <Image
                                    src={Profile1}
                                    alt="profile 1"
                                    className="aspect-[1/1] h-12 w-12 rounded-full object-cover"
                                />
                            </div>
                            <div className="my-auto">
                                <div className="text-lg font-semibold">Cathy Mueller</div>
                                <a
                                    href="#"
                                    className="text-sm font-semibold tracking-wide text-gray-400"
                                >
                                    @cathymueller
                                </a>
                            </div>
                        </figcaption>
                    </div>
                </figure>
            </div>
        </section>
    );
};

export default Feedback2;
