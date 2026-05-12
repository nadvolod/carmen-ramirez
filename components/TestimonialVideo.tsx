"use client";

import {useEffect, useRef, useState} from "react";
import {useTranslations} from "next-intl";

export default function TestimonialVideo() {
  const t = useTranslations("testimonials");
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [muted, setMuted] = useState(true);

  // Only play while in view to save bandwidth/CPU
  useEffect(() => {
    const el = videoRef.current;
    const container = containerRef.current;
    if (!el || !container) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      {threshold: 0.4},
    );
    io.observe(container);
    return () => io.disconnect();
  }, []);

  const toggleMute = () => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = !el.muted;
    setMuted(el.muted);
    if (!el.muted) el.play().catch(() => {});
  };

  return (
    <div className="flex justify-center">
      <div
        ref={containerRef}
        className="relative w-full max-w-[360px] aspect-[9/16] overflow-hidden rounded-[18px] bg-ink shadow-[0_30px_60px_-30px_rgba(0,0,0,0.45)]"
      >
        <video
          ref={videoRef}
          src="/videos/testimonios.mp4"
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          onClick={toggleMute}
        >
          <track kind="captions" />
        </video>

        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? t("videoHint") : "Mute"}
          className="absolute bottom-3 right-3 inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/90 text-ink backdrop-blur transition-all hover:bg-white active:scale-95 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink"
        >
          {muted ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
            </svg>
          )}
        </button>

        <div className="absolute top-3 left-3 right-3 flex items-center gap-2 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 bg-white/85 text-ink text-[0.7rem] uppercase tracking-[0.16em] px-2.5 py-1 rounded-full backdrop-blur">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-700" />
            {t("videoCaption")}
          </span>
        </div>
      </div>
    </div>
  );
}
