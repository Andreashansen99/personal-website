import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Links from "@/components/Links";

export default function Home() {
  return (
    <>
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col px-6">
        <Hero />
        <Links />
        <a
          href="/cv.pdf"
          download
          className="inline-flex w-fit items-center gap-2 rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-semibold text-zinc-50 transition-colors hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200 dark:focus-visible:outline-zinc-50"
        >
          Download CV
        </a>
      </main>
      <Footer />
    </>
  );
}
