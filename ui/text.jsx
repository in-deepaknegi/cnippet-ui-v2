import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FiArrowUpRight } from "react-icons/fi";

const Hero = () => {
    return (
        <section className="relative isolate py-16 lg:py-24">
            <div className=" mx-auto max-w-full px-6 md:max-w-[95%] lg:px-0">
                <div>
                    <div className="mx-auto max-w-3xl">
                        <p
                            className="flex flex-col items-center justify-center gap-4 text-center text-lg text-gray-700 md:flex-row"
                            data-aos="fade-right"
                            data-aos-duration="500"
                        >
                            <span className="h-0.5 w-16 bg-black"></span>
                            The web is the world&apos;s largest library
                        </p>
                        <h1 className="mt-6 text-center text-4xl text-black md:text-7xl">
                            Website Development
                        </h1>
                    </div>

                    <div className="mx-auto mt-8 flex max-w-4xl flex-col items-center justify-between gap-6 md:mt-10 md:flex-row">
                        <p className="text-center text-lg text-gray-700 md:w-[75%] md:text-left md:text-xl">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                            fugiat aliqua.
                        </p>
                        <Link
                            href={"/contacts#contact"}
                            className="flex items-center gap-2 rounded-full bg-black px-5 py-2 text-xl uppercase text-white"
                        >
                            Let&apos;s talk
                            <FiArrowUpRight className="h-5 w-5" />
                        </Link>
                    </div>
                </div>

                {/* extra code here */}
            </div>
        </section>
    );
};

export default Hero;
