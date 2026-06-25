import RevealSection from "./RevealSection";
import SectionLabel from "./SectionLabel";
import { STATS } from "@/lib/content";

export default function Sobre() {
  return (
    <RevealSection id="sobre">
      <SectionLabel index="I." title="Sobre" />
      <div className="grid grid-cols-1 items-start gap-14 sm:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="mb-6 font-serif text-[22px] leading-[1.6] text-ink">
            Comecei resolvendo problemas de negócio em sistemas corporativos .NET, e hoje
            trabalho na camada onde dados, infraestrutura e inteligência artificial se
            encontram.
          </p>
          <p className="mb-5 font-sans text-base leading-[1.8] text-inkMuted">
            Projeto e mantenho serviços distribuídos em Python e Go, pipelines de dados
            potencializados por IA e infraestrutura em nuvem para sistemas de
            inteligência de mercado e precificação. Também tenho experiência sólida com
            JavaScript e TypeScript no ecossistema Node.js, incluindo Next.js e Nest.js,
            além de Django no ecossistema Python.
          </p>
          <p className="mb-5 font-sans text-base leading-[1.8] text-inkMuted">
            Antes disso, trabalhei com sistemas corporativos .NET voltados a
            conformidade e integridade de dados, e dei meus primeiros passos
            profissionais como desenvolvedor full-stack e instrutor, ensinando
            fundamentos de programação para novos desenvolvedores.
          </p>
          <p className="font-sans text-base leading-[1.8] text-inkMuted">
            Sou movido por sistemas bem desenhados, seja em produção ou em qualquer
            outro contexto que peça estrutura e atenção a detalhes (incluindo, confesso,
            a campanha de D&amp;D que mestro nas horas vagas).
          </p>
        </div>

        <div className="flex flex-col gap-px border border-hairline bg-hairline">
          {STATS.map((s) => (
            <div key={s.label} className="bg-bgRaised px-7 py-6">
              <p className="mb-1 font-serif text-2xl font-medium text-gold">{s.value}</p>
              <p className="font-mono text-xs uppercase tracking-wide text-inkFaint">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
