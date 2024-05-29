import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";

const links = [
    {
        title: "Support",
        sub: [
            {
                name: "Pricing",
                href: "#",
            },
            {
                name: "Documentation",
                href: "#",
            },
            {
                name: "Guides",
                href: "#",
            },
            {
                name: "API Status",
                href: "#",
            },
        ],
    },
    {
        title: "Company",
        sub: [
            {
                name: "About",
                href: "#",
            },
            {
                name: "Blogs",
                href: "#",
            },
            {
                name: "Jobs",
                href: "#",
            },
            {
                name: "Press",
                href: "#",
            },
        ],
    },
];

const socials = [
    {
        title: "facebook",
        href: "#",
        icon: <FaFacebook className="h-7 w-7 text-gray-400 hover:text-black" />,
    },
    {
        title: "Instagram",
        href: "#",
        icon: <FaInstagram className="h-7 w-7 text-gray-400 hover:text-black" />,
    },
    {
        title: "Twitter",
        href: "#",
        icon: <FaTwitter className="h-7 w-7 text-gray-400 hover:text-black" />,
    },
    {
        title: "Youtube",
        href: "#",
        icon: <FaYoutube className="h-7 w-7 text-gray-400 hover:text-black" />,
    },
];

const Footer2 = () => {
    return (
        <footer className="relative isolate pb-4 pt-10">
            <div className=" mx-auto mb-6 max-w-full px-6 sm:justify-between md:flex md:max-w-[95%] lg:px-8">
                <div>
                    <a
                        href="/"
                        className="mb-4 flex items-center space-x-3 sm:mb-0 rtl:space-x-reverse"
                    >
                        <span className="self-center whitespace-nowrap text-2xl font-medium">
                            CnippetUI
                        </span>
                    </a>

                    <div className="mt-5 space-y-2 text-base text-gray-600">
                        <div className="flex gap-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="my-auto text-gray-400"
                            >
                                <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                                <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                                <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                                <path d="M10 6h4"></path>
                                <path d="M10 10h4"></path>
                                <path d="M10 14h4"></path>
                                <path d="M10 18h4"></path>
                            </svg>
                            <div>545 Mavis Island Chicago, Il99191</div>
                        </div>
                        <div className="flex gap-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="my-auto text-gray-400"
                            >
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                            <div className="flex gap-3">
                                <a href="tel:+91 97566 20538">+91 00000 11111</a>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="my-auto text-gray-400"
                            >
                                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                            </svg>
                            <div>
                                <a href="mailto:office@seahawkadventures.com">
                                    office@cnippet-ui.com
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex gap-x-3">
                        {socials.map((item, i) => (
                            <a href="#" key={i}>
                                <span className="sr-only">{item.title}</span>
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="mt-10 flex max-w-md gap-x-28 md:mr-32 md:mt-5 md:max-w-none md:justify-between">
                    {links.map((link, i) => (
                        <div key={i}>
                            <h3 className="mb-3 text-base font-semibold uppercase text-gray-900">
                                {link.title}
                            </h3>
                            <ul className="flex flex-col flex-wrap space-y-2 text-sm font-medium uppercase text-gray-500">
                                {link.sub.map((item, j) => (
                                    <li key={j}>
                                        <a
                                            href={item.href}
                                            className="hover:text-black hover:underline"
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

            <hr />

            <div className="mx-auto  max-w-full px-6 md:max-w-[95%] lg:px-8">
                <div className="flex flex-col justify-between space-y-4 pt-8 md:flex-row md:space-y-0 ">
                    <div className="flex gap-x-4">
                        <span className="block text-xs text-gray-700 sm:text-left md:text-sm">
                            <a href="#" className="underline">
                                Privacy Policy
                            </a>
                        </span>
                        <span className="block text-xs text-gray-700 sm:text-left md:text-sm">
                            <a href="#" className="underline">
                                Terms of Service
                            </a>
                        </span>
                        <span className="block text-xs text-gray-700 sm:text-left md:text-sm">
                            <a href="#" className="underline">
                                Cookies Policy
                            </a>
                        </span>
                    </div>

                    <div>
                        <span className="block text-sm text-gray-700 sm:text-right">
                            © 2024
                            <a href="/" className="hover:underline">
                                {" "}
                                Cnippet UI™
                            </a>
                            . All Rights Reserved.
                        </span>
                        <span className="mt-2 block text-xs text-gray-700 sm:text-right">
                            Designed and Maintained by:
                            <a target="_blank" href="https://www.deepaknegi.in/">
                                Cnipept
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer2;
