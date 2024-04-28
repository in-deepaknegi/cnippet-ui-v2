import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

import Hero1 from "@/public/images/hero/hero5.jpg";
import Hero2 from "@/public/images/hero/hero6.jpg";
import Hero3 from "@/public/images/hero/hero7.jpg";
import Hero4 from "@/public/images/hero/hero8.jpg";
import Hero5 from "@/public/images/hero/hero9.jpg";

const C3 = () => {
    return (
        <section className="relative isolate overflow-hidden bg-white">
            <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
                <div className="mx-auto space-x-0 space-y-10 md:flex md:space-x-10 md:space-y-0 lg:mx-0 lg:max-w-none">
                    <div className="my-auto w-full max-w-full lg:max-w-2xl lg:flex-shrink">
                        <div className="hidden sm:mb-8 sm:flex">
                            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                Announcing our next round of funding.{" "}
                                <a href="#" className="font-semibold text-indigo-600">
                                    <span
                                        className="absolute inset-0"
                                        aria-hidden="true"
                                    ></span>
                                    Read more <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>
                        <h1 className="text-5xl font-semibold md:text-6xl">
                            Data to enrich your online bussiness
                        </h1>
                        <p className="mt-6 text-base text-gray-600 lg:text-lg">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                            fugiat aliqua.
                        </p>
                        <div className="mt-10 flex gap-x-6">
                            <Button text="Get started" url={"#"} />
                            <a
                                href="#"
                                className="my-auto text-sm font-semibold leading-6 text-gray-900"
                            >
                                Read more <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>

                    <div className="flex w-full justify-end sm:justify-start sm:gap-8 md:pl-10 lg:max-w-full lg:gap-6">
                        <div className="ml-auto hidden w-1/3 flex-none pt-0 sm:ml-0 lg:block xl:order-[0] xl:pt-[17rem]">
                            <div className="relative">
                                <Image
                                    src={Hero1}
                                    alt="hero image 2"
                                    priority={false}
                                    className="aspect-[2/3] h-full w-full rounded-2xl bg-gray-50 object-cover shadow-xl"
                                />
                            </div>
                        </div>
                        <div className="hidden w-1/2 flex-none pt-0 md:block lg:w-1/3 xl:pt-20">
                            <div className="relative">
                                <Image
                                    src={Hero2}
                                    alt="hero image 2"
                                    priority={false}
                                    className="aspect-[2/3] h-full w-full rounded-2xl bg-gray-50 object-cover shadow-xl"
                                />
                            </div>
                            <div className="relative">
                                <Image
                                    src={Hero3}
                                    alt="hero image 2"
                                    priority={false}
                                    className="mt-8 aspect-[2/3] h-full w-full rounded-2xl bg-gray-50 object-cover shadow-xl"
                                />
                            </div>
                        </div>
                        <div className="w-full flex-none md:w-1/2 lg:w-1/3 xl:mt-[-4rem]">
                            <div className="relative">
                                <Image
                                    src={Hero4}
                                    alt="hero image 2"
                                    priority={false}
                                    className="aspect-[2/2] h-full w-full rounded-2xl bg-gray-50 object-cover shadow-xl md:aspect-[2/3]"
                                />
                            </div>
                            <div className="relative hidden md:block">
                                <Image
                                    src={Hero5}
                                    alt="hero image 2"
                                    priority={false}
                                    className="mt-8 aspect-[2/3] h-full w-full rounded-2xl bg-gray-50 object-cover shadow-xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default C3;
