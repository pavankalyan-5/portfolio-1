"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

import { indexItems, navItems, profile } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const barRef = useRef<HTMLElement>(null);

  const close = useCallback(() => setOpen(false), []);

  // Dismiss the index on Escape or on a click outside the bar.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    const onClick = (e: MouseEvent) => {
      if (!barRef.current?.contains(e.target as Node)) close();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [open, close]);

  // Scrollspy over the inline nav targets only.
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector<HTMLElement>(`#${item.href.split("#")[1]}`))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length || typeof IntersectionObserver === "undefined") return;

    const visible = new Set<HTMLElement>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) visible.add(el);
          else visible.delete(el);
        });
        // Topmost visible section wins, so the marker never flickers.
        let top: HTMLElement | null = null;
        sections.forEach((el) => {
          if (visible.has(el) && (!top || el.offsetTop < top.offsetTop)) top = el;
        });
        setActive(top ? (top as HTMLElement).id : null);
      },
      { rootMargin: "-72px 0px -55% 0px" }
    );
    sections.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <header
      ref={barRef}
      className="sticky top-0 z-50 border-b border-line bg-void/[0.82] backdrop-blur-md"
    >
      <div className="shell flex items-center justify-between gap-5 py-3">
        <Link
          href="/"
          className="font-mono text-[11px] uppercase tracking-[0.18em] text-text"
        >
          {profile.shortName}
        </Link>

        <div className="flex items-center gap-4 sm:gap-[18px]">
          <nav aria-label="Sections" className="hidden items-center gap-[18px] lg:flex">
            {navItems.map((item) => {
              const id = item.href.split("#")[1];
              const current = active === id;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={current ? "true" : undefined}
                  className={`relative font-mono text-[11px] uppercase tracking-[0.16em] transition-colors ${
                    current ? "text-signal" : "text-dim hover:text-text"
                  }`}
                >
                  {current && (
                    <span
                      aria-hidden
                      className="absolute -left-[9px] top-1/2 h-[3px] w-[3px] -translate-y-1/2 rounded-full bg-signal"
                    />
                  )}
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="index-panel"
            onClick={() => setOpen((v) => !v)}
            className={`border px-3 py-[7px] font-mono text-[11px] uppercase tracking-[0.16em] transition-colors lg:hidden ${
              open
                ? "border-signal/40 text-signal"
                : "border-line-hi text-dim hover:border-signal/40 hover:text-signal"
            }`}
          >
            {open ? "Close" : "Index"}
          </button>

          <Link
            href="/#contact"
            className="border border-signal/[0.34] px-3.5 py-[7px] font-mono text-[11px] uppercase tracking-[0.16em] text-signal transition-colors hover:border-signal hover:bg-signal/[0.08]"
          >
            Contact
          </Link>
        </div>
      </div>

      {open && (
        <div id="index-panel" className="border-t border-line bg-panel">
          <div className="shell">
            <ul className="py-2">
              {indexItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={close}
                    className="group flex items-baseline justify-between gap-4 border-b border-line py-[11px] last:border-b-0"
                  >
                    <span className="font-mono text-[13px] tracking-[-0.01em] text-text group-hover:text-signal">
                      {item.name}
                    </span>
                    <span className="font-mono text-[10.5px] tracking-[0.1em] text-faint">
                      {item.node}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
