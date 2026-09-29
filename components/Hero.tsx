export default function Hero() {
  return (
    <section className="flex flex-col gap-4 py-16 sm:py-24">
      <p className="text-sm text-accent">
        <span aria-hidden="true">$ </span>whoami
      </p>
      <h1 className="text-balance text-4xl font-bold tracking-tight text-zinc-50 sm:text-6xl">
        Andreas Hansen
        <span aria-hidden="true" className="cursor-blink text-accent">
          _
        </span>
      </h1>
      <p className="text-xl text-zinc-400 sm:text-2xl">BI &amp; Data Analyst</p>
      <p className="max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
        I turn raw data into decisions &mdash; building dashboards, pipelines,
        and analysis that help teams see what&rsquo;s actually happening in
        their business.
      </p>
    </section>
  );
}
