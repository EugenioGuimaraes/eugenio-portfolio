import RevealSection from "./RevealSection";
import SectionLabel from "./SectionLabel";
import { CONTACT_LINKS } from "@/lib/content";

export default function Contato() {
  return (
    <RevealSection id="contato" className="pb-40">
      <SectionLabel index="06" title="Contato" />

      <p className="-mt-6 mb-10 font-mono text-sm text-muted">
        &gt; Deseja iniciar uma sessão?
      </p>

      <a
        href="mailto:eugenio.guimaraes1112@gmail.com"
        className="group mb-12 inline-block font-mono text-2xl font-extrabold tracking-tighter text-fg transition-colors hover:text-phosphor md:text-4xl"
      >
        <span className="underline decoration-phosphor/30 decoration-2 underline-offset-8 group-hover:decoration-phosphor terminal-glow-strong">
          eugenio.guimaraes1112@gmail.com
        </span>
        <span className="ml-2 inline-block animate-blink text-phosphor">_</span>
      </a>

      <p className="mb-10 max-w-md text-sm text-fg/60">
        Aberto para novas oportunidades, consultorias de arquitetura ou só
        para falar sobre sistemas distribuídos às 2h da manhã.
      </p>

      <div className="flex flex-col border-t border-line">
        {CONTACT_LINKS.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.label !== "email" ? "_blank" : undefined}
            rel={l.label !== "email" ? "noopener noreferrer" : undefined}
            className="flex items-baseline justify-between border-b border-line py-4 no-underline transition-colors hover:text-phosphor"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-gold">
              {l.label}
            </span>
            <span className="font-mono text-sm text-fg/80">{l.value}</span>
          </a>
        ))}
      </div>
    </RevealSection>
  );
}
