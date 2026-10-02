"use client";

import { useEffect, useId, useState } from "react";

// Address of the salary API. Override with NEXT_PUBLIC_SALARY_API_URL (e.g. in .env.local to test a local API).
const API_URL =
  process.env.NEXT_PUBLIC_SALARY_API_URL ?? "https://eu-salary-api.vercel.app";

type Options = {
  countries: { code: string; name: string }[];
  regions: Record<string, string[]>;
  model: {
    typical_error_pct: number;
    within_20_pct: number;
    ads: number;
    trained_on: string;
  };
};

type Result = {
  estimate: number;
  low: number;
  high: number;
  seniority_read_from_title: string;
};

const euro = new Intl.NumberFormat("en-IE", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

const field =
  "w-full border border-rule bg-transparent px-3 py-2.5 text-base text-ink placeholder:text-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

function Label({
  text,
  hint,
  children,
}: {
  text: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5 text-sm font-semibold text-ink">
      <span>
        {text}
        {hint ? <span className="font-normal text-muted"> ({hint})</span> : null}
      </span>
      {children}
    </label>
  );
}

export default function SalaryEstimator() {
  const regionListId = useId();
  const [options, setOptions] = useState<Options | null>(null);
  const [optionsFailed, setOptionsFailed] = useState(false);

  const [title, setTitle] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [contractType, setContractType] = useState("");
  const [contractTime, setContractTime] = useState("");
  const [description, setDescription] = useState("");

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(`${API_URL}/options`)
      .then((response) => {
        if (!response.ok) throw new Error(String(response.status));
        return response.json() as Promise<Options>;
      })
      .then((data) => {
        if (!cancelled) setOptions(data);
      })
      .catch(() => {
        if (!cancelled) setOptionsFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}/predict`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title.trim(),
          country,
          region: region.trim() || null,
          contract_type: contractType || null,
          contract_time: contractTime || null,
          description,
        }),
      });
      if (!response.ok) throw new Error(String(response.status));
      setResult((await response.json()) as Result);
    } catch {
      setResult(null);
      setError("Something went wrong. Check the job title and country, then try again.");
    } finally {
      setLoading(false);
    }
  }

  const regions = options?.regions[country] ?? [];
  const position = result && result.high > result.low
    ? ((result.estimate - result.low) / (result.high - result.low)) * 100
    : 50;

  return (
    <div className="flex flex-col gap-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5" autoComplete="off">
        <Label text="Job title">
          <input
            className={field}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            minLength={2}
            maxLength={200}
            placeholder="e.g. Senior Backend Developer"
          />
        </Label>

        <div className="grid gap-5 sm:grid-cols-2">
          <Label text="Country">
            <select
              className={field}
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
                setRegion("");
              }}
              required
              disabled={!options}
            >
              <option value="">
                {options ? "Choose a country" : optionsFailed ? "Unavailable" : "Loading…"}
              </option>
              {options?.countries.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.name}
                </option>
              ))}
            </select>
          </Label>
          <Label text="Region or city" hint="optional">
            <input
              className={field}
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              list={regionListId}
              maxLength={100}
              placeholder="e.g. Berlin"
            />
            <datalist id={regionListId}>
              {regions.map((r) => (
                <option key={r} value={r} />
              ))}
            </datalist>
          </Label>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Label text="Contract" hint="optional">
            <select
              className={field}
              value={contractType}
              onChange={(e) => setContractType(e.target.value)}
            >
              <option value="">Not specified</option>
              <option value="permanent">Permanent</option>
              <option value="contract">Fixed-term / contract</option>
            </select>
          </Label>
          <Label text="Hours" hint="optional">
            <select
              className={field}
              value={contractTime}
              onChange={(e) => setContractTime(e.target.value)}
            >
              <option value="">Not specified</option>
              <option value="full_time">Full-time</option>
              <option value="part_time">Part-time</option>
            </select>
          </Label>
        </div>

        <Label text="Job description" hint="optional: paste it for a better estimate">
          <textarea
            className={`${field} min-h-28 resize-y`}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={5000}
          />
        </Label>

        <button
          type="submit"
          disabled={loading || !options}
          className="inline-flex w-fit items-center border border-ink px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:bg-accent hover:text-on-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Estimating…" : "Estimate salary"}
        </button>
      </form>

      <div aria-live="polite">
        {optionsFailed && !options ? (
          <p role="alert" className="text-base text-ink">
            The estimator is not reachable right now. If it has been idle it may need a
            moment, so try reloading the page in a bit.
          </p>
        ) : null}
        {error ? (
          <p role="alert" className="text-base text-ink">
            {error}
          </p>
        ) : null}
        {result ? (
          <section aria-label="Estimate" className="flex flex-col gap-6 border border-rule p-6">
            <div className="flex flex-col gap-1">
              <p className="font-serif text-5xl font-semibold tracking-tight text-ink tabular-nums">
                {euro.format(result.estimate)}
              </p>
              <p className="text-sm text-muted">estimated gross pay per year</p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="relative h-1.5 bg-rule" aria-hidden="true">
                <div className="absolute inset-0 bg-accent opacity-30" />
                <div
                  className="absolute top-1/2 h-4 w-1 -translate-x-1/2 -translate-y-1/2 bg-accent"
                  style={{ left: `${position.toFixed(1)}%` }}
                />
              </div>
              <div className="flex justify-between text-sm text-ink tabular-nums">
                <span>
                  {euro.format(result.low)}
                  <span className="block text-xs text-muted">low end</span>
                </span>
                <span className="text-right">
                  {euro.format(result.high)}
                  <span className="block text-xs text-muted">high end</span>
                </span>
              </div>
            </div>
            <p className="text-sm text-muted">
              Most similar ads pay between these two figures. Seniority read from the
              title: <strong className="font-semibold text-ink">{result.seniority_read_from_title}</strong>.
            </p>
          </section>
        ) : null}
      </div>

      <details className="border-t border-rule pt-5 text-sm text-muted">
        <summary className="cursor-pointer font-semibold text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
          How reliable is this?
        </summary>
        <div className="mt-3 flex flex-col gap-3 leading-relaxed">
          {options ? (
            <p>
              Trained on {options.model.ads.toLocaleString("en")} job ads with stated
              salaries (last updated {options.model.trained_on}). On ads from companies
              the model had never seen, the typical error was about{" "}
              {Math.round(options.model.typical_error_pct)}%, and{" "}
              {Math.round(options.model.within_20_pct)}% of estimates landed within 20% of
              the advertised pay.
            </p>
          ) : null}
          <ul className="list-disc space-y-2 pl-5">
            <li>
              The range is an 80% band: about 8 in 10 similar ads fall inside it. It is wide
              on purpose, because pay for the same title varies a lot.
            </li>
            <li>
              Figures are gross yearly pay in euros, taken from <em>advertised</em>{" "}
              salaries. Real offers can differ, and bonuses and equity are not included.
            </li>
            <li>
              Sweden is not covered, because the job-ad source has no Swedish data.
              Estimates for very high-paying roles tend to come out low, and junior roles
              are the least reliable.
            </li>
            <li>
              Country, region and the wording of the title and description drive the
              estimate. Seniority is read from the title (Junior, Senior, Lead).
            </li>
          </ul>
          <p>
            Job-ad data from{" "}
            <a
              href="https://www.adzuna.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-ink underline decoration-rule decoration-2 underline-offset-4 hover:text-accent hover:decoration-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              The Adzuna API
            </a>
            . A personal, non-commercial project.
          </p>
        </div>
      </details>
    </div>
  );
}
