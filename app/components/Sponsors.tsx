const sponsors = [
  { name: "Skudenes & Aakra Sparebank", tier: "hovedsponsor" },
  { name: "Brødr. Olsen", tier: "sponsor" },
  { name: "Solstad Offshore", tier: "sponsor" },
  { name: "Skudenes UIL", tier: "arrangør" },
];

export default function Sponsors() {
  return (
    <section id="sponsorer" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4">
        <h2
          className="mb-4 text-center text-3xl font-extrabold text-ocean-dark sm:text-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Våre sponsorer
        </h2>
        <p className="mx-auto mb-10 max-w-lg text-center text-gray-600">
          Takk til våre sponsorer som gjør Skudeneshavnløpet mulig!
        </p>

        {/* Sponsor grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {sponsors.map((s) => (
            <div
              key={s.name}
              className="flex flex-col items-center justify-center rounded-xl border border-gray-100 bg-sand/50 p-6 text-center transition-shadow hover:shadow-md"
            >
              <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-ocean/10">
                <svg
                  className="h-8 w-8 text-ocean"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <p className="text-sm font-semibold text-ocean-dark">{s.name}</p>
              <p className="mt-0.5 text-xs capitalize text-gray-400">{s.tier}</p>
            </div>
          ))}
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
