import React from "react";
import Link from "next/link";

const links = [
    {
        title: "Components",
        url: "#",
    },
    {
        title: "Templates",
        url: "#",
    },
    {
        title: "About us",
        url: "#",
    },
    {
        title: "Contact us",
        url: "#",
    },
];

const Navbar = () => {
    return (
        <header className="relative isolate overflow-hidden bg-white py-6">
            <div className="mx-auto flex max-w-full items-center justify-between px-6 md:max-w-[95%] lg:px-8">
                <div className="flex">
                    <Link href="/" className="-m-1.5 p-1.5 text-2xl">
                        Cnippet
                    </Link>
                </div>
                <nav className="ml-auto hidden uppercase lg:flex lg:gap-x-12">
                    {links.map((link, i) => (
                        <Link
                            key={i}
                            href={link.url}
                            className="text-sm font-medium leading-6 text-gray-700 hover:text-black"
                        >
                            {link.title}
                        </Link>
                    ))}
                </nav>
                <div className="ml-5 hidden border-l-2 border-black pl-5 lg:flex lg:items-center">
                    <Link
                        href="#"
                        className="text-base font-medium uppercase text-gray-600 hover:text-black"
                    >
                        Sign up
                    </Link>
                    <Link
                        href="#"
                        className="-my-2.5 ml-8 inline-flex items-center justify-center rounded-full bg-slate-950 px-4 py-1.5 text-base font-medium uppercase text-white hover:bg-slate-800"
                    >
                        <span>
                            Log in<span aria-hidden="true">→</span>
                        </span>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button type="button" className="-m-2.5 rounded-md p-4 text-gray-900">
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
                </div>
            </div>
        </header>
    );
};

export default Navbar;
