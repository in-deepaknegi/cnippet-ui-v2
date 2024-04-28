import React from "react";
import Image from "next/image";
import Profile1 from "@/public/images/profile/profile4.jpg";

const Feedback1 = () => {
    return (
        <section className="relative isolate overflow-hidden bg-white py-8 sm:py-16">
            <div className="mx-auto max-w-xl px-6 lg:max-w-2xl lg:px-8">
                <figure className="items-center gap-8">
                    <div className="col-span-2 font-sans">
                        <div className="relative">
                            <blockquote className="text-center text-xl text-gray-900 sm:text-2xl sm:leading-8">
                                <p>
                                    Commodo amet fugiat excepteur sunt qui ea elit cupidatat
                                    ullamco consectetur ipsum elit consequat. Elit sunt proident
                                    ea nulla ad nulla dolore ad pariatur tempor non. Sint veniam
                                    minim et ea.
                                </p>
                            </blockquote>
                        </div>

                        <figcaption className="mx-auto mt-8 flex justify-center">
                            <Image
                                src={Profile1}
                                alt="profile-1"
                                className="h-12 w-12 rounded-full object-cover"
                            />
                            <div className="ml-5">
                                <div className="text-lg font-semibold">Judith Black</div>
                                <a
                                    href="#"
                                    className="text-sm font-semibold tracking-wide text-blue-600"
                                >
                                    @judithblack
                                </a>
                            </div>
                            <div className="mx-3 my-auto hidden h-10 w-[1px] bg-gray-400 md:block"></div>
                            <div className="my-auto hidden md:flex">
                                {[...Array(4).keys()].map((index) => (
                                    <div key={index}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="h-5 w-5 text-blue-600"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                ))}
                                {[...Array(1).keys()].map((index) => (
                                    <div key={index}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="h-5 w-5 text-gray-200"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                ))}
                            </div>
                        </figcaption>
                    </div>
                </figure>
            </div>
        </section>
    );
};

export default Feedback1;
