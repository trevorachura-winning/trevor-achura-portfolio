"use client";

import { useEffect, useId, useState } from "react";
import type { NavItem } from "@/lib/types";
import { Icon } from "@/components/ui/Icon";

type SiteHeaderProps = {
  name: string;
  navigation: readonly NavItem[];
};

export function SiteHeader({ name, navigation }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      document.body.style.overflow = previous;
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-200 ${
        solid
          ? "border-b border-line/80 bg-white/85 backdrop-blur-xl backdrop-saturate-150"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <div className="container-page flex h-16 items-center justify-between gap-6 lg:h-[4.5rem]">
        <a
          href="#top"
          className="flex min-h-11 items-center gap-2.5 font-semibold tracking-[-0.01em] text-navy"
          onClick={() => setOpen(false)}
        >
          <span
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-navy text-[0.72rem] font-bold tracking-[0.02em] text-white"
          >
            TA
          </span>
          <span className="text-[0.98rem]">{name}</span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-3.5 py-2 text-[0.92rem] font-medium text-slate transition-colors duration-150 hover:bg-ice/70 hover:text-navy"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href="#contact" className="btn-primary hidden min-h-10! px-5! text-[0.9rem]! sm:inline-flex">
            Get in touch
          </a>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full text-navy transition-colors hover:bg-ice lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name={open ? "close" : "menu"} width={22} height={22} />
          </button>
        </div>
      </div>

      <div
        id={menuId}
        hidden={!open}
        className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-white lg:hidden"
      >
        <nav aria-label="Mobile" className="container-page py-6">
          <ul className="flex flex-col">
            {navigation.map((item) => (
              <li key={item.href} className="border-b border-line/70">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-14 items-center justify-between text-[1.35rem] font-semibold tracking-[-0.015em] text-navy"
                >
                  {item.label}
                  <Icon name="arrowRight" className="text-slate" />
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-8 w-full">
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
}
