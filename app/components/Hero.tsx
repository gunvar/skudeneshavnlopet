import Image from "next/image";
import Countdown from "./Countdown";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-bg-new.jpg"
        alt="Startfeltet ved Skudeneshavnløpet — løpere klare ved CRAFT-portalen i Gamle Skudeneshavn"
        fill
        className="object-cover"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-dark/70 via-ocean/50 to-ocean-dark/80" />

      <div className="relative z-10 flex flex-col items-center px-4 text-center">
        <Image
          src="/images/logo.png"
          alt="Skudeneshavnløpet logo"
          width={200}
          height={80}
          className="mb-6 h-16 w-auto brightness-0 invert sm:h-20"
        />

        <h1
          className="mb-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-7xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          SKUDENESHAVNLØPET 2026
        </h1>

        <p className="mb-1 text-lg font-semibold text-white/90 sm:text-xl">
          Lørdag 13. juni
        </p>

        <p className="mb-8 text-base italic text-white/70 sm:text-lg">
          Opplev sommerbyen i løpesko
        </p>

        <div className="mb-10">
          <Countdown />
        </div>

        <a
          href="https://live.eqtiming.com/80315"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-coral px-8 py-4 text-lg font-bold text-white shadow-2xl transition-all hover:scale-105 hover:bg-coral-dark sm:px-10 sm:text-xl"
        >
          Meld deg på!
        </a>

        {/* Social proof */}
        <p className="mt-4 text-sm text-white/60">
          198 fullførte i 2025 — bli med i 2026!
        </p>

        {/* Scroll indicator */}
        <div className="mt-12 animate-bounce">
          <svg
            className="h-8 w-8 text-white/50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
