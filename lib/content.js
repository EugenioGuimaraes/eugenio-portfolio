export const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#skills", label: "Skills" },
  { href: "#artigos", label: "Artigos" },
  { href: "#contato", label: "Contato" },
];

export const STATS = [
  { label: "Anos em produção", value: "4+" },
  { label: "Linguagens de produção", value: "Python · Go · .NET" },
  { label: "Sessões mestradas", value: "40+" },
];

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
      "Desenvolvimento de sistemas ERP e corporativos em ASP.NET (WebForms, MVC, Web API), integrações SOAP/WCF, modelagem com Entity Framework e foco sólido em integridade de dados e conformidade regulatória.",
    tags: ["C#", ".NET", "ASP.NET MVC", "Web API", "SOAP/WCF", "Entity Framework", "SQL Server"],
  },
  {
    period: "origem",
    role: "Full-stack e ensino técnico",
    desc:
      "Início na carreira com desenvolvimento full-stack e contribuições open-source, atuando em paralelo como instrutor técnico — ensinando lógica de programação e desenvolvimento web para dezenas de novos desenvolvedores.",
    tags: ["JavaScript", "TypeScript", "React", "Node.js", "Ensino técnico", "Open Source"],
  },
];

export const SKILL_GROUPS = [
  {
    title: "Linguagens",
    items: ["Python", "Go", "JavaScript", "TypeScript", "C#", "SQL"],
  },
  {
    title: "Frameworks & backend",
    items: ["Django", "Nest.js", "Next.js", "Node.js", ".NET / ASP.NET", "Express"],
  },
  {
    title: "Dados & IA",
    items: ["Pipelines de dados", "IA aplicada", "PostgreSQL", "SQL Server"],
  },
  {
    title: "Cloud & infraestrutura",
    items: ["GCP", "AWS", "Docker", "Kubernetes", "Sistemas distribuídos"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "HTML", "CSS", "Jest"],
  },
  {
    title: "Integrações & ferramentas",
    items: ["Git", "Entity Framework", "WCF / SOAP", "Web API REST"],
  },
];

export const ARTICLES = [
  {
    title: "Por que indexar a internet é um dos problemas mais difíceis em Distributed Systems",
    excerpt:
      "Toda vez que você pesquisa algo no Google, uma máquina gigantesca trabalha nos bastidores. Web crawling parece simples — seguir links — mas é um dos casos mais ricos em system design: distribuição, consistência, performance e ética, tudo ao mesmo tempo.",
    date: "24 jun 2026",
    tags: ["Distributed Systems", "System Design", "Web Crawler"],
    cover:
      "https://media.licdn.com/dms/image/v2/D4D12AQEcbq6zARau8g/article-cover_image-shrink_720_1280/B4DZ73AKETI8AQ-/0/1782260474930?e=2147483647&v=beta&t=1k9QVskmyOdnvOuQaS9wvkayxGk7zQHAc5j0iyvmrlI",
    url: "https://www.linkedin.com/pulse/por-que-indexar-internet-%C3%A9-um-dos-problemas-mais-em-lobo-guimaraes-huhff/",
  },
];

export const CONTACT_LINKS = [
  { label: "Email", value: "eugenio.guimaraes1112@gmail.com", href: "mailto:eugenio.guimaraes1112@gmail.com" },
  { label: "LinkedIn", value: "/in/eugenio-guimaraes/", href: "https://www.linkedin.com/in/eugenio-guimaraes/" },
  { label: "GitHub", value: "/EugenioGuimaraes", href: "https://github.com/EugenioGuimaraes" },
];
