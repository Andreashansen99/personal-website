export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto w-full max-w-2xl px-6 py-8 text-sm text-zinc-400">
      <p>
        <span aria-hidden="true" className="text-zinc-600">
          #{" "}
        </span>
        &copy; {year} Andreas Hansen
      </p>
    </footer>
  );
}
