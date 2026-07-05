import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const SITE_URL = "https://www.skudeneshavnlopet.no";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "Skudeneshavnløpet 2027 — Gateløp på Karmøy i juni | Opplev sommerbyen i løpesko",
  description:
    "Skudeneshavnløpet 2027 arrangeres i juni — dato annonseres og påmeldingen åpner i september. Gateløp på Karmøy gjennom Gamle Skudeneshavn (Skudnes): 500 m, 5 km og 10 km. Se resultater og bilder fra 2026.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Skudeneshavnløpet",
    "løp Skudeneshavn",
    "løp Skudnes",
    "løp på Karmøy",
    "løp Karmøy 2027",
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
    title: "Skudeneshavnløpet 2027 — Opplev sommerbyen i løpesko",
    description:
      "Skudeneshavnløpet 2027 går i juni — dato og påmelding annonseres i september. 500 m, 5 km og 10 km gjennom vakre Skudeneshavn.",
    type: "website",
    locale: "nb_NO",
    siteName: "Skudeneshavnløpet",
    url: SITE_URL,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Skudeneshavnløpet 2027 — juni 2027, dato og påmelding slippes i september",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skudeneshavnløpet 2027 — juni 2027",
    description:
      "500 m, 5 km og 10 km gjennom Gamle Skudeneshavn. Dato annonseres og påmeldingen åpner i september.",
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
  name: "Skudeneshavnløpet 2027",
  url: SITE_URL,
  // Nøyaktig dato annonseres i september — måned-presisjon inntil videre
  startDate: "2027-06",
  image: [`${SITE_URL}/og-image.jpg`],
  description:
    "Skudeneshavnløpet er et årlig gateløp gjennom Gamle Skudeneshavn på Karmøy. Distanser 500 m (Havnasprinten for barn), 5 km og 10 km. Lagkonkurranse med vandrepokal på 5 km. Profesjonell tidtaking ved EQ Timing. Dato for 2027 annonseres i september, samtidig som påmeldingen åpner.",
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
