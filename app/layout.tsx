import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

import { AuthProvider } from "@/atoms/context/authProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ui.cnippet.com/"),

  title: "Cnippet Ui",
  description:
    "Elevate your web projects effortlessly with Cnippet UI - your go-to source for premium React, Next.js, and Tailwind CSS components and templates. Craft captivating designs and streamline development with our meticulously designed building blocks. Dive into a world of innovation and efficiency, revolutionizing your web experience one snippet at a time.",
  applicationName: "Cnippet Ui",

  openGraph: {
    title: "Cnippet Ui",
    description:
      "Elevate your web projects effortlessly with Cnippet UI - your go-to source for premium React, Next.js, and Tailwind CSS components and templates. Craft captivating designs and streamline development with our meticulously designed building blocks. Dive into a world of innovation and efficiency, revolutionizing your web experience one snippet at a time.",
    url: "https://ui.cnippet.com/",
    images: [
      {
        url: "/images/meta/home.png",
        width: 1080,
        height: 680,
        alt: "cnippet-ui",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cnippet Ui",
    description:
      "Elevate your web projects effortlessly with Cnippet UI - your go-to source for premium React, Next.js, and Tailwind CSS components and templates. Craft captivating designs and streamline development with our meticulously designed building blocks. Dive into a world of innovation and efficiency, revolutionizing your web experience one snippet at a time.",
    images: [
      {
        url: "/images/meta/home.png",
        width: 1080,
        height: 680,
        alt: "cnippet-ui",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
      <GoogleAnalytics gaId="G-BPXZ3B9WXY" />
    </html>
  );
}
