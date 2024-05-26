import React from 'react'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Hero from '@/components/routes/about/Hero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "About us",
    description: "Discover the story behind Cnippet UI on our About page. Learn about our mission, values, and the team driving innovation in web development. Get to know us better as we empower you to create exceptional digital experiences.",
    applicationName: 'Cnippet Ui',

    openGraph: {
        title: "About us",
        description: "Discover the story behind Cnippet UI on our About page. Learn about our mission, values, and the team driving innovation in web development. Get to know us better as we empower you to create exceptional digital experiences.",
        url: "https://ui.cnippet.com/about",
        images: ["/images/meta/site.png"],
    },

    twitter: {
        card: 'summary_large_image',
        title: "Contact us",
        description: "Discover the story behind Cnippet UI on our About page. Learn about our mission, values, and the team driving innovation in web development. Get to know us better as we empower you to create exceptional digital experiences.",
        images: ["/images/meta/site.png"],
    },
};

const page = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
            </main>
            <Footer />
        </>
    )
}

export default page