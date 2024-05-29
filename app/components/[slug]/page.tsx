import React from "react";
import { Metadata } from "next";

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
                    <div className="relative mx-auto max-w-full px-4 sm:px-6 md:max-w-[97%] lg:px-8">
                        <div className="flex flex-col">
                            <h1 className="mt-3 text-3xl font-semibold text-slate-900">
                                {component.name}
                            </h1>
                            <nav className="order-first flex space-x-2 font-swim text-lg">
                                <a
                                    href="/components"
                                    className="text-slate-500 hover:text-slate-800"
                                >
                                    Ui - Components
                                </a>
                                <div className="select-none text-slate-400">/</div>
                                <a
                                    href={`/components/${component.slug}`}
                                    className="text-slate-500 hover:text-slate-800"
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
