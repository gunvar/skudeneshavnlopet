import Image from "next/image";

const REGISTRATION_URL =
  "https://signup.eqtiming.com/arrangement/skudeneshavnlopet-2026/g295.55447?event=skudeneshavnlopet";

export default function Kampanje() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 sm:gap-8">
        {/* Banner 1 — Lagkonkurranse */}
        <div className="relative overflow-hidden rounded-3xl shadow-xl">
          <Image
            src="/images/galleri/premiering.jpg"
            alt="Jublende deltakere på premiepallen ved Skudeneshavnløpet"
            fill
            sizes="(max-width: 768px) 100vw, 1024px"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark/95 via-ocean-dark/70 to-ocean-dark/30" />

          <div className="relative flex min-h-[24rem] flex-col justify-end p-7 text-white sm:min-h-[26rem] sm:p-10">
            <h2
              className="text-3xl font-extrabold leading-tight sm:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Still lag på 5 km
            </h2>
            <p className="mt-3 max-w-md text-base text-white/85 sm:text-lg">
              Ta med kollegaer, venner eller familien. Minimum 3 personer per
              lag — de 3 beste tidene teller, og vinnerlaget får vandrepokal.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["5 km", "3 per lag", "Vandrepokal"].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold backdrop-blur-sm ring-1 ring-white/20"
                >
                  {chip}
                </span>
              ))}
            </div>

            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block self-start rounded-full bg-coral px-7 py-3.5 text-base font-bold text-white shadow-lg transition-all hover:bg-coral-dark hover:shadow-xl active:scale-95"
            >
              Meld på laget!
            </a>
          </div>
        </div>

        {/* Banner 2 — HAVN burgermeny */}
        <a
          href="https://havnhotell.no/"
          target="_blank"
          rel="noopener noreferrer"
          className="group block overflow-hidden rounded-3xl bg-ocean-dark shadow-xl transition-all hover:shadow-2xl"
          aria-label="HAVN Hotell & Restaurant — åpne nettsiden i ny fane"
        >
          <div className="grid items-center gap-8 p-7 sm:grid-cols-[1.4fr_1fr] sm:p-10">
            <div className="text-white">
              <Image
                src="/images/partnere/havn-liggende-negativ.svg"
                alt="HAVN Hotell & Restaurant"
                width={643}
                height={190}
                unoptimized
                className="mb-5 h-12 w-auto sm:h-14"
              />
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-coral">
                Etter målgang?
              </p>
              <h2
                className="text-3xl font-extrabold leading-tight sm:text-4xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Samles vi på HAVN
              </h2>
              <p className="mt-3 max-w-md text-base text-white/80 sm:text-lg">
                Som deltaker får du kupong med burgermeny ved målgang. Perfekt
                for å feire innsatsen med venner, kollegaer og andre løpere.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white/70 transition-colors group-hover:text-white">
                Besøk havnhotell.no
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                </svg>
              </span>
            </div>

            {/* Løperkupong */}
            <div className="rounded-2xl bg-white p-6 text-center shadow-lg">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-coral">
                Løperkupong
              </p>
              <p
                className="mt-2 text-2xl font-extrabold text-ocean-dark"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Burgermeny
              </p>
              <p
                className="text-4xl font-extrabold text-ocean-dark"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                195 kr
              </p>
              <div className="my-4 border-t border-dashed border-gray-300" />
              <p className="text-xs leading-relaxed text-gray-500">
                Gyldig 13. juni 2026 på HAVN Hotell &amp; Restaurant
                <br />
                Kun for deltakere i Skudeneshavnløpet
              </p>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
