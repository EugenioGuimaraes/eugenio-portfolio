import RevealSection from "./RevealSection";
import SectionLabel from "./SectionLabel";
import { ARTICLES } from "@/lib/content";

export default function Articles() {
  return (
    <RevealSection id="artigos">
      <SectionLabel index="05" title="Artigos_Recentes" />

      <p className="-mt-6 mb-10 font-mono text-sm text-muted">
        $ ls ~/linkedin/articles/   publicações semanais sobre sistemas, dados e afins.
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {ARTICLES.map((article) => (
          <a
            key={article.url}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col border border-line bg-card/30 no-underline transition-colors hover:border-phosphor/60"
          >
            {article.cover && (
              <div className="overflow-hidden">
                <img
                  src={article.cover}
                  alt=""
                  className="h-44 w-full object-cover opacity-80 transition-all duration-500 group-hover:opacity-100 group-hover:scale-[1.02]"
                />
              </div>
            )}
            <div className="flex flex-1 flex-col p-6">
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs text-muted">{article.date}</span>
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-line px-2 py-px font-mono text-[10px] uppercase tracking-wider text-fg/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="mb-3 font-mono text-base font-bold leading-snug text-fg transition-colors group-hover:text-phosphor">
                {article.title}
              </h3>

              <p className="mb-5 text-sm leading-relaxed text-fg/60">
                {article.excerpt}
              </p>

              <div className="mt-auto flex items-center gap-1.5 font-mono text-xs text-gold">
                <span>→ ler no LinkedIn</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </RevealSection>
  );
}
