import Navbar from "@/app/(home)/_components/Navbar";
import HeroSection from "@/app/(home)/_components/HeroSection";
import Skills from "@/app/(home)/_components/Skills";
import Projects from "@/app/(home)/_components/Projects";
import Footer from "@/app/(home)/_components/Footer";
import { SecondaryNavbar } from "./_components/SecondaryNavbar";

export default function Page() {
  return (
    <>
      <div className="dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative">
        <div className="max-w-7xl mx-auto p-5">
          <Navbar showResumeLabel />
          <SecondaryNavbar />
          <HeroSection />
        </div>
        <div className="h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full" />
      </div>
      <div className="max-w-7xl mx-auto p-5 mt-20">
        <div id="projects" />
        <Projects />
        <div id="skills" />
        <Skills />
        <Footer />
      </div>
    </>
  );
}
