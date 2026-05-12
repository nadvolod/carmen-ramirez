import Image from "next/image";
import {useTranslations} from "next-intl";
import CTAButton from "./ui/CTAButton";

const RECIPE_IMAGES = [
  "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1547573854-74d2a71d0826?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=600&q=80",
];

const ROTATIONS = ["-4deg", "3deg", "-2deg", "4deg", "-3deg", "2deg"];

export default function Nutrition() {
  const t = useTranslations("nutrition");
  const recipes = t.raw("recipes") as string[];

  return (
    <section
      id="alimentacion"
      className="container-page py-12 md:py-20 reveal"
    >
      <div className="grid md:grid-cols-[1fr_1.1fr] gap-10 md:gap-12 items-center">
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
          <p className="mt-4 text-body text-base md:text-lg leading-relaxed">
            {t("p3")}
          </p>
          <div className="mt-8">
            <CTAButton size="md">{t("cta")}</CTAButton>
          </div>
        </div>

        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5"
          aria-label="Recipes"
        >
          {recipes.map((label, i) => (
            <div
              key={label}
              className="polaroid aspect-[4/5]"
              style={{transform: `rotate(${ROTATIONS[i]})`}}
            >
              <div className="relative w-full h-full overflow-hidden bg-pink-100">
                <Image
                  src={RECIPE_IMAGES[i]}
                  alt={label}
                  fill
                  sizes="(min-width: 768px) 18vw, 45vw"
                  className="object-cover"
                />
              </div>
              <span className="caption">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
