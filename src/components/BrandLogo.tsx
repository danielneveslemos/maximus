import { Link } from "react-router-dom";
import { brand } from "../content/site";
import { cx } from "../lib/cx";

type BrandLogoProps = {
  className?: string;
  onClick?: () => void;
  variant?: "dark" | "light";
};

export function BrandLogo({
  className,
  onClick,
  variant = "dark",
}: BrandLogoProps) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className={cx(
        "shrink-0 min-h-11 inline-flex items-center gap-[13.2px]",
        variant === "dark" ? "text-white" : "text-ink",
        className,
      )}
      aria-label={`${brand.name} início`}
    >
      <span
        aria-hidden
        className="block size-[47.52px] lg:size-[52.8px] shrink-0 bg-current [mask-image:url(/maximus-mark.png?v=2)] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center] [-webkit-mask-image:url(/maximus-mark.png?v=2)] [-webkit-mask-size:contain] [-webkit-mask-repeat:no-repeat] [-webkit-mask-position:center]"
      />
      <span className="flex flex-col justify-center leading-none">
        <span className="font-display font-bold tracking-[0.18em] text-[17.16px] lg:text-[18.48px]">
          {brand.wordmark}
        </span>
        <span className="mt-[5.28px] font-display font-medium tracking-[0.28em] text-[11.88px] lg:text-[13.2px] opacity-80">
          AGRONEGÓCIO
        </span>
      </span>
    </Link>
  );
}
