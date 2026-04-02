import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Skudeneshavnløpet 2026 — Opplev sommerbyen i løpesko 13. juni",
  description:
    "Meld deg på Skudeneshavnløpet 13. juni 2026! 500m, 5km og 10km gjennom vakre Skudeneshavn. NYTT: Lagkonkurranse med vandrepokal! Medalje til alle. Folkefest for hele familien.",
  openGraph: {
    title: "Skudeneshavnløpet 2026 — Opplev sommerbyen i løpesko",
    description:
      "Meld deg på Skudeneshavnløpet 13. juni 2026! 500m, 5km og 10km gjennom vakre Skudeneshavn.",
    type: "website",
    locale: "nb_NO",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsEvent",
              name: "Skudeneshavnløpet 2026",
              startDate: "2026-06-13T11:00:00+02:00",
              endDate: "2026-06-13T14:00:00+02:00",
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
              },
              organizer: {
                "@type": "Organization",
                name: "Skudenes UIL",
                email: "post@suil.no",
              },
              description:
                "Gateløp gjennom vakre Skudeneshavn. 500m, 5km og 10km. Folkefest for hele familien!",
              eventStatus: "https://schema.org/EventScheduled",
              eventAttendanceMode:
                "https://schema.org/OfflineEventAttendanceMode",
              offers: [
                {
                  "@type": "Offer",
                  name: "5 km / 10 km",
                  price: "350",
                  priceCurrency: "NOK",
                  url: "https://signup.eqtiming.com/arrangement/skudeneshavnlopet-2026/g295.55447?event=skudeneshavnlopet",
                },
                {
                  "@type": "Offer",
                  name: "Havnasprinten 500m",
                  price: "0",
                  priceCurrency: "NOK",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
