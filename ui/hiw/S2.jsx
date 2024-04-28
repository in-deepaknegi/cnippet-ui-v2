import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import H1 from "@/public/images/home/T1.webp";
import H2 from "@/public/images/home/T2.webp";
import H3 from "@/public/images/home/T3.webp";
import H4 from "@/public/images/home/T4.webp";

const timeline = [
    {
        step: 1,
        title: "Provident quia",
        para: "Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae. Dignissimos a pariatur et quos omnis. Vero vel eos repudiandae aspernatur",
    },
    {
        step: 2,
        title: "Voluptate repudiandae",
        para: "Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima impedit sapiente a architecto nihil.",
    },
    {
        step: 3,
        title: "Architecto nihil",
        para: "Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.",
    },
    {
        step: 4,
        title: "Geritecto velit",
        para: "Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.",
    },
];

const Hero = () => {
    return (
        <section className="relative isolate overflow-hidden bg-white py-28">
            <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
                <div className="mx-auto space-y-10 md:space-y-0 gap-x-0 md:space-x-8 lg:mx-0 md:flex lg:max-w-none">

                    <div className="w-full max-w-full lg:max-w-xl lg:flex-shrink">
                        <p className="text-base font-semibold leading-7 text-purple-700">
                            Get familiar with our process
                        </p>
                        <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            How it works
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                            fugiat aliqua.
                        </p>
                        <div className="mt-10 flex flex-col items-start md:items-center gap-x-6 gap-y-4 sm:flex-row sm:gap-y-0">

                            <a
                                href="#"
                                className="my-auto text-sm font-semibold leading-6 text-dusk-700"
                            >
                                Read more <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>

                    <div className="flex w-full justify-end sm:justify-start sm:gap-8 lg:gap-6 lg:max-w-lg">
                        <div className="mx-auto flex flex-col gap-y-4">
                            {timeline.map((item, i) => (
                                <div key={i} className="flex gap-2 md:gap-4">
                                    <div className="mx-auto flex flex-1 flex-col items-center text-purple-700">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="mx-auto"
                                        >
                                            <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"></path>
                                            <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z"></path>
                                            <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z"></path>
                                            <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z"></path>
                                        </svg>
                                        <div className="mz-auto mt-2 h-full w-[2px] bg-purple-400 lg:static"></div>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-purple-700">
                                            Step {item.step}
                                        </p>
                                        <p className="tracking- mt-3 text-lg font-semibold leading-8 text-gray-800">
                                            {item.title}
                                        </p>
                                        <p className="mt-2 text-[0.925rem] leading-6 text-gray-600">
                                            {item.para}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
