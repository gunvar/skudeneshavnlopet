"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Countdown from "./Countdown";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image with parallax */}
      <div
        className="absolute inset-0"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <Image
          src="/images/hero-bg-new.jpg"
          alt="Startfeltet ved Skudeneshavnløpet — løpere klare ved CRAFT-portalen i Gamle Skudeneshavn"
          fill
          className="object-cover scale-110"
          priority
        />
      </div>
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
          href="https://signup.eqtiming.com/arrangement/skudeneshavnlopet-2026/g295.55447?event=skudeneshavnlopet"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative rounded-full bg-coral px-8 py-4 text-lg font-bold text-white shadow-2xl transition-all hover:scale-105 hover:bg-coral-dark sm:px-10 sm:text-xl"
        >
          Meld deg på!
        </a>

        {/* Social proof */}
        <div className="mt-6 flex flex-col items-center gap-2">
          <div className="flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
            <div className="flex -space-x-2">
              <div className="h-6 w-6 rounded-full bg-coral/80 ring-2 ring-white/20" />
              <div className="h-6 w-6 rounded-full bg-ocean-light/80 ring-2 ring-white/20" />
              <div className="h-6 w-6 rounded-full bg-coral/60 ring-2 ring-white/20" />
            </div>
            <span className="text-sm font-medium text-white/80">
              Kun 300 plasser — 198 fullførte i 2025
            </span>
          </div>
          <p className="text-xs text-white/50">
            500m &middot; 5km &middot; 10km — sikre deg plass!
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="mt-10 animate-bounce">
          <svg
            className="h-8 w-8 text-white/40"
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
