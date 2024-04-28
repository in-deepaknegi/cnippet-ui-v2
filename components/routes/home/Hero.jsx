import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import H1 from "@/public/images/home/T1.webp";
import H2 from "@/public/images/home/T2.webp";
import H3 from "@/public/images/home/T3.webp";
import H4 from "@/public/images/home/T4.webp";

const Hero = () => {
    return (
        <section className="relative isolate h-full overflow-hidden bg-white">
            <div className="mx-auto max-w-[90%] px-6 py-4 lg:px-7">
                <div className="mx-auto gap-0 md:gap-x-8 lg:mx-0 md:flex lg:max-w-none">

                    <div className="mt-28 w-full max-w-full lg:max-w-2xl lg:flex-shrink">
                        <h1 className="text-5xl font-semibold text-black md:text-6xl">
                            Improve your code with our advanced materials.
                        </h1>
                        <p className="mt-6 text-base text-gray-600 lg:text-base">
                            Crafted with precision using tailwindcss and next.js, these
                            components and templates are ideal for launching your upcoming
                            project and achieving a refined and professional outcome.
                        </p>
                        <div className="mt-10 flex flex-col items-start md:items-center gap-x-6 gap-y-4 sm:flex-row sm:gap-y-0">
                            <Button text="Get Started" url={"#"} />

                            <a
                                href="#"
                                className="my-auto text-sm font-semibold leading-6 text-dusk-700"
                            >
                                Read more <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>

                    <div className="mt-10 hidden md:flex w-full justify-end sm:justify-start sm:gap-8 md:mt-16 lg:gap-6 xl:mt-0 translate-x-16 lg:translate-x-0">
                        <div className="hidden w-1/2 flex-none md:block lg:w-1/2 pt-20">
                            <div className="relative">
                                <Image
                                    src={H4}
                                    alt="C image 2"
                                    loading="eager"
                                    priority={false}
                                    className="h-full w-full rounded-2xl border bg-gray-50 object-cover shadow-2xl"
                                />
                            </div>
                            <div className="relative">
                                <Image
                                    src={H1}
                                    alt="C image 2"
                                    loading="eager"
                                    priority={false}
                                    className="mt-8  h-full w-full rounded-2xl border bg-gray-50 object-cover shadow-2xl"
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
                                    className="h-full w-full rounded-2xl border bg-gray-50 object-cover shadow-2xl"
                                />
                            </div>
                            <div className="relative hidden md:block">
                                <Image
                                    src={H2}
                                    alt="C image 2"
                                    loading="eager"
                                    priority={false}
                                    className="mt-8 h-full w-full rounded-2xl border bg-gray-50 object-cover shadow-2xl"
                                />
                            </div>
                            <div className="relative hidden md:block">
                                <Image
                                    src={H4}
                                    alt="C image 2"
                                    loading="eager"
                                    priority={false}
                                    className="mt-8 h-full w-full rounded-2xl border bg-gray-50 object-cover shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
