import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaTurnDown } from "react-icons/fa6";
import {
  SiLinkedin,
  SiGithub,
  SiX,
  SiYoutube,
  SiReaddotcv,
} from "react-icons/si";

const socials = [
  {
    link: "https://www.linkedin.com/in/khurram-ali1/",
    label: "Linkedin",
    Icon: SiLinkedin,
  },
  { link: "https://github.com/destocot/", label: "Github", Icon: SiGithub },
  {
    link: "https://twitter.com/sighhhhhmondays/",
    label: "x",
    Icon: SiX,
  },
  {
    link: "https://www.youtube.com/@GiraffeReactor/",
    label: "YouTube",
    Icon: SiYoutube,
  },
  {
    link: "/KHURRAM.pdf",
    label: "Resume",
    Icon: SiReaddotcv,
  },
];

type NavBarProps = React.HTMLAttributes<HTMLElement> & {
  showResumeLabel?: boolean;
};

export default function Navbar({ className, showResumeLabel }: NavBarProps) {
  return (
    <nav
      className={cn(
        "pt-10 flex justify-between items-center animate-move-down",
        className
      )}
    >
      <Link
        href="/"
        className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2"
      >
        Khurram 🧑🏻‍💻
      </Link>
      <div className="flex items-center gap-5 relative">
        {showResumeLabel && (
          <div className="right-0 absolute -top-8 flex items-end gap-1 animate-pulse">
            <p className="font-semibold tracking-tight">resume</p>
            <FaTurnDown size="0.9em" />
          </div>
        )}
        {socials.map((social) => {
          const Icon = social.Icon;
          return (
            <Link
              href={social.link}
              key={social.link}
              aria-label={social.label}
              target="_blank"
            >
              <Icon className="w-5 h-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
