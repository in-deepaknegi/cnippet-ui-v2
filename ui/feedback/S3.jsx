"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { FaStar } from "react-icons/fa";

import Image from "next/image";
import Profile1 from "@/public/images/profile/profile2.jpg";
import Profile2 from "@/public/images/profile/profile5.jpg";

const feedbacks = [
    {
        id: 1,
        text: "Commodo amet fugiat excepteur sunt qui ea elit cupidatat ullamco consectetur ipsum elit consequat. Elit sunt proident ea nulla ad nulla dolore ad pariatur tempor non. Sint veniam minim et ea.",
        image: Profile1,
        author: "Anne Smith",
        username: "@annesmith",
    },
    {
        id: 2,
        text: "Commodo amet fugiat excepteur sunt qui ea elit cupidatat ullamco consectetur ipsum elit consequat ea. lit sunt proident ea nulla ad nulla dolore ad pariatur tempor non.",
        image: Profile2,
        author: "Jake Webber",
        username: "@jakewebber",
    },
];

const Feedback3 = () => {
    return (
        <section className="relative isolate overflow-hidden">
            <Swiper
                spaceBetween={30}
                effect={"slide"}
                loop={true}
                centeredSlides={false}
                speed={1500}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="s4 h-full w-full"
            >
                {feedbacks.map((feedback, i) => (
                    <SwiperSlide key={i}>
                        <div className="isolate overflow-hidden bg-white px-6 lg:px-8">
                            <div className="relative mx-auto max-w-2xl py-16 sm:py-16 lg:max-w-[50%]">
                                <div className="flex size-full flex-col">
                                    <div className="mx-auto flex w-full items-center justify-center gap-2">
                                        <Image
                                            src={feedback.image}
                                            alt="profile-1"
                                            className="h-12 w-12 rounded-full object-cover"
                                        />
                                        <div className="ml-2">
                                            <div className="text-lg font-semibold">
                                                {feedback.author}
                                            </div>
                                            <a
                                                href="#"
                                                className="text-sm font-semibold tracking-wide text-gray-400"
                                            >
                                                {feedback.username}
                                            </a>
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        <div className="relative">
                                            <blockquote className="text-center text-xl text-gray-900 sm:text-xl">
                                                <p>{feedback.text}</p>
                                            </blockquote>
                                        </div>

                                        <div className="my-auto mt-8 hidden justify-center md:flex">
                                            {[...Array(4).keys()].map((index) => (
                                                <div key={index}>
                                                    <FaStar className="mx-0.5 h-5 w-5 text-black" />
                                                </div>
                                            ))}
                                            {[...Array(1).keys()].map((index) => (
                                                <div key={index}>
                                                    <FaStar className="mx-0.5 h-5 w-5 text-gray-300" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Feedback3;
