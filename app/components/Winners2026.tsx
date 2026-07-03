import Image from "next/image";

const RESULTS_URL = "https://live.eqtiming.com/80315#result";

const categories = [
  {
    distance: "10 km",
    gender: "Menn",
    badge: "bg-ocean/10 text-ocean",
    results: [
      { name: "Robin Nilsen Espejo", time: "38:14" },
      { name: "Otto Dybdahl", time: "38:21" },
      { name: "Erlend Osland Kjærgård", time: "38:49" },
    ],
  },
  {
    distance: "10 km",
    gender: "Kvinner",
    badge: "bg-coral/10 text-coral",
    results: [
      { name: "Annette Velde Sande", time: "43:42" },
      { name: "Martine Holstad Lyng", time: "46:13" },
      { name: "Vivian Kyte", time: "46:45" },
    ],
  },
  {
    distance: "5 km",
    gender: "Menn",
    badge: "bg-ocean/10 text-ocean",
    results: [
      { name: "Kristoffer Nordhus", time: "16:43" },
      { name: "Marcus Conesa", time: "17:16" },
      { name: "Sjur Ferkingstad", time: "17:23" },
    ],
  },
  {
    distance: "5 km",
    gender: "Kvinner",
    badge: "bg-coral/10 text-coral",
    results: [
      { name: "Ida T Bjørhovde", time: "21:41" },
      { name: "Bodil Hjellvik Askeland", time: "21:43" },
      { name: "Michelle Gjerde", time: "22:23" },
    ],
  },
];

const rankColors = ["bg-coral", "bg-ocean", "bg-gray-400"];

export default function Winners2026() {
  return (
    <section id="resultater-2026" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4">
        <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.3em] text-coral">
          Takk for i år!
        </p>
        <h2
          className="mb-4 text-center text-3xl font-extrabold text-ocean-dark sm:text-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Resultater 2026 — topp 3
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-gray-600">
          Tusen takk til alle deltakere, heiagjeng og frivillige for en
          strålende folkefest mellom de hvitmalte trehusene 13. juni 2026!
        </p>

        {/* Nøkkeltall */}
        <div className="mx-auto mb-12 grid max-w-xl grid-cols-2 gap-4">
          <div className="rounded-2xl bg-sand p-6 text-center">
            <span
              className="block text-4xl font-extrabold text-ocean"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              262
            </span>
            <span className="mt-1 block text-xs font-semibold uppercase tracking-wide text-ocean-dark">
              påmeldte deltakere
            </span>
          </div>
          <div className="rounded-2xl bg-sand p-6 text-center">
            <span
              className="block text-4xl font-extrabold text-coral"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              +32&nbsp;%
            </span>
            <span className="mt-1 block text-xs font-semibold uppercase tracking-wide text-ocean-dark">
              vekst fra 2025
            </span>
          </div>
        </div>

        {/* Vinner av lagkonkurransen */}
        <div className="mb-12 overflow-hidden rounded-3xl bg-ocean-dark shadow-xl">
          <div className="grid sm:grid-cols-2">
            <div className="relative min-h-[16rem] sm:min-h-full">
              <Image
                src="/images/galleri/2026-solstad.jpg"
                alt="Solstad Running Team på premiepallen med vandrepokalen ved havnen i Skudeneshavn"
                fill
                sizes="(max-width: 640px) 100vw, 512px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-7 text-white sm:p-10">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-amber-300">
                🏆 Vinner av lagkonkurransen
              </p>
              <h3
                className="text-2xl font-extrabold sm:text-3xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Solstad Running Team
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">
                Tok hjem vandrepokalen på 5 km — gratulerer! Pokalen skal
                forsvares i 2027, så begynn gjerne å samle laget allerede nå.
              </p>
            </div>
          </div>
        </div>

        {/* Topp 3 per distanse og kjønn */}
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          {categories.map((cat) => (
            <div
              key={`${cat.distance}-${cat.gender}`}
              className="rounded-2xl bg-sand p-6 shadow-sm"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3
                  className="text-xl font-extrabold text-ocean-dark"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {cat.distance}
                </h3>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${cat.badge}`}
                >
                  {cat.gender}
                </span>
              </div>
              <ol className="space-y-3">
                {cat.results.map((r, i) => (
                  <li key={r.name} className="flex items-center gap-3">
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${rankColors[i]}`}
                    >
                      {i + 1}
                    </span>
                    <span className="flex-1 truncate text-sm font-medium text-gray-800">
                      {r.name}
                    </span>
                    <span
                      className="text-sm font-bold tabular-nums text-ocean-dark"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {r.time}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          Komplette resultater for alle deltakere finner du hos{" "}
          <a
            href={RESULTS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-ocean hover:text-coral hover:underline"
          >
            EQ Timing →
          </a>
        </p>
      </div>
    </section>
  );
}
