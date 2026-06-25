import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/500.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/fraunces/400-italic.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";

export const metadata = {
  title: "Eugenio Lobo | Full Stack Developer & Software Engineer",
  description:
    "Portfólio de Eugenio Lobo, Full Stack Developer e Software & Data Engineer com experiência em Python, Go, .NET, Next.js e infraestrutura em nuvem.",
  keywords: [
    "Eugenio Lobo",
    "Full Stack Developer",
    "Software Engineer",
    "Data Engineer",
    "Python",
    "Go",
    "Next.js",
    "Django",
    "Nest.js",
    ".NET",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-bg font-sans text-ink">{children}</body>
    </html>
  );
}
