import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export const KNOWN_ROUTES = [
  "/",
  "/boitel",
  "/empresa",
  "/unidades",
  "/midia",
] as const;

export function normalizePath(pathname: string) {
  if (pathname.length > 1 && pathname.endsWith("/")) return pathname.slice(0, -1);
  return pathname;
}

export function canonicalPath(pathname: string) {
  return normalizePath(pathname).toLowerCase();
}

export function isKnownRoute(pathname: string) {
  return (KNOWN_ROUTES as readonly string[]).includes(canonicalPath(pathname));
}

function scrollStorageKey(pathname: string, hash: string) {
  return `maximus-scroll:${canonicalPath(pathname)}${hash}`;
}

export function HashScroll() {
  const { pathname, hash } = useLocation();
  const navType = useNavigationType();
  const path = canonicalPath(pathname);

  useEffect(() => {
    const key = scrollStorageKey(pathname, hash);
    const save = () => sessionStorage.setItem(key, String(window.scrollY));
    save();
    window.addEventListener("scroll", save, { passive: true });
    return () => window.removeEventListener("scroll", save);
  }, [pathname, hash]);

  useEffect(() => {
    if (hash) return;
    if (navType === "POP") {
      const saved = sessionStorage.getItem(scrollStorageKey(pathname, hash));
      if (!saved) return;
      const y = Number(saved);
      const restore = () => window.scrollTo(0, y);
      requestAnimationFrame(restore);
      const t = window.setTimeout(restore, 0);
      return () => window.clearTimeout(t);
    }
    window.scrollTo(0, 0);
  }, [path, hash, navType, pathname]);

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const behavior: ScrollBehavior = reduce ? "auto" : "smooth";
    let cancelled = false;

    const run = () => {
      if (cancelled) return;
      const el = document.getElementById(id);
      if (!el) return;
      el.scrollIntoView({ behavior, block: "start" });
      if (id === "conteudo") el.focus({ preventScroll: true });
    };

    const t0 = window.setTimeout(run, 0);
    const t1 = window.setTimeout(run, 120);
    const t2 = window.setTimeout(run, 500);
    return () => {
      cancelled = true;
      window.clearTimeout(t0);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [pathname, hash]);

  return null;
}
