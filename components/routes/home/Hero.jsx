import React from "react";

import Button from "@/components/ui/Button";

const Hero = () => {
    return (
        <section className="relative isolate py-16 font-swir lg:py-24">
            <div className=" mx-auto max-w-full px-6 md:max-w-[95%] lg:px-0">
                <div>
                    <div className="mx-auto max-w-3xl">
                        <p
                            className="flex flex-col items-center justify-center gap-4 text-center text-lg text-gray-700 md:flex-row"
                            data-aos="fade-right"
                            data-aos-duration="500"
                        >
                            <span className="h-0.5 w-16 bg-black"></span>
                            Cnippet helped to get startups around $200 million funding
                        </p>
                        <h1 className="mt-6 text-center text-4xl text-black md:text-7xl">
                            Enhance your code with our advanced materials.
                        </h1>
                    </div>

                    <div className="mx-auto mt-8 flex max-w-4xl flex-col items-center justify-between gap-6 md:mt-16 md:flex-row">
                        <p className="text-center text-lg text-gray-700 md:w-[75%] md:text-left md:text-xl">
                            Created with precision using tailwindcss and next.js, these
                            components and templates are perfect for starting your next
                            project and achieving a polished and professional result.
                        </p>
                        <Button text="LET'S TALK" url="/contacts#contact" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
