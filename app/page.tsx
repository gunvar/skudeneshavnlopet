import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Distances from "./components/Distances";
import CourseMap from "./components/CourseMap";
import PracticalInfo from "./components/PracticalInfo";
import Gallery from "./components/Gallery";
import Sponsors from "./components/Sponsors";
import Results from "./components/Results";
import Footer from "./components/Footer";
import FadeIn from "./components/FadeIn";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FadeIn>
          <About />
        </FadeIn>
        <FadeIn>
          <Distances />
        </FadeIn>
        <FadeIn>
          <CourseMap />
        </FadeIn>
        <FadeIn>
          <PracticalInfo />
        </FadeIn>
        <FadeIn>
          <Gallery />
        </FadeIn>
        <FadeIn>
          <Sponsors />
        </FadeIn>
        <FadeIn>
          <Results />
        </FadeIn>
      </main>
      <Footer />
    </>
  );
}
