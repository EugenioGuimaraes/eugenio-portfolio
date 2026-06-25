"use client";

import { useEffect, useState } from "react";
import Seal from "./Seal";

const FULL_TEXT = "engenheiro de sistemas distribuídos.";

export default function Hero() {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTyped(FULL_TEXT.slice(0, i));
      if (i >= FULL_TEXT.length) clearInterval(interval);
    }, 38);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="topo"
      className="relative mx-auto flex min-h-screen max-w-content flex-col justify-center px-8 pb-24 pt-32"
    >
      <div className="absolute right-8 top-10 opacity-55">
        <Seal size={44} />
      </div>

      <p className="mb-6 font-mono text-[13px] uppercase tracking-[0.2em] text-gold">
        Brasília, Brasil
      </p>

      <h1 className="mb-7 max-w-[880px] font-serif text-[clamp(40px,7vw,76px)] font-semibold leading-[1.05] tracking-[-0.02em] text-ink">
        Eugenio Lobo projeta e constrói{" "}
        <span className="italic text-gold">sistemas</span> que funcionam de verdade.
      </h1>

      <p className="mb-10 min-h-[1.6em] font-mono text-base text-inkMuted">
        <span className="text-steel">&gt; </span>
        {typed}
        <span className="cursor-blink ml-1 inline-block h-4 w-2 bg-gold align-middle" />
      </p>

      <p className="mb-12 max-w-[620px] font-sans text-[17px] leading-[1.7] text-inkMuted">
        Full Stack Developer e Software &amp; Data Engineer, com experiência em
        desenvolvimento backend, pipelines de dados potencializados por IA e
        infraestrutura em nuvem. Atuo com Python, Go, JavaScript, TypeScript e .NET,
        sempre priorizando arquitetura sólida e código de fácil manutenção.
      </p>

      <div className="flex flex-wrap gap-4">
        <a
          href="#experiencia"
          className="rounded-sm bg-gold px-7 py-[0.85rem] font-sans text-sm font-medium tracking-wide text-bg"
        >
          Ver experiência
        </a>
        <a
          href="#contato"
          className="rounded-sm border border-hairline px-7 py-[0.85rem] font-sans text-sm font-medium tracking-wide text-ink"
        >
          Falar comigo
        </a>
      </div>
    </section>
  );
}
