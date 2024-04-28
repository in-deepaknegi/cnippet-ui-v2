import React from "react";
import Image from "next/image";
import P1 from "@/public/images/profile/profile1.jpg";
import P2 from "@/public/images/profile/profile2.jpg";
import P3 from "@/public/images/profile/profile3.jpg";
import P4 from "@/public/images/profile/profile4.jpg";
import P5 from "@/public/images/profile/profile5.jpg";
import P6 from "@/public/images/profile/profile6.jpg";

const people = [
    {
        name: "Leslie Alexander",
        role: "Co-Founder / CEO",
        imageUrl: P6,
    },
    {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        imageUrl: P5,
    },
    {
        name: "Lindsay Walton",
        role: "Front-end Developer",
        imageUrl: P2,
    },
    {
        name: "Courtney Henry",
        role: "Designer",
        imageUrl: P3,
    },
];

const S1 = () => {
    return (
        <section className="relative isolate bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="xl:gric-cols-3 grid gap-x-8 gap-y-20">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Meet our leadership
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio
                            vitae elementum enim vitae ullamcorper suspendisse.
                        </p>
                    </div>
                    <ul
                        role="list"
                        className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
                    >
                        {people.map((person, i) => (
                            <li key={i}>
                                <div className="flex items-center gap-x-6">
                                    <Image
                                        src={person.imageUrl}
                                        alt="person"
                                        className="h-20 w-20 rounded-full object-cover"
                                    />
                                    <div>
                                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                                            {person.name}
                                        </h3>
                                        <p className="text-sm font-semibold leading-6 text-indigo-600">
                                            {person.role}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default S1;
