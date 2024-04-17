import Projects from "@/components/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto p-5 mt-20">
      <Projects showAll />
    </div>
  );
}
