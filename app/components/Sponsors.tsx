import Image from "next/image";

const hovedsponsorer = [
  {
    name: "Skudenes & Aakra Sparebank",
    logo: "/images/sponsorer/sponsorer_0014_Layer-1-1.webp",
    url: "https://www.skudenesaakra.no/",
  },
  {
    name: "Solstad Offshore",
    logo: "/images/sponsorer/solstad-offshore.png",
    url: "https://www.solstad.com/",
  },
];

const sponsorer = [
  {
    name: "Brødr. Olsen Mur & Bygg",
    logo: null,
    textLogo: true,
    url: "https://www.br-olsen.no/",
  },
  {
    name: "VB - Kristoffer Sirevåg",
    logo: "/images/sponsorer/VB_Kristoffer_Sirevåg.jpg",
    textLogo: false,
    url: null,
  },
  {
    name: "Capricorn Equipment AS",
    logo: "/images/sponsorer/capricorn-equipment.png",
    textLogo: false,
    url: "https://capricornequipment.no/",
  },
  {
    name: "Blåklokken Blomsterforretning",
    logo: "/images/sponsorer/blaklokken-interflora.svg",
    textLogo: false,
    url: "https://www.interflora.no/om-oss/finn-butikk/bl%C3%A5klokken-blomsterforretning",
    displayName: "Blåklokken Blomsterforretning",
  },
  {
    name: "Rema 1000",
    logo: "/images/sponsorer/rema-1000-logo-png_seeklogo-117380.png",
    textLogo: false,
    url: "https://www.rema.no/",
  },
];

const arrangor = {
  name: "Skudenes UIL",
  logo: "/images/sponsorer/suil.webp",
  url: null,
};

function SponsorCard({
  sponsor,
  size = "normal",
}: {
  sponsor: { name: string; logo: string | null; url: string | null; displayName?: string; textLogo?: boolean };
  size?: "large" | "normal";
}) {
  const imgHeight = size === "large" ? "h-20 sm:h-24" : "h-14 sm:h-16";
  const padding = size === "large" ? "p-8" : "p-5";

  const content = (
    <div
      className={`flex flex-col items-center justify-center rounded-xl border border-gray-100 bg-white ${padding} text-center transition-all hover:shadow-md ${sponsor.url ? "cursor-pointer hover:-translate-y-0.5" : ""}`}
    >
      {sponsor.textLogo ? (
        <div className={`flex ${imgHeight} items-center justify-center`}>
          <p
            className="text-base font-extrabold leading-tight text-ocean-dark sm:text-lg"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Brødr. Olsen
            <span className="block text-[10px] font-semibold uppercase tracking-widest text-gray-400">
              Mur &amp; Bygg
            </span>
          </p>
        </div>
      ) : sponsor.logo ? (
        <div className={`relative ${imgHeight} w-full`}>
          <Image
            src={sponsor.logo}
            alt={sponsor.name}
            fill
            className="object-contain"
          />
        </div>
      ) : null}
      {sponsor.displayName && (
        <p className="mt-3 text-xs font-semibold text-ocean-dark">
          {sponsor.displayName}
        </p>
      )}
    </div>
  );

  if (sponsor.url) {
    return (
      <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
}

export default function Sponsors() {
  return (
    <section id="sponsorer" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4">
        <h2
          className="mb-4 text-center text-3xl font-extrabold text-ocean-dark sm:text-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Sponsorer
        </h2>
        <p className="mx-auto mb-10 max-w-lg text-center text-gray-600">
          Takk til våre sponsorer som gjør Skudeneshavnløpet mulig!
        </p>

        {/* Hovedsponsorer */}
        <p className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-ocean">
          Hovedsponsorer
        </p>
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {hovedsponsorer.map((s) => (
            <SponsorCard key={s.name} sponsor={s} size="large" />
          ))}
        </div>

        {/* Sponsorer */}
        <p className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-gray-400">
          Sponsorer
        </p>
        <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {sponsorer.map((s) => (
            <SponsorCard key={s.name} sponsor={s} />
          ))}
        </div>

        {/* Arrangør */}
        <p className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-gray-400">
          Arrangør
        </p>
        <div className="mx-auto max-w-[200px]">
          <SponsorCard sponsor={arrangor} />
        </div>

        {/* Bli sponsor CTA */}
        <div className="mt-10 rounded-2xl bg-gradient-to-r from-ocean-dark to-ocean p-6 text-center text-white sm:p-8">
          <h3
            className="mb-2 text-xl font-bold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Bli sponsor for Skudeneshavnløpet 2026!
          </h3>
          <p className="mx-auto mb-5 max-w-lg text-sm text-white/80">
            Vi har sponsorpakker fra 1 000 til 20 000 kr. Overskuddet går
            uavkortet til SUIL og lokalidretten. Ta kontakt for å høre mer!
          </p>
          <a
            href="mailto:post@suil.no?subject=Sponsorpakke%20Skudeneshavnl%C3%B8pet%202026"
            className="inline-block rounded-full bg-white px-6 py-3 text-sm font-bold text-ocean-dark transition-all hover:scale-105 hover:shadow-lg"
          >
            Ta kontakt — post@suil.no
          </a>
        </div>
      </div>
    </section>
  );
}
