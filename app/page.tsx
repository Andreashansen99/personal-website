import { DownloadIcon } from "@/components/icons";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Links from "@/components/Links";

export default function Home() {
  return (
    <>
      <main
        id="main-content"
        className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center px-6 py-12 sm:py-20"
      >
        <div className="rounded-3xl border border-zinc-200 bg-surface p-8 shadow-sm shadow-zinc-950/5 sm:p-12 dark:border-zinc-800">
          <Hero />
          <Links />
          <a
            href="/cv.pdf"
            download
            className="inline-flex w-fit items-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <DownloadIcon className="h-4 w-4" />
            Download CV
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
