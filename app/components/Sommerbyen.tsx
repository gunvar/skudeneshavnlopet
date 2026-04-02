import Image from "next/image";

export default function Sommerbyen() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* Background image */}
      <Image
        src="/images/sommerbyen.jpg"
        alt="Oversiktsbilde av Gamle Skudeneshavn med hvite hus og røde tak"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-ocean-dark/60" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <p
          className="text-xl leading-relaxed text-white/90 italic sm:text-2xl md:text-3xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          &ldquo;Opplev magien ved å løpe gjennom de smale gatene mellom
          hvitmalte trehus, med sjøluft i nesen og heiarop fra verandaene.&rdquo;
        </p>
        <div className="mt-8">
          <a
            href="https://www.visitskudeneshavn.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/25"
          >
            Oppdag Sommerbyen Skudeneshavn
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
