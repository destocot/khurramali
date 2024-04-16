import Link from "next/link";
import { ProjectList } from "@/components/Projects/project-list";
import { projects, allProjects } from "@/components/Projects/data";
import { FaAnglesRight } from "react-icons/fa6";
import { Title } from "../Title";

type ProjectsProps = {
  showAll?: boolean;
};

export default function Projects({ showAll = false }: ProjectsProps) {
  return (
    <>
      {!showAll && <div id="projects" className="h-10" />}
      <div className="py-10 p-5 sm:p-0">
        <Title
          text={showAll ? "All Projects 🎨" : "Projects 🎨"}
          className="flex flex-col items-center justify-center -rotate-6"
        />
        <ProjectList projects={showAll ? allProjects : projects} />
        {!showAll && (
          <Link
            href="/projects/all"
            className="bg-indigo-500 px-3 py-1 rounded transition hover:bg-indigo-700 font-semibold tracking-tight float-end mt-5 flex gap-3 items-center"
          >
            <span>All Projects</span>
            <FaAnglesRight />
          </Link>
        )}
      </div>
    </>
  );
}
