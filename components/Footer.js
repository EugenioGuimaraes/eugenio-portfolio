export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mx-auto max-w-content px-8 py-10">
      <p className="text-center font-mono text-xs tracking-wide text-inkFaint">
        Eugenio Lobo · Brasília, Brasil · {year}
      </p>
    </footer>
  );
}
