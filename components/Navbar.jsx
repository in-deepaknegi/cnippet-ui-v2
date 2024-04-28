"use client";
import React, { useEffect, useRef, useState } from "react";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";

import fetchPro from "@/atoms/library/getPro";
import { ChevronDown } from "lucide-react";
import L1 from "@/public/logo.svg";

import GetSession from '@/atoms/library/getSession';

const BASE_URL = process.env.NEXT_PUBLIC_URL
    ? `https://${process.env.NEXT_PUBLIC_URL}`
    : "http://localhost:3000";

const links = [
    {
        title: "Templates",
        url: "/templates",
    },
    {
        title: "Layouts",
        url: "/layouts",
    },
    {
        title: "Contacts",
        url: "/contacts",
    },
    {
        title: "About",
        url: "/about",
    },
];

const menu = [
    {
        title: "Components",
        solutions: [
            {
                name: "Hero",
                href: [`${BASE_URL}/components/hero`],
            },
            {
                name: "Features",
                href: [`${BASE_URL}/components/feature`],
            },
            {
                name: "Flyout Menu",
                href: [`${BASE_URL}/components/flyout-menu`],
            },
            {
                name: "Blogs",
                href: [`${BASE_URL}/components/blogs`],
            },
            {
                name: "Show more...",
                href: [`${BASE_URL}/components/`],
            },
        ],
    },
];

