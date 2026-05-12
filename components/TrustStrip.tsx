import {useTranslations} from "next-intl";
import {INSTAGRAM_URL} from "@/lib/constants";

export default function TrustStrip() {
  const t = useTranslations("trust");

  return (
    <section
      aria-label="Social proof"
      className="bg-pink-100/70 border-y border-pink/30"
    >
      <div className="container-page py-7 md:py-9 grid grid-cols-3 gap-4 text-center">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center gap-1.5 transition-transform hover:-translate-y-0.5"
        >
          <span className="h-display text-pink text-3xl md:text-5xl group-hover:text-pink-700 transition-colors">
            {t("instagramValue")}
          </span>
          <span className="text-[0.7rem] md:text-xs tracking-[0.18em] uppercase text-ink/70">
            {t("instagram")}
          </span>
        </a>
        <div className="flex flex-col items-center gap-1.5">
          <span className="h-display text-pink text-3xl md:text-5xl">
            {t("clientsValue")}
          </span>
          <span className="text-[0.7rem] md:text-xs tracking-[0.18em] uppercase text-ink/70">
            {t("clients")}
          </span>
        </div>
        <div className="flex flex-col items-center gap-1.5">
          <span className="h-display text-pink text-3xl md:text-5xl">
            {t("yearsValue")}
          </span>
          <span className="text-[0.7rem] md:text-xs tracking-[0.18em] uppercase text-ink/70">
            {t("years")}
          </span>
        </div>
      </div>
    </section>
  );
}
