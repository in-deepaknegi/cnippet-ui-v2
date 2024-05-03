import React from 'react'
import Link from 'next/link'

const Button = ({ text, color, url }) => {

    let bg = 'bg-black';
    let hbg = 'hover:bg-dusk-800';

    if (color) {
        bg = color;
        hbg = 'hover:bg-dusk-900';
    }

    return (
        <button type="submit">
            <Link
                className={`rounded-full max-w-md mx-auto px-3.5 tracking-wide py-2.5 text-md text-white shadow-sm bg-indigo-700`}
                href={`${url}`}
            >
                {text}
            </Link>
        </button>
    )
}

export default Button