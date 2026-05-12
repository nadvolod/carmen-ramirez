import {useTranslations} from "next-intl";
import {INSTAGRAM_URL} from "@/lib/constants";

export default function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 bg-bg">
      <div className="container-page py-10 md:py-12 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
        <div className="text-center md:text-left">
          <p
            translate="no"
            className="font-[family-name:var(--font-anton)] uppercase tracking-tight text-xl text-ink"
          >
            Carmen Ramírez
          </p>
          <p className="mt-1 text-muted text-sm">{t("tagline")}</p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink hover:text-pink text-sm uppercase tracking-[0.16em] transition-colors"
          >
            {t("instagram")} ·  @carmenrramirez
          </a>
          <p className="text-muted text-xs">
            © {year} · {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
