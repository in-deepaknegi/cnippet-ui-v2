import React from "react";
import { FaBuffer, FaCheckToSlot, FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineGraphicEq } from "react-icons/md";

const features = [
    {
        name: "Short heading here",
        href: "#",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        svg: <FaBuffer className="h-6 w-6 text-black" />,
    },
    {
        name: "Short heading here",
        href: "#",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        svg: <FaCheckToSlot className="h-6 w-6 text-black" />,
    },
    {
        name: "Short heading here",
        href: "#",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        svg: <MdOutlineGraphicEq className="h-6 w-6 text-black" />,
    },
];

const List1 = () => {
    return (
        <section className="relative isolate bg-white py-24 sm:py-28">
            <div className="mx-auto max-w-full px-6 md:max-w-[90%] lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="mt-2 text-3xl font-semibold text-gray-900 sm:text-5xl">
                        The only source of knowledge is experience
                    </h2>
                    <p className="mt-6 max-w-3xl text-base text-gray-700 md:text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Vulputate eu scelerisque felis imperdiet proin fermentum. Aenean et
                        tortor at risus.
                    </p>
                </div>
                <div className="mx-auto max-w-2xl sm:mt-10 lg:mt-20 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature, i) => (
                            <div key={i} className="flex flex-col">
                                <dt className="flex gap-x-3 text-center text-lg font-semibold">
                                    {feature.svg}
                                    {feature.name}
                                </dt>
                                <dd className="relative mt-4 flex flex-auto flex-col">
                                    <p className="flex-auto text-base text-gray-600">
                                        {feature.description}
                                    </p>
                                    <p className="mt-6 cursor-pointer overflow-hidden">
                                        <a
                                            href={feature.href}
                                            className="group flex items-center gap-3 text-sm font-semibold leading-6 text-gray-800 hover:text-black"
                                        >
                                            <span className=" absolute inset-0"></span>
                                            Learn more
                                            <FaArrowRightLong className=" -translate-x-36 text-gray-700 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:text-black" />
                                        </a>
                                    </p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
};

export default List1;
