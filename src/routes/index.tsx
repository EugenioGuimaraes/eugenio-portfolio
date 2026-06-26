import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lucas Martins   Engenheiro Fullstack" },
      {
        name: "description",
        content:
          "Portfolio de Lucas Martins, engenheiro fullstack. Interfaces de alta precisão, sistemas escaláveis e obsessão por detalhes técnicos.",
      },
      { property: "og:title", content: "Lucas Martins   Engenheiro Fullstack" },
      {
        property: "og:description",
        content:
          "Construindo interfaces de alta precisão e sistemas escaláveis. Codando o futuro, um commit por vez.",
      },
    ],
  }),
  component: Index,
});

const stats = [
  { label: "Anos de XP", value: "06+" },
  { label: "Projetos Shipados", value: "42" },
  { label: "Linhas de Café", value: "8k" },
  { label: "Uptime Pessoal", value: "99.9%" },
];

const NEXUS_ART = `  ┌───────────────────────────────────────────────┐
  │  NEXUS_OS  ▸  fleet_realtime.dashboard        │
  ├───────────────────────────────────────────────┤
  │  ● vehicles online   ▓▓▓▓▓▓▓▓▓▓▓▓▓░░░  82%   │
  │  ● avg latency       ▓▓▓▓▓░░░░░░░░░░░  41ms  │
  │  ● routes optimized  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ 1,204  │
  │                                               │
  │      ╱╲    ╱╲      ⌖ SP-001                   │
  │     ╱  ╲  ╱  ╲     ⌖ SP-014                   │
  │    ╱    ╲╱    ╲    ⌖ RJ-088                   │
  │   ────────────────                            │
  └───────────────────────────────────────────────┘`;

const KRYPTON_ART = `  ┌──────────────────────────┐
  │  KRYPTON_PAY · v0.9.4    │
  ├──────────────────────────┤
  │                          │
  │     ◆ 12.4837 ETH        │
  │     ≈ R$ 248.190,00      │
  │                          │
  │  ┌────┐ ┌────┐ ┌────┐    │
  │  │SEND│ │RECV│ │SWAP│    │
  │  └────┘ └────┘ └────┘    │
  │                          │
  │  ▁▂▃▅▂▇▅▃▂▁▃▅▇▆▄▂        │
  │  24h ↑ +4.21%            │
  └──────────────────────────┘`;

const PIXEL_ART = `  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  ░░░░░░░▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░
  ░░░░░▓▓░░░░░░░░▓▓░░░░░░░░░░░░
  ░░░░▓░░░░░░░░░░░░▓░░░░░░░░░░░
  ░░░▓░░██░░░░░██░░░▓░ pixel
  ░░░▓░░░░░░░░░░░░░░▓░ _forge
  ░░░▓░░░░░██░░░░░░░▓░░░░░░░░░░
  ░░░░▓░░██░░██░░░░▓░░  layers:3
  ░░░░░▓▓░░░░░░░░▓▓░░░  fps:60
  ░░░░░░░▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░`;

const DEEPLOG_ART = `  $ deeplog tail --service=api --level=info
  ─────────────────────────────────────────
  [12:04:11] ✓ request handled · 24ms
  [12:04:11] ✓ db.query users · 6ms
  [12:04:12] ✓ cache.hit  /feed · 1ms
  [12:04:12] ⚠ slow_query orders > 200ms
  [12:04:13] ✓ request handled · 18ms
  [12:04:13] ◆ trace flushed → clickhouse
  ─────────────────────────────────────────
   rps: 1,248  ·  p95: 42ms  ·  err: 0.02%`;


const projects = [
  {
    name: "Nexus OS",
    version: "v1.2.0",
    description:
      "Sistema de gerenciamento de frotas em tempo real com visualização 3D e baixa latência sub-50ms.",
    tags: ["Next.js", "Go", "Redis", "WebGL"],
    asciiArt: NEXUS_ART,
  },
  {
    name: "Krypton Pay",
    version: "v0.9.4",
    description:
      "Wallet de criptoativos focada em UX minimalista, criptografia end-to-end e segurança hardware-level.",
    tags: ["React Native", "Rust", "WASM"],
    asciiArt: KRYPTON_ART,
  },
  {
    name: "Pixel Forge",
    version: "v2.0.1",
    description:
      "Editor colaborativo de pixel art em tempo real com sincronização CRDT e exportação para spritesheets.",
    tags: ["TypeScript", "WebSockets", "Canvas"],
    asciiArt: PIXEL_ART,
  },
  {
    name: "DeepLog",
    version: "v3.1.0",
    description:
      "Observabilidade open-source para microsserviços com pipeline de logs custom e dashboards extensíveis.",
    tags: ["Go", "ClickHouse", "gRPC"],
    asciiArt: DEEPLOG_ART,
  },
];

