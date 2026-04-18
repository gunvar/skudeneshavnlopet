"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import course10km from "../data/course-10km.json";
import course5km from "../data/course-5km.json";
import { stops, type Stop } from "../data/stops";

type CourseId = "10km" | "5km" | "havnasprinten";

type CourseData = {
  label: string;
  totalDistanceKm: number;
  coordinates: [number, number][];
  elevationProfile: { dist: number; ele: number }[];
  bounds: [[number, number], [number, number]];
};

const courses: Record<"10km" | "5km", CourseData> = {
  "10km": course10km as CourseData,
  "5km": course5km as CourseData,
};

function findCoordinateAtDistance(
  course: CourseData,
  distanceMeters: number,
): [number, number] {
  if (distanceMeters <= 0) return course.coordinates[0];
  const idx = course.elevationProfile.findIndex((p) => p.dist >= distanceMeters);
  if (idx === -1) return course.coordinates[course.coordinates.length - 1];
  return course.coordinates[idx];
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export default function CourseMap() {
  const [activeTab, setActiveTab] = useState<CourseId>("10km");

  return (
    <section id="loypekart" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4">
        <h2
          className="mb-4 text-center text-3xl font-extrabold text-ocean-dark sm:text-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Løypekart
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-center text-gray-600">
          Start og målgang i sentrum ved Torget. Velg distanse for å se løypen.
        </p>

        <div className="mb-6 flex justify-center">
          <div className="inline-flex rounded-full bg-sand p-1">
            {([
              { id: "10km", label: "10 km" },
              { id: "5km", label: "5 km" },
              { id: "havnasprinten", label: "Havnasprinten" },
            ] as const).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                  activeTab === tab.id
                    ? "bg-ocean text-white shadow-md"
                    : "text-gray-600 hover:text-ocean-dark"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {activeTab === "havnasprinten" ? (
          <HavnasprintenView />
        ) : (
          <InteractiveMap
            key={activeTab}
            courseId={activeTab}
            course={courses[activeTab]}
          />
        )}
      </div>
    </section>
  );
}

function HavnasprintenView() {
  return (
    <div className="overflow-hidden rounded-2xl bg-sand shadow-lg">
      <div className="relative aspect-video w-full">
        <Image
          src="/images/loypekart/havnasprinten.jpg"
          alt="Løypekart for Havnasprinten 500m"
          fill
          className="object-contain bg-gray-900"
        />
      </div>
      <div className="p-6">
        <p className="mb-1 text-xs font-bold uppercase tracking-widest text-ocean">
          Havnasprinten
        </p>
        <p className="mb-3 text-sm font-medium text-gray-700">
          500 m · Flat · Asfalt
        </p>
        <p className="text-sm leading-relaxed text-gray-600">
          Flat og rask runde i havneområdet — perfekt for barn og familier.
          Ingen påmelding nødvendig!
        </p>
      </div>
    </div>
  );
}

function InteractiveMap({
  courseId,
  course,
}: {
  courseId: "10km" | "5km";
  course: CourseData;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stopMarkersRef = useRef<
    Array<{ stop: Stop; marker: mapboxgl.Marker; el: HTMLElement }>
  >([]);
  const kmMarkersRef = useRef<
    Array<{ km: number; marker: mapboxgl.Marker; el: HTMLElement }>
  >([]);
  const [progress, setProgress] = useState(0);
  const [hoverDist, setHoverDist] = useState<number | null>(null);
  const [openStopId, setOpenStopId] = useState<string | null>(null);
  const [mapReady, setMapReady] = useState(false);

  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  const allStops = useMemo(
    () => stops.filter((s) => s.showIn.includes(courseId)),
    [courseId],
  );

  useEffect(() => {
    if (!token || !containerRef.current || mapRef.current) return;
    mapboxgl.accessToken = token;

    const map = new mapboxgl.Map({
      container: containerRef.current,
      style: "mapbox://styles/mapbox/outdoors-v12",
      bounds: course.bounds,
      fitBoundsOptions: { padding: 40 },
      interactive: true,
      attributionControl: true,
    });

    map.on("load", () => {
      map.addSource("route", {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: { type: "LineString", coordinates: [] },
        },
      });

      map.addLayer({
        id: "route-casing",
        type: "line",
        source: "route",
        layout: { "line-join": "round", "line-cap": "round" },
        paint: {
          "line-color": "#ffffff",
          "line-width": 8,
          "line-opacity": 0.85,
        },
      });

      map.addLayer({
        id: "route",
        type: "line",
        source: "route",
        layout: { "line-join": "round", "line-cap": "round" },
        paint: {
          "line-color": "#e8603c",
          "line-width": 4,
        },
      });

      map.addSource("hover-point", {
        type: "geojson",
        data: { type: "FeatureCollection", features: [] },
      });

      map.addLayer({
        id: "hover-point-halo",
        type: "circle",
        source: "hover-point",
        paint: {
          "circle-radius": 12,
          "circle-color": "#0e2f44",
          "circle-opacity": 0.18,
        },
      });

      map.addLayer({
        id: "hover-point-dot",
        type: "circle",
        source: "hover-point",
        paint: {
          "circle-radius": 5,
          "circle-color": "#0e2f44",
          "circle-stroke-color": "#ffffff",
          "circle-stroke-width": 2,
        },
      });

      map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), "top-right");
      setMapReady(true);
    });

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [token, course.bounds]);

  useEffect(() => {
    if (!mapReady) return;
    const map = mapRef.current;
    if (!map) return;
    const src = map.getSource("route") as mapboxgl.GeoJSONSource | undefined;
    if (!src) return;
    const n = Math.max(1, Math.ceil(progress * course.coordinates.length));
    const slice = course.coordinates.slice(0, n);
    src.setData({
      type: "Feature",
      properties: {},
      geometry: { type: "LineString", coordinates: slice },
    });
  }, [progress, course.coordinates, mapReady]);

  // Create stop markers once when course changes, then just toggle visibility via opacity
  useEffect(() => {
    if (!mapReady) return;
    const map = mapRef.current;
    if (!map) return;

    stopMarkersRef.current.forEach((d) => d.marker.remove());
    stopMarkersRef.current = [];

    allStops.forEach((stop, i) => {
      const coord = findCoordinateAtDistance(course, stop.distanceMeters);
      const el = document.createElement("button");
      el.type = "button";
      el.className =
        "grid h-9 w-9 place-items-center rounded-full bg-coral text-white shadow-lg ring-2 ring-white cursor-pointer";
      el.style.opacity = "0";
      el.style.pointerEvents = "none";
      el.style.transition = "opacity 400ms ease-out";
      el.innerHTML = `<span style="font-size:13px;font-weight:700;line-height:1;">${i + 1}</span>`;
      el.setAttribute("aria-label", stop.name);
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        setOpenStopId((prev) => (prev === stop.id ? null : stop.id));
      });
      const marker = new mapboxgl.Marker({ element: el, anchor: "center" })
        .setLngLat(coord)
        .addTo(map);
      stopMarkersRef.current.push({ stop, marker, el });
    });

    return () => {
      stopMarkersRef.current.forEach((d) => d.marker.remove());
      stopMarkersRef.current = [];
    };
  }, [course, mapReady, courseId, allStops]);

  // Toggle stop visibility based on animation progress
  useEffect(() => {
    const passed = progress * course.totalDistanceKm * 1000 + 50;
    stopMarkersRef.current.forEach(({ stop, el }) => {
      const show = stop.distanceMeters <= passed;
      el.style.opacity = show ? "1" : "0";
      el.style.pointerEvents = show ? "auto" : "none";
    });
  }, [progress, course.totalDistanceKm]);

  // Create km markers (1, 2, 3 ... up to last full km)
  useEffect(() => {
    if (!mapReady) return;
    const map = mapRef.current;
    if (!map) return;

    kmMarkersRef.current.forEach((d) => d.marker.remove());
    kmMarkersRef.current = [];

    const maxKm = Math.floor(course.totalDistanceKm);
    for (let km = 1; km <= maxKm; km++) {
      const coord = findCoordinateAtDistance(course, km * 1000);
      const el = document.createElement("div");
      el.className =
        "grid h-5 w-5 place-items-center rounded-full bg-ocean text-white shadow ring-2 ring-white";
      el.style.opacity = "0";
      el.style.pointerEvents = "none";
      el.style.transition = "opacity 250ms ease-out";
      el.innerHTML = `<span style="font-size:10px;font-weight:700;line-height:1;">${km}</span>`;
      const marker = new mapboxgl.Marker({ element: el, anchor: "center" })
        .setLngLat(coord)
        .addTo(map);
      kmMarkersRef.current.push({ km, marker, el });
    }

    return () => {
      kmMarkersRef.current.forEach((d) => d.marker.remove());
      kmMarkersRef.current = [];
    };
  }, [course, mapReady, courseId]);

  // Toggle km marker visibility based on progress
  useEffect(() => {
    const passed = progress * course.totalDistanceKm * 1000 + 50;
    kmMarkersRef.current.forEach(({ km, el }) => {
      el.style.opacity = km * 1000 <= passed ? "1" : "0";
    });
  }, [progress, course.totalDistanceKm]);

  // Sync hover dot on map with elevation profile hover
  useEffect(() => {
    if (!mapReady) return;
    const map = mapRef.current;
    if (!map) return;
    const src = map.getSource("hover-point") as mapboxgl.GeoJSONSource | undefined;
    if (!src) return;
    if (hoverDist === null) {
      src.setData({ type: "FeatureCollection", features: [] });
      return;
    }
    const coord = findCoordinateAtDistance(course, hoverDist);
    src.setData({
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {},
          geometry: { type: "Point", coordinates: coord },
        },
      ],
    });
  }, [hoverDist, mapReady, course]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const duration = 7000;
          const start = performance.now();
          function tick(now: number) {
            const t = Math.min(1, (now - start) / duration);
            setProgress(easeOutCubic(t));
            if (t < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [courseId]);

  const openStop = openStopId
    ? allStops.find((s) => s.id === openStopId) ?? null
    : null;

  const totalAscent = course.elevationProfile.reduce((acc, p, i) => {
    if (i === 0) return 0;
    const diff = p.ele - course.elevationProfile[i - 1].ele;
    return diff > 0 ? acc + diff : acc;
  }, 0);

  if (!token) {
    return (
      <div className="rounded-2xl bg-sand p-8 text-center text-sm text-gray-600">
        Mapbox-token mangler. Legg <code>NEXT_PUBLIC_MAPBOX_TOKEN</code> i
        <code>.env.local</code> og restart dev-serveren.
      </div>
    );
  }

  return (
    <div ref={sectionRef} className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-gray-200">
      <div className="relative">
        <div ref={containerRef} className="aspect-[4/3] w-full sm:aspect-video" />

        {openStop && (
          <div className="absolute inset-x-3 bottom-3 z-10 sm:inset-x-auto sm:right-3 sm:max-w-sm">
            <div className="overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black/10">
              <div className="relative aspect-[4/3] w-full bg-gray-100">
                <Image
                  src={openStop.image}
                  alt={openStop.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 384px"
                />
                <button
                  onClick={() => setOpenStopId(null)}
                  className="absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full bg-black/60 text-white hover:bg-black/80"
                  aria-label="Lukk"
                >
                  ×
                </button>
              </div>
              <div className="p-4">
                <p className="text-xs font-bold uppercase tracking-widest text-coral">
                  {(openStop.distanceMeters / 1000).toFixed(1)} km
                </p>
                <h3
                  className="mt-1 text-lg font-bold text-ocean-dark"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {openStop.name}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">
                  {openStop.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-gray-100 p-6">
        <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-ocean">
              {course.label}
            </p>
            <p className="text-sm font-medium text-gray-700">
              {course.totalDistanceKm.toFixed(2)} km · {Math.round(totalAscent)} m
              stigning · Asfalt &amp; grus
            </p>
          </div>
          <p className="text-xs text-gray-500">
            {allStops.length} stoppepunkter langs løypa — klikk markør for bilde
          </p>
        </div>

        <ElevationProfile
          profile={course.elevationProfile}
          hoverDist={hoverDist}
          onHover={setHoverDist}
          stops={stops.filter((s) => s.showIn.includes(courseId))}
        />
      </div>
    </div>
  );
}

function ElevationProfile({
  profile,
  hoverDist,
  onHover,
  stops,
}: {
  profile: { dist: number; ele: number }[];
  hoverDist: number | null;
  onHover: (d: number | null) => void;
  stops: Stop[];
}) {
  const svgRef = useRef<SVGSVGElement>(null);
  const width = 1000;
  const height = 120;
  const padding = { top: 10, right: 10, bottom: 22, left: 10 };
  const innerW = width - padding.left - padding.right;
  const innerH = height - padding.top - padding.bottom;

  const totalDist = profile[profile.length - 1]?.dist ?? 1;
  const eleMin = Math.min(...profile.map((p) => p.ele));
  const eleMax = Math.max(...profile.map((p) => p.ele));
  const eleRange = Math.max(1, eleMax - eleMin);

  const points = profile.map((p) => ({
    x: padding.left + (p.dist / totalDist) * innerW,
    y:
      padding.top + innerH - ((p.ele - eleMin) / eleRange) * innerH * 0.85 - innerH * 0.05,
  }));

  const areaPath =
    `M ${points[0].x},${padding.top + innerH} ` +
    points.map((p) => `L ${p.x},${p.y}`).join(" ") +
    ` L ${points[points.length - 1].x},${padding.top + innerH} Z`;
  const linePath = "M " + points.map((p) => `${p.x},${p.y}`).join(" L ");

  function handleMove(e: React.MouseEvent<SVGSVGElement>) {
    const svg = svgRef.current;
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    const xRatio = (e.clientX - rect.left) / rect.width;
    const clamped = Math.max(0, Math.min(1, xRatio));
    onHover(clamped * totalDist);
  }

  const hoverX =
    hoverDist !== null ? padding.left + (hoverDist / totalDist) * innerW : null;

  return (
    <div className="w-full">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${width} ${height}`}
        className="w-full cursor-crosshair"
        onMouseMove={handleMove}
        onMouseLeave={() => onHover(null)}
      >
        <defs>
          <linearGradient id="eleGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a5276" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#1a5276" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <path d={areaPath} fill="url(#eleGradient)" />
        <path d={linePath} stroke="#1a5276" strokeWidth="1.5" fill="none" />

        {stops.map((s) => {
          if (s.distanceMeters > totalDist) return null;
          const x = padding.left + (s.distanceMeters / totalDist) * innerW;
          return (
            <g key={s.id}>
              <line
                x1={x}
                x2={x}
                y1={padding.top}
                y2={padding.top + innerH}
                stroke="#e8603c"
                strokeWidth="1"
                strokeDasharray="2 3"
                opacity="0.5"
              />
              <circle cx={x} cy={padding.top + innerH} r="3" fill="#e8603c" />
            </g>
          );
        })}

        {hoverX !== null && (
          <line
            x1={hoverX}
            x2={hoverX}
            y1={padding.top}
            y2={padding.top + innerH}
            stroke="#0e2f44"
            strokeWidth="1"
          />
        )}

        <text
          x={padding.left}
          y={height - 4}
          className="fill-gray-400"
          style={{ fontSize: 11 }}
        >
          0 km
        </text>
        <text
          x={width - padding.right}
          y={height - 4}
          textAnchor="end"
          className="fill-gray-400"
          style={{ fontSize: 11 }}
        >
          {(totalDist / 1000).toFixed(1)} km
        </text>
      </svg>
    </div>
  );
}
