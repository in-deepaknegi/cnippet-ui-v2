"use client";
import React from "react";

import Button from "@/components/ui/Button";

const Hero = () => {
    return (
        <section className="relative isolate bg-white py-16 font-swir">
            <div className="mx-auto max-w-full px-4 md:max-w-[95%] lg:px-8 ">
                <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-6 text-center">
                    <p className="flex flex-row items-center justify-center gap-4 text-center text-lg text-gray-700 md:justify-start md:text-left">
                        <span className="h-0.5 w-16 bg-black"></span>
                        Layouts
                    </p>
                    <h2 className="text-4xl text-black md:text-4xl">Page Layouts</h2>

                    <p className="mt-auto max-w-3xl text-lg text-gray-700">
                        New to website design and unsure how to structure a page? No need to
                        worry, we&apos;ve got you covered. Explore pre-made layouts created
                        by our experts for optimal component management and SEO.
                    </p>

                    <Button text="Explore layouts" url="/layouts" target="_blank" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
