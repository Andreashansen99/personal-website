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
      <p className="text-xl text-zinc-400 sm:text-2xl">IT &amp; Business Student</p>
      <p className="max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
        Currently studying IT and Business, with a growing focus on BI and
        data science &mdash; I like turning raw data into dashboards and
        analysis that actually explain what&rsquo;s going on.
      </p>
    </section>
  );
}
