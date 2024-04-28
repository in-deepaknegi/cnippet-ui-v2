"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import Image from "next/image";
import Profile6 from "@/public/images/profile/profile3.jpg";
import Profile4 from "@/public/images/profile/profile5.jpg";

const feedbacks = [
    {
        id: 1,
        text: "Commodo amet fugiat excepteur sunt qui ea elit cupidatat ullamco consectetur ipsum elit consequat. Elit sunt proident ea nulla ad nulla dolore ad pariatur tempor non. Sint veniam minim et ea.",
        image: Profile6,
        author: "Judith Black",
        username: "@judithblack",
    },
    {
        id: 2,
        text: "Commodo amet fugiat excepteur sunt qui ea elit cupidatat ullamco consectetur ipsum elit consequat ea. lit sunt proident ea nulla ad nulla dolore ad pariatur tempor non.",
        image: Profile4,
        author: "Judith Black",
        username: "@judithblack",
    },
]

const Feedback3 = () => {
    return (
        <section className='relative isolate overflow-hidden'>
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
                className="h-full w-full"
            >
                {feedbacks.map((feedback) => (
                    <SwiperSlide key={feedback.id}>
                        <section className='isolate bg-white overflow-hidden px-6 lg:px-8'>
                            <div className='relative mx-auto max-w-2xl py-16 sm:py-16 lg:max-w-5xl'>
                                <figure className='grid lg:grid-cols-3 items-center gap-8'>
                                    <div className='w-40 lg:w-72 lg:block hidden'>
                                        <Image
                                            src={feedback.image}
                                            alt='profile 1'
                                            className='w-full h-auto rounded-full aspect-[1/1] object-cover'
                                        />
                                    </div>
                                    <div className='lg:col-span-2 font-sans'>
                                        <div className='relative'>
                                            <blockquote className="text-xl text-gray-900 sm:text-2xl">
                                                <p>
                                                    {feedback.text}
                                                </p>
                                            </blockquote>
                                        </div>

                                        <figcaption className='mt-8 flex gap-4'>
                                            <div className='lg:hidden block'>
                                                <Image
                                                    src={feedback.image}
                                                    alt='profile 1'
                                                    className='h-12 w-12 rounded-full aspect-[1/1] object-cover'
                                                />
                                            </div>
                                            <div className='my-auto'>
                                                <div className='text-lg font-semibold'>
                                                    Judith Black
                                                </div>
                                                <a href="#" className='text-sm tracking-wide font-semibold text-blue-600'>
                                                    @judithblack
                                                </a>
                                            </div>
                                        </figcaption>
                                    </div>
                                </figure>
                            </div>
                        </section>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Feedback3