const Navbar = () => {
    const [mobilemenu, setMobileMenu] = useState(false);
    const { status, session, loading } = GetSession();
    const [profile, setProfile] = useState(false);
    const email = session?.user?.email;
    const { pro } = fetchPro(email);

    const sectionRef = useRef(null);

    const [open, setOpen] = useState(null);

    const toggleOpen = (index) => {
        setOpen(open === index ? null : index);
    };

    const toggleMobileMenu = () => {
        setMobileMenu(!mobilemenu);
    };
    const toggleProfile = () => {
        setProfile(!profile);
    };

    const clickOutside = (e) => {
        if (sectionRef.current && !sectionRef.current.contains(e.target)) {
            setProfile(false);
        }
    };

    useEffect(() => {

        document.addEventListener("click", clickOutside);

        return () => {
            document.removeEventListener("click", clickOutside);
        };
    });

    return (
        <>
            <nav>
                <div className="bg-black">
                    <div className="mx-auto flex h-10 max-w-[95%] items-center justify-between px-4 sm:px-6 lg:px-8">
                        <div className="hidden text-sm text-white lg:block lg:flex-1">
                            English
                        </div>
                        {loading ? (
                            <span className=" animate-pulse text-white">...</span>
                        ) : (
                            <>
                                {!pro && (
                                    <div className="hidden flex-1 items-center md:flex lg:flex-none">
                                        <a href="/pro" className="text-sm text-gray-200">
                                            Get all pro components (first month free){" "}
                                            <span aria-hidden="true">→</span>
                                        </a>
                                    </div>
                                )}
                            </>
                        )}


                        <div className="ml-auto flex lg:flex-1 lg:items-center lg:justify-end lg:gap-2">
                            {loading ? (
                                <span className="ldr mb-4 mr-20"></span>
                            ) : (
                                <>
                                    {status === "authenticated" ? (
                                        <>
                                            <span className="text-sm text-gray-100">
                                                Welcome {session.user.name}
                                            </span>
                                        </>
                                    ) : (
                                        <>
                                            <a href="/login" className="text-sm text-gray-100">
                                                Sign In
                                            </a>
                                            <span className="mx-2 h-4 w-[1px] bg-gray-200"></span>
                                            <a href="/signup" className="text-sm text-gray-100">
                                                Create an account
                                            </a>
                                        </>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            <header className="sticky top-0 z-20 border-b border-gray-100 bg-white shadow-lg shadow-purple-100/50">
                <div className="mx-auto flex w-[95%] items-center justify-between px-6 py-6 lg:px-8">
                    <div className="flex lg:flex-none">
                        <a
                            href="/"
                            className="-m-1.5 flex items-center gap-x-2 font-swir p-1.5 text-3xl text-black"
                        >
                            <Image src={L1} alt="site-logo" className="w-7" />
                            Cnippet <span className="text-lg mt-auto">Ui.</span>
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        {mobilemenu ? (
                            <button
                                onClick={toggleMobileMenu}
                                type="button"
                                className="-m-2.5 rounded-md p-4 text-gray-900"
                            >
                                <span className="sr-only">Close menu</span>
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        ) : (
                            <button
                                onClick={toggleMobileMenu}
                                type="button"
                                className="-m-2.5 rounded-md p-4 text-gray-900"
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
                            </button>
                        )}
                    </div>
                    <div className="ml-10 hidden lg:flex lg:gap-x-12">
                        {menu.map((item, i) => (
                            <div key={i} className="relative hidden lg:flex lg:gap-x-12">
                                <button
                                    onMouseEnter={() => toggleOpen(i)}
                                    onMouseLeave={() => toggleOpen(i)}
                                    className="inline-flex items-center justify-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 hover:text-purple-800/95"
                                >
                                    <span>{item.title}</span>

                                    <ChevronDown
                                        className={`h-5 w-5 ${open === i ? "rotate-180" : ""} transition-all duration-300 ease-linear`}
                                        aria-hidden="true"
                                    />

                                    {open === i && (
                                        <div className="absolute -left-5 top-1 z-10 mt-5 flex w-screen max-w-max px-4 pt-2">
                                            <div className="min-w-fit flex-auto overflow-hidden rounded-xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                                                <div className="p-2">
                                                    <div className="grid grid-cols-1">
                                                        {item.solutions.map((item, j) => (
                                                            <div
                                                                key={j}
                                                                className="group relative flex flex-col gap-y-3 rounded-lg px-8 py-2.5 text-left hover:bg-gray-100"
                                                            >
                                                                <div>
                                                                    <a
                                                                        href={item.href}
                                                                        className="font-semibold text-gray-900"
                                                                    >
                                                                        {item.name}
                                                                        <span className="absolute inset-0" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </button>
                            </div>
                        ))}

                        {links.map((link, i) => (
                            <a
                                key={i}
                                href={link.url}
                                className="text-sm font-semibold leading-6 text-gray-900 hover:text-purple-800"
                            >
                                {link.title}
                            </a>
                        ))}
                    </div>

                    <div className="hidden h-full lg:flex lg:flex-none lg:items-center lg:gap-4">
                        <button onClick={toggleProfile} ref={sectionRef} className="h-9">
                            <span className="sr-only">profile</span>
                            {status === "authenticated" ? (
                                <Image
                                    src={session.user.image}
                                    alt="profile-image"
                                    width={36}
                                    height={36}
                                    className="rounded-full object-cover"
                                />
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="h-7 w-7 text-gray-600"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                    ></path>
                                </svg>
                            )}
                        </button>

                        {profile && (
                            <div className="absolute right-7 top-6 z-50 mt-10 w-56 rounded-lg border bg-white px-6 py-3 shadow-xl">
                                {status === "authenticated" ? (
                                    <div className="relative inset-0 isolate">
                                        <div className="flex flex-col items-center justify-center space-y-2">
                                            <Image
                                                src={session.user.image}
                                                alt="profile-image"
                                                width={40}
                                                height={40}
                                                className=" rounded-full"
                                            />
                                            <span className="text-sm font-semibold text-gray-900">
                                                {session.user.name}
                                            </span>
                                            <span className="text-sm font-semibold text-gray-900">
                                                {session.user.email}
                                            </span>
                                        </div>
                                        <ul className="mt-3 flex cursor-pointer flex-col gap-y-2 text-sm text-gray-600">
                                            <li className="border-l-2 pl-3 hover:border-gray-600 hover:text-black">
                                                <a href="#">Account</a>
                                            </li>
                                            <li className="border-l-2 pl-3 hover:border-gray-600 hover:text-black">
                                                <a href="#" onClick={() => signOut()}>
                                                    Sign Out
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                ) : (
                                    <div>
                                        <ul className="flex cursor-pointer flex-col gap-y-2 py-1 text-sm text-gray-600">
                                            <li className="border-l-2 pl-3 hover:border-gray-600 hover:text-black">
                                                <a href="/login" className="">
                                                    Sign in
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
                {mobilemenu && (
                    <div className="lg:hidden" role="dialog" aria-modal="true">
                        <div className="fixed inset-y-0 right-0 top-24 z-10 mt-3  h-full w-full overflow-y-auto bg-white bg-opacity-80 bg-clip-padding px-6 py-10 backdrop-blur-md backdrop-filter sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div className="flex items-center justify-between">
                                <a href="#" className="-m-1.5 p-1.5">
                                    <span className="sr-only">Your Company</span>
                                </a>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        {links.map((link) => (
                                            <a
                                                key={link.id}
                                                href={link.url}
                                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            >
                                                {link.title}
                                            </a>
                                        ))}
                                    </div>

                                    <div className="py-6">
                                        <a
                                            href="/login"
                                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            Log in
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </header>
        </>
    );
};

export default Navbar;
