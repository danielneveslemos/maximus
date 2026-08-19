import type { ReactNode } from "react";
import { cx } from "../lib/cx";

export function Section({
  children,
  muted = false,
  className,
  id,
}: {
  children: ReactNode;
  muted?: boolean;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      tabIndex={id ? -1 : undefined}
      className={cx(
        "py-14 sm:py-20 lg:py-28 outline-none",
        id && "scroll-mt-32",
        muted && "bg-stone/35",
        className,
      )}
    >
      <div className="max-w-7xl mx-auto page-pad">{children}</div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  titleAriaLabel,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  titleAriaLabel?: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cx(
        "max-w-2xl mb-12 lg:mb-16",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow && (
        <div className="text-xs uppercase tracking-[0.2em] text-ink font-semibold mb-3">
          {eyebrow}
        </div>
      )}
      <h2
        className="font-display text-[1.75rem] sm:text-3xl lg:text-4xl font-bold text-ink mb-4 leading-tight"
        {...(titleAriaLabel ? { "aria-label": titleAriaLabel } : {})}
      >
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted leading-relaxed">{description}</p>
      )}
    </div>
  );
}
