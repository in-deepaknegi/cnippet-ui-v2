import React from "react";

const links = [
    {
        id: 1,
        title: "About",
        href: "/about",
    },
    {
        id: 2,
        title: "Privacy Policy",
        href: "/privacy",
    },
    {
        id: 3,
        title: "Cancellation",
        href: "/cancellation",
    },
    {
        id: 4,
        title: "Terms",
        href: "/terms",
    },
    // {
    //     id: 5,
    //     title: "Shipping",
    //     href: "/shipping",
    // },
];

const Footer = () => {
    return (
        <footer className="bg-white pt-20">
            <div className="py-10 ">
                <div className="px-6 sm:flex sm:items-center sm:justify-between lg:px-8">
                    <a href="/" className="-m-1.5 p-1.5 text-2xl text-black">
                        Cnippet <span className="text-base">Ui.</span>
                    </a>
                    <ul className="mb-6 flex flex-wrap items-center text-sm font-medium  sm:mb-0">
                        {links.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={link.href}
                                    className="me-4 text-gray-700 hover:text-gray-800 md:me-6"
                                >
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <hr className="my-6 w-full border-gray-300 lg:my-8" />

                <div className="flex justify-between px-6 lg:px-8">
                    <div>
                        <span className="block text-sm text-gray-800 ">
                            A product of:{" "}
                            <a target="_blank" href="https://www.cnippet.com/">
                                Cnippet
                            </a>
                        </span>

                        <span className="mt-2 block text-sm text-gray-700   sm:text-center">
                            © 2024{" "}
                            <a href="/" className="hover:underline">
                                CnippetUi™
                            </a>
                            . All Rights Reserved.
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
