import React from "react";

const links = [
    {
        name: "About",
        href: "#",
    },
    {
        name: "Contact",
        href: "#",
    },
    {
        name: "Privacy Policy",
        href: "#",
    },
    {
        name: "Licensing",
        href: "#",
    },
    // moidfy data according to your website
];

const Footer1 = () => {
    return (
        <footer className="relative isolate bg-white py-10">
            <div className="mx-auto max-w-full px-6 sm:flex sm:items-center sm:justify-between md:max-w-[95%] lg:px-8">
                <a href="/" className="-m-1.5 p-1.5 text-2xl">
                    Cnippet <span className="text-sm">Ui.</span>
                </a>
                <ul className="mb-6 flex flex-wrap items-center text-sm font-medium uppercase text-gray-700 sm:mb-0 ">
                    {links.map((item, i) => (
                        <li key={i}>
                            <a
                                href={item.href}
                                className="me-4 hover:text-black hover:underline md:me-6"
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <hr className="my-6 w-full border-gray-300 lg:my-8" />

            <span className="block px-6 text-sm text-gray-700 sm:text-center md:px-0">
                © 2024{" "}
                <a href="/" className="hover:underline">
                    CnippetUi™
                </a>
                . All Rights Reserved.
            </span>
            <span className="mt-2 block px-6 text-sm text-gray-700 sm:text-center md:px-0">
                Designed and Maintained by:{" "}
                <a target="_blank" href="https://www.deepaknegi.in/">
                    Cnippet
                </a>
            </span>
        </footer>
    );
};

export default Footer1;
