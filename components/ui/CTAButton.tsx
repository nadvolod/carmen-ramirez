import Link from "next/link";
import {GOOGLE_FORM_URL} from "@/lib/constants";

type Props = {
  children: React.ReactNode;
  size?: "md" | "lg";
  variant?: "solid" | "outline" | "ghost";
  className?: string;
  href?: string;
  external?: boolean;
};

const sizeClasses = {
  md: "px-5 py-2.5 text-[0.95rem]",
  lg: "px-7 py-3.5 text-base md:text-lg",
};

const variantClasses = {
  solid:
    "bg-pink text-white shadow-[0_12px_28px_-12px_rgba(224,127,160,0.55)] hover:bg-pink-700",
  outline:
    "border border-pink text-pink hover:bg-pink-100",
  ghost:
    "text-ink hover:text-pink",
};

export default function CTAButton({
  children,
  size = "md",
  variant = "solid",
  className = "",
  href = GOOGLE_FORM_URL,
  external = true,
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-[6px] font-[family-name:var(--font-anton)] uppercase tracking-[0.06em] underline underline-offset-[6px] decoration-[1.5px] transition-all duration-200 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

  const classes = `${base} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
