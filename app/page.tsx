import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/heroSection";
import { Projects } from "@/components/shared/Projects";
import Contact from "@/components/shared/contact";
import About from "@/components/shared/About";
import Skillz from "@/components/shared/Skillz";
import Experience from "@/src/components/Experience";
import GetInTouch from '@/components/shared/GetInTouch';

export default function Home() {

  return (
    <main className="bg-black text-white text-[poppins]">
      <Navbar />
      <HeroSection />
      <Projects />
      <Skillz/>
      {/* <Skills /> */}
      {/* <About /> */}
      <Experience/>
      <GetInTouch />
    </main>
  );
}

