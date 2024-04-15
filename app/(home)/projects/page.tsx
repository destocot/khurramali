import { allProjects } from "@/components/Projects/data";
import Footer from "../_components/Footer";
import Navbar from "../_components/Navbar";
import { SecondaryNavbar } from "../_components/SecondaryNavbar";
import { Title } from "../_components/Title";
import { ProjectList } from "@/components/Projects/project-list";

export default function ProjectsPage() {
  return (
    <>
      <div className="dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative">
        <div className="max-w-7xl mx-auto p-5">
          <Navbar showResumeLabel />
          <SecondaryNavbar />
        </div>
        <div className="h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full" />
      </div>
      <div className="max-w-7xl mx-auto p-5">
        <div className="py-10 p-5 sm:p-0">
          <Title
            text="All Projects 🎨"
            className="flex flex-col items-center justify-center -rotate-6"
          />
          <ProjectList projects={allProjects} />
        </div>
        <Footer />
      </div>
    </>
  );
}
