import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/Andreashansen99",
    external: true,
    Icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/andreasostergaardhansen/",
    external: true,
    Icon: LinkedinIcon,
  },
  {
    label: "Email",
    href: "mailto:andreashansen27@gmail.com",
    external: false,
    Icon: MailIcon,
  },
];

export default function Links() {
  return (
    <nav aria-label="Profile links" className="flex flex-wrap gap-3 py-8">
      {links.map(({ label, href, external, Icon }) => (
        <a
          key={label}
          href={href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-indigo-600 hover:bg-indigo-50 hover:text-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-indigo-400 dark:hover:bg-indigo-950/40 dark:hover:text-indigo-400"
        >
          <Icon className="h-4 w-4" />
          {label}
        </a>
      ))}
    </nav>
  );
}
