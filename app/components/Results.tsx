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
          Se resultater fra tidligere år — tidtaking og resultater ved EQ Timing og sportsidioten.no.
        </p>

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
