"use client";

import { useState, useEffect } from "react";

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
            <span className="mt-1.5 text-xs font-medium uppercase tracking-wider text-white/80">
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
        <div key={u.label} className="flex flex-col items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm sm:h-20 sm:w-20">
            <span className="text-2xl font-bold text-white sm:text-3xl">
              {String(u.value).padStart(2, "0")}
            </span>
          </div>
          <span className="mt-1.5 text-xs font-medium uppercase tracking-wider text-white/80">
            {u.label}
          </span>
        </div>
      ))}
    </div>
  );
}
