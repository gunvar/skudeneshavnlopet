"use client";

import { useState } from "react";
import Image from "next/image";

const tabs = [
  {
    id: "10km",
    label: "10 km",
    image: "/images/loypekart/10km.png",
    alt: "Løypekart 10 km — klikk for å se løypen på Strava",
    strava: "https://www.strava.com/segments/34618587",
    stats: "10,38 km · 142 m stigning · Asfalt & grus",
    desc: "Løp begge rundene! Første runde følger 5 km-løypen. Andre runde tar deg forbi Planteskolen og bystranda i Vigane.",
    highlights: ["Søragadå", "Vikesjøen", "Almanamyrvannet", "Planteskolen", "Vigane"],
  },
  {
    id: "5km",
    label: "5 km",
    image: "/images/loypekart/5-og-10km.jpg",
    alt: "Løypekart for 5 km",
    strava: null,
    stats: "Ca. 5 km · Asfalt & grus",
    desc: "Første halvdel av 10 km-løypen. Variert terreng gjennom Skudeneshavns vakreste områder.",
    highlights: ["Søragadå", "Vikesjøen", "Almanamyrvannet"],
  },
  {
    id: "havnasprinten",
    label: "Havnasprinten",
    image: "/images/loypekart/havnasprinten.jpg",
    alt: "Løypekart for Havnasprinten 500m",
    strava: null,
    stats: "500 m · Flat · Asfalt",
    desc: "Flat og rask runde i havneområdet — perfekt for barn og familier. Ingen påmelding nødvendig!",
    highlights: [],
  },
];

export default function CourseMap() {
  const [activeTab, setActiveTab] = useState("10km");
  const active = tabs.find((t) => t.id === activeTab)!;

  const mapContent = (
    <div className="overflow-hidden rounded-2xl bg-sand shadow-lg">
      <div className="relative aspect-video w-full">
        <Image
          src={active.image}
          alt={active.alt}
          fill
          className="object-contain bg-gray-900"
        />
        {active.strava && (
          <div className="absolute bottom-3 right-3 rounded-full bg-ocean/80 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
            Se løypen på Strava &rarr;
          </div>
        )}
      </div>

      <div className="p-6">
        <p className="mb-1 text-xs font-bold uppercase tracking-widest text-ocean">
          {active.label}
        </p>
        <p className="mb-3 text-sm font-medium text-gray-700">{active.stats}</p>
        <p className="text-sm leading-relaxed text-gray-600">{active.desc}</p>
        {active.highlights.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {active.highlights.map((h) => (
              <span
                key={h}
                className="rounded-full bg-ocean/10 px-3 py-1 text-xs font-medium text-ocean"
              >
                {h}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section id="loypekart" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4">
        <h2
          className="mb-4 text-center text-3xl font-extrabold text-ocean-dark sm:text-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Løypekart
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-center text-gray-600">
          Start og målgang i sentrum ved Torget. Velg distanse for å se løypen.
        </p>

        {/* Tabs */}
        <div className="mb-6 flex justify-center">
          <div className="inline-flex rounded-full bg-sand p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                  activeTab === tab.id
                    ? "bg-ocean text-white shadow-md"
                    : "text-gray-600 hover:text-ocean-dark"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Map content */}
        {active.strava ? (
          <a
            href={active.strava}
            target="_blank"
            rel="noopener noreferrer"
            className="block transition-shadow hover:shadow-xl"
          >
            {mapContent}
          </a>
        ) : (
          mapContent
        )}
      </div>
    </section>
  );
}
