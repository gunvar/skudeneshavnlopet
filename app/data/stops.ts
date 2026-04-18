export type Stop = {
  id: string;
  name: string;
  description: string;
  image: string;
  distanceMeters: number;
  showIn: Array<"10km" | "5km">;
};

export const stops: Stop[] = [
  {
    id: "torget",
    name: "Torget",
    description: "Start og målgang i hjertet av sommerbyen.",
    image: "/images/loypekart/stops/06_torget.jpg",
    distanceMeters: 0,
    showIn: ["10km", "5km"],
  },
  {
    id: "soragada",
    name: "Søragadå",
    description: "Smal, historisk gate mellom hvitmalte trehus.",
    image: "/images/loypekart/stops/01_Soragada.JPG",
    distanceMeters: 300,
    showIn: ["10km", "5km"],
  },
  {
    id: "vikesjoen",
    name: "Vikesjøen",
    description: "Speilblank innsjø med bjørk og furu langs stien.",
    image: "/images/loypekart/stops/02_vikesjøen.png",
    distanceMeters: 1400,
    showIn: ["10km", "5km"],
  },
  {
    id: "allmannamyr",
    name: "Almanamyrvannet",
    description: "Idyllisk vann omkranset av myrlandskap.",
    image: "/images/loypekart/stops/03_allmannamyr.jpg",
    distanceMeters: 3100,
    showIn: ["10km", "5km"],
  },
  {
    id: "planteskolen",
    name: "Planteskolen",
    description: "Frodig grønt område på løypas lange sløyfe.",
    image: "/images/loypekart/stops/04_planteskoge.png",
    distanceMeters: 5700,
    showIn: ["10km"],
  },
  {
    id: "vigane",
    name: "Vigane",
    description: "Bystranda med utsikt mot havet før siste etappe.",
    image: "/images/loypekart/stops/05_Vigane.jpg",
    distanceMeters: 9400,
    showIn: ["10km"],
  },
];
