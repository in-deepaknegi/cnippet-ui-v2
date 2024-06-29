"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import components from "@/data/components";

const Related = ({ slug }) => {
    // const cmp = components.filter((item) => item.slug !== slug);
    // // console.log(cmp)

    // const shuffle = shuffleArray(cmp);

    // function shuffleArray(array) {
    //     for (let i = array.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [array[i], array[j]] = [array[j], array[i]];
    //     }
    //     return array;
    // }

    const [shuffledComponents, setShuffledComponents] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const cmp = components.filter((item) => item.slug !== slug);
        setLoading(true);

        const shuffleArray = (array) => {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        };

        const shuffleAfterDelay = () => {
            setShuffledComponents(shuffleArray([...cmp]));
            setLoading(false);
        };

        const timer = setTimeout(shuffleAfterDelay, 2000); // 5 seconds delay

        return () => clearTimeout(timer); // Cleanup timeout on component unmount
    }, [slug]);

    return (
        <>
            <div className="mx-auto max-w-full md:max-w-[95%] px-6 pt-28 pb-16 lg:px-7">
                <div className="max-w-2xl font-swim">
                    <p className="flex flex-row items-center justify-center gap-4 text-center text-lg text-gray-700 md:justify-start md:text-left">
                        <span className="h-0.5 w-16 bg-black"></span>
                        Components
                    </p>
                    <h2 className="mt-3 text-center text-4xl text-black md:text-left md:text-4xl">
                        Related Components
                    </h2>
                </div>

                {loading ? (
                    <div className=" mx-auto mt-10 flex max-w-[90%] items-center justify-center py-20">
                        <div className="loader"></div>
                    </div>
                ) : (
                    <div className="relative mx-auto mt-6 md:mt-10">
                        <ul className="grid-cols-[repeat(auto-fill,minmax(12rem, 1fr))] grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {shuffledComponents.slice(0, 4).map((component, i) => (
                                <li key={i}>
                                    <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                                        <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                                            <Image
                                                src={component.image}
                                                alt="navbar-img"
                                                className="absolute w-full object-cover"
                                            />
                                        </div>
                                        <h4 className="mt-4 text-sm font-medium text-slate-800 group-hover:text-indigo-600 ">
                                            <a href={`/components/${component.slug}`}>
                                                <span className="absolute -inset-2.5 z-10"></span>
                                                <span className="relative">{component.name}</span>
                                            </a>
                                        </h4>
                                        <p className="relative mt-1.5 text-xs font-medium text-slate-500 ">
                                            {component.number}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
};

export default Related;
