"use client";

import { useState, useEffect } from "react";

const RACE_DATE = "2026-06-13";

const schedule = [
  { time: "10:00", end: "11:00", event: "Registrering og startnummer", icon: "📋" },
  { time: "11:00", end: "12:00", event: "Havnasprinten (500m)", icon: "🏃" },
  { time: "12:00", end: "12:15", event: "10 km", icon: "🏃‍♂️" },
  { time: "12:15", end: "13:15", event: "5 km", icon: "🏃‍♀️" },
  { time: "13:15", end: "14:00", event: "Premieutdeling", icon: "🏅" },
];

const quickLinks = [
  {
    label: "Start/Mål",
    sub: "Torget",
    url: "https://maps.app.goo.gl/S37xibKcZ7KHZtRP7",
    icon: "📍",
  },
  {
    label: "Parkering",
    sub: "3 steder",
    url: "https://maps.app.goo.gl/S37xibKcZ7KHZtRP7",
    icon: "🅿️",
  },
  {
    label: "Toalett",
    sub: "Bade-Olena",
    url: "https://maps.app.goo.gl/6xQVjcgDmsmjasNf6",
    icon: "🚻",
  },
  {
    label: "Resultater",
    sub: "Live",
    url: "https://live.eqtiming.com/80315",
    icon: "⏱️",
  },
];

function getCurrentTimeStr() {
  const now = new Date();
  return `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
}

function getActiveEvent(timeStr: string) {
  for (let i = schedule.length - 1; i >= 0; i--) {
    if (timeStr >= schedule[i].time) {
      if (timeStr < schedule[i].end) return { index: i, status: "active" as const };
      if (i === schedule.length - 1) return { index: i, status: "done" as const };
    }
  }
  return { index: 0, status: "upcoming" as const };
}

export default function RaceDayBanner() {
  const [isRaceDay, setIsRaceDay] = useState(false);
  const [currentTime, setCurrentTime] = useState("00:00");
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const now = new Date();
    const today = now.toISOString().slice(0, 10);
    // Aktiver på løpsdagen fra kl. 08:00 til 15:00
    const hour = now.getHours();
    setIsRaceDay(today === RACE_DATE && hour >= 8 && hour < 15);
    setCurrentTime(getCurrentTimeStr());

    const timer = setInterval(() => {
      setCurrentTime(getCurrentTimeStr());
    }, 30000);
    return () => clearInterval(timer);
  }, []);

  if (!isRaceDay || dismissed) return null;

  const { index: activeIndex, status } = getActiveEvent(currentTime);

  return (
    <div className="bg-gradient-to-r from-coral to-coral-dark text-white">
      {/* Dismiss */}
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-3 top-3 text-white/60 hover:text-white"
        aria-label="Lukk"
      >
        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      <div className="mx-auto max-w-5xl px-4 py-6">
        {/* Header */}
        <div className="mb-4 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-white/70">
            Løpsdag — 13. juni 2026
          </p>
          <h2
            className="mt-1 text-xl font-extrabold sm:text-2xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {status === "done"
              ? "Takk for i dag! 🎉"
              : status === "active"
                ? `${schedule[activeIndex].icon} ${schedule[activeIndex].event} pågår nå!`
                : `Neste: ${schedule[activeIndex].event} kl. ${schedule[activeIndex].time}`}
          </h2>
        </div>

        {/* Mini timeline */}
        <div className="mb-5 flex justify-center gap-1 overflow-x-auto sm:gap-2">
          {schedule.map((item, i) => (
            <div
              key={item.time}
              className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium whitespace-nowrap ${
                i === activeIndex && status === "active"
                  ? "bg-white text-coral animate-pulse"
                  : i < activeIndex || (i === activeIndex && status === "done")
                    ? "bg-white/20 text-white/60 line-through"
                    : "bg-white/10 text-white/80"
              }`}
            >
              <span>{item.time}</span>
              <span className="hidden sm:inline">{item.event}</span>
            </div>
          ))}
        </div>

        {/* Quick links */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {quickLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 rounded-xl bg-white/15 px-4 py-3 backdrop-blur-sm transition-all hover:bg-white/25"
            >
              <span className="text-xl">{link.icon}</span>
              <div>
                <p className="text-sm font-bold">{link.label}</p>
                <p className="text-[10px] text-white/70">{link.sub}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
