const results = [
  { year: "2025", url: "https://live.eqtiming.com/77221#result", participants: "198 deltakere" },
  { year: "2024", url: "https://live.eqtiming.com/70856#result", participants: "Andre arrangement" },
  { year: "2023", url: "https://live.eqtiming.com/65870#result", participants: "Første arrangement" },
];

export default function Results() {
  return (
    <section id="resultater" className="bg-sand py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4">
        <h2
          className="mb-8 text-center text-3xl font-extrabold text-ocean-dark sm:text-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Resultater
        </h2>
        <p className="mb-8 text-center text-gray-600">
          Tidtaking ved EQ Timing — følg løpet live på løpsdagen, og se resultater fra tidligere år.
        </p>

        {/* Live-resultater 2026 */}
        <a
          href="https://live.eqtiming.com/80315"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-3 flex items-center justify-between rounded-xl bg-ocean p-5 text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-ocean-dark hover:shadow-lg"
        >
          <div>
            <span className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-coral" />
              </span>
              <span
                className="text-xl font-extrabold"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                2026
              </span>
              <span className="rounded-full bg-coral px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide">
                Live
              </span>
            </span>
            <span className="mt-1 block text-sm text-white/80">
              Følg resultatene direkte på løpsdagen — 13. juni
            </span>
          </div>
          <svg className="h-5 w-5 shrink-0 text-white/80" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>

        <div className="space-y-3">
          {results.map((r) => (
            <a
              key={r.year}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl bg-white p-5 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              <div>
                <span
                  className="text-xl font-extrabold text-ocean-dark"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {r.year}
                </span>
                <span className="ml-3 text-sm text-gray-500">{r.participants}</span>
              </div>
              <svg className="h-5 w-5 text-ocean" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
