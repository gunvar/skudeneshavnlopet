import Image from "next/image";

const prizes = [
  { place: "1. plass", amount: "1 500 kr", color: "from-yellow-400 to-amber-500", icon: "🥇" },
  { place: "2. plass", amount: "1 000 kr", color: "from-gray-300 to-gray-400", icon: "🥈" },
  { place: "3. plass", amount: "500 kr", color: "from-orange-400 to-orange-500", icon: "🥉" },
];

export default function Prizes() {
  return (
    <section className="bg-sand py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4">
        <h2
          className="mb-4 text-center text-3xl font-extrabold text-ocean-dark sm:text-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Premiering
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-gray-600">
          Alle som fullfører 5 km eller 10 km får medalje! I tillegg premieres
          topp 3 damer og herrer i begge distanser.
        </p>

        {/* Medal highlight */}
        <div className="mb-12 flex justify-center">
          <div className="relative h-40 w-40 sm:h-48 sm:w-48">
            <Image
              src="/images/galleri/medalje-close.jpg"
              alt="Skudeneshavnløpet-medaljen"
              fill
              className="rounded-full object-cover object-[center_70%] shadow-xl ring-4 ring-white"
            />
          </div>
        </div>

        <p
          className="mb-10 text-center text-lg font-semibold text-ocean sm:text-xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Medalje til alle som fullfører!
        </p>

        {/* Prize cards */}
        <div className="mx-auto grid max-w-2xl gap-4 sm:grid-cols-3">
          {prizes.map((p) => (
            <div
              key={p.place}
              className="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-md transition-shadow hover:shadow-lg"
            >
              <span className="mb-2 text-4xl">{p.icon}</span>
              <p className="text-sm font-bold uppercase tracking-wide text-ocean-dark">
                {p.place}
              </p>
              <p className="mt-1 text-xl font-extrabold text-ocean" style={{ fontFamily: "var(--font-heading)" }}>
                {p.amount}
              </p>
              <p className="mt-1 text-xs text-gray-400">gavekort</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          Premieutdeling på Bade-Olena kl. 13:15 — damer og herrer i 5 km og 10 km
        </p>
      </div>
    </section>
  );
}
