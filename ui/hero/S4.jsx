import React from "react";
import Image from "next/image";

import Hero1 from "@/public/images/hero/h12.jpg";

const Hero = () => {
    return (
        <section className="relative isolate overflow-hidden bg-white">
            <div className="relative isolate h-full w-full max-w-full">
                <Image
                    src={Hero1}
                    alt="hero-img"
                    quality={100}
                    loading="eager"
                    fill={true}
                    sizes="100vw"
                    className="inset-0 z-[-10] h-full w-full object-cover brightness-110"
                />

                <div className="absolute z-[-9] h-full w-full overflow-hidden bg-gradient-to-b from-black/10 via-black/10 to-black"></div>

                <div className="mx-auto max-w-full px-8 pb-16 pt-[18.5rem] md:max-w-[90%] md:pt-[20rem]">
                    <div className="hidden sm:mb-8 sm:flex">
                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-200 ring-1 ring-gray-100/10 hover:ring-gray-100">
                            Announcing our next round of funding.{" "}
                            <a href="#" className="font-medium text-gray-100">
                                <span className="absolute inset-0" aria-hidden="true"></span>
                                Read more <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>
                    <h1 className="max-w-3xl text-center text-5xl font-semibold text-white md:text-left md:text-6xl">
                        The only source of knowledge is experience
                    </h1>
                    <p className="mt-6 max-w-3xl text-center text-base text-gray-200 md:ml-auto md:text-right md:text-lg md:font-light">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Vulputate eu scelerisque felis imperdiet proin fermentum. Aenean et
                        tortor at risus.
                    </p>
                    <div className="ml-auto mt-3 flex justify-end gap-x-6">
                        <a
                            href="#"
                            type="submit"
                            className="max-w-md rounded-full bg-black px-4 py-2 text-base text-white shadow-sm"
                        >
                            Get started
                        </a>
                        <a
                            href="#"
                            type="submit"
                            className="max-w-md py-2 text-base text-white"
                        >
                            Read more <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
