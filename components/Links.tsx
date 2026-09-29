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
    <div className="flex flex-col gap-3 py-4">
      <p className="text-sm text-accent">
        <span aria-hidden="true">$ </span>ls ./links
      </p>
      <nav aria-label="Profile links" className="flex flex-col gap-2">
        {links.map(({ label, href, external }) => (
          <a
            key={label}
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="group inline-flex w-fit items-baseline gap-2 text-base text-zinc-300 transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <span aria-hidden="true" className="text-zinc-600 group-hover:text-accent">
              →
            </span>
            {label}
          </a>
        ))}
      </nav>
    </div>
  );
}
