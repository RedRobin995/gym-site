import Script from "next/script";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Schedule } from "@/components/Schedule";
import { Pricing } from "@/components/Pricing";
import { Trainers } from "@/components/Trainers";
import { Testimonials } from "@/components/Testimonials";
import { HomeFaqContact } from "@/components/HomeFaqContact";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://tu-dominio.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthClub",
  name: site.name,
  description: site.description,
  url: siteUrl,
  telephone: site.phone.replace(/\s/g, ""),
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressCountry: "ES",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "06:00",
      closes: "22:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "08:00",
      closes: "20:00",
    },
  ],
};

export default function Home() {
  return (
    <>
      <Script
        id="json-ld-healthclub"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="relative z-[1] flex-1">
        <Hero />
        <About />
        <Services />
        <Schedule />
        <Pricing />
        <Trainers />
        <Testimonials />
        <HomeFaqContact />
      </main>
      <Footer />
    </>
  );
}
