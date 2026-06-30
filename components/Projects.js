import RevealSection from "./RevealSection";
import SectionLabel from "./SectionLabel";
import { PROJECTS } from "@/lib/content";

export default function Projects() {
  return (
    <RevealSection id="projetos">
      <SectionLabel index="04" title="Projetos_Selecionados" />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {PROJECTS.map((project) => (
          <article
            key={project.name}
            className="group cursor-default"
          >
            <div className="relative mb-5 overflow-hidden border border-line bg-card/30 transition-all group-hover:border-phosphor/60">
              <pre
                aria-hidden="true"
                className="aspect-video w-full overflow-hidden p-4 font-mono text-[10px] leading-tight text-phosphor/70 transition-colors group-hover:text-phosphor"
              >
                {project.asciiArt}
              </pre>
              <div className="absolute right-3 top-3 border border-line bg-bg/80 px-2 py-1 font-mono text-[10px] text-fg/60">
                {project.version}
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>

            <h3 className="mb-2 font-mono text-xl font-bold transition-colors group-hover:text-phosphor">
              {project.name}
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-fg/60">
              {project.description}
            </p>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <ul className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-fg/70"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] uppercase tracking-wider text-phosphor/70 transition-colors hover:text-phosphor"
                >
                  ver código →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </RevealSection>
  );
}
