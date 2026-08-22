import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { cx } from "../lib/cx";

type Variant = "solid" | "hero" | "outlineLight" | "outlineDark" | "ghost";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  solid:
    "bg-ink text-white font-semibold hover:bg-ink/90 [&_svg]:transition-transform hover:[&_svg]:translate-x-0.5",
  hero: "bg-white text-ink font-semibold hover:brightness-95 [&_svg]:transition-transform hover:[&_svg]:translate-x-0.5",
  outlineLight:
    "border border-white/30 text-white hover:bg-white/10 hover:border-white/60",
  outlineDark:
    "border border-ink/20 text-ink hover:bg-ink hover:text-white",
  ghost: "text-ink hover:text-ink/70",
};

const sizes: Record<Size, string> = {
  md: "min-h-11 h-11 px-4 text-xs tracking-wider uppercase",
  lg: "min-h-11 h-11 px-5 sm:px-8 text-xs tracking-wider uppercase",
};

type Props = {
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

export function Button({
  href,
  variant = "solid",
  size = "md",
  className,
  children,
}: Props) {
  const cls = cx(
    "inline-flex items-center justify-center gap-2 rounded-md cursor-pointer transition-[color,background-color,border-color,filter] duration-200",
    variants[variant],
    sizes[size],
    className,
  );

  if (!href) return <span className={cls}>{children}</span>;

  const external = href.startsWith("http");
  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={cls}>
      {children}
    </Link>
  );
}

export function Arrow({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
