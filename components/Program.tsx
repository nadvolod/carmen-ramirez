import {useTranslations} from "next-intl";

function Icon({type}: {type: "training" | "nutrition" | "coaching"}) {
  const common = "w-7 h-7";
  if (type === "training") {
    return (
      <svg
        className={common}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M6 6v12M18 6v12" />
        <path d="M2.5 9v6M21.5 9v6" />
        <path d="M6 12h12" />
      </svg>
    );
  }
  if (type === "nutrition") {
    return (
      <svg
        className={common}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M12 2c-3 0-5.5 2.5-5.5 5.5 0 1.5.5 3 1.5 4-1.5 1.5-2 4-2 6 0 2.5 2 4.5 4 4.5 1 0 1.5-.5 2-.5s1 .5 2 .5c2 0 4-2 4-4.5 0-2-.5-4.5-2-6 1-1 1.5-2.5 1.5-4C17.5 4.5 15 2 12 2z" />
        <path d="M12 2v4" />
      </svg>
    );
  }
  return (
    <svg
      className={common}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

export default function Program() {
  const t = useTranslations("program");
  const cards = [
    {key: "training" as const, anchor: "#entrenamiento"},
    {key: "nutrition" as const, anchor: "#alimentacion"},
    {key: "coaching" as const, anchor: "#acompanamiento"},
  ];

  return (
    <section id="programa" className="container-page py-20 md:py-28 reveal">
      <div className="max-w-2xl">
        <h2 className="h-display text-pink text-[clamp(44px,8vw,92px)]">
          {t("title")}
        </h2>
        <p className="mt-4 text-body text-base md:text-lg max-w-xl">
          {t("lead")}
        </p>
      </div>

      <div className="mt-10 md:mt-14 grid md:grid-cols-3 gap-5 md:gap-6">
        {cards.map(({key, anchor}) => (
          <a
            key={key}
            href={anchor}
            className="group bg-surface rounded-[16px] p-7 md:p-8 border border-ink/5 shadow-[0_24px_50px_-30px_rgba(0,0,0,0.15)] transition-all hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.22)]"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pink-100 text-pink-700 mb-5">
              <Icon type={key} />
            </div>
            <h3 className="font-[family-name:var(--font-anton)] uppercase tracking-tight text-2xl md:text-3xl text-ink">
              {t(`${key}.title`)}
            </h3>
            <p className="mt-3 text-body text-[0.97rem] leading-relaxed">
              {t(`${key}.body`)}
            </p>
            <span className="mt-5 inline-block text-[0.78rem] uppercase tracking-[0.18em] text-pink group-hover:text-pink-700">
              ↓
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
