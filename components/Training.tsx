import Image from "next/image";
import {useTranslations} from "next-intl";
import CTAButton from "./ui/CTAButton";

export default function Training() {
  const t = useTranslations("training");

  return (
    <section
      id="entrenamiento"
      className="container-page py-20 md:py-28 reveal"
    >
      <div className="grid md:grid-cols-[1.1fr_1fr] gap-10 md:gap-14 items-center">
        <div>
          <h2 className="h-display text-pink text-[clamp(48px,9vw,120px)]">
            {t("title")}
          </h2>
          <p className="mt-6 text-body text-base md:text-lg leading-relaxed">
            {t("p1")}
          </p>
          <p className="mt-4 text-body text-base md:text-lg leading-relaxed">
            {t("p2")}
          </p>
          <div className="mt-8">
            <CTAButton size="md">{t("cta")}</CTAButton>
          </div>
        </div>

        <div className="bw relative aspect-[4/5] w-full overflow-hidden rounded-[10px] bg-pink-100">
          <Image
            src="/images/carmen-miami.webp"
            alt=""
            fill
            sizes="(min-width: 768px) 45vw, 90vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
