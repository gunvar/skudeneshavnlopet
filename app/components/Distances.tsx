import Image from "next/image";

const REGISTRATION_URL = "https://signup.eqtiming.com/arrangement/skudeneshavnlopet-2026/g295.55447?event=skudeneshavnlopet";

const distances = [
  {
    name: "Havnasprinten",
    distance: "500 m",
    time: "Kl. 11:00",
    price: "Gratis",
    desc: "Barnas og familiens store høydepunkt! For alle 0–100 år.",
    note: "Ingen påmelding nødvendig",
    color: "bg-ocean-light",
    cta: false,
  },
  {
    name: "10 km",
    distance: "10 km",
    time: "Kl. 12:00",
    price: "350 kr",
    desc: "Asfalt og grus. Høydepunkter: Søragadå, Vikesjøen, Almanamyrvannet, Planteskolen, bystranda i Vigane.",
    note: null,
    color: "bg-ocean-dark",
    cta: true,
  },
  {
    name: "5 km",
    distance: "5 km",
    time: "Kl. 12:15",
    price: "350 kr",
    desc: "Asfalt og grus. Høydepunkter: Søragadå, Vikesjøen, Almanamyrvannet.",
    note: null,
    color: "bg-ocean",
    cta: true,
  },
];

export default function Distances() {
  return (
    <section id="distanser" className="bg-sand py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <h2
          className="mb-12 text-center text-3xl font-extrabold text-ocean-dark sm:text-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Distanser
        </h2>

        <div className="grid gap-6 sm:grid-cols-3">
          {distances.map((d) => (
            <div
              key={d.name}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-shadow hover:shadow-xl"
            >
              <div className={`${d.color} px-6 py-5 text-white`}>
                <h3
                  className="text-2xl font-extrabold"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {d.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-white/80">
                  {d.distance} · {d.time}
                </p>
              </div>

              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <p className="mb-3 text-sm leading-relaxed text-gray-600">
                    {d.desc}
                  </p>
                  <p className="text-2xl font-bold text-ocean-dark">
                    {d.price}
                  </p>
                  {d.note && (
                    <p className="mt-1 text-xs font-medium text-gray-400">
                      {d.note}
                    </p>
                  )}
                </div>

                {d.cta && (
                  <a
                    href={REGISTRATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 block rounded-full bg-coral px-6 py-3 text-center text-sm font-bold text-white transition-all hover:bg-coral-dark hover:shadow-lg"
                  >
                    Meld deg på
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Lagkonkurranse highlight */}
        <div className="mt-8 overflow-hidden rounded-2xl bg-gradient-to-r from-ocean to-ocean-light p-6 text-white shadow-lg sm:p-8">
          <div className="flex flex-col items-center text-center sm:flex-row sm:text-left">
            <div className="relative mb-4 h-20 w-16 shrink-0 sm:mb-0 sm:mr-6">
              <Image
                src="/images/vandrepokal.jpg"
                alt="Vandrepokalen for lagkonkurransen"
                fill
                className="object-contain drop-shadow-lg"
              />
            </div>
            <div className="flex-1">
              <h3
                className="mb-2 text-xl font-extrabold sm:text-2xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Lagkonkurranse — Vandrepokal p&aring; 5 km
              </h3>
              <p className="text-sm text-white/85">
                Stil lag på 5 km! Minimum 3 deltakere per lag — de 3 beste
                tidene teller. Perfekt for bedrifter og vennegjenger!
              </p>
            </div>
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 shrink-0 rounded-full bg-coral px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:bg-coral-dark sm:ml-6 sm:mt-0"
            >
              Meld på laget!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
