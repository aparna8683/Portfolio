import { lazy, Suspense } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const About = lazy(() => import("../components/About"));
const Skills = lazy(() => import("../components/Skills"));
const Projects = lazy(() => import("../components/Projects"));
const Learning = lazy(() => import("../components/Learning"));
const BeyondCode = lazy(() => import("../components/BeyondCode"));
const Contact = lazy(() => import("../components/Contact"));

const fallback = (
  <div className="min-h-[24vh] bg-[#0a0a09] flex items-center justify-center">
    <span className="text-[10px] tracking-[.18em] text-[#706d66]">LOADING</span>
  </div>
);

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={fallback}>
        <About />
        <Skills />
        <Projects />
        <Learning />
        <BeyondCode />
        <Contact />
      </Suspense>
    </>
  );
}
export default Home;