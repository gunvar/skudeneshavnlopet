"use client";

import { useState } from "react";

const faqs: { q: string; a: string }[] = [
  {
    q: "Når går Skudeneshavnløpet 2027?",
    a: "Skudeneshavnløpet 2027 arrangeres i juni 2027 i Gamle Skudeneshavn på Karmøy. Nøyaktig dato annonseres i september. Start og målgang er ved Torget, Kirkevegen 4, 4280 Skudeneshavn.",
  },
  {
    q: "Når åpner påmeldingen?",
    a: "Påmeldingen åpner i september, samtidig som datoen annonseres. Følg oss på Facebook eller sjekk denne siden for å få med deg åpningen.",
  },
  {
    q: "Hvilke distanser kan jeg velge mellom?",
    a: "Du kan velge mellom tre distanser: Havnasprinten på 500 m (gratis og for barn), 5 km og 10 km. Alle løypene starter og slutter ved Torget.",
  },
  {
    q: "Hva koster påmeldingen?",
    a: "Prisene for 2027 fastsettes når påmeldingen åpner i september. I 2026 kostet 5 km og 10 km 350 kr, og Havnasprinten for barn var gratis.",
  },
  {
    q: "Hvordan fungerer lagkonkurransen?",
    a: "Lagkonkurransen går på 5 km med vandrepokal for beste lag — en tradisjon vi har hatt siden 2024. Hvert lag må ha minimum 3 deltakere (ingen øvre grense), og de 3 beste tidene på laget teller i sammenlagt. Det er ingen egen lagpåmelding — alle melder seg på individuelt, men deltakere som skal være på samme lag må oppgi samme lagnavn ved registrering. Perfekt for bedrifter, vennegjenger eller familier. I 2026 vant Solstad Running Team vandrepokalen.",
  },
  {
    q: "Får alle medalje?",
    a: "Ja, alle som fullfører får deltakermedalje. På 5 km og 10 km får de 3 beste damene og herrene gavekort som premie.",
  },
  {
    q: "Er det offisiell tidtaking?",
    a: "Ja, tidtakingen utføres profesjonelt av EQ Timing. Alle deltakere på 5 km og 10 km får chip-tid. På løpsdagen kan du følge resultatene live, og endelige resultater publiseres umiddelbart etter løpet. Resultatene fra 2026 finner du på live.eqtiming.com/80315.",
  },
  {
    q: "Når henter jeg startnummer?",
    a: "Startnummer hentes i teltet på Torget på løpsdagen. Nøyaktige tider og frister for 2027 kommer sammen med påmeldingen i september.",
  },
  {
    q: "Kan barn delta?",
    a: "Absolutt! Havnasprinten på 500 m er spesielt for barn og familier, flat og rask runde i havneområdet, og den er helt gratis. Ingen påmelding nødvendig. Barn kan også delta på 5 km og 10 km sammen med foresatte.",
  },
  {
    q: "Hvor parkerer jeg?",
    a: "Det er gratis parkering tre steder nær sentrum: ved biblioteket, ved den gamle ferjekaien og ved Kanalvegen (KIWI). Kartlenker til alle tre finner du under Praktisk informasjon. Kom i god tid og samkjør gjerne — det er yrende folkeliv i sentrum på løpsdagen.",
  },
  {
    q: "Hvem arrangerer Skudeneshavnløpet?",
    a: "Løpet arrangeres av Skudenes UIL (SUIL) i samarbeid med Skudeneshavn Næringsforening. Overskuddet går uavkortet til SUIL og lokalidretten.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <section id="faq" className="bg-sand py-20 sm:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-4">
        <h2
          className="mb-4 text-center text-3xl font-extrabold text-ocean-dark sm:text-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Ofte stilte spørsmål
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-center text-gray-600">
          Alt du trenger å vite om Skudeneshavnløpet 2027
        </p>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-100 transition"
              >
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-gray-50"
                  aria-expanded={open}
                >
                  <span className="text-base font-semibold text-ocean-dark sm:text-lg">
                    {faq.q}
                  </span>
                  <span
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-full bg-ocean/10 text-ocean transition-transform ${
                      open ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-gray-600 sm:text-base">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
