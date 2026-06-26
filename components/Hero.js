"use client";

import { useEffect, useState } from "react";

const SUBTITLE = "> engenheiro de sistemas distribuídos";

export default function Hero() {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTyped(SUBTITLE.slice(0, i));
      if (i >= SUBTITLE.length) clearInterval(interval);
    }, 38);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="mb-28 pt-28">
      <p className="mb-4 font-mono text-sm font-bold uppercase tracking-[0.25em] text-phosphor terminal-glow">
        {typed}
        {typed.length < SUBTITLE.length && (
          <span className="animate-blink ml-1 inline-block h-[0.9em] w-[0.5ch] translate-y-[0.1em] bg-phosphor align-baseline" />
        )}
      </p>

      <h1 className="mb-8 font-mono text-5xl font-extrabold tracking-tighter terminal-glow-strong md:text-7xl lg:text-8xl">
        EUGENIO
        <br />
        GUIMARAES
        <span className="animate-blink ml-3 inline-block h-[0.7em] w-[0.5ch] translate-y-[0.05em] bg-phosphor align-baseline" />
      </h1>

      <div className="max-w-2xl">
        <p className="text-pretty text-lg leading-relaxed text-fg/80 md:text-xl">
          Construindo sistemas que escalam e sobrevivem à produção com obsessão
          por arquitetura sólida e performance bruta.{" "}
          <span className="font-mono italic text-gold">
            // backend first, sempre.
          </span>
        </p>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href="#projetos"
          className="group inline-flex items-center gap-3 border border-phosphor bg-phosphor/10 px-5 py-2.5 font-mono text-sm font-bold uppercase tracking-wider text-phosphor transition-all hover:bg-phosphor hover:text-bg hover:shadow-[0_0_24px_rgba(62,224,122,0.5)]"
        >
          <span>./ver_projetos</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </a>
        <a
          href="#contato"
          className="inline-flex items-center gap-3 border border-line px-5 py-2.5 font-mono text-sm uppercase tracking-wider text-fg/70 transition-colors hover:border-fg hover:text-fg"
        >
          cat contato.txt
        </a>
      </div>
    </header>
  );
}
