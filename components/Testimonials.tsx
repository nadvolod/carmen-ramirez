import {useTranslations} from "next-intl";
import TestimonialVideo from "./TestimonialVideo";

function initials(name: string) {
  return name.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ ]/g, "").trim().split(/\s+/).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
}

function Stars({rating = 5}: {rating?: number}) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} de 5 estrellas`}>
      {Array.from({length: 5}).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden
          className={i < rating ? "text-pink" : "text-ink/15"}
        >
          <path d="M10 1.5l2.6 5.3 5.9.85-4.25 4.15 1 5.9L10 14.9l-5.25 2.8 1-5.9L1.5 7.65 7.4 6.8 10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const t = useTranslations("testimonials");
  const items = t.raw("items") as {name: string; quote: string; rating?: number}[];

  return (
    <section
      id="resultados"
      className="container-page py-12 md:py-20 reveal"
    >
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="h-display text-pink text-[clamp(44px,8vw,92px)]">
          {t("title")}
        </h2>
        <p className="mt-4 text-body text-base md:text-lg">{t("lead")}</p>
      </div>

      <div className="mt-12 md:mt-14">
        <TestimonialVideo />
      </div>

      <div className="mt-12 md:mt-16 grid md:grid-cols-3 gap-5 md:gap-6">
        {items.map((item) => (
          <figure
            key={item.name}
            className="bg-surface rounded-[16px] p-6 md:p-7 border border-ink/5 shadow-[0_24px_50px_-30px_rgba(0,0,0,0.15)]"
          >
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-pink-100 text-pink-700 inline-flex items-center justify-center font-[family-name:var(--font-anton)] text-lg tracking-wider">
                {initials(item.name)}
              </div>
              <div>
                <figcaption className="font-semibold text-ink">
                  {item.name}
                </figcaption>
                <Stars rating={item.rating ?? 5} />
              </div>
            </div>
            <blockquote className="mt-4 text-body text-[0.97rem] leading-relaxed">
              &ldquo;{item.quote}&rdquo;
            </blockquote>
          </figure>
        ))}
      </div>

      <p className="mt-10 text-center text-muted text-xs md:text-sm max-w-xl mx-auto">
        {t("note")}
      </p>
    </section>
  );
}
