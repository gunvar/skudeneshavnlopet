interface WaveDividerProps {
  from?: string;
  to?: string;
  flip?: boolean;
}

export default function WaveDivider({
  from = "fill-white",
  to = "fill-sand",
  flip = false,
}: WaveDividerProps) {
  return (
    <div
      className={`relative -mt-1 -mb-1 ${flip ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className={`block w-full h-12 sm:h-16 md:h-20 ${to}`}
      >
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 L0,0 Z"
          className={from}
        />
      </svg>
    </div>
  );
}
