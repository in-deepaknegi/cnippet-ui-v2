import React from 'react'

const posts = [
    {
        id: 1,
        title: "Home page",
        href: "#",
        sub: [
            {
                title: "Navbar",
                description: "",
                href: "/components/navbar",
                class: "border w-full p-2 rounded-xl hover:bg-gray-100 text-xl text-black"
            },
            {
                title: "Hero",
                description: "Highlight your website's unique value proposition and key skills with an engaging hero image or video background.",
                href: "/components/hero",
                class: "border w-full p-2 rounded-xl hover:bg-gray-100 text-xl text-black"
            },
            {
                title: "Features",
                description: "Showcase the key features of your website to demonstrate what your platform can do and why it's worthwhile.",
                href: "/components/feature",
                class: "border w-full p-2 rounded-xl hover:bg-gray-100 text-xl text-black"
            },
            {
                title: "Product List",
                description: "Showcase your products with an image, breif description and key products features.",
                href: "#",
                class: "border w-full p-2 rounded-xl hover:bg-gray-100 text-xl text-black"
            },
            {
                title: "OR",
                class: "text-sm ml-4"
            },
            {
                title: "Blog List",
                description: "Showcase your list of blogs to enhanve user engagement.",
                href: "/components/blogs",
                class: "border w-full p-2 rounded-xl hover:bg-gray-100 text-xl text-black"
            },
            {
                title: "Pricing",
                description: "Highlight the pricing for your services and emphasize the value and benefits to help customers make informed decisions.",
                href: "/components/pricing",
                class: "border w-full p-2 rounded-xl hover:bg-gray-100 text-xl text-black"
            },
            {
                title: "Feedback",
                description: "Highlight the feedback from your customers about your website or product or any other services.",
                href: "/components/feedback",
                class: "border w-full p-2 rounded-xl hover:bg-gray-100 text-xl text-black"
            },
            {
                title: "Newsletter",
                description: "Encourage your customers to sign up for your newsletter to receive the latest updates on upcoming products.",
                href: "/components/newsletter",
                class: "border w-full p-2 rounded-xl hover:bg-gray-100 text-xl text-black"
            },
            {
                title: "Footer",
                href: "/components/footer",
                class: "border w-full p-2 rounded-xl hover:bg-gray-100 text-xl text-black"
            },
        ]
    },
    // More posts...
];

const List = () => {
    return (
        <section className='relative isolate font-swim py-8'>
            <div className='mx-auto max-w-full md:max-w-[75%] px-6 lg:px-8'>
                <div className="mx-auto grid max-w-xl grid-cols-1 gap-x-16 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article
                            key={post.id}
                            className=""
                        >
                            <div className='text-center text-3xl'>
                                {post.title}
                            </div>
                            <div className="mt-6 flex flex-col items-start justify-between rounded-2xl border bg-white  p-4 shadow-xl">
                                <ul className='w-full space-y-1'>
                                    {post.sub.map((item, j) => (
                                        <li key={j} className={`${item.class}`}>
                                            <a href={item.href} target='_blank'>
                                                <h3 className='w-full'>
                                                    {item.title}
                                                </h3>
                                                {item.description && (
                                                    <p className=' text-sm font-swir mt-1.5 text-gray-500'>
                                                        {item.description}
                                                    </p>
                                                )}

                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default List