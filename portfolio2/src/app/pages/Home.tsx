import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Libraries } from "../components/Libraries";
import { Projects } from "../components/Projects";
import { Education } from "../components/Education";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Libraries />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
