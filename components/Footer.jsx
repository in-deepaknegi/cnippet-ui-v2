import React from "react";

import L1 from "@/public/images/meta/logo.png";
import Image from "next/image";
import Link from "next/link";

import H1 from "@/public/images/svg/github.svg";
import H2 from "@/public/images/svg/instagram.svg";

const BASE_URL = process.env.NEXT_PUBLIC_URL
    ? `https://${process.env.NEXT_PUBLIC_URL}`
    : "http://localhost:3000";

const social = [
    {
        title: "github",
        href: "https://github.com/in-deepaknegi",
        svg: H1,
    },
    {
        title: "insta",
        href: "https://www.instagram.com/cnippetui/",
        svg: H2,
    },
];

const links = [
    {
        title: "Main Pages",
        sub: [
            {
                name: "Templates",
                href: "/templates",
            },
            {
                name: "Layouts",
                href: "/layouts",
            },
            {
                name: "Contact us",
                href: "/contacts",
            },
            {
                name: "About us",
                href: "/about",
            },
        ],
    },
    {
        title: "Components",
        sub: [
            {
                name: "Navbar",
                href: [`${BASE_URL}/components/navbar`],
            },
            {
                name: "Hero",
                href: [`${BASE_URL}/components/hero`],
            },
            {
                name: "Flyout menu",
                href: [`${BASE_URL}/components/flyout-menu`],
            },
            {
                name: "Features",
                href: [`${BASE_URL}/components/features`],
            },
        ],
    },
    {
        title: "Contacts",
        sub: [
            {
                name: "+91 11111 11111",
                href: "tel:+91 97566 20538",
            },
            {
                name: "info@ui.cnippet.com",
                href: "mailto:info@ui.cnippet.com",
            },
            {
                name: "office@cnippet.com",
                href: "mailto:office@cnippet.com",
            },
        ],
    },
];

const Footer = () => {
    return (
        <footer className="relative isolate bg-black font-swir">
            <div className=" mx-auto max-w-full px-6 md:max-w-[90%] lg:px-8">
                <div className="mx-auto flex max-w-full flex-col items-center justify-center py-10">
                    <a href="/" className="mb-4 inline-flex items-center gap-0 sm:mb-0">
                        <Image src={L1} alt="cnippet site logo" className="w-20" />
                        <span className="mb-2 font-blanka text-4xl tracking-widest text-white md:mb-3">
                            cnippet
                        </span>
                    </a>
                    <p className="mt-3 text-center text-gray-400">
                        We&apos;re a creative agency with a taste for outstanding products.
                    </p>
                </div>

                <div className="mx-auto mt-8 flex max-w-full flex-col justify-between gap-10 md:mt-16 md:max-w-[85%] md:flex-row md:gap-20">
                    <div className="">
                        <h3 className="text-5xl text-white md:text-6xl">
                            Let&apos;s <span className=" text-yellow-400">work</span>{" "}
                            together.
                        </h3>
                        <p className="mt-8 text-gray-300">
                            Have an idea that could be the Next Big Thing? Or you&apos;re not
                            sure where to start?
                        </p>
                        <a href="/contacts#contact" className=" text-yellow-400">
                            Let&apos;s talk.
                        </a>
                    </div>
                    <div className=" mt-6 flex w-full max-w-md flex-wrap gap-10 md:max-w-none  md:justify-end md:gap-20">
                        {links.map((link, i) => (
                            <div key={i}>
                                <h3 className="mb-3 font-swir text-2xl text-white">
                                    {link.title}
                                </h3>
                                <ul className="flex flex-col flex-wrap space-y-2 text-base font-medium text-gray-300">
                                    {link.sub.map((item, j) => (
                                        <li key={j}>
                                            <a
                                                href={item.href}
                                                className="group relative hover:text-white"
                                            >
                                                <span className="relative">{item.name}</span>
                                                <span
                                                    className={`absolute bottom-0 left-0 h-[0.095rem] w-full origin-left scale-x-0 transform bg-white transition-transform duration-500 group-hover:scale-x-[100%]`}
                                                ></span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mx-auto w-full py-10 md:max-w-[85%] md:py-16">
                    <div className="flex w-full flex-row flex-wrap gap-8 md:items-center md:gap-20">
                        <h3 className="font-swim text-4xl text-gray-50 ">Follow us on</h3>
                        <div className="flex gap-x-3">
                            {social.map((item, i) => (
                                <a
                                    key={i}
                                    href={item.href}
                                    target="_blank"
                                    className="rounded-full bg-white p-2 shadow-lg"
                                >
                                    <span className="sr-only">{item.title}</span>
                                    <Image src={item.svg} alt={`${item.title}-icon`} className="h-6 w-6" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mx-auto max-w-full border-t border-gray-300 py-4">
                    <div className="flex flex-col justify-between space-y-4 md:flex-row md:space-y-0 ">
                        <div className="flex gap-x-4">
                            <span className="block text-sm text-gray-300 sm:text-left">
                                <a href="/privacy">Privacy Policy</a>
                            </span>
                            <span className="block text-sm text-gray-300 sm:text-left">
                                <a href="/terms">Terms of Service</a>
                            </span>
                            <span className="block text-sm text-gray-300 sm:text-left">
                                <a href="/cancellation">Cookies Policy</a>
                            </span>
                        </div>

                        <div>
                            <span className="block text-sm text-gray-300 sm:text-right">
                                © 2024
                                <a href="/" className="hover:underline">
                                    {" "}
                                    Cnippet™
                                </a>
                                . All Rights Reserved.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
