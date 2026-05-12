import {useTranslations} from "next-intl";
import {INSTAGRAM_URL, INSTAGRAM_HANDLE} from "@/lib/constants";

export default function InstagramFeed() {
  const t = useTranslations("instagram");

  return (
    <section className="container-page py-20 md:py-28 reveal">
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group block relative overflow-hidden rounded-[20px] bg-gradient-to-br from-pink-100 via-bg to-pink-100 border border-pink/30 p-10 md:p-14"
      >
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-pink/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-10 w-64 h-64 bg-pink-700/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="h-display text-pink text-[clamp(40px,7vw,86px)]">
              {t("title")}
            </h2>
            <p className="mt-4 text-body text-base md:text-lg">{t("lead")}</p>
            <p className="mt-5 inline-flex items-center gap-2 text-pink-700 font-semibold tracking-[0.16em] uppercase text-sm">
              @{INSTAGRAM_HANDLE}
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
                className="transition-transform group-hover:translate-x-1"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </p>
          </div>

          <div className="flex-shrink-0 self-start md:self-center">
            <div className="relative inline-flex items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-gradient-to-br from-[#feda75] via-[#d62976] to-[#4f5bd5] text-white shadow-[0_30px_60px_-30px_rgba(214,41,118,0.6)] transition-transform duration-300 group-hover:scale-105">
              <svg
                width="56"
                height="56"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </div>
          </div>
        </div>

        <span className="sr-only">{t("cta")}</span>
      </a>
    </section>
  );
}
