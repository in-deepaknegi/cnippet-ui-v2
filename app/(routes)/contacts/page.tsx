import React from 'react'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Form from '@/components/routes/contact/Form'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Contact us",
    description: "Connect effortlessly with Cnippet UI's contact page. Reach out for inquiries, collaborations, or just to say hello. We're here to support your web development journey every step of the way.",
    applicationName: 'Cnippet Ui',

    openGraph: {
        title: "Contact us",
        description: "Connect effortlessly with Cnippet UI's contact page. Reach out for inquiries, collaborations, or just to say hello. We're here to support your web development journey every step of the way.",
        url: "https://ui.cnippet.com/contacts",
        images: ["/images/meta/site.png"],
    },

    twitter: {
        title: "Contact us",
        description: "Connect effortlessly with Cnippet UI's contact page. Reach out for inquiries, collaborations, or just to say hello. We're here to support your web development journey every step of the way.",
        images: ["/images/meta/site.png"],
    },
};

const page = () => {
    return (
        <>
            <Navbar />
            <main>
                <Form />
            </main>
            <Footer />
        </>
    )
}

export default page