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
      className={`fixed left-0 right-0 top-0 z-[100] transition-all duration-300 ${
        scrolled ? "border-b border-line bg-bg/90 backdrop-blur" : ""
      }`}
    >
      <div className="mx-auto flex w-full flex-wrap items-center justify-between gap-4 px-6 py-4 font-mono text-sm md:max-w-[90%]">
        <div className="flex items-center gap-1.5">
          <span className="text-phosphor terminal-glow">eugenio@portfolio</span>
          <span className="text-faint">:</span>
          <span className="text-gold">~</span>
          <span className="animate-blink ml-0.5 inline-block h-4 w-[0.55rem] bg-phosphor align-middle" />
        </div>
        <ul className="hidden flex-wrap gap-x-6 gap-y-2 sm:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-fg/70 transition-colors hover:text-phosphor"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
