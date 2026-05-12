import Image from "next/image";
import {useTranslations} from "next-intl";
import CTAButton from "./ui/CTAButton";
import {INSTAGRAM_URL} from "@/lib/constants";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden h-[100svh] min-h-[640px] md:h-[92vh] md:max-h-[920px]"
    >
      {/* Background photo */}
      <Image
        src="/images/carmen-gym.webp"
        alt="Carmen Ramírez"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[58%_18%] md:object-[72%_22%]"
      />

      {/* Mobile overlay: bottom-up dark fade */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/10 md:hidden pointer-events-none"
      />

      {/* Desktop overlay: bottom-left dark, top-right clear */}
      <div
        aria-hidden
        className="absolute inset-0 hidden md:block bg-gradient-to-tr from-black/85 via-black/40 to-transparent pointer-events-none"
      />

      {/* Content */}
      <div className="container-page relative h-full flex flex-col justify-end pt-28 md:pt-32 pb-12 md:pb-20">
        <div className="reveal max-w-3xl text-white">
          <h1 className="h-display text-pink" translate="no">
            <span className="block text-[clamp(56px,15vw,176px)] leading-[0.88]">
              {t("fitness")}
            </span>
            <span className="block text-[clamp(56px,15vw,176px)] leading-[0.88] mt-3 md:mt-6">
              {t("nutrition")}
            </span>
          </h1>

          <p className="mt-5 text-white/85 tracking-[0.25em] uppercase text-sm">
            {t("tagline")}
          </p>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-2 text-white/80 hover:text-pink transition-colors"
          >
            <svg
              width="16"
              height="16"
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
            <span
              translate="no"
              className="tracking-[0.18em] uppercase text-[0.78rem]"
            >
              {t("handle")}
            </span>
          </a>

          <p className="mt-7 max-w-[44ch] text-base md:text-lg text-white/92 leading-relaxed [text-shadow:0_2px_12px_rgba(0,0,0,0.4)]">
            {t("lead")}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
            <CTAButton size="lg">{t("cta")}</CTAButton>
            <a
              href="#programa"
              className="text-[0.85rem] uppercase tracking-[0.18em] text-white/80 hover:text-white transition-colors"
            >
              ↓ {t("scroll")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
