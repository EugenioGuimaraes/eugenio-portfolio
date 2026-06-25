"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/content";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-hairline bg-bg/90 backdrop-blur" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-8 py-[1.1rem]">
        <a href="#topo" className="font-serif text-lg tracking-wide text-ink">
          Eugenio Lobo
        </a>
        <div className="hidden gap-8 sm:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-sans text-sm tracking-wide text-inkMuted transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
