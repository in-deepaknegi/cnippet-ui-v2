import React from 'react'
import Image from 'next/image';
import { Metadata } from 'next';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import templates from '@/data/templates';

const Product = ({ params }: { params: { slug: string } }) => {
    const id = params.slug
    // console.log(id)
    const template = templates.find((template) => template.slug === id)
    const a = template?.slug

    if (!template) {
        return <div>template not found</div>
    }

    return (
        <>
            <Navbar />
            <main>
                <div className="relative">
                    <div className="max-w-[90%] relative mx-auto px-4 pt-16 sm:px-6 lg:px-8 lg:pt-20">
                        <div className="mx-auto grid max-w-[40rem] grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                            <div className="flex flex-col lg:pb-6">
                                <h1 className="mt-4 text-4xl font-extrabold leading-none tracking-tight text-slate-900 sm:text-5xl sm:leading-[3.5rem]">
                                    {template.title}
                                </h1>
                                <div className="order-first flex items-center gap-2">
                                    <p className="text-base font-semibold leading-7 text-slate-500">
                                        {template.sub}
                                    </p>
                                </div>
                                <p className="mt-6 text-base leading-7 text-slate-700">
                                    {template.description}
                                </p>
                                <div className="mt-6 flex flex-wrap gap-6">
                                    <div className="flex items-center text-sm font-medium text-slate-500">

                                        <span className="ml-2.5">React</span>
                                    </div>
                                    <div className="flex items-center text-sm font-medium text-slate-500">
                                        <span className="ml-2.5">Tailwind Css</span>
                                    </div>
                                </div>
                                <div className="mt-10 flex flex-wrap gap-4">
                                    <a
                                        href={template.href}
                                        className="inline-flex justify-center rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-700"
                                        target="_blank"
                                    >
                                        <span>
                                            <span className="inline-flex items-center whitespace-nowrap">
                                                <span>Live preview</span>
                                                <svg
                                                    viewBox="0 0 20 20"
                                                    className="ml-1.5 h-5 w-5 fill-slate-400"
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                >
                                                    <path d="M7 3.25H3.25v13.5h13.5V13h-1.5v2.25H4.75V4.75H7v-1.5Zm9.75 0H10v1.5h4.19l-5.72 5.72 1.06 1.06 5.72-5.72V10h1.5V3.25Z"></path>
                                                </svg>
                                            </span>
                                        </span>
                                    </a>

                                </div>

                            </div>
                            <div className="relative lg:col-span-2">
                                <Image
                                    src={template.image}
                                    alt=""
                                    className="relative z-20 -mb-36 aspect-[853/682] max-w-[853px] rounded-xl bg-slate-200 shadow-xl shadow-black/5 ring-1 ring-slate-900/5 sm:-mb-16 lg:-mb-8 xl:-mb-16"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Product