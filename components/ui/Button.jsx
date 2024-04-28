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
                className={`rounded-md max-w-md mx-auto font-semibold px-3.5 tracking-wide py-2.5 text-sm text-white shadow-sm bg-gradient-to-br from-black to-purple-600`}
                href={`${url}`}
            >
                {text}
            </Link>
        </button>
    )
}

export default Button