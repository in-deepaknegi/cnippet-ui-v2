import React from "react";
import { Metadata } from "next";
import Hero from "@/components/routes/login/Hero";

export const metadata: Metadata = {
    title: "Login",
    description: "",
    applicationName: "Cnippet Ui",

    openGraph: {
        title: "Login",
        description: "",
        url: "https://ui.cnippet.com/login",
        images: ["/images/meta/site.png"],
    },

    twitter: {
        title: "Login",
        description: "",
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
