import RevealSection from "./RevealSection";
import SectionLabel from "./SectionLabel";
import { SKILL_GROUPS } from "@/lib/content";

export default function Skills() {
  return (
    <RevealSection id="skills">
      <SectionLabel index="III." title="Stack técnica" />
      <div className="grid grid-cols-1 gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((group) => (
          <div key={group.title} className="bg-bgRaised p-8">
            <p className="mb-4 font-mono text-xs uppercase tracking-wide text-goldDim">
              {group.title}
            </p>
            <div className="flex flex-wrap gap-2.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-sm border border-hairline bg-bgCard px-3.5 py-1.5 font-sans text-sm text-ink"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </RevealSection>
  );
}
