import React from "react";
import { Metadata } from "next";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/routes/templates/Hero";
import Projects from "@/components/routes/templates/Projects";

export const metadata: Metadata = {
    title: "Templates",
    description: "Check out our carefully chosen collection of professional templates at Cnippet UI. Uncover elegantly designed layouts created using React, Next.js, and Tailwind CSS to simplify your web development tasks and spark your next idea.",
    applicationName: "Cnippet Ui",

    openGraph: {
        title: "Templates",
        siteName: "Cnippet Ui",
        description: "Check out our carefully chosen collection of professional templates at Cnippet UI. Uncover elegantly designed layouts created using React, Next.js, and Tailwind CSS to simplify your web development tasks and spark your next idea.",
        url: "http://ui.cnippet.com/templates",
        images: ["/images/meta/site.png"],
    },

    twitter: {
        card: "summary_large_image",
        title: "Templates",
        description: "Check out our carefully chosen collection of professional templates at Cnippet UI. Uncover elegantly designed layouts created using React, Next.js, and Tailwind CSS to simplify your web development tasks and spark your next idea.",
        images: ["/images/meta/site.png"],
    },
};

const page = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Projects />
            </main>
            <Footer />
        </>
    );
};

export default page;
