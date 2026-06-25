import RevealSection from "./RevealSection";
import SectionLabel from "./SectionLabel";
import { EXPERIENCES } from "@/lib/content";

export default function Timeline() {
  return (
    <RevealSection id="experiencia">
      <SectionLabel index="II." title="Trajetória técnica" />
      <p className="-mt-6 mb-12 max-w-[520px] font-sans text-[15px] text-inkFaint">
        A evolução técnica, em ordem cronológica, com cada fase em seu próprio terreno.
      </p>

      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute bottom-2 left-[7px] top-2 w-px bg-hairline"
        />
        {EXPERIENCES.map((exp, i) => (
          <div
            key={exp.role}
            className={`relative grid grid-cols-[16px_1fr] gap-7 ${
              i === EXPERIENCES.length - 1 ? "" : "mb-12"
            }`}
          >
            <div
              className={`z-[1] mt-1 h-[15px] w-[15px] rounded-full border-2 bg-bg ${
                i === 0 ? "border-gold" : "border-steel"
              }`}
            />
            <div>
              <div className="mb-1.5 flex flex-wrap items-baseline gap-4">
                <span className="font-mono text-xs tracking-wide text-gold">
                  {exp.period}
                </span>
                {i === 0 && (
                  <span className="rounded-[1px] border border-wine px-2 py-px font-mono text-[11px] tracking-wide text-wine">
                    presente
                  </span>
                )}
              </div>
              <h3 className="mb-3 font-serif text-xl font-medium text-ink">{exp.role}</h3>
              <p className="mb-4 max-w-[640px] font-sans text-[15px] leading-[1.7] text-inkMuted">
                {exp.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-sm border border-hairline px-2.5 py-[3px] font-mono text-[11.5px] text-inkFaint"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </RevealSection>
  );
}
