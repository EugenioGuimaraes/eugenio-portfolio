import RevealSection from "./RevealSection";
import SectionLabel from "./SectionLabel";
import { CONTACT_LINKS } from "@/lib/content";

export default function Contato() {
  return (
    <RevealSection id="contato" className="pb-40">
      <SectionLabel index="V." title="Contato" />
      <p className="mb-12 max-w-[680px] font-serif text-[clamp(26px,4vw,38px)] leading-[1.4] text-ink">
        Se quiser trocar uma ideia sobre arquitetura de sistemas, dados ou engenharia de
        software, <span className="italic text-gold">vamos conversar.</span>
      </p>
      <div className="flex flex-col">
        {CONTACT_LINKS.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="flex items-baseline justify-between border-t border-hairline py-[1.1rem] no-underline"
          >
            <span className="font-mono text-[13px] uppercase tracking-wide text-goldDim">
              {l.label}
            </span>
            <span className="text-[17px] text-ink">{l.value}</span>
          </a>
        ))}
        <div className="border-t border-hairline" />
      </div>
    </RevealSection>
  );
}
