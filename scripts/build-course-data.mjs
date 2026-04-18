import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const gpxPath = join(root, "public/raw/Skudeneshavnløpet 2025 - 10km.gpx");
const outDir = join(root, "app/data");

const gpx = readFileSync(gpxPath, "utf8");

const trkptRegex = /<trkpt\s+lat="([-\d.]+)"\s+lon="([-\d.]+)">\s*(?:<ele>([-\d.]+)<\/ele>)?/g;
const points = [];
let m;
while ((m = trkptRegex.exec(gpx)) !== null) {
  points.push({
    lat: parseFloat(m[1]),
    lon: parseFloat(m[2]),
    ele: m[3] ? parseFloat(m[3]) : 0,
  });
}

function haversine(a, b) {
  const R = 6371000;
  const toRad = (d) => (d * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLon = toRad(b.lon - a.lon);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const x =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(x));
}

let cumulative = 0;
const enriched = points.map((p, i) => {
  if (i > 0) cumulative += haversine(points[i - 1], p);
  return { ...p, dist: cumulative };
});

const totalDist = enriched[enriched.length - 1].dist;

function buildCourse(points, label) {
  return {
    label,
    totalDistanceKm: points[points.length - 1].dist / 1000,
    coordinates: points.map((p) => [p.lon, p.lat]),
    elevationProfile: points.map((p) => ({
      dist: Math.round(p.dist),
      ele: Math.round(p.ele * 10) / 10,
    })),
    bounds: (() => {
      let minLat = Infinity, maxLat = -Infinity, minLon = Infinity, maxLon = -Infinity;
      for (const p of points) {
        if (p.lat < minLat) minLat = p.lat;
        if (p.lat > maxLat) maxLat = p.lat;
        if (p.lon < minLon) minLon = p.lon;
        if (p.lon > maxLon) maxLon = p.lon;
      }
      return [[minLon, minLat], [maxLon, maxLat]];
    })(),
  };
}

const course10k = buildCourse(enriched, "10 km");

const targetDist = 5000;
const lastIdx = enriched.findIndex((p) => p.dist >= targetDist);
const before = enriched[lastIdx - 1];
const after = enriched[lastIdx];
const span = after.dist - before.dist;
const t = span > 0 ? (targetDist - before.dist) / span : 0;
const interpolated = {
  lat: before.lat + (after.lat - before.lat) * t,
  lon: before.lon + (after.lon - before.lon) * t,
  ele: before.ele + (after.ele - before.ele) * t,
  dist: targetDist,
};
const course5kPoints = [...enriched.slice(0, lastIdx), interpolated];
const course5k = buildCourse(course5kPoints, "5 km");

writeFileSync(join(outDir, "course-10km.json"), JSON.stringify(course10k));
writeFileSync(join(outDir, "course-5km.json"), JSON.stringify(course5k));

console.log(`10km: ${course10k.coordinates.length} pts, ${course10k.totalDistanceKm.toFixed(2)} km`);
console.log(`5km:  ${course5k.coordinates.length} pts, ${course5k.totalDistanceKm.toFixed(2)} km`);
