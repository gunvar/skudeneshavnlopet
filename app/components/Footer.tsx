import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-ocean-dark py-16 text-white">
      <div className="mx-auto max-w-5xl px-4">
        {/* Final CTA */}
        <div className="mb-12 text-center">
          <h2
            className="mb-3 text-2xl font-extrabold sm:text-3xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Klar for å løpe?
          </h2>
          <p className="mb-6 text-white/70">
            Lørdag 13. juni 2026 — Skudeneshavn
          </p>
          <a
            href="https://live.eqtiming.com/80315"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-coral px-8 py-4 text-lg font-bold text-white shadow-2xl transition-all hover:scale-105 hover:bg-coral-dark"
          >
            Meld deg på nå!
          </a>
        </div>

        <hr className="mb-8 border-white/10" />

        <div className="grid gap-8 text-center text-sm text-white/60 sm:grid-cols-3 sm:text-left">
          <div>
            <p className="mb-2 font-semibold text-white/80">Arrangører</p>
            <p>Skudenes UIL (SUIL)</p>
            <p>Skudeneshavn Næringsforening</p>
          </div>
          <div>
            <p className="mb-2 font-semibold text-white/80">Kontakt</p>
            <a href="mailto:post@suil.no" className="hover:text-white hover:underline">
              post@suil.no
            </a>
            <p className="mt-1">Sten Ove Eike, daglig leder SUIL</p>
          </div>
          <div>
            <p className="mb-2 font-semibold text-white/80">Følg oss</p>
            <a
              href="https://www.facebook.com/share/17xXiKoLHn/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white hover:underline"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 text-center text-xs text-white/40">
          <p>Overskuddet går uavkortet til SUIL og lokalidretten.</p>
          <a
            href="https://live.eqtiming.com/80315"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block opacity-50 transition-opacity hover:opacity-80"
          >
            <Image
              src="/images/samarbeidspartnere/EQ-Timing-logo.png"
              alt="EQ Timing — påmelding og tidtaking"
              width={80}
              height={26}
              className="h-5 w-auto brightness-0 invert"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
