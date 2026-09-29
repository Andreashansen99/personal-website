import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Links from "@/components/Links";

export default function Home() {
  return (
    <>
      <main
        id="main-content"
        className="mx-auto flex w-full max-w-2xl flex-1 flex-col px-6"
      >
        <Hero />
        <Links />
        <a
          href="/cv.pdf"
          download
          className="mt-4 inline-flex w-fit items-center gap-1.5 border border-accent px-5 py-2.5 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <span aria-hidden="true">[</span>
          Download CV
          <span aria-hidden="true">]</span>
        </a>
      </main>
      <Footer />
    </>
  );
}
