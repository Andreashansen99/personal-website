export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full max-w-2xl px-6 py-10 text-sm text-muted sm:px-10 md:ml-[8vw] lg:ml-[12vw]">
      <p>&copy; {year} Andreas Hansen</p>
    </footer>
  );
}
