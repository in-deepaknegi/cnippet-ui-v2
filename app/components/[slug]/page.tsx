import React from "react";
import { Metadata } from "next";

import { FaAngleRight } from "react-icons/fa6";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import components from "@/data/components";
import Layout from "@/components/Layout";

const Product = ({ params }: { params: { slug: string } }) => {
    const id = params.slug;
    // console.log(id)
    const component = components.find((component) => component.slug === id);
    const a = component?.slug;

    if (!component) {
        return <div>component Not Found</div>;
    }

    return (
        <>
            <Navbar />
            <main>
                <section className="relative overflow-hidden bg-white pt-16">
                    <div className="relative mx-auto max-w-full px-4 sm:px-6 md:max-w-[95%] lg:px-8">
                        <div className="flex flex-col">
                            <h1 className="mt-16 text-5xl font-swim text-black">
                                {component.name}
                            </h1>
                            <nav className="order-first flex items-center space-x-4 text-base font-swir">
                                <a
                                    href="/"
                                    className="text-slate-500 hover:text-black"
                                >
                                    Home
                                </a>
                                <FaAngleRight className="w-3 h-3 text-slate-500" />
                                <a
                                    href="/components"
                                    className="text-slate-500 hover:text-black"
                                >
                                    All Components
                                </a>
                                <FaAngleRight className="w-3 h-3 text-slate-500" />
                                <a
                                    href={`/components/${component.slug}`}
                                    className="text-black px-3 py-0.5"
                                >
                                    {component.name}
                                </a>
                            </nav>
                        </div>

                        <Layout components={component.data} slug={id} />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Product;

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> {
    const id = params.slug;

    const component = components.find((component) => component.slug === id);
    const name = "Ui - " + component?.name;

    return {
        metadataBase: new URL("https://ui.cnippet.com/"),

        title: name,
        description: component?.description,
        applicationName: "Cnippet Ui",

        openGraph: component?.imgurl
            ? {
                title: name,
                siteName: "Cnippet Ui",
                description: component?.description,
                url: `/components/${component.slug}`,
                images: [component?.imgurl],
            }
            : null,

        twitter: component?.imgurl
            ? {
                title: name,
                description: component?.description,
                images: [component?.imgurl],
            }
            : null,
    };
}
