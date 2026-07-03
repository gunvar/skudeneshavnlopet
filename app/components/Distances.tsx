import Image from "next/image";

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
          className="mb-4 text-center text-3xl font-extrabold text-ocean-dark sm:text-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Distanser
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
          Starttider og priser under er fra 2026 — endelig program for 2027
          kommer sammen med påmeldingen i september.
        </p>

        <div className="grid gap-6 sm:grid-cols-3">
          {distances.map((d) => (
            <div
              key={d.name}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-shadow hover:shadow-xl"
            >
              <div className={`${d.color} relative px-6 py-5 text-white`}>
                {d.cta && (
                  <span className="absolute top-3 right-3 rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide backdrop-blur-sm">
                    Maks 300
                  </span>
                )}
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
                  <p className="mt-5 block rounded-full bg-sand px-6 py-3 text-center text-sm font-bold text-ocean">
                    Påmelding åpner i september
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Lagkonkurranse — Vandrepokal */}
        <div className="relative mt-10 overflow-hidden rounded-[1.75rem] border border-amber-300/25 bg-gradient-to-br from-[#103149] via-[#0a2233] to-[#050f18] shadow-2xl">
          {/* Ambient gold glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full opacity-50 blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(212,175,55,0.35), transparent 70%)" }}
          />
          {/* Subtle top hairline */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-200/60 to-transparent"
          />

          <div className="relative grid items-center gap-6 p-8 text-center sm:grid-cols-[minmax(0,0.9fr)_1.4fr] sm:gap-10 sm:p-12 sm:text-left">
            {/* Trophy in spotlight */}
            <div className="relative mx-auto flex h-56 w-full items-center justify-center sm:h-80">
              <div
                aria-hidden
                className="absolute h-44 w-44 rounded-full blur-2xl sm:h-60 sm:w-60"
                style={{ background: "radial-gradient(circle, rgba(245,215,122,0.45), transparent 65%)" }}
              />
              <Image
                src="/images/vandrepokal-cutout.png"
                alt="Vandrepokalen som vinnerlaget på 5 km får — en eksklusiv sølvpokal"
                width={649}
                height={1413}
                className="relative h-full w-auto object-contain drop-shadow-[0_12px_30px_rgba(0,0,0,0.6)]"
              />
            </div>

            {/* Copy */}
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-amber-300">
                Lagkonkurranse · Tradisjon siden 2024
              </p>
              <h3
                className="text-3xl font-extrabold leading-[1.1] text-white sm:text-4xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Vinn{" "}
                <span className="bg-gradient-to-r from-amber-200 via-amber-300 to-amber-500 bg-clip-text text-transparent">
                  vandrepokalen
                </span>{" "}
                på 5 km
              </h3>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/75 sm:mx-0 sm:text-base">
                Den gjeveste premien i løpet. Still bedriftslaget, vennegjengen
                eller familien — de 3 beste tidene teller, og vinnerlaget får
                navnet sitt gravert på pokalen og tar den med hjem til neste år.
                Solstad Running Team tok pokalen i 2026 — hvem tar den i 2027?
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-2 sm:justify-start">
                {["Minimum 3 per lag", "Beste 3 tider teller", "Gravert vinnernavn"].map(
                  (chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-amber-200/20 bg-white/5 px-4 py-1.5 text-xs font-semibold text-amber-100/90 backdrop-blur-sm"
                    >
                      {chip}
                    </span>
                  ),
                )}
              </div>

              <p className="mt-7 inline-block rounded-full border border-amber-200/30 bg-white/10 px-8 py-3.5 text-base font-bold text-amber-100 backdrop-blur-sm">
                Lagpåmeldingen åpner i september
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
