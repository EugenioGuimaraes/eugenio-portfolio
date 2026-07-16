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

// -- ASCII art para projetos -------------------------------------------------

const AUTO_GARAGE_ART = `  ┌─────────────────────────────────────────────┐
  │  AUTO_GARAGE_SHOW  ▸  portal.antigomobile│
  ├─────────────────────────────────────────────┤
  │  ● veículos anunciados  ▓▓▓▓▓▓▓▓  2.4k   │
  │  ● eventos cadastrados  ▓▓▓▓░░░░    38   │
  │  ● clubes parceiros     ▓▓▓▓▓░░░    61   │
  │                                         │
  │  busca: marca · modelo · ano · estado   │
  │  ✓ next.js · on air · ramalhostudio     │
  └─────────────────────────────────────────────┘`;

const CRAWLER_ART = `  $ crawler run --targets=52 --workers=16
  ──────────────────────────────────────────
  [✓] parse.html        18.2k  paginas/h
  [✓] extract.prices    99.4%  precisao
  [✓] dedup.pipeline    0.01%  colisoes
  [·] proxy.rotate      ativo  pool=48
  ──────────────────────────────────────────
   concorrentes: 52  ·  latencia: 98ms
   workers: 16  ·  uptime: 99.9%`;

const PRICE_INTEL_ART = `  ┌────────────────────────────────────────────┐
  │  PRICE_INTEL  ▸  market_intelligence    │
  ├────────────────────────────────────────────┤
  │  produtos monitorados  ▓▓▓▓▓▓▓▓  18.2k  │
  │  margem calculada      ▓▓▓▓▓░░░   +12%  │
  │  alertas disparados    ▓▓░░░░░░     847 │
  │                                        │
  │  pipeline: GCP · Python · Go · Redis   │
  │  precificacao dinamica em tempo real   │
  └────────────────────────────────────────────┘`;

const WORKOUT_ART = `  ┌───────────────────────────────────────────┐
  │  WORKOUT_TRACKER  ▸  api.nestjs       │
  ├───────────────────────────────────────────┤
  │  ▸ POST /auth/login       200 · 18ms  │
  │  ▸ POST /workouts         201 · 31ms  │
  │  ▸ GET  /workouts/stats   200 · 9ms   │
  │                                       │
  │  weekly_vol  ▓▓▓▓▓▓▓▓░░  4.200kg       │
  │  streak      ▓▓▓▓▓▓░░░░  6 days        │
  │  ✓ JWT · refresh_token rotation       │
  └───────────────────────────────────────────┘`;

// -- Projetos ----------------------------------------------------------------

export const PROJECTS = [
  {
    name: "Auto Garage Show",
    version: "freelance",
    description:
      "Portal de antigomobilismo com busca avançada de veículos, eventos e clubes por marca, modelo, ano e estado. Desenvolvido para a Ramalho Studios.",
    tags: ["Next.js", "TypeScript", "React"],
    asciiArt: AUTO_GARAGE_ART,
    href: "https://autogarageshow.ramalhostudio.com.br/",
  },
  {
    name: "Crawlers de Mercado",
    version: "privado",
    description:
      "Sistema distribuído de coleta de dados de concorrentes com dezenas de targets simultâneos, deduplicação de pipeline e rotação de proxies. Código privado (Volix).",
    tags: ["Python", "Go", "GCP", "Docker", "Kubernetes"],
    asciiArt: CRAWLER_ART,
  },
  {
    name: "Plataforma de Margem",
    version: "privado",
    description:
      "Plataforma de inteligência de mercado e precificação dinâmica. Processa dados dos crawlers em tempo real para calcular margens e disparar alertas. Código privado (Volix).",
    tags: ["Python", "Go", "Redis", "PostgreSQL", "GCP"],
    asciiArt: PRICE_INTEL_ART,
  },
  {
    name: "Workout Tracker API",
    version: "estudo",
    description:
      "API RESTful para rastreamento de treinos com autenticação JWT e rotação de refresh tokens. Projeto de estudo em NestJS com Prisma e PostgreSQL.",
    tags: ["NestJS", "TypeScript", "PostgreSQL", "Prisma", "JWT"],
    asciiArt: WORKOUT_ART,
    href: "https://github.com/EugenioGuimaraes/workout-tracker-api",
  },
];

// -- Experiência -------------------------------------------------------------

