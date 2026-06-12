import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Achievements } from "@/components/sections/achievements";
import { Services } from "@/components/sections/services";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* Section divider gradient */}
        <div className="relative">
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Achievements />
          <Services />
          <Contact />
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
