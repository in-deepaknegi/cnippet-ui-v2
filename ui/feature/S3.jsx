import React from "react";
import Image from "next/image";
import Hero1 from "@/public/images/hero/h13.jpg";

const tracks = [
    {
        title: "Succesfull projects",
        value: "340+",
    },
    {
        title: "Team members",
        value: "65+",
    },
    {
        title: "Happy clients",
        value: "80+",
    },
];

const Features = () => {
    return (
        <section className="relative isolate bg-white md:h-screen">
            <div className="absolute h-full w-1/2 bg-slate-100 md:w-1/3"></div>
            <div className="relative isolate mx-auto max-w-full px-6 md:max-w-[97%] lg:px-8">
                <div className="mx-auto flex flex-col pt-20 md:pt-0">
                    <div className="top-32 flex flex-col justify-end sm:justify-start sm:gap-2 md:absolute md:h-screen md:flex-row lg:max-w-full lg:gap-10">
                        <ul className="flex flex-row flex-wrap gap-4 md:flex-col md:gap-10">
                            {tracks.map((item, i) => (
                                <li
                                    key={i}
                                    className="items-left flex flex-col border-gray-300 py-8 text-4xl font-semibold tracking-wider md:border-b md:text-6xl"
                                >
                                    {item.value}
                                    <span className="text-sm font-medium tracking-normal md:text-lg">
                                        {item.title}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <Image
                            src={Hero1}
                            alt="hero image 1"
                            priority={true}
                            className="h-[40vh] w-full max-w-xl object-cover object-center md:h-[75vh]"
                        />
                    </div>

                    <div className="z-20 order-first flex w-full items-center justify-center overflow-visible text-left md:h-screen md:justify-end md:text-right">
                        <div className="">
                            <h1 className="relative max-w-2xl text-5xl font-semibold text-black md:text-5xl">
                                The only source of knowledge is experience
                            </h1>
                            <p className="ml-auto mt-6 max-w-lg text-base text-gray-900 lg:text-lg">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Vulputate eu scelerisque felis imperdiet proin fermentum. Aenean
                                et tortor at risus.
                            </p>
                            <div className="mt-10 flex justify-start gap-x-6 md:justify-end">
                                <a
                                    href="#"
                                    className="max-w-md rounded-full bg-black px-5 py-2 text-base text-white shadow-sm"
                                >
                                    Get started
                                </a>
                                <a
                                    href="#"
                                    className="my-auto rounded-full border-gray-500 px-5 py-2 text-base text-black ring-1 ring-gray-500"
                                >
                                    Read more <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
