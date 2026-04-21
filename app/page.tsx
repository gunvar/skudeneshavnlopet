import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Distances from "./components/Distances";
import CourseMap from "./components/CourseMap";
import PracticalInfo from "./components/PracticalInfo";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Sponsors from "./components/Sponsors";
import Results from "./components/Results";
import Footer from "./components/Footer";
import FadeIn from "./components/FadeIn";
import WaveDivider from "./components/WaveDivider";
import MobileCTA from "./components/MobileCTA";
import Prizes from "./components/Prizes";
import Sommerbyen from "./components/Sommerbyen";
import ImageBreak from "./components/ImageBreak";
import RaceDayBanner from "./components/RaceDayBanner";

export default function Home() {
  return (
    <>
      <Navbar />
      <MobileCTA />
      <main>
        <Hero />
        <RaceDayBanner />

        <FadeIn>
          <About />
        </FadeIn>

        <WaveDivider from="fill-white" to="fill-sand" />

        <FadeIn>
          <Gallery />
        </FadeIn>

        <WaveDivider from="fill-sand" to="fill-white" flip />

        <Sommerbyen />

        <FadeIn>
          <Distances />
        </FadeIn>

        <WaveDivider from="fill-sand" to="fill-white" flip />

        <FadeIn>
          <CourseMap />
        </FadeIn>

        <ImageBreak
          src="/images/sommerbyen-2.jpg"
          alt="Hvitmalte trehus og sjarmerende gater i Gamle Skudeneshavn"
          quote="Løp gjennom Norges best bevarte trehusby"
        />

        <WaveDivider from="fill-white" to="fill-sand" />

        <FadeIn>
          <Prizes />
        </FadeIn>

        <WaveDivider from="fill-sand" to="fill-white" flip />

        <FadeIn>
          <PracticalInfo />
        </FadeIn>

        <WaveDivider from="fill-white" to="fill-sand" />

        <FadeIn>
          <FAQ />
        </FadeIn>

        <WaveDivider from="fill-sand" to="fill-white" flip />

        <FadeIn>
          <section className="bg-white pb-12 pt-4">
            <div className="mx-auto flex max-w-[364px] justify-center px-4">
              <a
                href="https://live.eqtiming.com/80315"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block w-full overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-[1.02] hover:shadow-xl"
                aria-label="Meld deg på Skudeneshavnløpet 2026"
              >
                <Image
                  src="/images/galleri/loper-mal.jpg"
                  alt="Lørdag 13. juni 2026 — Påmeldingen er åpen"
                  width={600}
                  height={600}
                  className="h-auto w-full"
                />
              </a>
            </div>
          </section>
        </FadeIn>

        <WaveDivider from="fill-white" to="fill-white" />

        <FadeIn>
          <Sponsors />
        </FadeIn>

        <WaveDivider from="fill-white" to="fill-sand" />

        <FadeIn>
          <Results />
        </FadeIn>
      </main>
      <Footer />
    </>
  );
}
