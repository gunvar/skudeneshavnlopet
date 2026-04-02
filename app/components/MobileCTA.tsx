"use client";

import { useState, useEffect } from "react";

export default function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-white/95 backdrop-blur-md border-t border-gray-200 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xs font-semibold text-ocean-dark truncate">
              Skudeneshavnløpet 2026
            </p>
            <p className="text-[10px] text-gray-500">Lørdag 13. juni</p>
          </div>
          <a
            href="https://signup.eqtiming.com/arrangement/skudeneshavnlopet-2026/g295.55447?event=skudeneshavnlopet"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-coral px-5 py-2.5 text-sm font-bold text-white shadow-lg transition-all active:scale-95"
          >
            Meld deg på!
          </a>
        </div>
      </div>
    </div>
  );
}
