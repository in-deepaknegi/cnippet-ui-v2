import React from "react";
import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/routes/contact/Hero";
import Form from "@/components/routes/contact/Form";

export const metadata: Metadata = {
    title: "Contact us",
    description:
        "Reach out to Cnippet UI for any inquiries, assistance, or to share your ideas. Our dedicated team is ready to support you. Contact us today and let's collaborate to enhance your web development endeavors. We look forward to hearing from you.",
    applicationName: "Cnippet Ui",

    openGraph: {
        title: "Contact us",
        siteName: "Cnippet Ui",
        description:
            "Reach out to Cnippet UI for any inquiries, assistance, or to share your ideas. Our dedicated team is ready to support you. Contact us today and let's collaborate to enhance your web development endeavors. We look forward to hearing from you.",
        url: "https://ui.cnippet.com/contacts",
        images: ["/images/meta/site.png"],
    },

    twitter: {
        title: "Contact us",
        description:
            "Reach out to Cnippet UI for any inquiries, assistance, or to share your ideas. Our dedicated team is ready to support you. Contact us today and let's collaborate to enhance your web development endeavors. We look forward to hearing from you.",
        images: ["/images/meta/site.png"],
    },
};

const page = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Form />
            </main>
            <Footer />
        </>
    );
};

export default page;
