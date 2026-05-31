import Image from "next/image";

const REGISTRATION_URL =
  "https://signup.eqtiming.com/arrangement/skudeneshavnlopet-2026/g295.55447?event=skudeneshavnlopet";

const images = [
  {
    src: "/images/kampanje/still-lag-5km.png",
    alt: "Still lag på 5 km — ta med kollegaer, venner eller familien. Vinnerlaget får vandrepokal.",
  },
  {
    src: "/images/kampanje/havn-burgermeny.png",
    alt: "Etter målgang? Samles vi på HAVN — kupong med burgermeny ved målgang for deltakere i Skudeneshavnløpet.",
  },
];

export default function Kampanje() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        {/* Ta med laget ditt */}
        <div className="mx-auto mb-12 max-w-3xl overflow-hidden rounded-2xl bg-gradient-to-r from-ocean to-ocean-light p-6 text-center text-white shadow-lg sm:p-8">
          <h2
            className="mb-3 text-2xl font-extrabold sm:text-3xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Ta med laget ditt
          </h2>
          <p className="mx-auto max-w-xl text-white/90">
            Still med kollegaer, venner eller familie på 5 km. Minimum 3 personer
            per lag.
          </p>
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full bg-coral px-7 py-3 text-sm font-bold text-white shadow-lg transition-all hover:bg-coral-dark hover:shadow-xl"
          >
            Meld på laget!
          </a>
        </div>

        {/* Kampanjebilder */}
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {images.map((img) => (
            <a
              key={img.src}
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-2xl shadow-md transition-all hover:scale-[1.02] hover:shadow-xl"
              aria-label={img.alt}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={1080}
                height={1080}
                className="h-auto w-full"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
