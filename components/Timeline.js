import RevealSection from "./RevealSection";
import SectionLabel from "./SectionLabel";
import { EXPERIENCES } from "@/lib/content";

export default function Timeline() {
  return (
    <RevealSection id="experiencia">
      <SectionLabel index="02" title="Trajetória_Técnica" />

      <div className="space-y-10">
        {EXPERIENCES.map((exp, i) => (
          <div
            key={exp.role}
            className="border border-line bg-card/30 p-6 transition-colors hover:border-phosphor/40"
          >
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs text-gold">{exp.period}</span>
              {i === 0 && (
                <span className="border border-phosphor/50 px-2 py-px font-mono text-[11px] tracking-wide text-phosphor">
                  [PRESENTE]
                </span>
              )}
            </div>
            <h3 className="mb-3 font-mono text-lg font-bold uppercase tracking-wide text-fg">
              {exp.role}
            </h3>
            <p className="mb-4 max-w-[640px] text-sm leading-relaxed text-fg/70">
              {exp.desc}
            </p>
            <ul className="flex flex-wrap gap-2">
              {exp.tags.map((t) => (
                <li
                  key={t}
                  className="border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-fg/70"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </RevealSection>
  );
}
