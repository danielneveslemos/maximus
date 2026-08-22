import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { brand, nav, press } from "../content/site";
import { normalizePath } from "./HashScroll";
import { cx } from "../lib/cx";
import { BrandLogo } from "./BrandLogo";
import { Button } from "./Button";
import { InstagramIcon } from "./InstagramIcon";
import { WhatsAppIcon } from "./WhatsAppIcon";

function isNavActive(href: string, pathname: string, hash: string) {
  const path = normalizePath(pathname);
  const hashAt = href.indexOf("#");
  const itemPath = normalizePath(
    hashAt === -1 ? href : href.slice(0, hashAt) || "/",
  );
  const itemHash = hashAt === -1 ? "" : href.slice(hashAt);

  if (itemPath !== "/") return path === itemPath;
  if (path !== "/") return false;
  if (!itemHash || itemHash === "#inicio") {
    return !hash || hash === "#inicio";
  }
  return hash === itemHash;
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onNavClick = (href: string) => {
    const hashAt = href.indexOf("#");
    if (hashAt === -1) return;
    const itemPath = normalizePath(href.slice(0, hashAt) || "/");
    const itemHash = href.slice(hashAt);
    if (normalizePath(pathname) !== itemPath || hash !== itemHash) return;
    const id = itemHash.slice(1);
    const el = document.getElementById(id);
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };
  const onDark = !scrolled;

  return (
    <header
      className={cx(
        "fixed top-0 inset-x-0 z-50 transition-[color,border-color,background-color] duration-300",
        !scrolled ? "bg-ink/70" : "bg-canvas border-b border-hairline",
      )}
      style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
    >
      <a
        href={press.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-11 w-full items-center justify-center bg-stone text-ink text-center text-xs sm:text-sm font-medium px-4 py-2 hover:brightness-95 transition-[filter] duration-300"
      >
        <span className="inline-flex items-center gap-2 flex-wrap justify-center min-w-0">
          <span className="uppercase tracking-wider text-[10px] sm:text-[11px] font-semibold opacity-90 shrink-0">
            {press.outlet}
          </span>
          <span className="max-w-[18ch] sm:max-w-[52ch] truncate">
            {press.title}
          </span>
          <span className="underline underline-offset-2 font-semibold shrink-0">
            Ler matéria →
          </span>
        </span>
      </a>

      <div className="max-w-7xl mx-auto page-pad h-16 lg:h-20 flex items-center justify-between gap-4 xl:grid xl:grid-cols-[1fr_auto_1fr] xl:items-center xl:gap-6">
        <BrandLogo
          variant={onDark ? "dark" : "light"}
          className="justify-self-start transition-colors duration-500"
        />

        <nav className="hidden xl:flex items-center justify-center gap-0.5 2xl:gap-1">
          {nav.map((item) => {
            const active = isNavActive(item.href, pathname, hash);
            return (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => onNavClick(item.href)}
                aria-current={active ? "page" : undefined}
                className={cx(
                  "px-3 py-2 min-h-11 inline-flex items-center rounded-md text-base font-medium transition-colors duration-200",
                  onDark
                    ? active
                      ? "text-white font-semibold"
                      : "text-white hover:text-white [text-shadow:0_1px_2px_rgb(0_0_0/0.45)]"
                    : active
                      ? "text-ink"
                      : "text-ink/70 hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 justify-self-end">
          <span className="xl:hidden inline-flex items-center gap-2">
            <Button
              href={brand.whatsappBoitelUrl}
              variant={onDark ? "hero" : "solid"}
              size="md"
              className="hover:[&_svg]:translate-x-0 px-3"
            >
              <WhatsAppIcon className="size-4" />
              <span className="sr-only">WhatsApp</span>
            </Button>
            <Button
              href={brand.instagramUrl}
              variant={onDark ? "hero" : "solid"}
              size="md"
              className="hover:[&_svg]:translate-x-0 px-3"
            >
              <InstagramIcon className="size-4" />
              <span className="sr-only">Instagram</span>
            </Button>
          </span>
          <span className="hidden xl:inline-flex items-center gap-2">
            <Button
              href={brand.whatsappBoitelUrl}
              variant={onDark ? "hero" : "solid"}
              size="md"
              className="hover:[&_svg]:translate-x-0"
            >
              <WhatsAppIcon className="size-4" />
              WhatsApp
            </Button>
            <Button
              href={brand.instagramUrl}
              variant={onDark ? "hero" : "solid"}
              size="md"
              className="hover:[&_svg]:translate-x-0"
            >
              <InstagramIcon className="size-4" />
              Instagram
            </Button>
          </span>
        </div>
      </div>
    </header>
  );
}
