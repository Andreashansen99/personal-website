const links = [
  { label: "GitHub", href: "https://github.com/Andreashansen99", external: true },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/andreasostergaardhansen/",
    external: true,
  },
  { label: "Email", href: "mailto:andreashansen27@gmail.com", external: false },
];

export default function Links() {
  return (
    <nav aria-label="Profile links" className="flex flex-wrap gap-x-6 gap-y-2 py-4">
      {links.map(({ label, href, external }) => (
        <a
          key={label}
          href={href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="text-base font-medium text-zinc-700 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-950 hover:decoration-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 dark:text-zinc-300 dark:decoration-zinc-700 dark:hover:text-zinc-50 dark:hover:decoration-zinc-50 dark:focus-visible:outline-zinc-50"
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