const stack = [
  { name: "TypeScript", level: "EXCELLENT" },
  { name: "Node.js / Go", level: "EXCELLENT" },
  { name: "React / Tailwind", level: "EXCELLENT" },
  { name: "PostgreSQL / Redis", level: "PROFICIENT" },
  { name: "Docker / Kubernetes", level: "PROFICIENT" },
  { name: "Rust / WebAssembly", level: "LEARNING" },
];

const navLinks = [
  { href: "#sobre", label: "/sobre" },
  { href: "#stack", label: "/stack" },
  { href: "#projetos", label: "/projetos" },
  { href: "#contato", label: "/contato" },
];

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background font-sans text-foreground">
      {/* CRT effects */}
      <div className="pointer-events-none fixed inset-0 z-50 crt-overlay opacity-60" />
      <div className="pointer-events-none fixed inset-0 z-40 crt-vignette" />
      <div className="pointer-events-none fixed inset-x-0 top-0 z-40 h-32 bg-gradient-to-b from-primary/10 to-transparent animate-scanline" />

      {/* Background grid */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-10 animate-flicker">
        <Header />
        <Hero />
        <StatsStrip />
        <Projects />
        <AboutAndStack />
        <Contact />
        <FooterBar />
      </div>
    </div>
  );
}

function Header() {
  return (
    <nav
      aria-label="Navegação principal"
      className="mb-16 flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4 font-mono text-sm"
    >
      <div className="flex items-center gap-2">
        <span className="text-primary terminal-glow">guest@portfolio</span>
        <span className="text-muted-foreground">:</span>
        <span className="text-accent">~</span>
        <span className="inline-block h-4 w-[0.6rem] bg-primary align-middle animate-blink" />
      </div>
      <ul className="flex flex-wrap gap-x-6 gap-y-2">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-foreground/70 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <header className="mb-28">
      <p className="mb-4 font-mono text-sm font-bold uppercase tracking-[0.25em] text-primary terminal-glow">
        &gt; Engenheiro Fullstack
      </p>
      <h1 className="mb-8 font-mono text-5xl font-extrabold tracking-tighter terminal-glow-strong md:text-7xl lg:text-8xl">
        LUCAS
        <br />
        MARTINS
        <span className="inline-block h-[0.7em] w-[0.5ch] translate-y-[0.05em] bg-primary align-baseline animate-blink ml-3" />
      </h1>
      <div className="max-w-2xl">
        <p className="text-pretty text-lg leading-relaxed text-foreground/80 md:text-xl">
          Construindo interfaces de alta precisão e sistemas escaláveis com uma
          obsessão por detalhes técnicos e performance bruta.{" "}
          <span className="font-mono italic text-accent">
            // codando o futuro, um commit por vez.
          </span>
        </p>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href="#projetos"
          className="group inline-flex items-center gap-3 border border-primary bg-primary/10 px-5 py-2.5 font-mono text-sm font-bold uppercase tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_24px_var(--color-primary)]"
        >
          <span>./ver_projetos</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </a>
        <a
          href="#contato"
          className="inline-flex items-center gap-3 border border-border px-5 py-2.5 font-mono text-sm uppercase tracking-wider text-foreground/70 transition-colors hover:border-foreground hover:text-foreground"
        >
          cat contato.txt
        </a>
      </div>
    </header>
  );
}

function StatsStrip() {
  return (
    <section
      aria-label="Estatísticas"
      className="mb-28 grid grid-cols-2 gap-3 md:grid-cols-4"
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="group relative border border-border bg-card/40 p-4 transition-colors hover:border-primary/60"
        >
          <div className="absolute right-2 top-2 font-mono text-[9px] text-muted-foreground/60">
            #{Math.floor(Math.random() * 999) + 100}
          </div>
          <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            {stat.label}
          </div>
          <div className="font-mono text-3xl font-bold text-primary terminal-glow">
            {stat.value}
          </div>
        </div>
      ))}
    </section>
  );
}

