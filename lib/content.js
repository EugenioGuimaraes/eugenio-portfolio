export const NAV_LINKS = [
  { href: "#sobre",      label: "/sobre" },
  { href: "#experiencia", label: "/experiencia" },
  { href: "#stack",      label: "/stack" },
  { href: "#projetos",   label: "/projetos" },
  { href: "#artigos",    label: "/artigos" },
  { href: "#contato",    label: "/contato" },
];

export const STATS = [
  { label: "Anos de XP", value: "4+" },
  { label: "Uptime Pessoal",  value: "99.9%" },
  { label: "Linhas de Café", value: "8k+" },
  { label: "Sessões Mestradas", value: "40+" },
];

// ── ASCII art para projetos ─────────────────────────────────────────

const PRICEOPS_ART = `  ┌──────────────────────────────────────────────┐
  │  PRICEOPS  ▸  market_intelligence.engine    │
  ├──────────────────────────────────────────────┤
  │  ● produtos monitorados   ▓▓▓▓▓▓▓▓  18.2k   │
  │  ● latência de ingestão   ▓▓▓▓▓▓░░   98ms   │
  │  ● pipelines ativos       ▓▓▓▓▓▓▓▓     12   │
  │                                              │
  │    stream: ████████████████░░░░  79%         │
  │    workers: 6  ·  erros: 0.01%  ·  sla: ✓   │
  └──────────────────────────────────────────────┘`;

const DATAFLOW_ART = `  $ pipeline run --env=prod --watch
  ──────────────────────────────────────────────
  [10:41:02] ✓ extract.http          ·  14.2s
  [10:41:16] ✓ transform.normalize   ·   8.1s
  [10:41:24] ✓ enrich.ai_layer       ·  22.8s
  [10:41:47] ✓ load.postgres         ·   3.1s
  ──────────────────────────────────────────────
   records: 1.24M  ·  p95: 37ms  ·  sla: ✓`;

// ── Projetos ────────────────────────────────────────────────────────
// Atualize name, version, description e tags com seus projetos reais.

export const PROJECTS = [
  {
    name: "PriceOps",
    version: "v2.1.0",
    description:
      "Motor de inteligência de mercado para precificação dinâmica. Coleta e processa dados de concorrentes em tempo real com latência sub-100ms.",
    tags: ["Python", "Go", "GCP", "PostgreSQL", "Kubernetes"],
    asciiArt: PRICEOPS_ART,
  },
  {
    name: "DataFlow",
    version: "v1.4.0",
    description:
      "Pipeline de dados com IA embarcada para enriquecimento e análise em escala. ETL distribuído com SLA de sub-40ms no p95.",
    tags: ["Python", "Kafka", "PostgreSQL", "Docker", "IA aplicada"],
    asciiArt: DATAFLOW_ART,
  },
];

// ── Experiência ──────────────────────────────────────────────────────

export const EXPERIENCES = [
  {
    period: "fase atual",
    role: "Sistemas distribuídos, dados e IA",
    desc:
      "Projeto e mantenho microsserviços em Python e Go, construo pipelines de dados com IA embarcada e gerencio infraestrutura cloud (GCP/AWS) para sistemas de inteligência de mercado e precificação dinâmica.",
    tags: ["Python", "Go", "Django", "TypeScript", "Node.js", "GCP", "AWS", "IA aplicada"],
  },
  {
    period: "fase anterior",
    role: "Sistemas corporativos .NET",
    desc:
      "Desenvolvimento de sistemas ERP e corporativos em ASP.NET (WebForms, MVC, Web API), integrações SOAP/WCF, modelagem com Entity Framework e foco em integridade de dados e conformidade regulatória.",
    tags: ["C#", ".NET", "ASP.NET MVC", "Web API", "SOAP/WCF", "Entity Framework", "SQL Server"],
  },
  {
    period: "origem",
    role: "Full-stack e ensino técnico",
    desc:
      "Início na carreira com desenvolvimento full-stack e contribuições open-source, atuando em paralelo como instrutor técnico   ensinando lógica de programação e desenvolvimento web para dezenas de desenvolvedores.",
    tags: ["JavaScript", "TypeScript", "React", "Node.js", "Ensino técnico"],
  },
];

// ── Stack ────────────────────────────────────────────────────────────

export const STACK = [
  { name: "Python / Django",       level: "EXCELLENT"  },
  { name: "Go (Golang)",           level: "EXCELLENT"  },
  { name: "C# / .NET",             level: "EXCELLENT"  },
  { name: "TypeScript / Node.js",  level: "EXCELLENT"  },
  { name: "Nest.JS / Next.js",     level: "EXCELLENT"  },
  { name: "GCP / AWS / Docker",    level: "PROFICIENT" },
  { name: "Kubernetes / K8s",      level: "PROFICIENT" },
  { name: "D&D 5.5e",              level: "LEARNING"   },
];

// ── Artigos ──────────────────────────────────────────────────────────
// Adicione um objeto por artigo novo publicado no LinkedIn.

export const ARTICLES = [
  {
    title:
      "Por que indexar a internet é um dos problemas mais difíceis em Distributed Systems",
    excerpt:
      "Toda vez que você pesquisa algo no Google, uma máquina gigantesca trabalha nos bastidores. Web crawling parece simples   seguir links   mas é um dos casos mais ricos em system design.",
    date: "24 jun 2026",
    tags: ["Distributed Systems", "System Design", "Web Crawler"],
    cover:
      "https://media.licdn.com/dms/image/v2/D4D12AQEcbq6zARau8g/article-cover_image-shrink_720_1280/B4DZ73AKETI8AQ-/0/1782260474930?e=2147483647&v=beta&t=1k9QVskmyOdnvOuQaS9wvkayxGk7zQHAc5j0iyvmrlI",
    url: "https://www.linkedin.com/pulse/por-que-indexar-internet-%C3%A9-um-dos-problemas-mais-em-lobo-guimaraes-huhff/",
  },
];

// ── Contato ──────────────────────────────────────────────────────────

export const CONTACT_LINKS = [
  { label: "email",    value: "eugenio.guimaraes1112@gmail.com",  href: "mailto:eugenio.guimaraes1112@gmail.com" },
  { label: "linkedin", value: "/in/eugenio-guimaraes/",           href: "https://www.linkedin.com/in/eugenio-guimaraes/" },
  { label: "github",   value: "/EugenioGuimaraes",                href: "https://github.com/EugenioGuimaraes" },
];
