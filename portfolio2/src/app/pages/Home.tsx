import { Header } from "../components/Header";
import { Libraries } from "../components/Libraries";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Education } from "../components/Education";
import { Experience } from "../components/Experience";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <Libraries />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
