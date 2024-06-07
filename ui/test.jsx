import React from "react";
import Image from "next/image";
import Hero1 from "@/public/images/hero/h12.jpg";
import Hero2 from "@/public/images/hero/h13.jpg";
import Hero3 from "@/public/images/hero/h14.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

const features = [
    {
        name: "Short heading here",
        href: "#",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        image: Hero1,
    },
    {
        name: "Short heading here",
        href: "#",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        image: Hero2,
    },
    {
        name: "Short heading here",
        href: "#",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        image: Hero3,
    },
];

const Featurelist = () => {
    return (
        <section className="bg-white py-24 sm:py-28">
            <div className="mx-auto max-w-full px-6 md:max-w-[90%] lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-semibold text-gray-900 sm:text-5xl">
                        The only source of knowledge is experience
                    </h2>
                    <p className="mt-6 max-w-3xl text-base text-gray-700 md:text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Vulputate eu scelerisque felis imperdiet proin fermentum. Aenean et
                        tortor at risus.
                    </p>
                </div>
                <div className="mx-auto mt-8 max-w-2xl px-0 md:px-5 lg:mt-16 lg:max-w-none lg:px-10">
                    <dl className="mx-auto grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature, i) => (
                            <div
                                key={i}
                                className="group relative flex flex-col overflow-hidden md:p-3"
                            >
                                <dt className="flex flex-col gap-y-5 text-2xl font-semibold">
                                    <Image
                                        src={feature.image}
                                        alt="post-img"
                                        className="aspect-video w-full transform overflow-hidden rounded-2xl object-cover duration-300 ease-in-out hover:scale-110 sm:aspect-[2/1] lg:aspect-[3/2]"
                                    />
                                    {feature.name}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                    <p className="flex-auto">{feature.description}</p>
                                    <a
                                        href={feature.href}
                                        className="mt-3 flex items-center gap-4 text-sm font-semibold"
                                    >
                                        <span className=" absolute inset-0"></span>
                                        Learn more
                                        <FaArrowRightLong className=" -translate-x-20 text-gray-700 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:text-black group-hover:opacity-100" />
                                    </a>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
};

export default Featurelist;