export const EXPERIENCES = [
  {
    period: "fase atual",
    role: "Sistemas distribuídos, dados e IA",
    desc:
      "Projeto e mantenho microsserviços em Python e Go, construo pipelines de dados com IA embarcada e gerencio infraestrutura cloud (GCP/AWS) para sistemas de inteligência de mercado e precificação dinâmica.",
    tags: ["Python", "Go", "Django", "TypeScript", "Node.js", "GCP", "AWS", "IA aplicada"],
  },
  {
    period: "freelance · em andamento",
    role: "Desenvolvimento web | Ramalho Studios",
    desc:
      "Projetos freelance em parceria com a Ramalho Studios, estúdio digital especializado em sites, lojas virtuais e sistemas sob medida para pequenos negócios. Atuação em desenvolvimento front-end e full-stack, do layout ao deploy, incluindo o projeto Auto Garage Show.",
    tags: ["React", "Next.js", "TypeScript", "JavaScript", "Freelance"],
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
      "Início na carreira com desenvolvimento full-stack e contribuições open-source, atuando em paralelo como instrutor técnico ensinando lógica de programação e desenvolvimento web para dezenas de desenvolvedores.",
    tags: ["JavaScript", "TypeScript", "React", "Node.js", "Ensino técnico"],
  },
];

// -- Stack -------------------------------------------------------------------

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

// -- Artigos -----------------------------------------------------------------

export const ARTICLES = [
  {
    title:
      "Spec-Driven Development (SDD): vibe coding passando da validade",
    excerpt:
      "Desenvolver software com IA sem um briefing adequado é como contratar um estagiário e não dar contexto nenhum sobre o projeto. 'Vibe coding' produz resultados rasos e desalinhados a solução é o Spec-Driven Development: especificar antes de implementar.",
    date: "16 jul 2026",
    tags: ["IA", "Spec-Driven Development", "Engenharia de Software"],
    cover:
      "https://media.licdn.com/dms/image/v2/D4D12AQH6dF81a2MLjw/article-cover_image-shrink_720_1280/B4DZ9rPFxXGkAU-/0/1784210546009?e=2147483647&v=beta&t=4YaMF67f67uBeA8IpHStySU8qq2tHrjk2nTeVQb5SIU",
    url: "https://www.linkedin.com/pulse/spec-driven-development-sdd-vibe-coding-passando-da-lobo-guimaraes-slb1f/",
  },
  {
    title:
      "O componente que ninguém vê, mas sem ele nada funciona: o API Gateway",
    excerpt:
      "Você já parou pra pensar no que acontece entre o momento em que aperta 'Confirmar pedido' num app e o momento em que o backend processa tudo? Tem um componente ali no meio que quase nunca aparece nas discussões de arquitetura, mas que carrega um monte de responsabilidade crítica.",
    date: "1 jul 2026",
    tags: ["API Gateway", "Microserviços", "System Design"],
    cover:
      "https://media.licdn.com/dms/image/v2/D4E12AQHgMr9c30ko9A/article-cover_image-shrink_423_752/B4EZ8efqwAH8Ag-/0/1782923046163?e=2147483647&v=beta&t=um2gy87YtPUQ96zGGU6RICKqEjm0_nWJ84TbMf7QGj0",
    url: "https://www.linkedin.com/pulse/o-componente-que-ningu%C3%A9m-v%C3%AA-mas-sem-ele-nada-funciona-lobo-guimaraes-ku7pe/",
  },
  {
    title:
      "Por que indexar a internet é um dos problemas mais difíceis em Distributed Systems",
    excerpt:
      "Toda vez que você pesquisa algo no Google, uma máquina gigantesca trabalha nos bastidores. Web crawling parece simples seguir links mas é um dos casos mais ricos em system design.",
    date: "24 jun 2026",
    tags: ["Distributed Systems", "System Design", "Web Crawler"],
    cover:
      "https://media.licdn.com/dms/image/v2/D4D12AQEcbq6zARau8g/article-cover_image-shrink_720_1280/B4DZ73AKETI8AQ-/0/1782260474930?e=2147483647&v=beta&t=1k9QVskmyOdnvOuQaS9wvkayxGk7zQHAc5j0iyvmrlI",
    url: "https://www.linkedin.com/pulse/por-que-indexar-internet-%C3%A9-um-dos-problemas-mais-em-lobo-guimaraes-huhff/",
  },
];

// -- Contato -----------------------------------------------------------------

export const CONTACT_LINKS = [
  { label: "email",    value: "eugenio.guimaraes1112@gmail.com",  href: "mailto:eugenio.guimaraes1112@gmail.com" },
  { label: "linkedin", value: "/in/eugenio-guimaraes/",           href: "https://www.linkedin.com/in/eugenio-guimaraes/" },
  { label: "github",   value: "/EugenioGuimaraes",                href: "https://github.com/EugenioGuimaraes" },
];

