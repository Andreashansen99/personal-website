export default function Hero() {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="font-serif text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
          Andreas Hansen
        </h1>
        <p className="text-lg font-medium text-accent">Work in Progress</p>
      </div>

      <p className="max-w-[58ch] text-base leading-relaxed text-muted">
        Currently studying IT and Business, with a growing focus on BI and
        data science &mdash; I like turning raw data into dashboards and
        analysis that actually explain what&rsquo;s going on.
      </p>

      <div className="flex flex-col gap-3 border-t border-rule pt-6">
        <p className="max-w-[58ch] text-base leading-relaxed text-muted">
          Currently exploring SQL, dashboards, and statistical modeling.
        </p>
      </div>
    </section>
  );
}
