import React from "react";
import Link from "next/link";

import { FiArrowUpRight } from "react-icons/fi";

type LinkProps = {
    title: string;
    url: string;
};

type Props = {
    sup: string;
    title: string;
    description: string;
    link: LinkProps;
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
};

export type HeaderProps = React.ComponentPropsWithoutRef<"section"> &
    Partial<Props>;

const Header: React.FC<HeaderProps> = (props) => {
    const { sup, title, description, link } = {
        ...HeaderDefaults,
        ...props,
    };

    return (
        <section className="relative isolate py-8 lg:py-16">
            <div className=" mx-auto max-w-full px-6 md:max-w-[95%] lg:px-0">
                <div className="mx-auto max-w-3xl">
                    <p className="flex flex-col items-center justify-center gap-4 text-center text-lg text-gray-700 md:flex-row">
                        <span className="h-0.5 w-16 bg-black"></span>
                        {sup}
                    </p>
                    <h1 className="mt-6 text-center text-4xl text-black md:text-6xl">
                        {title}
                    </h1>
                </div>

                <div className="mx-auto mt-8 flex max-w-4xl flex-col items-center justify-between gap-6 md:mt-10 md:flex-row">
                    <p className="text-center text-lg text-gray-700 md:w-[75%] md:text-left md:text-xl">
                        {description}
                    </p>
                    <Link
                        href={link.url}
                        className="flex items-center gap-2 rounded-full bg-black px-5 py-2 text-lg uppercase text-white"
                    >
                        {link.title}
                        <FiArrowUpRight className="h-5 w-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Header;
