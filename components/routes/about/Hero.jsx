import React from 'react'
import Image from "next/image";
import Hero1 from "@/public/images/hero/hero8.jpg";

const features = [
    {
        id: 1,
        description: "Customize your website easily using Cnippet Ui's flexible components.",
    },
    {
        id: 2,
        description: "Make your website stand out with CnippetUi's visually stunning components.",
    },
    {
        id: 3,
        description: "Boost your website's performance with CnippetUi's optimized components."
    },
];

const Hero = () => {
    return (
        <section className="overflow-hidden bg-white py-16 sm:py-20">
            <div className="mx-auto max-w-[90%] px-6 lg:px-8">
                <div className="mx-auto grid grid-cols-12 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none">
                    <div className="col-span-12 lg:col-span-7 lg:py-4 lg:pr-8">
                        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                            Building the Future of Website Development
                        </h2>
                        <p className="mt-6 text-base text-gray-800 md:text-lg">
                            At <strong>Cnippet Ui</strong>, we are dedicated to revolutionizing website development by providing high-quality components, templates, and layouts. Our mission is to empower developers and designers with the tools they need to create stunning and functional websites.
                        </p>
                        <ul className="ml-5 mt-6 max-w-xl text-base leading-7 text-gray-800 lg:max-w-none">
                            {features.map((feature) => (
                                <li key={feature.id} className="list-disc">
                                    {feature.description}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-10 flex gap-x-6">
                            <a
                                href="#"
                                className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white"
                            >
                                Discover more
                            </a>
                            <a
                                href="#"
                                className="my-auto text-sm font-semibold leading-6 text-gray-900"
                            >
                                Join us <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-5">
                        <Image
                            src={Hero1}
                            alt="Product screenshot"
                            quality={100}
                            loading="eager"
                            className="h-full rounded-2xl object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero