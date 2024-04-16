import {
  SiAxios,
  SiBootstrap,
  SiChakraui,
  SiCss3,
  SiExpress,
  SiGithubpages,
  SiGooglebard,
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPrisma,
  SiStripe,
  SiStyledcomponents,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVite,
} from "react-icons/si";

export const projects = [
  {
    title: "My Anime Store",
    tech: [SiNextdotjs, SiPrisma, SiStripe, SiOpenai],
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
    title: "Temperament",
    tech: [SiNextdotjs, SiTailwindcss, SiPrisma, SiGooglebard],
    link: "https://temperament-app.vercel.app",
    cover: {
      imageUrl: "/temperament.jpg",
      hoverImageUrl: "/temperament-hover.gif",
    },
    background: "bg-orange-500",
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
];

export const allProjects = [
  ...projects,
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
  {
    title: "Daily Chat",
    tech: [SiNextdotjs, SiSupabase, SiTailwindcss, SiPostgresql],
    link: "https://realtime-daily-chat.vercel.app/",
    cover: {
      imageUrl: "/dailychat.jpg",
      hoverImageUrl: "/dailychat-hover.gif",
    },
    background: "bg-purple-500",
  },
  {
    title: "Evento",
    tech: [SiNextdotjs, SiTailwindcss, SiPostgresql, SiTypescript],
    link: "https://evento-events.vercel.app",
    cover: {
      imageUrl: "/evento.jpg",
      hoverImageUrl: "/evento-hover.gif",
    },
    background: "bg-lime-500",
  },
  {
    title: "Giraffe Styled Components",
    tech: [SiVite, SiStyledcomponents, SiJavascript],
    link: "https://giraffe-styled-components.vercel.app",
    cover: {
      imageUrl: "/giraffestyled.jpg",
      hoverImageUrl: "/giraffestyled-hover.gif",
    },
    background: "bg-amber-500",
  },
  {
    title: "Liquid Mart",
    tech: [SiVite, SiAxios, SiTailwindcss, SiTypescript],
    link: "https://liquid-mart.vercel.app",
    cover: {
      imageUrl: "/liquidmart.jpg",
      hoverImageUrl: "/liquidmart-hover.gif",
    },
    background: "bg-stone-500",
  },
  {
    title: "PetSoft",
    tech: [SiNextdotjs, SiTailwindcss, SiMongodb, SiStripe],
    link: "https://petsoft-project.vercel.app",
    cover: {
      imageUrl: "/petsoft.jpg",
      hoverImageUrl: "/petsoft-hover.gif",
    },
    background: "bg-teal-500",
  },

  {
    title: "Twenty Four",
    tech: [SiVite, SiBootstrap, SiJavascript, SiCss3],
    link: "https://twentyfour-game.vercel.app",
    cover: {
      imageUrl: "/twentyfour.jpg",
      hoverImageUrl: "/twentyfour-hover.gif",
    },
    background: "bg-cyan-500",
  },
  {
    title: "Portfolio",
    tech: [SiNextdotjs, SiTailwindcss, SiCss3, SiGithubpages],
    link: "https://khurramali.site",
    cover: {
      imageUrl: "/portfolio.jpg",
      hoverImageUrl: "/portfolio-hover.gif",
    },
    background: "bg-indigo-500",
  },
];
