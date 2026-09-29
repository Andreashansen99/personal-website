import Hero from "@/components/Hero";
import Links from "@/components/Links";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col px-6">
      <Hero />
      <Links />
    </main>
  );
}
