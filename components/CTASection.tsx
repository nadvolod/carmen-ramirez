import {useTranslations} from "next-intl";
import CTAButton from "./ui/CTAButton";

export default function CTASection() {
  const t = useTranslations("ctaFinal");

  return (
    <section
      id="final-cta"
      className="relative overflow-hidden mt-10"
    >
      <div className="bg-pink text-white py-14 md:py-20">
        <div className="container-page text-center">
          <h2 className="h-display text-white text-[clamp(48px,9vw,128px)]">
            {t("title")}
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-white/95 text-base md:text-lg leading-relaxed">
            {t("lead")}
          </p>
          <div className="mt-9 flex justify-center">
            <CTAButton
              size="lg"
              className="!bg-white !text-pink-700 hover:!bg-pink-100"
            >
              {t("cta")}
            </CTAButton>
          </div>
          <p className="mt-6 text-white/85 text-xs md:text-sm uppercase tracking-[0.16em]">
            {t("micro")}
          </p>
        </div>
      </div>
    </section>
  );
}
