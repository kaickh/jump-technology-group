"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { navigation } from "@/content/site";
import { Wordmark } from "@/components/wordmark";

function normalize(path: string) {
  if (path === "/") return "/";
  return path.endsWith("/") ? path : `${path}/`;
}

export function SiteHeader() {
  const pathname = normalize(usePathname() || "/");
  const [openPath, setOpenPath] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const open = openPath === pathname;
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const focusable = panel ? Array.from(panel.querySelectorAll<HTMLElement>("a, button")) : [];
    focusable[0]?.focus();

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenPath(null);
        buttonRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    const previousOverflow = document.body.style.overflow;
    const main = document.getElementById("content");
    const bar = document.getElementById("site-bar");
    document.body.style.overflow = "hidden";
    main?.setAttribute("inert", "");
    bar?.setAttribute("inert", "");
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      main?.removeAttribute("inert");
      bar?.removeAttribute("inert");
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-30 border-b bg-white ${scrolled ? "border-line" : "border-transparent"}`}
    >
      <div className="frame flex h-[4.25rem] items-center justify-between gap-6" id="site-bar">
        <Link href="/" aria-label="Jump Technology Group, home" className="shrink-0">
          <Wordmark priority />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navigation.map((item) => {
            const current = pathname === normalize(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={current ? "text-sm font-semibold text-ink" : "text-sm font-medium text-muted hover:text-ink"}
              >
                {item.label}
              </Link>
            );
          })}
          <Link href="/contact/" className="btn btn-primary">
            Let&apos;s talk
          </Link>
        </nav>
        <button
          ref={buttonRef}
          type="button"
          className="text-sm font-semibold lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpenPath(open ? null : pathname)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open ? (
        <div
          id="mobile-navigation"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="fixed inset-0 z-40 flex flex-col bg-white px-5 py-5 lg:hidden"
        >
          <div className="flex items-center justify-between">
            <p id={titleId} className="sr-only">
              Menu
            </p>
            <Wordmark />
            <button type="button" className="text-sm font-semibold" onClick={() => setOpenPath(null)}>
              Close
            </button>
          </div>
          <nav className="mt-12 flex flex-col gap-2" aria-label="Primary">
            {navigation.map((item) => {
              const current = pathname === normalize(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  className="rounded-2xl px-2 py-3 text-3xl font-semibold tracking-[-0.03em]"
                  onClick={() => setOpenPath(null)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <Link href="/contact/" className="btn btn-primary mt-auto mb-6" onClick={() => setOpenPath(null)}>
            Let&apos;s talk
          </Link>
        </div>
      ) : null}
    </header>
  );
}
