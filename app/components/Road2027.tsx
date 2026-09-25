"use client";

import { useState } from "react";
import Image from "next/image";

const FACEBOOK_URL = "https://www.facebook.com/share/17xXiKoLHn/";
const SITE_URL = "https://www.skudeneshavnlopet.no";

const milestones = [
  {
    when: "Juni 2026",
    title: "Rekordår",
    desc: "262 løpere — 32 % flere enn året før.",
    state: "done",
  },
  {
    when: "Oktober 2026",
    title: "Dato + påmelding",
    desc: "Datoen slippes og påmeldingen åpner i løpet av oktober.",
    state: "next",
  },
  {
    when: "Vinter og vår",
    title: "Treningsperioden",
    desc: "Sett målet, samle laget og tren mot løpsdagen.",
    state: "upcoming",
  },
  {
    when: "Juni 2027",
    title: "Løpsdag i Sommerbyen",
    desc: "Femte Skudeneshavnløpet mellom de hvitmalte trehusene.",
    state: "upcoming",
  },
] as const;

const challenges = [
  {
    icon: "⏱️",
    title: "Slå vinnertidene",
    body: (
      <>
        <strong className="text-white">16:43</strong> på 5 km og{" "}
        <strong className="text-white">38:14</strong> på 10 km var tidene som
        vant i 2026. Hvem går raskere i 2027?
      </>
    ),
    href: "#resultater-2026",
    link: "Se topp 3 fra 2026",
  },
  {
    icon: "🏆",
    title: "Ta pokalen fra Solstad",
    body: (
      <>
        Solstad Running Team forsvarer vandrepokalen på 5 km. Bedriften,
        vennegjengen eller familien — tre løpere er nok til å utfordre.
      </>
    ),
    href: "#distanser",
    link: "Slik fungerer lagkonkurransen",
  },
  {
    icon: "👟",
    title: "Hele familien med",
    body: (
      <>
        Havnasprinten på 500 m er barnas eget løp. Etterpå heier de fram de
        voksne på 5 og 10 km — folkefest for alle generasjoner.
      </>
    ),
    href: "#distanser",
    link: "Se distansene",
  },
];

export default function Road2027() {
  const [shared, setShared] = useState(false);

  const onShare = async () => {
    const data = {
      title: "Skudeneshavnløpet 2027",
      text: "Bli med på Skudeneshavnløpet i juni 2027! Påmeldingen åpner i løpet av oktober.",
      url: SITE_URL,
    };
    try {
      if (navigator.share) {
        await navigator.share(data);
        return;
      }
      await navigator.clipboard.writeText(SITE_URL);
      setShared(true);
      setTimeout(() => setShared(false), 2500);
    } catch {
      // Avbrutt deling — ingenting å gjøre
    }
  };

  return (
    <section
      id="mot-2027"
      className="relative scroll-mt-20 overflow-hidden bg-ocean-dark py-20 text-white sm:py-28"
    >
      {/* Stemningsbilde i bakgrunnen */}
      <div className="absolute inset-0 opacity-15">
        <Image
          src="/images/galleri/2026-02.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(232,96,60,0.55), transparent 70%)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-dark via-ocean-dark/90 to-ocean-dark" />

      <div className="relative mx-auto max-w-5xl px-4">
        <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.3em] text-coral">
          Neste kapittel · 5. gang
        </p>
        <h2
          className="mb-4 text-center text-3xl font-extrabold leading-tight sm:text-5xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Veien mot{" "}
          <span className="bg-gradient-to-r from-coral via-orange-300 to-amber-200 bg-clip-text text-transparent">
            2027
          </span>
        </h2>
        <p className="mx-auto mb-14 max-w-2xl text-center text-base leading-relaxed text-white/75 sm:text-lg">
          Løpet har vokst hvert eneste år. Nå rigger vi til den femte utgaven
          av folkefesten i Sommerbyen — og vi håper du vil være med fra start.
        </p>

        {/* Tidslinje */}
        <div className="mx-auto max-w-2xl">
          <div className="rounded-3xl bg-white/5 p-7 ring-1 ring-white/10 backdrop-blur-sm sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
              Tidslinje
            </p>
            <h3
              className="mt-1 mb-6 text-xl font-extrabold sm:text-2xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Dette skjer fram mot løpsdagen
            </h3>

            <ol className="relative space-y-6">
              <div
                aria-hidden
                className="absolute left-[0.6875rem] top-2 bottom-2 w-0.5 bg-gradient-to-b from-emerald-400/60 via-coral/60 to-white/15"
              />
              {milestones.map((m) => (
                <li key={m.when} className="relative flex gap-4">
                  <span className="relative mt-1 flex h-6 w-6 shrink-0 items-center justify-center">
                    {m.state === "next" && (
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral opacity-60" />
                    )}
                    <span
                      className={`relative flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold ${
                        m.state === "done"
                          ? "bg-emerald-400 text-ocean-dark"
                          : m.state === "next"
                            ? "bg-coral text-white"
                            : "bg-ocean-dark text-white/60 ring-2 ring-white/25"
                      }`}
                    >
                      {m.state === "done" ? "✓" : ""}
                    </span>
                  </span>
                  <div className="min-w-0">
                    <p
                      className={`text-xs font-bold uppercase tracking-wider ${
                        m.state === "next" ? "text-coral" : "text-white/50"
                      }`}
                    >
                      {m.when}
                      {m.state === "next" && (
                        <span className="ml-2 rounded-full bg-coral/20 px-2 py-0.5 text-[10px] text-coral">
                          Neste
                        </span>
                      )}
                    </p>
                    <p className="font-bold text-white">{m.title}</p>
                    <p className="text-sm text-white/65">{m.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Utfordringer */}
        <h3
          className="mt-16 mb-6 text-center text-2xl font-extrabold sm:text-3xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Hva er ditt mål for 2027?
        </h3>
        <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
          {challenges.map((c) => (
            <div
              key={c.title}
              className="flex flex-col rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 transition hover:-translate-y-1 hover:bg-white/10"
            >
              <span className="text-3xl" aria-hidden="true">
                {c.icon}
              </span>
              <h4
                className="mt-3 text-lg font-extrabold"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {c.title}
              </h4>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/70">{c.body}</p>
              <a
                href={c.href}
                className="mt-4 text-sm font-semibold text-coral hover:underline"
              >
                {c.link} →
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col items-center gap-3 text-center">
          <p className="text-white/75">
            Vær først ute når påmeldingen åpner i løpet av oktober.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-coral px-8 py-4 text-lg font-bold text-white shadow-2xl transition-all hover:scale-105 hover:bg-coral-dark"
            >
              Få beskjed på Facebook
            </a>
            <button
              type="button"
              onClick={onShare}
              className="rounded-full bg-white/10 px-6 py-3.5 text-base font-semibold text-white ring-1 ring-white/25 transition hover:bg-white/20"
            >
              {shared ? "Lenke kopiert ✓" : "Del med løpevennene"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
