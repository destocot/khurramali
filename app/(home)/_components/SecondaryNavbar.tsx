import Link from "next/link";

const leftLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/#contact",
    label: "Contact",
  },
  {
    href: "/#projects",
    label: "Projects",
  },
  {
    href: "/#skills",
    label: "Skills",
  },
];

const rightLinks = [
  {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "/podcast",
    label: "Podcast",
  },
  {
    href: "/poetry",
    label: "Poetry",
  },
];

export const SecondaryNavbar = () => {
  return (
    <nav className="pt-5 pb-10 flex justify-between items-center animate-move-down text-sm">
      <ul className="flex gap-3">
        {leftLinks.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-gray-300 hover:text-green-500"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="flex gap-3">
        {rightLinks.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-gray-300 hover:text-green-500"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
