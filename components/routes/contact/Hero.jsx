'use client'
import Image from 'next/image'
import React from 'react'

import { FiArrowUpRight } from "react-icons/fi";

import Link from 'next/link';
import H1 from "@/public/images/svg/github.svg";
import H2 from "@/public/images/svg/instagram.svg";
import toSection from "@/atoms/library/toSection";

const social = [
    {
        title: "github",
        href: "https://github.com/in-deepaknegi",
        svg: H1,
    },
    {
        title: "insta",
        href: "https://www.instagram.com/cnippetui/",
        svg: H2,
    },
];


const Hero = () => {
    return (
        <section className="relative isolate bg-white py-8 lg:py-16 font-swir">
            <div className="mx-auto max-w-full px-4 md:max-w-[90%] lg:px-8 ">
                <div className="flex flex-col mt-2 items-center justify-between gap-y-5 text-center md:gap-x-10 lg:flex-row lg:text-left">
                    <div className='flex flex-col max-w-2xl'>
                        <p
                            className="flex flex-row items-center justify-center gap-4 text-center text-lg text-gray-700 md:justify-start"
                            data-aos="fade-right"
                            data-aos-duration="500"
                        >
                            <span className="h-0.5 w-16 bg-black"></span>
                            Contact us
                        </p>
                        <h1
                            className="mt-6 text-center text-4xl text-black md:text-left md:text-7xl"
                            data-aos="fade-left"
                            data-aos-duration="500"
                        >
                            Let&apos;s work together.
                        </h1>
                        <p className="mt-8 max-w-xl text-center text-lg text-gray-700 md:text-left md:text-lg">
                            We consist of experienced product managers, content creators,
                            designers, and developers, forming a team of multidisciplinary
                            digital product experts.
                        </p>
                    </div>

                    <div className='flex flex-col'>
                        <button
                            onClick={() => toSection('contact')}
                            className=' bg-yellow-400 flex gap-2 items-center md:mx-0 mx-auto text-black text-lg rounded-full px-8 py-2'
                        >
                            Book your free call
                            <FiArrowUpRight className='w-5 h-5' />
                        </button>

                        <div className='flex flex-row items-center gap-4 mt-6'>
                            <p className='text-xl text-gray-800'>Follow us on:</p>

                            <div className="flex flex-wrap gap-x-3">
                                {social.map((item, i) => (
                                    <a
                                        key={i}
                                        href={item.href}
                                        target="_blank"
                                        className="rounded-full bg-white p-2 shadow-lg"
                                    >
                                        <span className="sr-only">{item.title}</span>
                                        <Image src={item.svg} alt={item.title} className="h-6 w-6" />
                                    </a>
                                ))}
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero