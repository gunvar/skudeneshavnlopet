"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { href: "#om", label: "Om løpet" },
  { href: "#distanser", label: "Distanser" },
  { href: "#loypekart", label: "Løypekart" },
  { href: "#praktisk", label: "Praktisk" },
  { href: "#galleri", label: "Galleri" },
  { href: "#sponsorer", label: "Sponsorer" },
  { href: "#resultater", label: "Resultater" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // Scroll progress
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);

      // Active section detection
      const sections = NAV_LINKS.map((l) => l.href.slice(1));
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      {/* Scroll progress bar */}
      <div
        className="absolute top-0 left-0 h-[3px] bg-coral transition-[width] duration-100"
        style={{ width: `${progress}%` }}
      />

      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Skudeneshavnløpet"
            width={140}
            height={50}
            className={`h-10 w-auto transition-opacity ${scrolled ? "opacity-100" : "opacity-0 md:opacity-100"}`}
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-coral ${
                scrolled ? "text-ocean-dark" : "text-white"
              } ${activeSection === link.href.slice(1) ? "!text-coral" : ""}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://signup.eqtiming.com/arrangement/skudeneshavnlopet-2026/g295.55447?event=skudeneshavnlopet"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-coral px-5 py-2.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-coral-dark hover:shadow-xl"
          >
            Meld deg på!
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Meny"
        >
          <span
            className={`block h-0.5 w-6 transition-all ${scrolled ? "bg-ocean-dark" : "bg-white"} ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 transition-all ${scrolled ? "bg-ocean-dark" : "bg-white"} ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 transition-all ${scrolled ? "bg-ocean-dark" : "bg-white"} ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="bg-white/95 backdrop-blur-sm shadow-lg md:hidden">
          <div className="flex flex-col items-center gap-4 py-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-base font-medium hover:text-coral ${
                  activeSection === link.href.slice(1) ? "text-coral" : "text-ocean-dark"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://signup.eqtiming.com/arrangement/skudeneshavnlopet-2026/g295.55447?event=skudeneshavnlopet"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-coral px-6 py-3 text-base font-bold text-white shadow-lg"
            >
              Meld deg på!
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
