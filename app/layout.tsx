import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const SITE_URL = "https://www.skudeneshavnlopet.no";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "Skudeneshavnløpet 2026 — Gateløp på Karmøy 13. juni | Opplev sommerbyen i løpesko",
  description:
    "Meld deg på Skudeneshavnløpet 13. juni 2026 — gateløp på Karmøy gjennom Gamle Skudeneshavn (Skudnes). 500 m, 5 km og 10 km. NYTT: Lagkonkurranse. Kun 300 plasser.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Skudeneshavnløpet",
    "løp Skudeneshavn",
    "løp Skudnes",
    "løp på Karmøy",
    "løp Karmøy 2026",
    "gateløp Karmøy",
    "gateløp Skudeneshavn",
    "sommerløp Rogaland",
    "løpeløp Haugaland",
    "Havnasprinten",
    "5 km 10 km løp",
    "SUIL",
    "folkefest Skudeneshavn",
    "Skudnes",
  ],
  authors: [{ name: "Skudenes UIL" }],
  openGraph: {
    title: "Skudeneshavnløpet 2026 — Opplev sommerbyen i løpesko",
    description:
      "Meld deg på Skudeneshavnløpet 13. juni 2026! 500 m, 5 km og 10 km gjennom vakre Skudeneshavn. Kun 300 plasser.",
    type: "website",
    locale: "nb_NO",
    siteName: "Skudeneshavnløpet",
    url: SITE_URL,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Skudeneshavnløpet 2026 — løpere gjennom sommerbyen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skudeneshavnløpet 2026 — 13. juni",
    description:
      "500 m, 5 km og 10 km gjennom Gamle Skudeneshavn. NYTT: Lagkonkurranse. Meld deg på!",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "tFmAY3jada0Fk7e8CE8mqgPKvZ4OAcIsUZPHhGyanjs",
  },
};

const sportsEventJsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsEvent",
  name: "Skudeneshavnløpet 2026",
  url: SITE_URL,
  startDate: "2026-06-13T11:00:00+02:00",
  endDate: "2026-06-13T14:00:00+02:00",
  image: [`${SITE_URL}/og-image.jpg`],
  description:
    "Skudeneshavnløpet er et årlig gateløp gjennom Gamle Skudeneshavn på Karmøy. Distanser 500 m (Havnasprinten for barn), 5 km og 10 km. Lagkonkurranse med vandrepokal på 5 km. Profesjonell tidtaking ved EQ Timing.",
  location: {
    "@type": "Place",
    name: "Torget, Skudeneshavn",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kirkevegen 4",
      addressLocality: "Skudeneshavn",
      postalCode: "4280",
      addressCountry: "NO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 59.1419,
      longitude: 5.2648,
    },
  },
  organizer: [
    {
      "@type": "Organization",
      name: "Skudenes UIL",
      email: "post@suil.no",
      url: "https://www.suil.no",
    },
    {
      "@type": "Organization",
      name: "Skudeneshavn Næringsforening",
    },
  ],
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  maximumAttendeeCapacity: 300,
  offers: [
    {
      "@type": "Offer",
      name: "10 km",
      price: "350",
      priceCurrency: "NOK",
      availability: "https://schema.org/InStock",
      validFrom: "2025-12-01T00:00:00+01:00",
      url: "https://live.eqtiming.com/80315",
    },
    {
      "@type": "Offer",
      name: "5 km",
      price: "350",
      priceCurrency: "NOK",
      availability: "https://schema.org/InStock",
      validFrom: "2025-12-01T00:00:00+01:00",
      url: "https://live.eqtiming.com/80315",
    },
    {
      "@type": "Offer",
      name: "Havnasprinten 500 m (barn)",
      price: "0",
      priceCurrency: "NOK",
      availability: "https://schema.org/InStock",
      url: "https://live.eqtiming.com/80315",
    },
  ],
  subEvent: [
    {
      "@type": "SportsEvent",
      name: "Havnasprinten 500 m",
      startDate: "2026-06-13T11:00:00+02:00",
      location: { "@type": "Place", name: "Torget, Skudeneshavn" },
    },
    {
      "@type": "SportsEvent",
      name: "Skudeneshavnløpet 10 km",
      startDate: "2026-06-13T12:00:00+02:00",
      location: { "@type": "Place", name: "Torget, Skudeneshavn" },
    },
    {
      "@type": "SportsEvent",
      name: "Skudeneshavnløpet 5 km",
      startDate: "2026-06-13T12:15:00+02:00",
      location: { "@type": "Place", name: "Torget, Skudeneshavn" },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nb">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(sportsEventJsonLd),
          }}
        />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
