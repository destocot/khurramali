import { Title } from "./Title";
import Link from "next/link";
import { ProjectList } from "@/components/Projects/project-list";
import { projects } from "@/components/Projects/data";
import { FaAnglesRight } from "react-icons/fa6";

export default function Projects() {
  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Projects 🎨"
        className="flex flex-col items-center justify-center -rotate-6"
      />
      <ProjectList projects={projects} />
      <Link
        href="/projects"
        className="bg-indigo-500 px-3 py-1 rounded transition hover:bg-indigo-700 font-semibold tracking-tight float-end mt-5 flex gap-3 items-center"
      >
        <span>All Projects</span>
        <FaAnglesRight />
      </Link>
    </div>
  );
}
