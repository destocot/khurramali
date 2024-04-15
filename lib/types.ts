import { IconType } from "react-icons";

export type Project = {
  title: string;
  tech: IconType[];
  link: string;
  cover: {
    imageUrl: string;
    hoverImageUrl: string;
  };
  background: string;
};
