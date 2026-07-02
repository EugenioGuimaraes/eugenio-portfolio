import RevealSection from "./RevealSection";
import SectionLabel from "./SectionLabel";
import { EXPERIENCES } from "@/lib/content";

export default function Timeline() {
  return (
    <RevealSection id="experiencia">
      <SectionLabel index="02" title="Trajetória_Técnica" />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {EXPERIENCES.map((exp, i) => (
          <div
            key={exp.role}
            className="flex flex-col border border-line bg-card/30 p-5 transition-colors hover:border-phosphor/40"
          >
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span className="font-mono text-[11px] text-gold">{exp.period}</span>
              {i === 0 && (
                <span className="border border-phosphor/50 px-2 py-px font-mono text-[10px] tracking-wide text-phosphor">
                  [PRESENTE]
                </span>
              )}
            </div>
            <h3 className="mb-2 font-mono text-base font-bold uppercase tracking-wide text-fg">
              {exp.role}
            </h3>
            <p className="mb-4 flex-1 text-sm leading-relaxed text-fg/70">
              {exp.desc}
            </p>
            <ul className="flex flex-wrap gap-1.5">
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
