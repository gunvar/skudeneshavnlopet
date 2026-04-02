"use client";

import { useState, useEffect, useRef } from "react";

const TARGET = new Date("2026-06-13T12:00:00+02:00").getTime();

function calcTimeLeft() {
  const diff = TARGET - Date.now();
  if (diff <= 0) return null;
  return {
    dager: Math.floor(diff / (1000 * 60 * 60 * 24)),
    timer: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutter: Math.floor((diff / (1000 * 60)) % 60),
    sekunder: Math.floor((diff / 1000) % 60),
  };
}

function FlipDigit({ value, label }: { value: number; label: string }) {
  const displayVal = String(value).padStart(2, "0");
  const prevRef = useRef(displayVal);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    if (prevRef.current !== displayVal) {
      setFlipping(true);
      const t = setTimeout(() => setFlipping(false), 300);
      prevRef.current = displayVal;
      return () => clearTimeout(t);
    }
  }, [displayVal]);

  return (
    <div className="flex flex-col items-center">
      <div className="relative h-16 w-16 sm:h-20 sm:w-20 perspective-[400px]">
        {/* Static background */}
        <div className="absolute inset-0 rounded-xl bg-white/20 backdrop-blur-sm" />

        {/* Number with flip animation */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${
            flipping ? "animate-flip" : ""
          }`}
        >
          <span
            className="text-2xl font-bold text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {displayVal}
          </span>
        </div>

        {/* Center divider line */}
        <div className="absolute left-1 right-1 top-1/2 h-px bg-white/10" />
      </div>
      <span className="mt-1.5 text-xs font-medium uppercase tracking-wider text-white/70">
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calcTimeLeft());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => setTimeLeft(calcTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return (
      <div className="flex gap-3 sm:gap-5">
        {["Dager", "Timer", "Min", "Sek"].map((label) => (
          <div key={label} className="flex flex-col items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm sm:h-20 sm:w-20">
              <span className="text-2xl font-bold text-white sm:text-3xl">--</span>
            </div>
            <span className="mt-1.5 text-xs font-medium uppercase tracking-wider text-white/70">
              {label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  if (!timeLeft) {
    return (
      <p className="text-xl font-bold text-white">
        Løpet er i gang!
      </p>
    );
  }

  const units = [
    { label: "Dager", value: timeLeft.dager },
    { label: "Timer", value: timeLeft.timer },
    { label: "Min", value: timeLeft.minutter },
    { label: "Sek", value: timeLeft.sekunder },
  ];

  return (
    <div className="flex gap-3 sm:gap-5">
      {units.map((u) => (
        <FlipDigit key={u.label} value={u.value} label={u.label} />
      ))}
    </div>
  );
}
