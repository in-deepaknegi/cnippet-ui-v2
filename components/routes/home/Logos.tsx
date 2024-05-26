import React from "react";
import Image from "next/image";

import L0 from "@/public/images/logo/c00.svg";
import L1 from "@/public/images/logo/c02.svg";
import L2 from "@/public/images/logo/c03.svg";
import L3 from "@/public/images/logo/c04.svg";
import L4 from "@/public/images/logo/c05.svg";

const logos = [
    {
        src: L0,
        alt: "misc",
    },
    {
        src: L1,
        alt: "misc",
    },
    {
        src: L2,
        alt: "misc",
    },
    {
        src: L3,
        alt: "misc",
    },
    {
        src: L4,
        alt: "misc",
    },
];

const Logos = () => {
    const data = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];
    return (
        <section className=" isolate bg-white py-16 sm:py-20">
            <div className="relative mx-auto max-w-full overflow-hidden px-0 lg:max-w-[85%] lg:px-7">
                <div className="absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-white/5 md:w-24"></div>
                <div className="absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-white/5 md:w-24"></div>

                <div className="mx-auto flex max-w-lg animate-carousel flex-row items-center justify-center gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-16 lg:mx-0 lg:max-w-none">
                    {data.map((logo, i) => (
                        <Image
                            key={i}
                            src={logo.src}
                            alt="logo"
                            className={`mx-auto object-contain`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Logos;
