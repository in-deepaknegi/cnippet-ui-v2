import React from "react";
import Image from "next/image";
import posts from "@/data/constants/blogs";

const Blog3 = () => {
    return (
        <section className="relative isolate bg-white py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        From the blog
                    </h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Learn how to grow your business with our expert advice.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 px-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.slice(0, 3).map((post) => (
                        <article
                            key={post.id}
                            className="group relative isolate flex transform flex-col justify-between overflow-hidden rounded-2xl px-6 pb-4 pt-80 sm:pt-48 lg:pt-[22rem]"
                        >
                            <Image
                                src={post.img}
                                alt="post-img"
                                className="absolute inset-0 -z-10 h-full w-full object-cover duration-300 ease-in-out hover:scale-105 group-hover:scale-110 "
                            />
                            <div className="absolute inset-0 z-[-10] bg-gradient-to-t from-black/70"></div>

                            <h3 className="text-xl font-semibold leading-6 text-white">
                                <a href={post.href}>
                                    <span className="absolute inset-0" />
                                    {post.title}
                                </a>
                            </h3>
                            <div className="mt-3 flex flex-wrap justify-between gap-x-4 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                                <div className="flex items-center gap-x-4">
                                    <div className="flex gap-x-3">
                                        <Image
                                            src={post.author.imageUrl}
                                            alt="id-1"
                                            className="h-10 w-10 rounded-full bg-gray-50 object-cover"
                                        />
                                        <div className="my-auto">{post.author.name}</div>
                                    </div>
                                </div>
                                <time dateTime={post.datetime} className="my-auto">
                                    {post.date}
                                </time>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog3;
