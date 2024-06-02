import React from "react";
import Image from "next/image";
import Hero1 from "@/public/images/hero/hero5.jpg";
import Hero2 from "@/public/images/hero/hero6.jpg";
import Hero3 from "@/public/images/hero/hero7.jpg";
import Hero4 from "@/public/images/hero/hero8.jpg";
import Hero5 from "@/public/images/hero/hero9.jpg";
import Hero6 from "@/public/images/hero/hero10.jpg";
import Hero7 from "@/public/images/hero/hero11.jpg";

const S1 = () => {
    return (
        <section className="relative isolate overflow-hidden py-16 md:py-20">
            <div className=" mx-auto max-h-full px-6 md:max-w-[80%] md:px-8">
                <div className="mx-auto max-w-full md:max-w-[80%]">
                    <h1 className="text-center text-5xl font-semibold text-black md:text-6xl">
                        The only source of knowledge is experience
                    </h1>
                    <p className="mt-6 text-center text-lg text-gray-600">
                        Our emphasis lies in delivering valuable insights, imparting fresh
                        information, and presenting distinctive viewpoints that contribute
                        to daily life.
                    </p>
                    <div className="mx-auto mt-10 flex items-center justify-center gap-x-6">
                        <form action="" className=" mx-auto w-full max-w-xl lg:mx-0">
                            <div className="flex gap-x-3">
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="min-w-0 flex-auto rounded-full border-0 bg-white/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-black/10 focus:ring-inset sm:text-sm sm:leading-6"
                                    placeholder="Enter your email"
                                />
                                <button
                                    type="submit"
                                    className="mx-auto max-w-md rounded-full bg-black px-4 py-2 text-base text-white shadow-sm"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="relative mx-auto mt-8 flex max-w-5xl flex-row items-center justify-center md:mt-16">
                    <div className="mt-4 flex justify-end gap-4 sm:justify-start md:mt-16 xl:mt-0">
                        <div className="mt-16 hidden w-full lg:block">
                            <div className="relative">
                                <Image
                                    src={Hero1}
                                    alt="hero image 2"
                                    priority={false}
                                    className="aspect-[2/2.25] rounded-2xl bg-gray-50 object-cover shadow-xl"
                                />
                            </div>
                        </div>
                        <div className="hidden w-full sm:block">
                            <div className="relative">
                                <Image
                                    src={Hero2}
                                    alt="hero image 2"
                                    priority={false}
                                    className="aspect-[3/2] rounded-2xl bg-gray-50 object-cover shadow-xl"
                                />
                            </div>
                            <div className="relative">
                                <Image
                                    src={Hero3}
                                    alt="hero image 2"
                                    priority={false}
                                    className="mt-4 aspect-[2/2.25] rounded-2xl bg-gray-50 object-cover shadow-xl"
                                />
                            </div>
                        </div>
                        <div className="mt-16 hidden w-full md:block">
                            <div className="relative">
                                <Image
                                    src={Hero4}
                                    alt="hero image 2"
                                    priority={false}
                                    className="aspect-[2/2.25] rounded-2xl bg-gray-50 object-cover shadow-xl"
                                />
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="relative">
                                <Image
                                    src={Hero5}
                                    alt="hero image 2"
                                    priority={false}
                                    className="aspect-video rounded-2xl bg-gray-50 object-cover shadow-xl md:aspect-[3/2]"
                                />
                            </div>
                            <div className="relative">
                                <Image
                                    src={Hero6}
                                    alt="hero image 2"
                                    priority={false}
                                    className="mt-4 aspect-video rounded-2xl bg-gray-50 object-cover shadow-xl md:aspect-[2/2.25]"
                                />
                            </div>
                        </div>
                        <div className="mt-16 hidden w-full lg:block">
                            <div className="relative">
                                <Image
                                    src={Hero7}
                                    alt="hero image 2"
                                    priority={false}
                                    className="aspect-[2/2.25] rounded-2xl bg-gray-50 object-cover shadow-xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default S1;
