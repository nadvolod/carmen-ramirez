"use client";

import {useEffect, useRef, useState} from "react";
import {useTranslations} from "next-intl";
import {GOOGLE_FORM_URL} from "@/lib/constants";

export default function FloatingCTA() {
  const t = useTranslations("fcta");
  const rootRef = useRef<HTMLDivElement | null>(null);
  const pillRef = useRef<HTMLAnchorElement | null>(null);
  const [pastHero, setPastHero] = useState(false);
  const [overFinalCta, setOverFinalCta] = useState(false);

  // Scroll-distance trigger for showing the pill (robust on mobile Safari)
  useEffect(() => {
    let rafId = 0;
    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        setPastHero(window.scrollY > window.innerHeight * 0.45);
        rafId = 0;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, {passive: true});
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // Hide the pill when the final CTA band scrolls into view
  useEffect(() => {
    const finalCta = document.getElementById("final-cta");
    if (!finalCta) return;
    const io = new IntersectionObserver(
      ([entry]) => setOverFinalCta(entry.isIntersecting),
      {threshold: 0.2},
    );
    io.observe(finalCta);
    return () => io.disconnect();
  }, []);

  // Magnetic hover
  useEffect(() => {
    const pill = pillRef.current;
    if (!pill) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover)").matches) return;

    let raf = 0;
    const RADIUS = 80;
    const STRENGTH = 0.22;
    let tx = 0;
    let ty = 0;
    let targetX = 0;
    let targetY = 0;

    const animate = () => {
      tx += (targetX - tx) * 0.15;
      ty += (targetY - ty) * 0.15;
      pill.style.translate = `${tx.toFixed(2)}px ${ty.toFixed(2)}px`;
      if (Math.abs(targetX - tx) > 0.1 || Math.abs(targetY - ty) > 0.1) {
        raf = requestAnimationFrame(animate);
      } else {
        raf = 0;
      }
    };

    const start = () => {
      if (!raf) raf = requestAnimationFrame(animate);
    };

    const onMove = (e: PointerEvent) => {
      const rect = pill.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist < RADIUS) {
        targetX = dx * STRENGTH;
        targetY = dy * STRENGTH;
      } else {
        targetX = 0;
        targetY = 0;
      }
      start();
    };

    const onLeave = () => {
      targetX = 0;
      targetY = 0;
      start();
    };

    window.addEventListener("pointermove", onMove);
    pill.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      pill.removeEventListener("pointerleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const visible = pastHero && !overFinalCta;

  return (
    <div
      ref={rootRef}
      className={`fcta-root ${visible ? "is-visible" : ""} ${
        overFinalCta ? "is-hidden" : ""
      }`}
      aria-hidden={!visible}
    >
      <a
        ref={pillRef}
        href={GOOGLE_FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fcta-pill"
        tabIndex={visible ? 0 : -1}
      >
        <span>{t("label")}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      </a>
    </div>
  );
}
