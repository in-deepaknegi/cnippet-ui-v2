import React from 'react'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Hero from '@/components/routes/layouts/Hero'
import List from '@/components/routes/layouts/List';

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Layouts",
    description: "Discover a range of carefully designed layouts at Cnippet UI. Uncover the ideal page designs to elevate your web development projects, showcasing layouts created with React, Next.js, and Tailwind CSS. Find the perfect template for your requirements and simplify your design workflow.",
    applicationName: 'Cnippet Ui',

    openGraph: {
        title: "Layouts",
        siteName: "Cnippet Ui",
        description: "Discover a range of carefully designed layouts at Cnippet UI. Uncover the ideal page designs to elevate your web development projects, showcasing layouts created with React, Next.js, and Tailwind CSS. Find the perfect template for your requirements and simplify your design workflow.",
        url: "https://ui.cnippet.com/layout",
        images: ["/images/meta/site.png"],
    },

    twitter: {
        card: 'summary_large_image',
        title: "Layouts",
        description: "Discover a range of carefully designed layouts at Cnippet UI. Uncover the ideal page designs to elevate your web development projects, showcasing layouts created with React, Next.js, and Tailwind CSS. Find the perfect template for your requirements and simplify your design workflow.",
        images: ["/images/meta/site.png"],
    },
};

const page = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <List />
            </main>
            <Footer />
        </>
    )
}

export default page