import React from "react";
import Image from "next/image";
import L0 from "@/public/images/logo/i1.png";
import L1 from "@/public/images/logo/i2.png";
import L2 from "@/public/images/logo/i3.png";
import L3 from "@/public/images/logo/i4.png";
import L4 from "@/public/images/logo/i5.png";
import L5 from "@/public/images/logo/i6.png";
import L6 from "@/public/images/logo/i7.png";
import L7 from "@/public/images/logo/i8.png";

const logos = [
    {
        src: L0,
    },
    {
        src: L1,
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
    {
        src: L6,
    },
    {
        src: L7,
    },
];

const Logos = () => {
    const data = [...logos, ...logos, ...logos];
    return (
        <section className=" isolate bg-white py-10 sm:py-20">
            <div className="relative mx-auto max-w-full overflow-hidden px-0 lg:max-w-[85%] lg:px-7">
                <div className="absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-white/5 md:w-24"></div>
                <div className="absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-white/5 md:w-24"></div>

                <div className="mx-auto flex max-w-lg animate-carousel flex-row items-center justify-center gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-16 lg:mx-0 lg:max-w-none">
                    {data.map((logo, i) => (
                        <Image
                            key={i}
                            src={logo.src}
                            alt="logo companies"
                            className={`mx-auto object-cover w-28 md:w-36`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Logos;
