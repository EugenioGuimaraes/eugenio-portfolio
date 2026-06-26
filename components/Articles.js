import RevealSection from "./RevealSection";
import SectionLabel from "./SectionLabel";
import { ARTICLES } from "@/lib/content";

export default function Articles() {
  return (
    <RevealSection id="artigos">
      <SectionLabel index="IV." title="Artigos" />
      <p className="-mt-6 mb-12 max-w-[520px] font-sans text-[15px] text-inkFaint">
        Escrevo semanalmente sobre engenharia de sistemas, distributed systems e os
        problemas que me fazem perder o sono — no bom sentido.
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {ARTICLES.map((article) => (
          <a
            key={article.url}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col border border-hairline bg-bgRaised no-underline transition-colors duration-200 hover:border-gold"
          >
            {article.cover && (
              <div className="overflow-hidden">
                <img
                  src={article.cover}
                  alt=""
                  className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
            )}
            <div className="flex flex-1 flex-col p-6">
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs text-inkFaint">{article.date}</span>
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-sm border border-hairline px-2 py-px font-mono text-[11px] text-inkFaint"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="mb-3 font-serif text-[1.1rem] font-medium leading-[1.4] text-ink transition-colors duration-200 group-hover:text-gold">
                {article.title}
              </h3>

              <p className="mb-5 font-sans text-sm leading-[1.75] text-inkMuted">
                {article.excerpt}
              </p>

              <div className="mt-auto flex items-center gap-1.5 font-mono text-xs text-goldDim">
                <span>Ler no LinkedIn</span>
                <span aria-hidden="true">→</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </RevealSection>
  );
}
