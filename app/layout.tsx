import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

import { AuthProvider } from "@/atoms/context/authProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ui.cnippet.com/"),

  title: {
    default: "Cnippet Ui",
    template: `%s | Cnippet Ui`,
  },
  description:
    "Welcome to Cnippet UI - the perfect place for high-quality React, Next.js, and Tailwind CSS components, as well as customizable templates that are designed to elevate your web development projects to the next level.",
  applicationName: "Cnippet Ui",

  openGraph: {
    title: "Cnippet Ui",
    siteName: "Cnippet Ui",
    description:
      "Welcome to Cnippet UI - the perfect place for high-quality React, Next.js, and Tailwind CSS components, as well as customizable templates that are designed to elevate your web development projects to the next level.",
    url: "https://ui.cnippet.com/",
    images: ["/images/meta/site.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cnippet Ui",
    description:
      "Welcome to Cnippet UI - the perfect place for high-quality React, Next.js, and Tailwind CSS components, as well as customizable templates that are designed to elevate your web development projects to the next level.",
    images: ["/images/meta/site.png"],
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
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
      <GoogleAnalytics gaId="G-BPXZ3B9WXY" />
    </html>
  );
}
