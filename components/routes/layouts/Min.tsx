'use client'
import Image from 'next/image'
import React from 'react'

import { FiArrowUpRight } from "react-icons/fi";

import Link from 'next/link';
import H1 from "@/public/images/svg/github.svg";
import H2 from "@/public/images/svg/instagram.svg";
import toSection from "@/atoms/library/toSection";



const Hero = () => {
    return (
        <section className="relative isolate bg-white py-8 font-swir">
            <div className="mx-auto max-w-full px-4 md:max-w-[95%] lg:px-8 ">
                <div className="flex flex-col mt-2 items-center justify-between gap-y-5 text-center md:gap-x-10 lg:flex-row lg:text-left">
                    <div className='flex flex-col gap-4 items-center justify-center text-center max-w-2xl mx-auto'>
                        <p className="flex flex-row items-center justify-center gap-4 text-center text-lg text-gray-700 md:justify-start md:text-left">
                            <span className="h-0.5 w-16 bg-black"></span>
                            Components
                        </p>
                        <h2 className="text-4xl text-black md:text-4xl">
                            Page Layouts
                        </h2>


                        <p className="max-w-3xl mt-auto text-lg text-gray-700">
                        New to website design and unsure how to structure a page? No need to worry, we&apos;ve got you covered. Explore pre-made layouts created by our experts for optimal component management and SEO.
                        </p>

                        <Link
                        href="/layouts"
                        target='_blank'
                            className='bg-gradient-to-r w-fit from-yellow-300 to-rose-400 flex gap-2 items-center md:mx-0 mx-auto text-black text-lg rounded-full px-8 py-2'
                        >
                            Explore layouts
                            <FiArrowUpRight className='w-5 h-5' />
                        </Link>
                    </div>

                    <div className='flex flex-col'>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero