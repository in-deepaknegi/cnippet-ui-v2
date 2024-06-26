"use client";
import React, { ReactNode, useState } from "react";

import { FaChevronDown } from "react-icons/fa6";
import { RiPieChart2Fill } from "react-icons/ri";

type MenuProps = {
    title: string;
    description: string;
    href: string;
    icon: ReactNode;
}
type Props = {
    menu: MenuProps[];
}
const MenuDefault: Props = {
    menu: [
        {
            title: "Analytics",
            description: "Get a better understanding of your traffic",
            href: "$",
            icon: <RiPieChart2Fill className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
        }
    ]
}

export type MenuListProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

const FlyoutMenu: React.FC<MenuListProps> = (props) => {

    const { menu } = {
        ...MenuDefault,
        ...props
    }
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(!open);
    };

    return (
        <header className="relative isolate overflow-visible py-8 md:pb-40">
            <div className="relative mx-auto max-w-lg">
                <div className="relative hidden lg:flex lg:gap-x-12">
                    <button
                        onMouseEnter={toggleOpen}
                        onMouseLeave={toggleOpen}
                        className="inline-flex items-center justify-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
                    >
                        <span>Solutions</span>
                        <FaChevronDown className="h-3 w-3" aria-hidden="true" />

                        {open && (
                            <div className="absolute -left-5 top-3 z-10 flex w-screen max-w-max px-4 pt-4">
                                <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                                    <div className="p-2">
                                        {menu.map((item, i) => (
                                            <div
                                                key={i}
                                                className="group relative flex gap-x-6 rounded-3xl p-2 hover:bg-gray-50"
                                            >
                                                <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <a
                                                        href={item.href}
                                                        className="font-semibold text-gray-900"
                                                    >
                                                        {item.title}
                                                        <span className="absolute inset-0" />
                                                    </a>
                                                    <p className="mt-1 text-gray-600">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default FlyoutMenu;
