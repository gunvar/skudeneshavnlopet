"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  {
    src: "/images/galleri/2026-05.jpg",
    alt: "Startfeltet på 5 km samlet ved Torget — folkefest i Skudeneshavn 2026",
    span: "col-span-2 row-span-2",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/images/galleri/2026-02.jpg",
    alt: "Robin Nilsen Espejo løper inn til seier på 10 km ved CRAFT-portalen",
    span: "",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/images/galleri/2026-03.jpg",
    alt: "To unge deltakere spurter mot mål forbi bronsestatuene",
    span: "",
    aspect: "aspect-square",
  },
  {
    src: "/images/galleri/2026-04.jpg",
    alt: "Blid løper vinker til fotografen underveis i løypa",
    span: "",
    aspect: "aspect-square",
  },
  {
    src: "/images/galleri/2026-07.jpg",
    alt: "Store og små løper sammen gjennom gatene — folkefest for alle aldre",
    span: "col-span-2",
    aspect: "aspect-[2/1]",
  },
  {
    src: "/images/galleri/2026-01.jpg",
    alt: "Løpere i full fart mellom de hvitmalte trehusene i Gamle Skudeneshavn",
    span: "",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/images/galleri/2026-06.jpg",
    alt: "Jubel og medaljer på premiepallen ved havnen",
    span: "",
    aspect: "aspect-square",
  },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="galleri" className="bg-sand py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <h2
          className="mb-4 text-center text-3xl font-extrabold text-ocean-dark sm:text-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Stemningsbilder
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-center text-gray-600">
          Glimt fra Skudeneshavnløpet 2026 — folkefest mellom hvitmalte trehus.
          Flere bilder finner du på Facebook-siden vår.
        </p>

        {/* Masonry-inspired grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:gap-4">
          {images.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setLightboxIndex(i)}
              className={`group relative overflow-hidden rounded-xl ${img.span}`}
            >
              <div className={`relative w-full ${img.aspect}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes={img.span.includes("col-span-2") ? "(max-width: 640px) 100vw, 50vw" : "(max-width: 640px) 50vw, 25vw"}
                />
              </div>
              <div className="absolute inset-0 bg-ocean-dark/0 transition-colors duration-300 group-hover:bg-ocean-dark/20" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30"
            aria-label="Lukk"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
            }}
            className="absolute left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30"
            aria-label="Forrige bilde"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div
            className="relative max-h-[85vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              width={1200}
              height={800}
              className="max-h-[85vh] w-auto rounded-lg object-contain"
            />
            <p className="mt-3 text-center text-sm text-white/70">
              {images[lightboxIndex].alt}
            </p>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex + 1) % images.length);
            }}
            className="absolute right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30"
            aria-label="Neste bilde"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
