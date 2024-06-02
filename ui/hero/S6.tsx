import React from "react";
import Image from "next/image";
import Hero1 from "@/public/images/hero/hero7.jpg";

const Hero = () => {
    return (
        <section className="relative isolate mb-20 bg-black/95">
            <div className="mx-auto max-w-full px-6 md:max-w-[90%] md:px-8">
                <div className="mx-auto space-x-0 space-y-10 md:flex md:space-x-6 md:space-y-0 lg:mx-0 lg:max-w-none">
                    <div className="z-20 flex items-center overflow-visible pt-36 md:h-[87vh] md:pt-0">
                        <div className="">
                            <div className="relative z-50 max-w-full items-center text-3xl text-white md:text-7xl">
                                <span> The only source of </span>

                                <div className=" inline-flex items-center gap-6">
                                    knowledge is experience
                                    <span className="h-1 w-32 border bg-white md:w-48"></span>
                                </div>
                            </div>

                            <p className="mt-8 max-w-xl text-base text-gray-300 lg:text-xl">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco.
                            </p>
                            <div className="mt-10 flex gap-x-6">
                                <a
                                    href="#"
                                    className="max-w-md rounded-full bg-white px-5 py-2 font-swim text-base text-black shadow-sm"
                                >
                                    Get started
                                </a>
                                <a
                                    href="#"
                                    className="my-auto rounded-full border-gray-500 px-5 py-2 text-base text-white ring-1 ring-gray-500"
                                >
                                    Read more <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="right-0 flex h-full justify-end sm:justify-start md:absolute md:h-screen md:w-[50%] lg:max-w-full lg:gap-6">
                        <Image
                            src={Hero1}
                            alt="hero image 1"
                            priority={true}
                            className="aspect-video h-[50vh] w-full origin-right object-cover object-center md:aspect-auto md:h-[100vh]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
