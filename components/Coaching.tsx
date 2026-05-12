import Image from "next/image";
import {useTranslations} from "next-intl";
import CTAButton from "./ui/CTAButton";

export default function Coaching() {
  const t = useTranslations("coaching");

  return (
    <section
      id="acompanamiento"
      className="container-page py-20 md:py-28 reveal"
    >
      <div className="grid md:grid-cols-[1fr_1.1fr] gap-10 md:gap-14 items-center">
        <div className="bw relative aspect-[4/5] w-full max-w-[520px] mx-auto md:mx-0 overflow-hidden rounded-[10px] bg-pink-100">
          <Image
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1100&q=85"
            alt=""
            fill
            sizes="(min-width: 768px) 45vw, 90vw"
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="h-display text-pink text-[clamp(40px,7.5vw,100px)]">
            {t("title")}
          </h2>
          <p className="mt-6 text-body text-base md:text-lg leading-relaxed">
            {t("p1")}
          </p>
          <p className="mt-4 text-body text-base md:text-lg leading-relaxed">
            {t("p2")}
          </p>
          <p className="mt-4 text-body text-base md:text-lg leading-relaxed">
            {t("p3")}
          </p>
          <p className="mt-4 text-ink text-base md:text-lg leading-relaxed italic">
            {t("p4")}
          </p>
          <div className="mt-8">
            <CTAButton size="md">{t("cta")}</CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
