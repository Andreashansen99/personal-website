import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import SalaryEstimator from "@/components/SalaryEstimator";

export const metadata: Metadata = {
  title: "EU Tech Salary Estimator — Andreas Hansen",
  description:
    "Estimate what a tech job pays in Austria, France, Germany, Poland or the UK, from thousands of real job ads.",
};

export default function SalaryEstimatorPage() {
  return (
    <>
      <main
        id="main-content"
        className="flex w-full max-w-2xl flex-1 flex-col gap-8 px-6 py-16 sm:px-10 sm:py-24 md:ml-[8vw] lg:ml-[12vw]"
      >
        <Link
          href="/"
          className="w-fit text-base font-medium text-ink underline decoration-rule decoration-2 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          &larr; Home
        </Link>

        <header className="flex flex-col gap-3">
          <h1 className="font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            EU tech salary estimator
          </h1>
          <p className="max-w-[58ch] text-base leading-relaxed text-muted">
            What does a tech job pay in Austria, France, Germany, Poland or the UK? An
            estimate from thousands of real job ads, combining the ad text with details like
            country and region.
          </p>
        </header>

        <SalaryEstimator />
      </main>
      <Footer />
    </>
  );
}
