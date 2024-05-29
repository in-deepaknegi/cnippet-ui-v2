import React from "react";
import { Metadata } from "next";
import Hero from "@/components/routes/login/Hero";

export const metadata: Metadata = {
    title: "Login",
    description: "Log in to your Cnippet UI account here to unlock top-notch React, Next.js, and Tailwind CSS components, ready-to-use templates, and special resources for your web development projects.",
    applicationName: "Cnippet Ui",

    openGraph: {
        title: "Login",
        description: "Log in to your Cnippet UI account here to unlock top-notch React, Next.js, and Tailwind CSS components, ready-to-use templates, and special resources for your web development projects.",
        url: "https://ui.cnippet.com/login",
        images: ["/images/meta/site.png"],
    },

    twitter: {
        title: "Login",
        description: "Log in to your Cnippet UI account here to unlock top-notch React, Next.js, and Tailwind CSS components, ready-to-use templates, and special resources for your web development projects.",
        images: ["/images/meta/site.png"],
    },
};

const page = () => {
    return (
        <>
            <Hero layout="full" />
        </>
    );
};

export default page;
