import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/routes/home/Hero";
import Logos from "@/components/routes/home/Logos";
import Components from "@/components/routes/home/Component";
import Pricing from "@/components/routes/home/Pricing";

export default function Home() {
  const siteJsonLd = {
    "@context": "https://schema.org",
    "@type": "Website",
    name: "Cnippet Ui",
    url: "https://ui.cnippet.com/",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(siteJsonLd),
        }}
      />

      <div itemScope itemType="https://schema.org/WebSite">
        <meta itemProp="url" content="https://ui.cnippet.com/" />
        <meta itemProp="name" content="Cnippet Ui" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Components />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
