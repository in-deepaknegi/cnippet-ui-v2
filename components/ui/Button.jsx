import React from "react";
import Link from "next/link";

import { FiArrowUpRight } from "react-icons/fi";

const Button = ({ text, url, target }) => {
    
    let t = target ? target : "_self";

    return (
        <Link
            href={url}
            target={t}
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-300 to-rose-400 px-5 py-2 text-xl"
        >
            {text}
            <FiArrowUpRight className="h-5 w-5" />
        </Link>
    );
};

export default Button;
