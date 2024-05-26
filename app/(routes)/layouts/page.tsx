import React from 'react'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Hero from '@/components/routes/layouts/Hero'
import List from '@/components/routes/layouts/List';

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Layouts",
    description: "Discover the story behind Cnippet UI on our Layout page. Learn Layout our mission, values, and the team driving innovation in web development. Get to know us better as we empower you to create exceptional digital experiences.",
    applicationName: 'Cnippet Ui',

    openGraph: {
        title: "Layouts",
        description: "Discover the story behind Cnippet UI on our Layout page. Learn Layout our mission, values, and the team driving innovation in web development. Get to know us better as we empower you to create exceptional digital experiences.",
        url: "https://ui.cnippet.com/layout",
        images: ["/images/meta/site.png"],
    },

    twitter: {
        card: 'summary_large_image',
        title: "Layouts",
        description: "Discover the story behind Cnippet UI on our Layout page. Learn Layout our mission, values, and the team driving innovation in web development. Get to know us better as we empower you to create exceptional digital experiences.",
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