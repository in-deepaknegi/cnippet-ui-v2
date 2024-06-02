import React from "react";
import Image from "next/image";
import Hero1 from "@/public/images/hero/hero7.jpg";

const C2 = () => {
    return (
        <section className="relative isolate overflow-hidden bg-white">
            <div className="mx-auto space-x-0 space-y-10 md:flex md:space-x-10 md:space-y-0 lg:mx-0 lg:max-w-none">
                <div className="mx-auto my-auto w-full max-w-full py-16 pl-16 md:py-0 lg:max-w-3xl lg:flex-shrink">
                    <div className="hidden sm:mb-8 sm:flex">
                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            Announcing our next round of funding.
                            <a href="#" className="font-semibold text-black">
                                <span className="absolute inset-0" aria-hidden="true"></span>{" "}
                                Read more <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>
                    <h1 className="text-5xl tracking-tight md:text-7xl">
                        The only source of knowledge is experience
                    </h1>
                    <p className="mt-6 text-base text-gray-600 lg:text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Vulputate eu scelerisque felis imperdiet proin fermentum. Aenean et
                        tortor at risus.
                    </p>
                    <div className="mt-10 flex gap-x-6">
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
                            className="max-w-md py-2 text-base font-semibold text-black"
                        >
                            Read more <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>

                <div className="flex w-full justify-end sm:justify-start sm:gap-8 md:h-screen lg:max-w-full lg:gap-6">
                    <Image
                        src={Hero1}
                        alt="hero image 1"
                        priority={true}
                        className="aspect-video h-full w-full object-cover object-center md:aspect-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default C2;
