import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { canonicalPath } from "./HashScroll";
import { brand } from "../content/site";
import {
  allowIndexing,
  absoluteUrl,
  buildJsonLd,
  defaultOgImage,
  pageSeoForPath,
  resolveSiteUrl,
} from "../content/seo";

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

function setLink(
  rel: string,
  href: string,
  attrs: Record<string, string> = {},
) {
  const attrKey = Object.entries(attrs)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => `[${key}="${value}"]`)
    .join("");
  const selector = `link[rel="${rel}"]${attrKey}`;
  let el = document.head.querySelector<HTMLLinkElement>(selector);
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
  for (const [key, value] of Object.entries(attrs)) {
    el.setAttribute(key, value);
  }
}

function setJsonLd(data: Record<string, unknown>) {
  const id = "maximus-seo-jsonld";
  let el = document.head.querySelector<HTMLScriptElement>(`script#${id}`);
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export function SeoHead() {
  const { pathname } = useLocation();
  const path = canonicalPath(pathname);
  const meta = pageSeoForPath(path);
  const indexable = allowIndexing && meta.index;

  useEffect(() => {
    const origin = resolveSiteUrl(window.location.origin);
    const pageUrl = absoluteUrl(path, origin || window.location.origin);
    const ogImage = absoluteUrl(
      defaultOgImage,
      origin || window.location.origin,
    );

    document.title = meta.title;

    setLink("canonical", pageUrl);
    if (origin) {
      setLink("alternate", absoluteUrl(path, origin), {
        hreflang: "pt-BR",
      });
      setLink("alternate", absoluteUrl(path, origin), {
        hreflang: "x-default",
      });
    }

    setMeta("name", "description", meta.description);
    setMeta(
      "name",
      "robots",
      indexable ? "index, follow, max-image-preview:large" : "noindex, follow",
    );
    setMeta("name", "googlebot", indexable ? "index, follow" : "noindex, follow");

    setMeta("property", "og:site_name", brand.name);
    setMeta("property", "og:locale", "pt_BR");
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", pageUrl);
    setMeta("property", "og:title", meta.title);
    setMeta("property", "og:description", meta.description);
    setMeta("property", "og:image", ogImage);

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", meta.title);
    setMeta("name", "twitter:description", meta.description);
    setMeta("name", "twitter:image", ogImage);

    if (origin) {
      setJsonLd(buildJsonLd(origin, path));
    }
  }, [path, meta.title, meta.description, meta.index, indexable]);

  return null;
}
