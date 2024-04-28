import React from "react";
import Image from "next/image";
import Hero1 from "@/public/images/hero/hero8.jpg";
import Profile1 from "@/public/images/profile/profile5.jpg";

const related = [
    {
        title: "Enterprise design tips",
        description:
            "Over the past year, Volosoft has undergone many changes! Aftermonths of preparation.",
        href: "#",
    },
    {
        title: "We partnered up with Google",
        description:
            "Over the past year, Volosoft has undergone many changes! Aftermonths of preparation.",
        href: "#",
    },
    {
        title: "Our first project with React",
        description:
            "Over the past year, Volosoft has undergone many changes! Aftermonths of preparation.",
        href: "#",
    },
];

const S2 = () => {
    return (
        <main className="pb-16 pt-8 antialiased lg:pb-24 lg:pt-16">
            <div className="mx-auto flex max-w-6xl justify-between px-4 lg:px-0">
                <article className="relative mx-auto max-w-3xl pt-10">
                    <h1 className="text-2xl font-extrabold text-slate-900 md:text-4xl ">
                        Introducing Catalyst: A modern UI kit for&nbsp;React
                    </h1>
                    <div className="text-sm leading-6">
                        <dl>
                            <dt className="sr-only">Date</dt>
                            <dd className="absolute inset-x-0 top-0 text-slate-700">
                                <time dateTime="2023-12-20T20:00:00.000Z">
                                    Thursday, March 21, 2024
                                </time>
                            </dd>
                        </dl>
                    </div>
                    <div className="mt-6 block lg:hidden">
                        <ul className="-mx-5 -mt-6 flex flex-wrap text-sm leading-6">
                            <li className="mt-6 flex items-center gap-4 whitespace-nowrap px-5 font-medium">
                                <Image
                                    src={Profile1}
                                    alt="id-1"
                                    className="h-8 w-8 rounded-full bg-gray-50 object-cover"
                                />
                                <div className="text-sm leading-4">
                                    <div className="text-slate-900 ">Adam Wathan</div>
                                    <div className="mt-1">
                                        <a
                                            href="#"
                                            className="text-sky-500 hover:text-sky-600 dark:text-sky-400"
                                        >
                                            @adamwathan
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-12 flex flex-col gap-y-6 font-sans text-gray-800">
                        <p className="text-lg">
                            Today the day — we just published the first development preview of
                            just in time for your holiday hacking sessions.
                        </p>
                        <div className="mx-auto max-w-3xl">
                            <Image
                                src={Hero1}
                                alt="featured-image"
                                className="aspect-[16/9] rounded-xl object-cover object-center"
                            />
                        </div>
                        <p>
                            <strong>Catalyst</strong> is our first fully-componentized,
                            batteries-included application UI kit — real React components with
                            thoughtfully designed APIs that build on each other to create a
                            real component architecture, the same way we&apos;d do it in a
                            real application
                        </p>
                        <p>
                            Check out the read the and if you&apos;re a Tailwind UI All-Access
                            customer
                        </p>
                        <h2 className="text-lg font-semibold text-slate-900 md:text-2xl">
                            Your components, not ours
                        </h2>
                        <p>
                            <strong>Catalyst</strong> is our first fully-componentized,
                            batteries-included application UI kit — real React components with
                            thoughtfully designed APIs that build on each other to create a
                            real component architecture, the same way we&apos;d do it in a
                            real application
                        </p>

                        <p>
                            With Catalyst, we set out to build a UI kit that tomorrow&apos;s
                            Stripe or Linear would feel good about using to build their
                            products — design-obsessed teams who want to own their UI
                            components, and would never choose an off-the-shelf library.
                        </p>

                        <p className="text-base leading-6">
                            With Catalyst, we set out to build a UI kit that tomorrow&apos;s
                            Stripe or Linear would feel good about using to build their
                            products — design-obsessed teams who want to own their UI
                            components, and would never choose an off-the-shelf library.
                        </p>

                        <hr />
                        <h1 className="text-2xl font-extrabold text-slate-900 md:text-4xl">
                            Style Guide
                        </h1>
                        <h1>Font : font-sans</h1>
                        <h1 className="text-2xl font-extrabold text-slate-900 md:text-4xl">
                            Heading 1
                        </h1>
                        <h2 className="text-xl font-extrabold text-slate-900 md:text-3xl">
                            Heading 2
                        </h2>
                        <h3 className="text-lg font-extrabold text-slate-900 md:text-2xl">
                            Heading 3
                        </h3>
                        <h4 className="text-base font-extrabold text-slate-900 md:text-xl">
                            Heading 4
                        </h4>
                        <h5 className="text-md font-extrabold text-slate-900 md:text-lg">
                            Heading 5
                        </h5>
                        <p className="text-base leading-7 text-gray-700">
                            This is a sample para small
                        </p>
                        <p className="text-lg leading-7 text-gray-700">
                            This is a sample para standard
                        </p>
                        <p className="text-2xl leading-7 text-gray-700">
                            This is a sample para large
                        </p>
                        <div className="inset-0 z-10 overflow-y-auto">
                            <div className="min-h-full p-0 text-center sm:items-center">
                                <div className="relative ml-1 overflow-hidden rounded-lg border bg-white shadow-lg shadow-sky-100 ring-1 ring-sky-600 transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="  p-3">
                                        <div className="text-center sm:ml-4 sm:mt-0 sm:text-left">
                                            <h3
                                                className="text-base font-semibold leading-6 text-gray-900"
                                                id="modal-title"
                                            >
                                                Note
                                            </h3>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-700">
                                                    Are you sure you want to deactivate your account? All
                                                    of your data will be permanently removed. This action
                                                    cannot be undone.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                <aside className="hidden lg:block lg:w-72">
                    <div className="sticky top-6">
                        <div className="mb-6 rounded-2xl border p-6 shadow-xl">
                            <a href="#" className="mb-4 flex items-center gap-4">
                                <Image
                                    src={Profile1}
                                    alt="id-1"
                                    className="h-8 w-8 rounded-full bg-gray-50 object-cover"
                                />
                                <div className="text-sm leading-4">
                                    <div className="font-semibold text-slate-900">
                                        Adam Wathan
                                    </div>
                                </div>
                            </a>
                            <p className="mb-4 text-sm text-slate-900">
                                Hey! I&apos;m Adam Wathan. I&apos;m a career-changer. Bootcamp
                                grad & Dev.
                            </p>

                            <div className="flex">
                                <h2 className="my-auto text-sm font-semibold">
                                    Connect with me
                                </h2>
                                <div className="ml-auto flex gap-x-2">
                                    <a href="#">
                                        <span className="sr-only">Facebook</span>
                                        <svg
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            className="h-7 w-7 text-gray-400"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </a>
                                    <a href="#">
                                        <span className="sr-only">Instagram</span>
                                        <svg
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            className="h-7 w-7 text-gray-400"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </a>
                                    <a href="#">
                                        <span className="sr-only">Twitter</span>
                                        <svg
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            className="h-7 w-7 text-gray-400"
                                            aria-hidden="true"
                                        >
                                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl border p-6 shadow-xl">
                            <h3 className="mb-4 border-b text-lg font-semibold">
                                Related articles
                            </h3>

                            {related.map((item, i) => (
                                <a key={i} href={item.href}>
                                    <div className="text-base font-semibold text-blue-600">
                                        {item.title}
                                    </div>
                                    <p className="mb-4 line-clamp-2 text-sm text-slate-900">
                                        {item.description}
                                    </p>
                                </a>
                            ))}
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    );
};

export default S2;
