import React from "react";
import { ArrowRight } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";
 
const social = [
    {
        title: "facebook",
        href: "#",
        icon: <FaFacebook className="h-6 w-6" />,
    },
    {
        title: "insta",
        href: "#",
        icon: <FaInstagram className="h-6 w-6" />,
    },
    {
        title: "twitter",
        href: "#",
        icon: <FaTwitter className="h-6 w-6" />,
    },
    {
        title: "Youtube",
        href: "#",
        icon: <FaYoutube className="h-6 w-6" />,
    },
];
 
const links = [
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
                name: "office@ui.cnippet.com",
                href: "mailto:office@ui.cnippet.com",
            },
        ],
    },
    {
        title: "Company",
        sub: [
            {
                name: "About us",
                href: "#",
            },
            {
                name: "Contacts",
                href: "#",
            },
            {
                name: "Careers",
                href: "#",
            },
        ],
    },
    {
        title: "Resources",
        sub: [
            {
                name: "Press info",
                href: "#",
            },
            {
                name: "Customers",
                href: "#",
            },
            {
                name: "Reviews",
                href: "#",
            },
        ],
    },
];
 
const Footer = () => {
    return (
        <footer className="relative isolate bg-black/95 py-8">
            <div className=" mx-auto max-w-full px-6 md:max-w-[95%] lg:px-8">
                <div className="flex flex-col border-gray-300 md:flex-row md:border-b">
                    <div className="flex w-full flex-col gap-2 py-10 pr-8 md:flex-row md:items-center md:justify-between">
                        <h3 className="text-3xl text-gray-50 md:w-[45%]">
                            Leading the way in adventure
                        </h3>
                        <div className="flex gap-x-3">
                            {social.map((item, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="rounded-full bg-white p-3 shadow-lg"
                                >
                                    <span className="sr-only">{item.title}</span>
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </div>
 
                    <div className="flex w-full flex-col justify-between gap-3 border-t border-gray-300 pt-5 md:flex-row md:items-center md:border-l md:border-t-0 md:pl-8 md:pt-0">
                        <h3 className="text-3xl text-gray-50 md:w-[40%]">
                            Join our Newsletter
                        </h3>
 
                        <form action="" className="mx-0 md:w-[60%]">
                            <div className="flex gap-x-2">
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="min-w-0 flex-auto rounded-full border-0 bg-white px-3.5 text-black outline-none ring-1 ring-inset  
                                ring-gray-200 placeholder:text-sm placeholder:text-gray-400 focus:ring-inset sm:text-base"
                                    placeholder="Enter your e-mail"
                                />
                                <button
                                    type="submit"
                                    className="rounded-full bg-white p-2.5 text-black"
                                >
                                    <ArrowRight className="h-5 w-5" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
 
                <div className="my-16 flex flex-col justify-between md:flex-row">
                    <div className="w-full">
                        <a
                            href="/"
                            className="mb-4 flex items-center space-x-3 sm:mb-0 rtl:space-x-reverse"
                        >
                            <span className="self-center whitespace-nowrap text-3xl text-white">
                                Cnippet Ui
                            </span>
                        </a>
                        <p className="mt-3 text-gray-400 md:w-[50%]">
                            Travel plans are not really an instrument themselves but a
                            delivery mechanism or strategy for other mostly
                        </p>
                    </div>
                    <div className="mt-10 flex w-full max-w-md flex-wrap justify-between gap-10 md:mt-5 md:max-w-none md:gap-x-32">
                        {links.map((link, i) => (
                            <div key={i}>
                                <h3 className="mb-3 text-base uppercase text-white">
                                    {link.title}
                                </h3>
                                <ul className="flex flex-col flex-wrap space-y-2 text-sm uppercase text-gray-400">
                                    {link.sub.map((item, j) => (
                                        <li key={j}>
                                            <a
                                                href={item.href}
                                                className="hover:text-white hover:underline"
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
 
                <div className="mx-auto max-w-full border-t border-gray-300 py-4">
                    <div className="flex flex-col justify-between space-y-4 md:flex-row md:space-y-0 ">
                        <div className="flex gap-x-4">
                            <span className="block text-xs text-gray-400 sm:text-left md:text-sm">
                                <a href="#" className="underline hover:text-white">
                                    Privacy Policy
                                </a>
                            </span>
                            <span className="block text-xs text-gray-400 sm:text-left md:text-sm">
                                <a href="#" className="underline hover:text-white">
                                    Terms of Service
                                </a>
                            </span>
                            <span className="block text-xs text-gray-400 sm:text-left md:text-sm">
                                <a href="#" className="underline hover:text-white">
                                    Cookies Policy
                                </a>
                            </span>
                        </div>
 
                        <div>
                            <span className="block text-sm text-gray-400 sm:text-right">
                                © 2024
                                <a href="/" className="hover:underline">
                                    {" "}
                                    Travelo™
                                </a>
                                . All Rights Reserved.
                            </span>
                            <span className="mt-2 block text-xs text-gray-400 sm:text-right">
                                Designed and Maintained by:
                                <a
                                    target="_blank"
                                    href="https://www.deepaknegi.in/"
                                    className=" text-white"
                                >
                                    Cnippet
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
 
export default Footer;