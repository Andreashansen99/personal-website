import Link from "next/link";

const projects = [
  {
    title: "EU tech salary estimator",
    description:
      "Predicts what a tech job pays in Austria, France, Germany, Poland and the UK from the job-ad text plus details like country and region. Try it with your own job title.",
    href: "/projects/salary-estimator",
    tags: ["Python", "NLP", "LightGBM", "FastAPI"],
  },
];

export default function Projects() {
  return (
    <section aria-labelledby="projects-heading" className="flex flex-col gap-4">
      <h2
        id="projects-heading"
        className="font-serif text-2xl font-semibold tracking-tight text-ink"
      >
        Projects
      </h2>
      <ul className="flex flex-col gap-4">
        {projects.map(({ title, description, href, tags }) => (
          <li key={href}>
            <Link
              href={href}
              className="group flex flex-col gap-2 border border-rule p-5 transition-colors hover:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <span className="text-lg font-semibold text-ink transition-colors group-hover:text-accent">
                {title} <span aria-hidden="true">&rarr;</span>
              </span>
              <span className="max-w-[58ch] text-base leading-relaxed text-muted">
                {description}
              </span>
              <span className="text-sm text-muted">{tags.join(" · ")}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
