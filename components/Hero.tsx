export default function Hero() {
  return (
    <section className="flex flex-col gap-4 py-16 sm:py-24">
      <h1 className="text-balance text-4xl font-bold tracking-tight text-zinc-950 sm:text-6xl dark:text-zinc-50">
        Andreas Hansen
      </h1>
      <p className="text-xl text-zinc-600 sm:text-2xl dark:text-zinc-400">
        BI &amp; Data Analyst
      </p>
      <p className="max-w-2xl text-base text-zinc-700 sm:text-lg dark:text-zinc-300">
        I turn raw data into decisions &mdash; building dashboards, pipelines,
        and analysis that help teams see what&rsquo;s actually happening in
        their business.
      </p>
    </section>
  );
}
