export default function Hero() {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xl font-semibold text-white">
          AH
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Andreas Hansen
          </h1>
          <span className="inline-flex w-fit items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
            IT &amp; Business Student
          </span>
        </div>
      </div>
      <p className="max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
        Currently studying IT and Business, with a growing focus on BI and
        data science &mdash; I like turning raw data into dashboards and
        analysis that actually explain what&rsquo;s going on.
      </p>
    </section>
  );
}
