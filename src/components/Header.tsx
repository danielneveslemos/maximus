import { useEffect, useRef, useState } from "react";
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
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const main = document.getElementById("conteudo");
    const footer = document.querySelector("footer");
    main?.setAttribute("inert", "");
    footer?.setAttribute("inert", "");
    const panel = panelRef.current;
    const firstLink = panel?.querySelector<HTMLElement>("a");
    firstLink?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !panel) return;
      const items = [
        menuButtonRef.current,
        ...panel.querySelectorAll<HTMLElement>("a, button"),
      ].filter((el): el is HTMLElement => !!el);
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);
  const onNavClick = (href: string) => {
    closeMenu();
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
  const onExternalMenuClick = () => closeMenu();
  const onDark = open || !scrolled;

  return (
    <header
      className={cx(
        "fixed top-0 inset-x-0 z-50 transition-[color,border-color,background-color] duration-300",
        open
          ? "bg-ink"
          : !scrolled
            ? "bg-ink/70"
            : "bg-canvas border-b border-hairline",
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
          onClick={closeMenu}
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
          <span className="xl:hidden">
            <Button
              href={brand.whatsappBoitelUrl}
              variant={onDark ? "hero" : "solid"}
              size="md"
              className="hover:[&_svg]:translate-x-0 px-3"
            >
              <WhatsAppIcon className="size-4" />
              <span className="sr-only">WhatsApp</span>
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
          <button
            ref={menuButtonRef}
            type="button"
            className={cx(
              "xl:hidden min-w-11 min-h-11 w-11 h-11 flex flex-col items-center justify-center gap-1.5 cursor-pointer",
              onDark ? "text-white" : "text-ink",
            )}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className={cx("block w-5 h-px bg-current transition-transform", open && "rotate-45 translate-y-[7px]")} />
            <span className={cx("block w-5 h-px bg-current transition-opacity", open && "opacity-0")} />
            <span className={cx("block w-5 h-px bg-current transition-transform", open && "-rotate-45 -translate-y-[7px]")} />
          </button>
        </div>
      </div>

      {open && (
        <>
          <button
            type="button"
            className="xl:hidden fixed inset-x-0 bottom-0 z-40 bg-ink/60 cursor-default"
            style={{ top: "calc(env(safe-area-inset-top, 0px) + 6.75rem)" }}
            aria-label="Fechar menu"
            onClick={closeMenu}
            tabIndex={-1}
          />
          <div
            ref={panelRef}
            id="mobile-nav"
            className="xl:hidden relative z-50 bg-ink text-white border-t border-white/10 overflow-y-auto overscroll-contain h-[calc(100dvh-env(safe-area-inset-top,0px)-6.75rem)]"
            style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom, 0px))" }}
          >
            <nav className="max-w-7xl mx-auto page-pad py-4 flex flex-col">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => onNavClick(item.href)}
                  aria-current={
                    isNavActive(item.href, pathname, hash) ? "page" : undefined
                  }
                  className={cx(
                    "min-h-12 flex items-center py-3 text-base font-medium border-b border-white/10",
                    isNavActive(item.href, pathname, hash)
                      ? "text-white"
                      : "text-white",
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={brand.whatsappBoitelUrl}
                onClick={onExternalMenuClick}
                className="min-h-12 inline-flex items-center gap-1.5 pt-4 text-white font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon />
                WhatsApp Boitel
              </a>
              <a
                href={brand.whatsappRecruitmentUrl}
                onClick={onExternalMenuClick}
                className="min-h-12 inline-flex items-center gap-1.5 pt-2 text-white font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon />
                Recrutamento
              </a>
              <a
                href={brand.instagramUrl}
                onClick={onExternalMenuClick}
                className="min-h-12 inline-flex items-center gap-1.5 pt-2 text-white font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
                Instagram @{brand.instagramHandle}
              </a>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
