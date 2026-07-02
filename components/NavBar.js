"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/content";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 640) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-[100] transition-all duration-300 ${
        scrolled || open ? "border-b border-line bg-bg/90 backdrop-blur" : ""
      }`}
    >
      <div className="mx-auto flex w-full items-center justify-between px-6 py-4 font-mono text-sm md:max-w-[90%]">
        <div className="flex items-center gap-1.5">
          <span className="text-phosphor terminal-glow">eugenio@portfolio</span>
          <span className="text-faint">:</span>
          <span className="text-gold">~</span>
          <span className="animate-blink ml-0.5 inline-block h-4 w-[0.55rem] bg-phosphor align-middle" />
        </div>

        {/* Desktop nav */}
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

        {/* Hamburger button — mobile only */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="flex flex-col justify-center gap-[5px] p-1 sm:hidden"
        >
          <span
            className={`block h-px w-5 bg-phosphor transition-transform duration-200 origin-center ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-phosphor transition-opacity duration-200 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-phosphor transition-transform duration-200 origin-center ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`overflow-hidden transition-all duration-300 sm:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-5 border-t border-line bg-bg/95 px-8 py-6 font-mono text-sm">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-fg/60 transition-colors hover:text-phosphor"
                onClick={() => setOpen(false)}
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
