import React from 'react'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Hero from '@/components/routes/about/Hero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "About us",
    description: "Explore the immersive and inspiring story of Cnippet UI, the perfect place for top-notch React, Next.js, and Tailwind CSS components. Our mission is to empower developers with unparalleled, high-quality templates that prioritize flexibility, ultimately enhancing and simplifying the web development process.",
    applicationName: 'Cnippet Ui',

    openGraph: {
        title: "About us",
        siteName: "Cnippet Ui",
        description: "Explore the immersive and inspiring story of Cnippet UI, the ultimate destination for top-notch React, Next.js, and Tailwind CSS components. Our mission is to empower developers with unparalleled, high-quality templates that prioritize flexibility, ultimately enhancing and simplifying the web development process.",
        url: "https://ui.cnippet.com/about",
        images: ["/images/meta/site.png"],
    },

    twitter: {
        card: 'summary_large_image',
        title: "Contact us",
        description: "Explore the immersive and inspiring story of Cnippet UI, the ultimate destination for top-notch React, Next.js, and Tailwind CSS components. Our mission is to empower developers with unparalleled, high-quality templates that prioritize flexibility, ultimately enhancing and simplifying the web development process.",
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