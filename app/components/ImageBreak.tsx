import Image from "next/image";

interface ImageBreakProps {
  src: string;
  alt: string;
  quote?: string;
}

export default function ImageBreak({ src, alt, quote }: ImageBreakProps) {
  return (
    <div className="relative h-64 overflow-hidden sm:h-80 md:h-96">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-ocean-dark/40" />
      {quote && (
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <p
            className="max-w-2xl text-center text-lg italic leading-relaxed text-white/90 sm:text-xl md:text-2xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {quote}
          </p>
        </div>
      )}
    </div>
  );
}
