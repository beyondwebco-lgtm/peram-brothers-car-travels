import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Peram Brothers Car Travels | Premium Cab Service in Vijayawada & Guntur",
  description: "24/7 Premium Cab & Taxi Services in Vijayawada and Guntur. Book verified outstation cabs, one-way trips, and airport drop/pickup transfers to Hyderabad. Transparent flat-rate pricing, sanitized white vehicles, and professional drivers.",
  keywords: [
    "Cab Service Vijayawada",
    "Taxi Vijayawada",
    "Vijayawada to Hyderabad Cab",
    "Guntur to Hyderabad Taxi",
    "Airport Taxi Vijayawada",
    "Outstation Cab Vijayawada",
    "One Way Taxi Andhra Pradesh",
    "Car Travels Vijayawada",
    "Cab Booking Vijayawada",
    "Taxi Service Guntur"
  ],
  metadataBase: new URL("https://perambrotherscartravels.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Peram Brothers Car Travels | Reliable Cab Services in Vijayawada & Guntur",
    description: "Book verified outstation cabs, airport drops, and local rentals in Vijayawada & Guntur. 24/7 service with professional drivers and clean white cars.",
    url: "https://perambrotherscartravels.com",
    siteName: "Peram Brothers Car Travels",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Local Business Structured Data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": "Peram Brothers Car Travels",
    "description": "24/7 Premium Cab and Taxi Rental Service in Vijayawada and Guntur, Andhra Pradesh.",
    "url": "https://perambrotherscartravels.com",
    "telephone": "+917095281999",
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Vijayawada"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Guntur"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Hyderabad"
      }
    ],
    "provider": {
      "@type": "LocalBusiness",
      "name": "Peram Brothers Car Travels",
      "image": "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Vijayawada",
        "addressRegion": "Andhra Pradesh",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white">
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
