import React, { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";

type SubLinksProps = {
    title: string;
    url: string;
};
type SiteProps = {
    title: string;
    description: string;
};
type LinkProps = {
    title: string;
    sub: SubLinksProps[];
};
type SocialProps = {
    title: string;
    url: string;
    icon: ReactNode;
};
type LegalProps = {
    title: string;
    url: string;
};
type Props = {
    site: SiteProps;
    links: LinkProps[];
    socials: SocialProps[];
    legals: LegalProps[];
};

export type FooterProps = React.ComponentPropsWithoutRef<"section"> &
    Partial<Props>;

const FooterDefaults: Props = {
    site: {
        title: "Cnippet",
        description:
            " Travel plans are not really an instrument themselves but a delivery mechanism or strategy for other mostly",
    },

    links: [
        {
            title: "Contacts",
            sub: [
                {
                    title: "+91 11111 11111",
                    url: "tel:+91 97566 20538",
                },
                {
                    title: "info@ui.cnippet.com",
                    url: "mailto:info@ui.cnippet.com",
                },
                {
                    title: "office@ui.cnippet.com",
                    url: "mailto:office@ui.cnippet.com",
                },
            ],
        },
        {
            title: "Company",
            sub: [
                {
                    title: "About us",
                    url: "#",
                },
                {
                    title: "Contacts",
                    url: "#",
                },
                {
                    title: "Careers",
                    url: "#",
                },
            ],
        },
        {
            title: "Resources",
            sub: [
                {
                    title: "Press info",
                    url: "#",
                },
                {
                    title: "Customers",
                    url: "#",
                },
                {
                    title: "Reviews",
                    url: "#",
                },
            ],
        },
    ],

    socials: [
        {
            title: "facebook",
            url: "#",
            icon: <FaFacebook className="h-6 w-6" />,
        },
        {
            title: "insta",
            url: "#",
            icon: <FaInstagram className="h-6 w-6" />,
        },
        {
            title: "twitter",
            url: "#",
            icon: <FaTwitter className="h-6 w-6" />,
        },
        {
            title: "Youtube",
            url: "#",
            icon: <FaYoutube className="h-6 w-6" />,
        },
    ],

    legals: [
        {
            title: "Privacy Policy",
            url: "#",
        },
        {
            title: "Terms of Services",
            url: "#",
        },
        {
            title: "Cookies Policy",
            url: "#",
        },
    ],
};

const Footer: React.FC<FooterProps> = (props) => {
    const { site, links, socials, legals } = {
        ...FooterDefaults,
        ...props,
    };

    return (
        <footer className="relative isolate bg-black/95 py-8">
            <div className=" mx-auto max-w-full px-6 md:max-w-[95%] lg:px-8">
                <div className="flex flex-col border-gray-300 md:flex-row md:border-b">
                    <div className="flex w-full flex-col gap-2 py-10 pr-8 md:flex-row md:items-center md:justify-between">
                        <h3 className="text-3xl text-gray-50 md:w-[45%]">
                            Leading the way in adventure
                        </h3>
                        <div className="flex gap-x-3">
                            {socials.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.url}
                                    className="rounded-full bg-white p-3 shadow-lg"
                                >
                                    <span className="sr-only">{social.title}</span>
                                    {social.icon}
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
                                {site.title}
                            </span>
                        </a>
                        <p className="mt-3 text-gray-400 md:w-[50%]">{site.description}</p>
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
                                                href={item.url}
                                                className="hover:text-white hover:underline"
                                            >
                                                {item.title}
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
                            {legals.map((legal, i) => (
                                <span
                                    key={i}
                                    className="block text-xs text-gray-400 sm:text-left md:text-sm"
                                >
                                    <a href={legal.url} className="underline hover:text-white">
                                        {legal.title}
                                    </a>
                                </span>
                            ))}
                        </div>

                        <div>
                            <span className="block text-sm text-gray-400 sm:text-right">
                                © 2024
                                <a href="/" className="hover:underline">
                                    {" "}
                                    Cnippet™
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