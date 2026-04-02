import Image from "next/image";

export default function CourseMap() {
  return (
    <section id="loypekart" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4">
        <h2
          className="mb-4 text-center text-3xl font-extrabold text-ocean-dark sm:text-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Løypekart
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-gray-600">
          Alle løper 5 km-løypen den første runden. De som løper 10 km får en
          annen løype de siste 5 km. Start og målgang i sentrum ved Torget.
        </p>

        {/* Main course map */}
        <div className="overflow-hidden rounded-2xl bg-sand shadow-lg">
          <div className="relative aspect-video w-full">
            <Image
              src="/images/loypekart/10km.png"
              alt="Løypekart 10 km — viser ruten gjennom Skudeneshavn med høydeprofil"
              fill
              className="object-contain bg-gray-900"
            />
          </div>
          <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-3">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-ocean">
                10 km
              </p>
              <p className="text-sm text-gray-600">
                10,38 km · 142 m stigning · Asfalt & grus
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-ocean">
                5 km
              </p>
              <p className="text-sm text-gray-600">
                Ca. 5 km · Første halvdel av 10 km-løypen
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-ocean">
                Havnasprinten
              </p>
              <p className="text-sm text-gray-600">
                500 m · Flat runde i havneområdet
              </p>
            </div>
          </div>
        </div>

        {/* Smaller maps row */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="overflow-hidden rounded-xl bg-sand shadow">
            <div className="relative aspect-square w-full">
              <Image
                src="/images/loypekart/5-og-10km.jpg"
                alt="Kombinert løypekart for 5 km og 10 km"
                fill
                className="object-contain"
              />
            </div>
            <p className="p-3 text-center text-xs font-medium text-gray-500">
              5 km & 10 km — oversiktskart
            </p>
          </div>
          <div className="overflow-hidden rounded-xl bg-sand shadow">
            <div className="relative aspect-square w-full">
              <Image
                src="/images/loypekart/havnasprinten.jpg"
                alt="Løypekart for Havnasprinten 500m"
                fill
                className="object-contain"
              />
            </div>
            <p className="p-3 text-center text-xs font-medium text-gray-500">
              Havnasprinten — 500 m
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
