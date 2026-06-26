import RevealSection from "./RevealSection";
import SectionLabel from "./SectionLabel";
import { STACK } from "@/lib/content";

const levelColor = {
  EXCELLENT:  "text-phosphor",
  PROFICIENT: "text-gold",
  LEARNING:   "text-muted",
};

export default function Skills() {
  return (
    <RevealSection id="stack">
      <SectionLabel index="03" title="Main_Processors" />

      <div className="border border-line bg-card/40 p-6 md:p-8">
        <div className="mb-6 flex items-center justify-between border-b border-line pb-3">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-gold">
            Core Stack
          </span>
          <span className="font-mono text-[10px] text-muted">
            {STACK.length} processors
          </span>
        </div>
        <ul className="space-y-3 font-mono text-sm">
          {STACK.map((s) => (
            <li
              key={s.name}
              className="flex items-center justify-between border-b border-line/40 pb-2 last:border-b-0"
            >
              <span className="text-fg/85">{s.name}</span>
              <span className={levelColor[s.level] ?? "text-muted"}>
                [{s.level}]
              </span>
            </li>
          ))}
        </ul>
      </div>
    </RevealSection>
  );
}
