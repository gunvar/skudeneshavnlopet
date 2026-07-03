"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const FACEBOOK_URL = "https://www.facebook.com/share/17xXiKoLHn/";

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
          className="mb-2 text-[clamp(1.45rem,6.6vw,2rem)] font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-7xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          SKUDENESHAVNLØPET 2027
        </h1>

        <p className="mb-1 text-lg font-semibold text-white/90 sm:text-xl">
          Juni 2027 · Skudeneshavn, Karmøy
        </p>

        <p className="mb-8 text-base italic text-white/70 sm:text-lg">
          Opplev sommerbyen i løpesko
        </p>

        {/* Annonsering */}
        <div className="mb-10 flex items-center gap-3 rounded-2xl bg-white/15 px-6 py-4 backdrop-blur-sm ring-1 ring-white/20">
          <span className="text-2xl" aria-hidden="true">
            📅
          </span>
          <p className="text-left text-sm font-semibold text-white sm:text-base">
            Dato annonseres og påmeldingen åpner i september
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#resultater-2026"
            className="group relative rounded-full bg-coral px-8 py-4 text-lg font-bold text-white shadow-2xl transition-all hover:scale-105 hover:bg-coral-dark sm:px-10 sm:text-xl"
          >
            Se resultatene fra 2026
          </a>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white/15 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm ring-1 ring-white/30 transition-all hover:bg-white/25"
          >
            Følg oss på Facebook
          </a>
        </div>

        {/* Social proof */}
        <div className="mt-6 flex flex-col items-center gap-2">
          <div className="flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
            <div className="flex -space-x-2">
              {[
                { src: "/images/galleri/2026-04.jpg", pos: "object-center" },
                { src: "/images/galleri/2026-03.jpg", pos: "object-center" },
                { src: "/images/galleri/2026-06.jpg", pos: "object-center" },
              ].map((a) => (
                <span
                  key={a.src}
                  className="relative h-7 w-7 overflow-hidden rounded-full ring-2 ring-white/40"
                >
                  <Image
                    src={a.src}
                    alt=""
                    fill
                    sizes="28px"
                    className={`object-cover ${a.pos}`}
                  />
                </span>
              ))}
            </div>
            <span className="text-sm font-medium text-white/90">
              262 deltakere i 2026 — takk for i år!
            </span>
          </div>
          <p className="text-xs text-white/50">
            500m &middot; 5km &middot; 10km — folkefesten fortsetter i 2027
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
