import Link from "next/link";
import { DirectionAwareHover } from "../ui/direction-aware-hover";
import { cn } from "@/lib/utils";
import { Project } from "@/lib/types";

type ProjectListProps = {
  projects: Project[];
};

export const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-20 gap-5">
      {projects.map((project, idx) => (
        <div key={idx} className="flex flex-col">
          <h1 className="text-2xl font-bold tracking-tight">{project.title}</h1>
          <Link key={idx} href={project.link} target="_blank">
            <div
              className={cn("p-2 rounded-md bg-white", {
                "bg-blue-500": "bg-blue-500" === project.background,
                "bg-green-500": "bg-green-500" === project.background,
                "bg-sky-500": "bg-sky-500" === project.background,
                "bg-rose-500": "bg-rose-500" === project.background,
                "bg-gray-500": "bg-gray-500" === project.background,
                "bg-yellow-500": "bg-yellow-500" === project.background,
                "bg-purple-500": "bg-purple-500" === project.background,
                "bg-lime-500": "bg-lime-500" === project.background,
                "bg-amber-500": "bg-amber-500" === project.background,
                "bg-stone-500": "bg-stone-500" === project.background,
                "bg-teal-500": "bg-teal-500" === project.background,
                "bg-orange-500": "bg-orange-500" === project.background,
                "bg-cyan-500": "bg-cyan-500" === project.background,
                "bg-indigo-500": "bg-indigo-500" === project.background,
              })}
            >
              <DirectionAwareHover
                imageUrl={project.cover.imageUrl}
                hoverImageUrl={project.cover.hoverImageUrl}
                className="w-full cursor-pointer h-64 object-cover"
              >
                <div className="space-y-5 bg-white/15 p-2 rounded">
                  <h1 className="text-2xl font-bold">{project.title}</h1>
                  <div className="flex items-center gap-5">
                    {project.tech.map((Icon, idx) => (
                      <Icon key={idx} className="w-8 h-8" />
                    ))}
                  </div>
                </div>
              </DirectionAwareHover>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
