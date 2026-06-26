import RevealSection from "./RevealSection";
import SectionLabel from "./SectionLabel";
import { STATS } from "@/lib/content";

const STAT_IDS = ["#042", "#137", "#291", "#508"];

export default function Sobre() {
  return (
    <RevealSection id="sobre">
      {/* Stats strip */}
      <div className="mb-16 grid grid-cols-2 gap-3 md:grid-cols-4">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className="relative border border-line bg-card/40 p-4 transition-colors hover:border-phosphor/60"
          >
            <div className="absolute right-2 top-2 font-mono text-[9px] text-muted/60">
              {STAT_IDS[i]}
            </div>
            <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted">
              {stat.label}
            </div>
            <div className="font-mono text-3xl font-bold text-phosphor terminal-glow">
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      <SectionLabel index="01" title="Sobre_Mim.exe" />

      <div className="space-y-4 leading-relaxed text-fg/75">
        <p>
          Comecei depurando sistemas corporativos .NET com reguladores no
          pescoço. Hoje projeto a camada onde dados, infraestrutura e
          inteligência artificial se encontram para resolver problemas reais.{" "}
          <span className="font-mono text-gold">
              sem gambiarras, sem magia negra.
          </span>
        </p>
        <p>
          Projeto e mantenho microsserviços em Python e Go, pipelines de dados
          com IA embarcada e infraestrutura cloud (GCP/AWS) para sistemas de
          inteligência de mercado e precificação dinâmica. No ecossistema web,
          trabalho com Next.js e Nest.js (TypeScript) e Django (Python).
        </p>
        <p>
          Antes disso: sistemas ERP em .NET com WebForms, MVC e Web APIs, foco
          em conformidade e integridade de dados. E antes ainda, dev full-stack
          e instrutor técnico   ensinei lógica de programação pra dezenas de
          novos devs.
        </p>
        <p className="font-mono text-sm text-muted">
          <span className="text-phosphor">$</span> whoami{" "}
          <span className="text-fg/80">
            → backend engineer, distributed systems enjoyer, mestre de D&D nas horas vagas.
          </span>
        </p>
      </div>
    </RevealSection>
  );
}
