"use client";

import {useLocale} from "next-intl";
import {Link, usePathname} from "@/i18n/navigation";

export default function LanguageToggle({className = ""}: {className?: string}) {
  const locale = useLocale();
  const pathname = usePathname();

  const active = "text-pink font-semibold";
  const inactive = "text-ink/45 hover:text-pink transition-colors";

  return (
    <div
      className={`inline-flex items-center text-[0.8rem] tracking-[0.18em] uppercase ${className}`}
      aria-label="Language"
      translate="no"
    >
      <Link
        href={pathname}
        locale="es"
        aria-current={locale === "es" ? "true" : undefined}
        className={locale === "es" ? active : inactive}
      >
        ES
      </Link>
      <span aria-hidden className="text-ink/25 mx-1.5">
        /
      </span>
      <Link
        href={pathname}
        locale="en"
        aria-current={locale === "en" ? "true" : undefined}
        className={locale === "en" ? active : inactive}
      >
        EN
      </Link>
    </div>
  );
}
