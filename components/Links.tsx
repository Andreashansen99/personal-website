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
    <nav aria-label="Profile links" className="flex flex-wrap gap-x-6 gap-y-2">
      {links.map(({ label, href, external }) => (
        <a
          key={label}
          href={href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="text-base font-medium text-ink underline decoration-rule decoration-2 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
