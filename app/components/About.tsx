import Image from "next/image";

export default function About() {
  const highlights = [
    { number: "3", label: "distanser", desc: "500m · 5km · 10km" },
    { number: "198", label: "deltakere i 2025", desc: "Voksende folkefest!" },
    { number: "4.", label: "gang i 2026", desc: "Arrangert siden 2023" },
    { number: "🏆", label: "Lagkonkurranse", desc: "Vandrepokal på 5km" },
  ];

  return (
    <section id="om" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4">
        <h2
          className="mb-6 text-center text-3xl font-extrabold text-ocean-dark sm:text-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Om løpet
        </h2>

        <p className="mx-auto mb-4 max-w-2xl text-center text-lg leading-relaxed text-gray-700">
          Skudeneshavnløpet er et årlig gateløp gjennom Gamle Skudeneshavn på
          sørspissen av Karmøy — byen lokalbefolkningen kjærlig kaller
          «Skudnes». Er du klar for årets sprekeste folkefest? Enten du jakter
          på ny personlig rekord eller vil nyte den unike atmosfæren sammen med
          familien, er dette løpet for deg!
        </p>
        <p className="mx-auto mb-12 max-w-2xl text-center text-base text-gray-500">
          Vi gjentar suksessen og rigger til for tidenes løpeopplevelse mellom
          hvitmalte trehus og i de sjarmerende gatene i Sommerbyen — en av
          Norges best bevarte trehusbyer, beliggende i Karmøy kommune i Rogaland.
        </p>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="flex flex-col items-center rounded-2xl bg-sand p-6 text-center transition-shadow hover:shadow-lg"
            >
              <span
                className="text-3xl font-extrabold text-ocean sm:text-4xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {h.number}
              </span>
              <span className="mt-1 text-sm font-semibold uppercase tracking-wide text-ocean-dark">
                {h.label}
              </span>
              <span className="mt-1 text-xs text-gray-500">{h.desc}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 text-sm text-gray-400">
          <p>
            Profesjonell tidtaking ved <strong className="text-ocean">EQ Timing</strong> — medalje til alle som fullfører
          </p>
          <a
            href="https://live.eqtiming.com/80315"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-opacity hover:opacity-80"
          >
            <Image
              src="/images/samarbeidspartnere/EQ-Timing-logo.png"
              alt="EQ Timing — klikk for påmelding"
              width={120}
              height={40}
              className="h-9 w-auto"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