function Projects() {
  return (
    <section id="projetos" className="mb-32 scroll-mt-20">
      <SectionHeading index="01" title="Projetos_Selecionados" />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="group cursor-pointer"
            tabIndex={0}
          >
            <div className="relative mb-5 overflow-hidden border border-border bg-card/30 transition-all group-hover:border-primary/60 group-focus:border-primary/60">
              <pre
                aria-hidden="true"
                className="aspect-video w-full overflow-hidden p-4 font-mono text-[10px] leading-tight text-primary/70 transition-colors group-hover:text-primary"
              >
                {project.asciiArt}
              </pre>
              <div className="absolute right-3 top-3 border border-border bg-background/80 px-2 py-1 font-mono text-[10px] text-foreground/60">
                {project.version}
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
            <h3 className="mb-2 font-mono text-xl font-bold transition-colors group-hover:text-primary group-focus:text-primary">
              {project.name}
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-foreground/60">
              {project.description}
            </p>
            <ul className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-foreground/70"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function AboutAndStack() {
  return (
    <section
      id="stack"
      className="mb-32 grid scroll-mt-20 gap-12 md:grid-cols-2"
    >
      <div id="sobre" className="scroll-mt-20">
        <SectionHeading index="02" title="Sobre_Mim.exe" />
        <div className="space-y-4 leading-relaxed text-foreground/75">
          <p>
            Comecei desmontando rádios aos 10 anos e acabei montando arquiteturas
            distribuídas. Meu foco vive na interseção entre design funcional,
            código performático e aquele detalhe que ninguém repara  {" "}
            <span className="font-mono text-accent">mas que faz a diferença</span>.
          </p>
          <p>
            Acredito que software de qualidade deve ser tão bonito por dentro
            quanto é por fora. Se o código não é elegante, ele ainda não está
            pronto pra produção.
          </p>
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">$</span> whoami{" "}
            <span className="text-foreground/80">
              → café-driven engineer, mech-keyboard enthusiast, eterno aprendiz.
            </span>
          </p>
        </div>
      </div>

      <div className="border border-border bg-card/40 p-6 md:p-8">
        <div className="mb-6 flex items-center justify-between border-b border-border pb-3">
          <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Main_Processors
          </h3>
          <span className="font-mono text-[10px] text-muted-foreground">
            6 cores
          </span>
        </div>
        <ul className="space-y-3 font-mono text-sm">
          {stack.map((s) => (
            <li
              key={s.name}
              className="flex items-center justify-between border-b border-border/40 pb-2 last:border-b-0"
            >
              <span className="text-foreground/85">{s.name}</span>
              <span
                className={
                  s.level === "EXCELLENT"
                    ? "text-primary"
                    : s.level === "PROFICIENT"
                      ? "text-accent"
                      : "text-muted-foreground"
                }
              >
                [{s.level}]
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contato"
      className="mb-16 scroll-mt-20 border-t border-border pt-16 text-center"
    >
      <p className="mb-3 font-mono text-sm uppercase tracking-[0.3em] text-accent">
        &gt; Deseja iniciar uma sessão?
      </p>
      <a
        href="mailto:hello@lucasmartins.dev"
        className="group inline-block font-mono text-3xl font-extrabold tracking-tighter text-foreground transition-colors hover:text-primary md:text-5xl"
      >
        <span className="underline decoration-primary/30 decoration-2 underline-offset-8 group-hover:decoration-primary terminal-glow-strong">
          hello@lucasmartins.dev
        </span>
        <span className="ml-2 inline-block animate-blink text-primary">_</span>
      </a>
      <p className="mx-auto mt-6 max-w-md text-sm text-foreground/60">
        Aberto pra freelas, consultorias de arquitetura, code reviews ou só pra
        falar mal de JavaScript juntos.
      </p>
    </section>
  );
}

function FooterBar() {
  return (
    <footer className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 font-mono text-[10px] uppercase tracking-widest text-muted-foreground md:flex-row">
      <div className="flex items-center gap-2">
        <span className="inline-block h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)]" />
        <span>system_online · build_2026.06</span>
      </div>
      <div className="flex gap-6">
        <a href="#" className="transition-colors hover:text-primary">
          github
        </a>
        <a href="#" className="transition-colors hover:text-primary">
          linkedin
        </a>
        <a href="#" className="transition-colors hover:text-primary">
          twitter
        </a>
        <a href="#" className="transition-colors hover:text-primary">
          rss
        </a>
      </div>
      <div>© 2026   todos os bits reservados</div>
    </footer>
  );
}

function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <span className="font-mono text-xs text-accent">[{index}]</span>
      <h2 className="font-mono text-xl font-bold uppercase tracking-[0.2em] text-foreground md:text-2xl">
        {title}
      </h2>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}

