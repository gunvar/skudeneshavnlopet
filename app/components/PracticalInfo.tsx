"use client";

import { useState } from "react";

const schedule = [
  { time: "10:00", event: "Registrering og henting av startnummer", place: "Teltet på Torget" },
  { time: "11:00", event: "Havnasprinten (500m)", place: "Start ved Torget" },
  { time: "12:00", event: "10 km", place: "Start ved Torget" },
  { time: "12:15", event: "5 km", place: "Start ved Torget" },
  { time: "13:15", event: "Premieutdeling", place: "Bade-Olena" },
];

const infoSections = [
  {
    title: "Startnummer og registrering",
    content:
      "Hent startnummer i teltet på Torget fra kl. 10:00. Meld deg på innen 8. juni for å få navnet ditt på startnummeret. Tidtaking ved EQ Timing — alle deltakere på 5 km og 10 km får chip-tid.",
  },
  {
    title: "Parkering (gratis)",
    content: null,
    links: [
      { label: "Ved biblioteket", url: "https://maps.app.goo.gl/S37xibKcZ7KHZtRP7" },
      { label: "Ved den gamle ferjekaien", url: "https://maps.app.goo.gl/irnhFVE1JfvsJUXb7" },
      { label: "Ved Kanalvegen (KIWI)", url: "https://maps.app.goo.gl/hrdQdBZT2ARczSkU8" },
    ],
  },
  {
    title: "Toaletter",
    content: null,
    links: [
      { label: "Bade-Olena", url: "https://maps.app.goo.gl/6xQVjcgDmsmjasNf6" },
      { label: "Gamle ferjekaien", url: "https://maps.app.goo.gl/osWC28La6j2uYUGCA" },
    ],
  },
  {
    title: "Premiering",
    content:
      "Medaljer til alle som fullfører 5 km og 10 km! Topp 3 damer og herrer i begge distanser vinner gavekort: 1. plass 1500 kr, 2. plass 1000 kr, 3. plass 500 kr. Premieutdeling på Bade-Olena kl. 13:15.",
  },
];

function Accordion({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-4 text-left"
      >
        <span className="text-base font-semibold text-ocean-dark">{title}</span>
        <svg
          className={`h-5 w-5 text-ocean transition-transform ${open ? "rotate-180" : ""}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {open && <div className="pb-4 text-sm leading-relaxed text-gray-600">{children}</div>}
    </div>
  );
}

export default function PracticalInfo() {
  return (
    <section id="praktisk" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4">
        <h2
          className="mb-12 text-center text-3xl font-extrabold text-ocean-dark sm:text-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Praktisk informasjon
        </h2>

        {/* Timeline / schedule */}
        <div className="mb-12">
          <h3 className="mb-6 text-center text-lg font-bold text-ocean-dark">
            Dagens program — Lørdag 13. juni 2026
          </h3>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[3.25rem] top-0 bottom-0 hidden w-0.5 bg-ocean/20 sm:block" />

            <div className="space-y-4">
              {schedule.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex h-10 w-20 shrink-0 items-center justify-center rounded-lg bg-ocean text-sm font-bold text-white sm:w-[4.5rem]">
                    {item.time}
                  </div>
                  <div className="hidden sm:block">
                    <div className="mt-3 h-3 w-3 rounded-full border-2 border-ocean bg-white" />
                  </div>
                  <div className="pt-1.5">
                    <p className="font-semibold text-gray-900">{item.event}</p>
                    <p className="text-sm text-gray-500">{item.place}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Accordion info */}
        <div className="rounded-2xl bg-sand p-6 sm:p-8">
          {infoSections.map((section, i) => (
            <Accordion key={section.title} title={section.title} defaultOpen={i === 0}>
              {section.content && <p>{section.content}</p>}
              {section.links && (
                <ul className="mt-2 space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-ocean hover:text-coral hover:underline"
                      >
                        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </Accordion>
          ))}
        </div>

        {/* Startsted */}
        <div className="mt-8 rounded-2xl border border-ocean/10 bg-ocean-dark/5 p-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-ocean">
            Startsted
          </p>
          <p className="mt-1 text-lg font-bold text-ocean-dark">
            Torget, Kirkevegen 4, 4280 Skudeneshavn
          </p>
          <a
            href="https://maps.app.goo.gl/S37xibKcZ7KHZtRP7"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-sm text-ocean hover:text-coral hover:underline"
          >
            Åpne i Google Maps →
          </a>
        </div>
      </div>
    </section>
  );
}
