import React, { ReactNode } from "react";
import Link from "next/link";

import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub, FaInstagram } from "react-icons/fa";

type LinkProps = {
    title: string;
    url: string;
};
type SocialProps = {
    title: string;
    url: string;
    svg: ReactNode;
};

type Props = {
    sup: string;
    title: string;
    description: string;
    link: LinkProps;
    socials: SocialProps[];
};

const HeaderDefaults: Props = {
    sup: " The web is the world's largest library",
    title: "Website Development",
    description:
        "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
    link: {
        title: "Let's talk",
        url: "#",
    },
    socials: [
        {
            title: "Github",
            url: "#",
            svg: <FaGithub className="h-7 w-7 group-hover:text-white" />,
        },
        {
            title: "Instagram",
            url: "#",
            svg: <FaInstagram className="h-7 w-7 group-hover:text-white" />,
        },
    ],
};

export type HeaderProps = React.ComponentPropsWithoutRef<"section"> &
    Partial<Props>;

const Header: React.FC<HeaderProps> = (props) => {
    const { sup, title, description, link, socials } = {
        ...HeaderDefaults,
        ...props,
    };
    return (
        <section className="relative isolate bg-white py-8 font-swir lg:py-16">
            <div className="mx-auto max-w-full px-4 md:max-w-[90%] lg:px-8 ">
                <div className="mt-2 flex flex-col items-center justify-between gap-y-5 text-center md:gap-x-10 lg:flex-row lg:text-left">
                    <div className="flex max-w-4xl flex-col">
                        <p className="flex flex-row items-center justify-center gap-4 text-center text-lg text-gray-700 md:justify-start">
                            <span className="h-0.5 w-16 bg-black"></span>
                            {sup}
                        </p>
                        <h1 className="mt-6 text-center text-4xl text-black md:text-left md:text-6xl">
                            {title}
                        </h1>
                        <p className="mt-8 max-w-xl text-center text-lg text-gray-700 md:text-left md:text-lg">
                            {description}
                        </p>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <Link
                            href={link.url}
                            className="flex w-fit items-center gap-2 rounded-full bg-black px-8 py-2 text-lg uppercase text-white"
                        >
                            {link.title}
                            <FiArrowUpRight className="h-5 w-5" />
                        </Link>

                        <div className="mt-6 flex flex-row items-center gap-4">
                            <p className="text-xl text-gray-800">Follow us on:</p>

                            <div className="flex flex-wrap gap-x-3">
                                {socials.map((item, i) => (
                                    <a
                                        key={i}
                                        href={item.url}
                                        target="_blank"
                                        className="group rounded-full bg-white p-2 shadow-lg hover:bg-black"
                                    >
                                        <span className="sr-only">{item.title}</span>
                                        {item.svg}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;
