export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mx-auto max-w-content px-6 pb-12">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-line pt-8 font-mono text-[10px] uppercase tracking-widest text-muted md:flex-row">
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-phosphor shadow-[0_0_8px_rgba(62,224,122,0.8)]" />
          <span>system_online · build_{year}</span>
        </div>
        <div className="flex gap-6">
          <a href="https://github.com/EugenioGuimaraes" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-phosphor">
            github
          </a>
          <a href="https://www.linkedin.com/in/eugenio-guimaraes/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-phosphor">
            linkedin
          </a>
        </div>
        <div>© {year}   todos os bits reservados</div>
      </div>
    </footer>
  );
}
