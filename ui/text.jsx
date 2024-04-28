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

const S2 = () => {
    return (
        <section className="relative isolate bg-white py-24 sm:py-24">
            <div className="mx-auto max-w-[90%] px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-5xl font-semibold">Our Team</h2>
                    <p className="mt-5 text-lg text-gray-700">
                        We&apos;re a dynamic group of individuals who are passionate about
                        what we do and dedicated to delivering the best results for our
                        clients.
                    </p>
                </div>
                <ul
                    role="list"
                    className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
                >
                    {people.map((person, i) => (
                        <li key={i}>
                            <Image
                                src={person.imageUrl}
                                alt="person"
                                className="aspect-[3/2] w-full rounded-2xl object-cover"
                            />
                            <h3 className="mt-6 text-lg font-semibold leading-7 tracking-tight text-gray-900">
                                {person.name}
                            </h3>
                            <p className="text-sm font-semibold leading-6 text-blue-700">
                                {person.role}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default S2;