import React from 'react';
import Image from 'next/image';
import components from '@/data/components';

const Related = ({ slug }) => {

    const cmp = components.filter((item)=> item.slug !== slug);
    // console.log(cmp)

    const shuffle = shuffleArray(cmp);

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    return (
        <>
            <div className="mx-auto max-w-[95%] px-6 lg:px-7 pt-28">
                <div className="max-w-2xl">
                    <h2 className="text-base font-semibold leading-7 text-indigo-600">
                        Components
                    </h2>
                    <p className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 ">
                        Related components
                    </p>
                </div>

                <div className="mx-auto relative pt-10 md:mt-8">
                    <ul className="grid-cols-[repeat(auto-fill,minmax(12rem, 1fr))] grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {shuffle.slice(0, 4).map((component, i) => (
                            <li key={i}>
                                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                                    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                                        <Image
                                            src={component.image}
                                            alt="navbar-img"
                                            className="absolute w-full object-cover"
                                        />
                                    </div>
                                    <h4 className="mt-4 text-sm font-medium text-slate-800 group-hover:text-indigo-600 ">
                                        <a href={`/components/${component.slug}`}>
                                            <span className="absolute -inset-2.5 z-10"></span>
                                            <span className="relative">{component.name}</span>
                                        </a>
                                    </h4>
                                    <p className="relative mt-1.5 text-xs font-medium text-slate-500 ">
                                        {component.number}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Related