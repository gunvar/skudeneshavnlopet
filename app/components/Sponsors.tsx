import Image from "next/image";

// Sponsorlogoene fra 2026 er tatt bort inntil 2027-avtalene er på plass.
// Logofilene ligger fortsatt i public/images/sponsorer/ og listen finnes i git-historikken.

const SPONSOR_MAIL =
  "mailto:post@suil.no?subject=Sponsor%20for%20Skudeneshavnl%C3%B8pet%202027&body=Hei!%0A%0AVi%20er%20interessert%20i%20%C3%A5%20bli%20sponsor%20for%20Skudeneshavnl%C3%B8pet%202027.%0A%0ABedrift%3A%0AKontaktperson%3A%0ATelefon%3A%0A";

const stats = [
  { value: "262", label: "løpere i 2026" },
  { value: "+32 %", label: "vekst på ett år" },
  { value: "5.", label: "gang i 2027" },
];

const benefits = [
  {
    icon: "📣",
    title: "Synlighet før løpet",
    desc: "Logo på nettsiden og omtale i kanalene våre gjennom hele påmeldingsperioden.",
  },
  {
    icon: "🏁",
    title: "Til stede på løpsdagen",
    desc: "Profilering ved start og mål på Torget — der løpere, familier og publikum samles.",
  },
  {
    icon: "🤝",
    title: "Lokalt engasjement",
    desc: "Vis at dere heier på Skudeneshavn. Overskuddet går uavkortet til SUIL og lokalidretten.",
  },
  {
    icon: "🏃",
    title: "Still eget lag",
    desc: "Utfordre de ansatte i lagkonkurransen på 5 km og kjemp om vandrepokalen.",
  },
];

export default function Sponsors() {
  return (
    <section id="sponsorer" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4">
        <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.3em] text-coral">
          Sponsorplasser 2027 er ledige
        </p>
        <h2
          className="mb-4 text-center text-3xl font-extrabold text-ocean-dark sm:text-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Bli sponsor for Skudeneshavnløpet 2027
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
          Skudeneshavnløpet er en av sommerens største folkefester på sørspissen
          av Karmøy. Vil din bedrift være med og gjøre femte utgave til den
          beste hittil?
        </p>

        <div className="overflow-hidden rounded-3xl bg-ocean-dark text-white shadow-xl">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            {/* Bilde + nøkkeltall */}
            <div className="relative min-h-[18rem]">
              <Image
                src="/images/galleri/2026-01.jpg"
                alt="Løpere og publikum i gatene i Gamle Skudeneshavn under Skudeneshavnløpet 2026"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark via-ocean-dark/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 grid grid-cols-3 gap-2 p-5 sm:p-6">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl bg-white/15 px-2 py-3 text-center backdrop-blur-sm ring-1 ring-white/20"
                  >
                    <span
                      className="block text-xl font-extrabold sm:text-2xl"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {s.value}
                    </span>
                    <span className="block text-[10px] font-semibold uppercase tracking-wide text-white/75 sm:text-xs">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fordeler + CTA */}
            <div className="p-7 sm:p-10">
              <h3
                className="mb-6 text-xl font-extrabold sm:text-2xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Dette får dere som sponsor
              </h3>
              <ul className="grid gap-5 sm:grid-cols-2">
                {benefits.map((b) => (
                  <li key={b.title} className="flex gap-3">
                    <span className="text-2xl" aria-hidden="true">
                      {b.icon}
                    </span>
                    <div>
                      <p className="font-bold">{b.title}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-white/70">
                        {b.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl bg-white/10 p-5 ring-1 ring-white/15">
                <p className="text-sm text-white/80">
                  Sponsorpakker fra{" "}
                  <strong className="text-white">1&nbsp;000</strong> til{" "}
                  <strong className="text-white">20&nbsp;000&nbsp;kr</strong> —
                  vi tilpasser gjerne en pakke som passer dere.
                </p>
                <a
                  href={SPONSOR_MAIL}
                  className="mt-4 inline-block rounded-full bg-coral px-7 py-3.5 text-base font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-coral-dark"
                >
                  Meld interesse →
                </a>
                <p className="mt-3 text-xs text-white/55">
                  Eller send en e-post til{" "}
                  <a href="mailto:post@suil.no" className="underline hover:text-white">
                    post@suil.no
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Arrangør */}
        <div className="mt-12 flex flex-col items-center gap-3 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
            Arrangør
          </p>
          <div className="relative h-14 w-40">
            <Image
              src="/images/sponsorer/suil.png"
              alt="Skudenes UIL"
              fill
              className="object-contain"
            />
          </div>
          <p className="max-w-md text-sm text-gray-500">
            Tusen takk til alle sponsorer og frivillige som gjorde 2026 til et
            rekordår!
          </p>
        </div>
      </div>
    </section>
  );
}
