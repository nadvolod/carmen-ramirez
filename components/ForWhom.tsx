import Image from "next/image";
import {useTranslations} from "next-intl";
import CTAButton from "./ui/CTAButton";

export default function ForWhom() {
  const t = useTranslations("forwhom");
  const items = t.raw("items") as string[];

  return (
    <section
      id="sobre-mi"
      className="container-page py-12 md:py-20 reveal"
    >
      <div className="grid md:grid-cols-[1fr_1.1fr] gap-10 md:gap-14 items-center">
        <div className="bw relative aspect-[4/5] w-full max-w-[480px] mx-auto md:mx-0 overflow-hidden rounded-[10px] bg-pink-100">
          <Image
            src="/images/carmen-portrait.webp"
            alt=""
            fill
            sizes="(min-width: 768px) 40vw, 90vw"
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="h-display text-pink text-[clamp(40px,7vw,82px)]">
            {t("title")}
          </h2>

          <div className="mt-7 bg-pink-100/80 border border-pink/40 rounded-[10px] p-6 md:p-8">
            <p className="font-semibold text-ink mb-4 text-base md:text-lg">
              {t("lead")}
            </p>
            <ul className="space-y-2.5 text-body text-[0.98rem] md:text-base">
              {items.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span aria-hidden className="text-pink mt-1">
                    •
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 pt-5 border-t border-pink/40 text-ink font-semibold italic text-[0.98rem] md:text-base">
              {t("closing")}
            </p>
          </div>

          <div className="mt-7">
            <CTAButton size="md">{t("cta")}</CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
