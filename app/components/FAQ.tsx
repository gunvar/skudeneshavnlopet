"use client";

import { useState } from "react";

const faqs: { q: string; a: string }[] = [
  {
    q: "Når og hvor går Skudeneshavnløpet 2026?",
    a: "Skudeneshavnløpet arrangeres lørdag 13. juni 2026 i Gamle Skudeneshavn på Karmøy. Start og målgang er ved Torget, Kirkevegen 4, 4280 Skudeneshavn. Første start (Havnasprinten) er kl. 11:00.",
  },
  {
    q: "Hvilke distanser kan jeg velge mellom?",
    a: "Du kan velge mellom tre distanser: Havnasprinten på 500 m (kl. 11:00, gratis og for barn), 10 km (kl. 12:00) og 5 km (kl. 12:15). Alle løypene starter og slutter ved Torget.",
  },
  {
    q: "Hva koster påmeldingen?",
    a: "Havnasprinten for barn er gratis. 5 km og 10 km koster 350 kr. Meld deg på via EQ Timing på live.eqtiming.com/80315.",
  },
  {
    q: "Hvordan fungerer lagkonkurransen?",
    a: "Lagkonkurransen går på 5 km med vandrepokal for beste lag — en tradisjon vi har hatt siden 2024. Hvert lag må ha minimum 3 deltakere (ingen øvre grense), og de 3 beste tidene på laget teller i sammenlagt. Det er ingen egen lagpåmelding — alle melder seg på individuelt, men deltakere som skal være på samme lag må oppgi samme lagnavn ved registrering. Perfekt for bedrifter, vennegjenger eller familier.",
  },
  {
    q: "Får alle medalje?",
    a: "Ja, alle som fullfører får deltakermedalje. På 5 km og 10 km får de 3 beste damene og herrene gavekort som premie.",
  },
  {
    q: "Er det offisiell tidtaking?",
    a: "Ja, tidtakingen utføres profesjonelt av EQ Timing. Alle deltakere på 5 km og 10 km får chip-tid. Resultater publiseres umiddelbart etter løpet.",
  },
  {
    q: "Når henter jeg startnummer?",
    a: "Startnummer hentes i teltet på Torget fra kl. 10:00 samme dag. Meld deg på senest 8. juni 2026 hvis du vil ha navnet ditt trykket på startnummeret.",
  },
  {
    q: "Kan barn delta?",
    a: "Absolutt! Havnasprinten på 500 m er spesielt for barn og familier, flat og rask runde i havneområdet, og den er helt gratis. Ingen påmelding nødvendig. Barn kan også delta på 5 km og 10 km sammen med foresatte.",
  },
  {
    q: "Hvor parkerer jeg?",
    a: "Det er gratis parkering flere steder rundt sentrum i Skudeneshavn. Vi anbefaler å komme i god tid og å samkjøre hvis mulig — det er yrende folkeliv i sentrum løpsdagen.",
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
          Alt du trenger å vite om Skudeneshavnløpet 2026
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
