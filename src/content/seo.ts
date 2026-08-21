import { brand, company, mapLocations, units } from "./site";

/** Canonical production origin — set `VITE_SITE_URL` at deploy (no trailing slash). */
export const siteUrl = (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(
  /\/$/,
  "",
);

/** Indexação só após go-live: requer domínio canônico e `VITE_ALLOW_INDEXING` ≠ false. */
export const allowIndexing =
  Boolean(siteUrl) &&
  (import.meta.env.VITE_ALLOW_INDEXING as string | undefined) !== "false";

export const defaultOgImage = "/gallery/2022-07-01_19-19-51.jpg";

export const legalEntity = {
  name: "MAXIMUS AGRONEGOCIOS E PARTICIPACOES LTDA",
  taxId: "39.935.460/0001-47",
} as const;

export const seoContact = {
  telephone: "+55-16-99753-4551",
  contactType: "Boitel e confinamento",
  availableLanguage: ["Portuguese", "pt-BR"],
} as const;

export type SeoRoute = "/" | "/midia";

export interface PageSeo {
  path: SeoRoute;
  title: string;
  description: string;
  index: boolean;
}

/** Routes included in sitemap.xml (hash sections stay on `/`). */
export const sitemapRoutes: SeoRoute[] = ["/", "/midia"];

export const pageSeo: Record<SeoRoute, PageSeo> = {
  "/": {
    path: "/",
    title: "Boitel e confinamento no interior de SP · Maximus Agronegócio",
    description:
      "Confinamento de bovinos e boitel por matéria seca no interior paulista. Três unidades em Sertãozinho, Clementina e Sales (SP). Engorda transparente para pecuaristas de todo o Brasil.",
    index: true,
  },
  "/midia": {
    path: "/midia",
    title: "Mídia · Maximus Agronegócio · confinamento e boitel SP",
    description:
      "Vídeos, reportagens, websérie e presença na mídia da Maximus Agronegócio — confinamento e boitel no interior de São Paulo. Fundador Neto Sartor.",
    index: true,
  },
};

export const notFoundSeo = {
  title: "Página não encontrada · Maximus Agronegócio",
  description:
    "A página solicitada não foi encontrada no site da Maximus Agronegócio.",
  index: false,
} as const;

export function resolveSiteUrl(runtimeOrigin?: string): string {
  if (siteUrl) return siteUrl;
  if (runtimeOrigin) return runtimeOrigin.replace(/\/$/, "");
  return "";
}

export function absoluteUrl(path: string, origin: string): string {
  const base = origin.replace(/\/$/, "");
  if (path === "/") return `${base}/`;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageSeoForPath(path: string): PageSeo | typeof notFoundSeo {
  if (path === "/") return pageSeo["/"];
  if (path === "/midia") return pageSeo["/midia"];
  return notFoundSeo;
}

export function buildJsonLd(origin: string, path: string): Record<string, unknown> {
  const orgId = `${origin}/#organization`;
  const websiteId = `${origin}/#website`;
  const pageUrl = absoluteUrl(path, origin);
  const pageMeta = pageSeoForPath(path);

  const feedlotUnits = units.map((unit) => ({
    "@type": "Place",
    "@id": `${origin}/#unit-${unit.slug}`,
    name: `Maximus Agronegócio · Unidade ${unit.name}`,
    description: `${unit.kind} de bovinos de corte em ${unit.name}, interior de São Paulo.`,
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: `${unit.name}, São Paulo, Brasil`,
    },
    hasMap: unit.mapsUrl,
  }));

  const office = mapLocations.find((loc) => loc.slug === "escritorio");

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: brand.name,
        legalName: legalEntity.name,
        taxID: legalEntity.taxId,
        url: origin,
        logo: absoluteUrl("/favicon.svg", origin),
        image: absoluteUrl(defaultOgImage, origin),
        description: company.summary,
        foundingDate: String(company.founded),
        founder: {
          "@type": "Person",
          name: company.founder,
          jobTitle: company.founderRole,
        },
        sameAs: [brand.instagramUrl],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: seoContact.telephone,
          contactType: seoContact.contactType,
          availableLanguage: seoContact.availableLanguage,
          areaServed: "BR",
        },
        areaServed: [
          { "@type": "Country", name: "Brasil" },
          { "@type": "State", name: "São Paulo" },
        ],
        knowsAbout: [
          "Boitel",
          "Confinamento bovino",
          "Engorda por matéria seca",
          "Terminação de bovinos de corte",
        ],
        subOrganization: feedlotUnits.map((unit) => ({ "@id": unit["@id"] })),
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: origin,
        name: brand.name,
        description: company.summary,
        inLanguage: "pt-BR",
        publisher: { "@id": orgId },
      },
      ...feedlotUnits,
      ...(office
        ? [
            {
              "@type": "Place",
              "@id": `${origin}/#office-ribeirao-preto`,
              name: `${brand.name} · Escritório Ribeirão Preto`,
              containedInPlace: {
                "@type": "AdministrativeArea",
                name: "Ribeirão Preto, São Paulo, Brasil",
              },
              hasMap: office.mapsUrl,
            },
          ]
        : []),
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: pageMeta.title,
        description: pageMeta.description,
        isPartOf: { "@id": websiteId },
        about: { "@id": orgId },
        inLanguage: "pt-BR",
      },
    ],
  };
}
