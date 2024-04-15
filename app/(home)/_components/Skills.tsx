"use client";
import { Title } from "@/app/(home)/_components/Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { useState } from "react";
import { FaAnglesDown, FaAnglesUp } from "react-icons/fa6";
import {
  SiGit,
  SiJavascript,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiVite,
  SiRedux,
  SiJquery,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiAxios,
  SiPrisma,
  SiJest,
  SiCypress,
} from "react-icons/si";

const skills = [
  { text: "React", Icon: SiReact },
  { text: "Next.js", Icon: SiNextdotjs },
  { text: "Tailwind", Icon: SiTailwindcss },
  { text: "PostgreSQL", Icon: SiPostgresql },
  { text: "Git", Icon: SiGit },
  { text: "Typescript", Icon: SiTypescript },
  { text: "Javascript", Icon: SiJavascript },
  { text: "HTML", Icon: SiHtml5 },
  { text: "CSS", Icon: SiCss3 },
  { text: "Redux", Icon: SiRedux },
  { text: "Node.js", Icon: SiNodedotjs },
  { text: "Express.js", Icon: SiExpress },
  { text: "Nest.js", Icon: SiNestjs },
  { text: "MongoDB", Icon: SiMongodb },
  { text: "Jest", Icon: SiJest },
  { text: "Cypress", Icon: SiCypress },
  { text: "Vite.js", Icon: SiVite },
  { text: "Axios", Icon: SiAxios },
  { text: "Prisma", Icon: SiPrisma },
  { text: "Mongoose", Icon: SiMongoose },
  { text: "MySQL", Icon: SiMysql },
  { text: "jQuery", Icon: SiJquery },
];
export default function Skills() {
  const [slicedSkills, setSlicedSkills] = useState(skills.slice(0, 12));

  return (
    <div className="sm:max-w-5xl mx-auto px-1 sm:px-8 py-10 mt-10">
      <Title
        text="Skills 🔪"
        className="flex flex-col items-center justify-center -rotate-6"
      />
      <HoverEffect items={slicedSkills} />
      <div className="flex justify-center">
        <button
          className="bg-green-500 px-3 py-1 rounded transition hover:bg-green-700 font-semibold tracking-tight flex gap-3 items-center"
          onClick={() => {
            if (slicedSkills.length === skills.length) {
              setSlicedSkills(skills.slice(0, 12));
            } else {
              setSlicedSkills(skills);
            }
          }}
        >
          {slicedSkills.length === skills.length ? <ShowLess /> : <ShowMore />}
        </button>
      </div>
    </div>
  );
}

function ShowLess() {
  return (
    <>
      <span>Show Less</span>
      <FaAnglesUp />
    </>
  );
}

function ShowMore() {
  return (
    <>
      <span>Show More</span>
      <FaAnglesDown />
    </>
  );
}
