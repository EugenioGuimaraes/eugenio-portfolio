import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/700.css";
import "@fontsource/jetbrains-mono/800.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "./globals.css";

export const metadata = {
  title: "Eugenio Guimaraes | Backend Engineer",
  description:
    "Portfolio de Eugenio Guimaraes, Backend Engineer especializado em sistemas distribuídos, pipelines de dados com IA e infraestrutura cloud. Python, Go, .NET, GCP, AWS.",
  keywords: [
    "Eugenio Guimaraes",
    "Backend Engineer",
    "Software Engineer",
    "Data Engineer",
    "Sistemas Distribuídos",
    "Python",
    "Go",
    "Golang",
    "Django",
    ".NET",
    "GCP",
    "AWS",
    "Docker",
    "Kubernetes",
    "IA aplicada",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-bg font-sans text-fg">{children}</body>
    </html>
  );
}
