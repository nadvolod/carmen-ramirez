"use client";

import {useEffect, useState} from "react";
import {useTranslations} from "next-intl";
import CTAButton from "./ui/CTAButton";
import LanguageToggle from "./LanguageToggle";
import {INSTAGRAM_URL} from "@/lib/constants";

export default function Nav() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    {href: "#programa", label: t("program")},
    {href: "#sobre-mi", label: t("about")},
    {href: "#resultados", label: t("results")},
    {href: "#faq", label: t("faq")},
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-bg/85 backdrop-blur-md border-b border-ink/5"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex items-center justify-between h-16 md:h-20">
        <a
          href="#hero"
          translate="no"
          className="font-[family-name:var(--font-anton)] uppercase tracking-tight text-lg md:text-xl"
        >
          Carmen Ramírez
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.92rem] text-ink/80 hover:text-pink transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:gap-5">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hidden sm:inline-flex text-ink/70 hover:text-pink transition-colors"
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <LanguageToggle className="hidden md:inline-flex" />
          <div className="hidden md:block">
            <CTAButton size="md">{t("cta")}</CTAButton>
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t("closeMenu") : t("openMenu")}
            aria-expanded={open}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 -mr-2"
          >
            <span className="relative w-5 h-3 inline-block">
              <span
                className={`absolute left-0 right-0 top-0 h-[1.5px] bg-ink transition-transform ${
                  open ? "translate-y-[5px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 right-0 bottom-0 h-[1.5px] bg-ink transition-transform ${
                  open ? "-translate-y-[5px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-x-0 top-16 bottom-0 bg-bg z-40 transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div className="container-page py-8 flex flex-col gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-2xl font-[family-name:var(--font-anton)] uppercase tracking-tight"
            >
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-5 pt-2">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink/70"
            >
              Instagram
            </a>
            <LanguageToggle />
          </div>
          <div className="pt-2">
            <CTAButton size="lg">{t("cta")}</CTAButton>
          </div>
        </div>
      </div>
    </header>
  );
}
