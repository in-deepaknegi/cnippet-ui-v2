"use client";
import React from "react";

import Image from "next/image";
import Hero1 from "@/public/images/hero/h12.jpg";
import Hero2 from "@/public/images/hero/h13.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Autoplay, Navigation } from "swiper/modules";

const images = [
    {
        id: 1,
        src: Hero1,
        alt: "slider 1",
    },
    {
        id: 2,
        src: Hero2,
        alt: "slider 2",
    },
];

const Hero = () => {
    return (
        <section className="relative isolate overflow-hidden bg-white">
            <div className="mx-auto my-10 max-w-full px-6 md:max-w-[95%] lg:px-8 ">
                <div className="relative isolate h-full w-full">
                    <Swiper
                        spaceBetween={30}
                        effect={"coverflow"}
                        speed={1500}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        modules={[Autoplay, EffectFade, Navigation]}
                        className="rounded-2xl"
                    >
                        {images.map((image) => (
                            <SwiperSlide key={image.id}>
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    quality={100}
                                    loading="eager"
                                    fill={true}
                                    sizes="100vw"
                                    className="inset-0 z-[-10] h-full w-full rounded-2xl object-cover brightness-110"
                                />

                                <div className="absolute z-[-9] h-full w-full overflow-hidden rounded-2xl bg-gradient-to-b from-white/10 via-black/40 to-black"></div>

                                <div className="mx-auto px-8 pb-16 pt-[18.5rem] md:pt-[20rem]">
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
                                    <h1 className="max-w-3xl text-center text-5xl font-semibold text-white md:text-left md:text-6xl">
                                        The only source of knowledge is experience
                                    </h1>
                                    <p className="mt-6 max-w-3xl text-center text-base text-gray-200 md:ml-auto md:text-right md:text-lg md:font-light">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Vulputate eu scelerisque felis imperdiet proin
                                        fermentum. Aenean et tortor at risus.
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Hero;
