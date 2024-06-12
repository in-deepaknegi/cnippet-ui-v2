import React from "react";
import Link from "next/link";
import Image from "next/image";

import { FaUser } from "react-icons/fa6";
import { RiMenu2Fill } from "react-icons/ri";

const links = [
    {
        title: "link one",
        url: "#",
    },
    {
        title: "link two",
        url: "#",
    },
    {
        title: "link three",
        url: "#",
    },
    {
        title: "link four",
        url: "#",
    },
];

const Navbar = () => {
    return (
        <>
            <div className="relative isolate overflow-hidden bg-black ">
                <div className="mx-auto max-w-full md:max-w-[97%]">
                    <div className="mx-auto flex h-10 items-center justify-between px-4 sm:px-6 lg:px-8">
                        <div className="hidden text-sm text-white lg:block lg:flex-1">
                            English
                        </div>
                        <div className="hidden flex-1 items-center justify-center lg:flex">
                            <Link href="#" className="text-sm text-gray-200">
                                Get free delivery on orders over $100
                            </Link>
                        </div>
                        <div className="ml-auto flex lg:flex-1 lg:items-center lg:justify-end lg:gap-2">
                            <Link href="#" className="text-sm text-gray-100">
                                Sign In
                            </Link>
                            <span className="mx-2 h-4 w-[1px] bg-gray-200"></span>
                            <Link href="#" className="text-sm text-gray-100">
                                Create an account
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <header className="sticky top-0 z-20 border-gray-100 bg-white py-6">
                <div className="mx-auto flex max-w-full items-center justify-between px-6 md:max-w-[97%] lg:px-8">
                    <div className="flex lg:flex-none">
                        <Link
                            href="/"
                            className="-m-1.5 flex items-center gap-4 p-1.5 text-2xl text-black"
                        >
                            <Image
                                src="https://www.cnippet.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon.2586383c.png&w=640&q=75"
                                alt="site logo main"
                                width={680}
                                height={400}
                                className="h-10 w-10"
                            />
                            Cnippet
                        </Link>
                    </div>

                    <div className="hidden uppercase lg:flex lg:gap-x-12">
                        {links.map((link, i) => (
                            <Link
                                key={i}
                                href={link.url}
                                className="text-sm font-medium leading-6 text-gray-700 hover:text-black"
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden lg:ml-8 lg:flex lg:flex-none lg:items-center lg:gap-4 lg:pl-8">
                        <Link href="#">
                            <span className="sr-only">profile</span>
                            <FaUser className="w-5 h-5 text-slate-700" />
                        </Link>
                    </div>

                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-4 text-gray-900"
                        >
                            <span className="sr-only">Open main menu</span>
                            <RiMenu2Fill className="w-5 h-5 text-black" />
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;