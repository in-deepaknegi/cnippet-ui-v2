import React from "react";
import Image from "next/image";
import L0 from "@/public/images/logo/c00.svg";
import L2 from "@/public/images/logo/c02.svg";
import L3 from "@/public/images/logo/c03.svg";
import L4 from "@/public/images/logo/c04.svg";
import L5 from "@/public/images/logo/c05.svg";

const logos = [
    {
        src: L0,
    },
    {
        src: L2,
    },
    {
        src: L3,
    },
    {
        src: L4,
    },
    {
        src: L5,
    },
];

const S2 = () => {
    return (
        <section className="relative isolate bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-full px-6 lg:max-w-[80%] lg:px-7">
                <h2 className="text-left text-lg font-semibold leading-8 text-gray-900">
                    Trusted by the world&apos;s most innovative teams
                </h2>
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    {logos.map((logo, i) => (
                        <Image
                            key={i}
                            src={logo.src}
                            alt="logo"
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default S2;