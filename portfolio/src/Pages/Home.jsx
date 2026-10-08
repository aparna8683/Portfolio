import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Learning from "../components/Learning";
import BeyondCode from "../components/BeyondCode";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Learning />
      <BeyondCode />
    </>
  );
}
export default Home;