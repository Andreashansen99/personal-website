export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto w-full max-w-2xl px-6 py-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
      <p>&copy; {year} Andreas Hansen</p>
    </footer>
  );
}
