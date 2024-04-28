import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

import Hero1 from "@/public/images/hero/hero5.jpg";
import Hero2 from "@/public/images/hero/hero6.jpg";

const Hero = () => {
    return (
        <section className="relative isolate bg-white overflow-hidden">
            <div className="max-w-full relative w-full h-full isolate">
                <Image
                    src={Hero2}
                    alt='hero-img'
                    quality={100}
                    loading="eager"
                    fill={true}
                    sizes="100vw"
                    className="w-full h-full rounded-2xl object-cover inset-0 z-[-10] brightness-110"
                />

                <div className="absolute w-full h-full z-[-9] bg-gradient-to-b from-white/10 via-black/40 to-black rounded-2xl overflow-hidden"></div>

                <div className="mx-auto px-8 pb-16 pt-[18.5rem] md:pt-64">
                    <div className="hidden sm:mb-8 sm:flex">
                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-200 ring-1 ring-gray-100/10 hover:ring-gray-100">
                            Announcing our next round of funding.{" "}
                            <a href="#" className="font-medium text-gray-100">
                                <span
                                    className="absolute inset-0"
                                    aria-hidden="true"
                                ></span>
                                Read more <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>
                    <h1 className="text-5xl max-w-3xl font-semibold text-white md:text-6xl md:text-left text-center">
                        Data to enrich your online bussiness
                    </h1>
                    <p className="mt-6 text-base text-center md:text-right md:ml-auto max-w-3xl text-gray-200 md:font-light md:text-lg">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                    </p>
                    <div className="mt-3 ml-auto flex justify-end gap-x-6">
                        <Button text="Get started" url={'#'} color={'bg-gray-800'} />
                        <a
                            href="#"
                            className="my-auto text-sm font-semibold leading-6 text-gray-100"
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