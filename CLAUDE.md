# Skudeneshavnløpet — Prosjektdokumentasjon

## Om prosjektet
Landingsside for Skudeneshavnløpet — et årlig gateløp i Skudeneshavn, Karmøy.

## Status (september 2026): 2027-modus
2026-løpet (13. juni) er gjennomført: 262 påmeldte (+32 % fra 2025).
Siden er rigget om til å annonsere 2027-løpet (juni 2027, femte gang):
- Dato annonseres og påmeldingen åpner **i løpet av oktober 2026** (utsatt fra september)
- Alle påmeldings-CTA-er er byttet ut med «Påmelding åpner i (løpet av) oktober»
- `Road2027.tsx` («Veien mot 2027», id `mot-2027`) rett under Hero:
  tidslinje mot løpsdagen, utfordringer og Facebook/del-CTA.
  Oppdater tidslinjen (steget «Oktober 2026» → ferdig) når påmeldingen åpner
- `Sponsors.tsx` er gjort om til «Bli sponsor 2027» — 2026-logoene er tatt bort
  til nye avtaler er på plass (logofilene ligger fortsatt i `public/images/sponsorer/`)
- OG-bildet genereres fra `../og-image-2027.html` (headless Chrome med
  `--allow-file-access-from-files`, 1200×630) → `public/og-image.jpg`
- Ny komponent `Winners2026.tsx` viser topp 3 per distanse/kjønn + Solstad
  Running Team som vinner av lagkonkurransen
- Galleri viser bilder fra 2026 (`public/images/galleri/2026-*.jpg`) — kun et
  lite utvalg; hovedvolumet av fotografbilder legges på Facebook
- `Kampanje.tsx` (HAVN-kupong 2026) og `RaceDayBanner.tsx` er tatt ut av
  page.tsx, men filene er beholdt til 2027
- Når dato/påmelding er klar: oppdater Hero, Countdown (TARGET), RaceDayBanner
  (RACE_DATE), layout.tsx (JSON-LD startDate), FAQ og CTA-lenker

## Tech stack
- **Framework:** Next.js (App Router) med TypeScript
- **Styling:** Tailwind CSS v4
- **Deploy:** Vercel (auto-deploy fra GitHub main-branch)
- **Domene:** havnlopet.no (ikke kjøpt ennå)

## Viktige lenker
- **Påmelding (EQ Timing):** https://live.eqtiming.com/80315
- **Facebook 2026-event:** https://www.facebook.com/share/17xXiKoLHn/
- **Kontakt:** post@suil.no (Sten Ove Eike, daglig leder SUIL)

## Arrangører
- Skudenes UIL (SUIL)
- Skudeneshavn Næringsforening

## Distanser 2026
| Distanse | Start | Pris |
|----------|-------|------|
| Havnasprinten (500m) | 11:00 | Gratis |
| 10 km | 12:00 | 350 kr |
| 5 km | 12:15 | 350 kr |

## NYTT 2026: Lagkonkurranse
Vandrepokal for beste lag på 5 km. Min. 3 deltakere, de 3 beste tidene teller.

## Designretningslinjer
- **Farger:** Havblått (#1a5276), korall CTA (#e8603c), sand bakgrunn (#f5f0e8)
- **Font:** Plus Jakarta Sans (headings), Inter (body)
- **Stemning:** Sommerlig, inkluderende, folkefest — ikke ekstremsport
- **Identitet:** Hvitmalte trehus, Bade-Olena, sjøen, Gamle Skudeneshavn

## Mappestruktur
```
app/
├── layout.tsx          — Root layout med metadata og JSON-LD
├── page.tsx            — Hovedside (one-page)
├── globals.css         — Tailwind config og custom theme
└── components/
    ├── Navbar.tsx       — Sticky navigasjon
    ├── Hero.tsx         — Hero med nedtelling
    ├── Countdown.tsx    — Nedtellingsklokke (client component)
    ├── About.tsx        — Om løpet med nøkkeltall
    ├── Distances.tsx    — Distanser (3 cards + lagkonkurranse)
    ├── PracticalInfo.tsx — Tidslinje og accordion
    ├── Results.tsx      — Lenker til resultater
    └── Footer.tsx       — Kontaktinfo og siste CTA
public/images/
├── logo.png            — Løpets logo (Bade-Olena)
├── hero-bg.jpg         — Hero-bakgrunn (startfelt)
├── galleri/            — Bilder fra tidligere løp
├── loypekart/          — Løypekart
└── sponsorer/          — Sponsorlogoer
```

## Sponsorer 2026 (ikke vist på siden nå — 2027-sponsorer selges inn)
- Skudenes & Aakra Sparebank
- Brødr. Olsen
- Solstad Offshore
- Skudenes UIL

## EQ Timing
Profesjonell tidtaking — viktig kvalitetsstempel å fremheve på nettsiden.

## Markedsføring
- Facebook er hovedkanal (events + Canva-bilder)
- Nettsiden er informasjonskanal og påmeldingsfunnel
- Gunvar (leder) bruker Canva for Facebook-grafikk

## Neste steg (etter MVP)
- [ ] Bildegalleri med lightbox
- [ ] Løypekart-seksjon
- [ ] Sponsorseksjon med logoer
- [ ] Kjøp domene havnlopet.no
- [ ] Koble domene til Vercel
- [ ] Legg til flere bilder fra 2025-løpet
- [ ] Optimalisere bilder for web (WebP)
- [ ] Lage hvit versjon av logo for hero
