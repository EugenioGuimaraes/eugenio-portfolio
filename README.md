# Portfólio  Eugenio Lobo

Site de apresentação pessoal construído em Next.js 14 (App Router) + Tailwind CSS.

## Como rodar localmente

Pré-requisitos: [Node.js](https://nodejs.org) versão 18.18 ou superior.

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em modo desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador. O site recarrega automaticamente a cada alteração salva.

Para gerar a versão de produção localmente (o mesmo processo usado em hospedagem):

```bash
npm run build
npm run start
```

## Estrutura do projeto

```
eugenio-portfolio/
├── app/
│   ├── layout.js        # Layout raiz, metadata (SEO) e import das fontes
│   ├── page.js          # Página principal, monta todas as seções
│   └── globals.css      # CSS global e diretivas do Tailwind
├── components/
│   ├── NavBar.js        # Menu fixo no topo
│   ├── Hero.js          # Seção inicial com efeito de digitação
│   ├── Sobre.js         # Seção "Sobre"
│   ├── Timeline.js      # Seção "Trajetória técnica"
│   ├── Skills.js        # Seção "Stack técnica"
│   ├── Contato.js       # Seção "Contato"
│   ├── Footer.js        # Rodapé
│   ├── MapDivider.js    # Divisor decorativo entre seções
│   ├── SectionLabel.js  # Título numerado de cada seção (I., II., III...)
│   ├── Seal.js           # Selo decorativo do Hero
│   └── RevealSection.js # Wrapper que anima a entrada de cada seção ao rolar a página
├── lib/
│   └── content.js       # TODO O TEXTO DO SITE fica centralizado aqui
└── public/               # Arquivos estáticos (imagens, favicon, etc.)
```

## Onde editar o conteúdo

Praticamente todo o texto do site (experiências, skills, links de contato, estatísticas)
está centralizado em **`lib/content.js`**. Para atualizar informações, normalmente você só
precisa editar esse arquivo, sem tocar nos componentes.

Textos que ficam direto no componente (não em `content.js`):
- Frase de abertura do Hero e texto de digitação: `components/Hero.js`
- Parágrafos do "Sobre": `components/Sobre.js`
- Frase final de "Contato": `components/Contato.js`

## Antes de publicar, revise

- [ ] Email, LinkedIn e GitHub em `lib/content.js` (`CONTACT_LINKS`) ainda estão com
      valores de exemplo   troque pelos seus reais
- [ ] Confirme se as datas e descrições da seção "Trajetória técnica" refletem exatamente
      o que você quer comunicar
- [ ] Rode `npm run build` uma vez antes de publicar para garantir que não há erros

## Stack utilizada neste projeto

Next.js 14 (App Router), React 18, Tailwind CSS, fontes locais via Fontsource
(Fraunces, Inter, JetBrains Mono   sem dependência de carregamento externo no build).

## Hospedagem

Veja as instruções de deploy gratuito na conversa com o Claude, ou a documentação oficial
da plataforma escolhida (Vercel, Netlify ou Cloudflare Pages).
