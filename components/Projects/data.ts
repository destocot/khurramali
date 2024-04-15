import {
  SiChakraui,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiVite,
} from "react-icons/si";

export const projects = [
  {
    title: "My Anime Store",
    tech: [SiNextdotjs, SiTailwindcss, SiMongodb, SiPrisma],
    link: "https://myanimestore.vercel.app",
    cover: {
      imageUrl: "/myanimestore.jpg",
      hoverImageUrl: "/myanimestore-hover.gif",
    },
    background: "bg-blue-500",
  },
  {
    title: "Vinyl Theatre",
    tech: [SiVite, SiNodedotjs, SiExpress, SiMongoose],
    link: "https://vinyltheatre.vercel.app",
    cover: {
      imageUrl: "/vinyltheatre.jpg",
      hoverImageUrl: "/vinyltheatre-hover.gif",
    },
    background: "bg-green-500",
  },
  {
    title: "Personal Blog",
    tech: [SiNextdotjs, SiTailwindcss, SiMongodb, SiPrisma],
    link: "https://khrmblog.vercel.app",
    cover: {
      imageUrl: "/khrmblog.jpg",
      hoverImageUrl: "/khrmblog-hover.gif",
    },
    background: "bg-sky-500",
  },
  {
    title: "GableURL",
    tech: [SiNextdotjs, SiMongodb, SiChakraui, SiMongoose],
    link: "https://gableurl.vercel.app",
    cover: {
      imageUrl: "/gableurl.jpg",
      hoverImageUrl: "/gableurl-hover.gif",
    },
    background: "bg-rose-500",
  },
  {
    title: "Stick-It! Notes",
    tech: [SiNextdotjs, SiSupabase, SiThreedotjs, SiTailwindcss],
    link: "https://stick-it.vercel.app",
    cover: {
      imageUrl: "/stickit.jpg",
      hoverImageUrl: "/stickit-hover.gif",
    },
    background: "bg-gray-500",
  },
  {
    title: "Project Management",
    tech: [SiNestjs, SiVite, SiChakraui, SiPostgresql],
    link: "https://project-management-26ne.onrender.com",
    cover: {
      imageUrl: "/projectmanagement.jpg",
      hoverImageUrl: "/projectmanagement-hover.gif",
    },
    background: "bg-yellow-500",
  },
];

export const allProjects = [...projects, ...projects];
