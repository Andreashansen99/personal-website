import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Links from "@/components/Links";
import TrendLine from "@/components/TrendLine";

export default function Home() {
  return (
    <>
      <TrendLine />
      <main
        id="main-content"
        className="flex w-full max-w-2xl flex-1 flex-col justify-center gap-8 px-6 py-16 sm:px-10 sm:py-24 md:ml-[8vw] lg:ml-[12vw]"
      >
        <Hero />
        <Links />
        <a
          href="/cv.pdf"
          download
          className="inline-flex w-fit items-center border border-ink px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:bg-accent hover:text-on-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Download CV
        </a>
      </main>
      <Footer />
    </>
  );
}
