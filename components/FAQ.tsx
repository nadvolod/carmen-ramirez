import {useTranslations} from "next-intl";

export default function FAQ() {
  const t = useTranslations("faq");
  const items = t.raw("items") as {q: string; a: string}[];

  return (
    <section id="faq" className="container-page py-12 md:py-20 reveal">
      <div className="max-w-3xl mx-auto">
        <h2 className="h-display text-pink text-[clamp(40px,7.5vw,92px)] text-center">
          {t("title")}
        </h2>

        <div className="mt-10 md:mt-14 divide-y divide-ink/10 border-y border-ink/10">
          {items.map((item) => (
            <details
              key={item.q}
              className="group py-5 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                <span className="text-ink font-semibold text-base md:text-lg pr-4">
                  {item.q}
                </span>
                <span
                  aria-hidden
                  className="flex-shrink-0 w-7 h-7 rounded-full bg-pink-100 text-pink-700 inline-flex items-center justify-center transition-transform duration-300 group-open:rotate-45"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-body text-[0.97rem] md:text-base leading-relaxed pr-10">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
