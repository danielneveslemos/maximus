import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const distIndex = join(root, "dist", "index.html");

const siteUrl = (process.env.VITE_SITE_URL ?? "").replace(/\/$/, "");
const allowIndexing =
  Boolean(siteUrl) && process.env.VITE_ALLOW_INDEXING !== "false";

const ogImagePath = "/gallery/2022-07-01_19-19-51.jpg";
const ogImage = siteUrl ? `${siteUrl}${ogImagePath}` : ogImagePath;
const robots = allowIndexing
  ? "index, follow, max-image-preview:large"
  : "noindex, follow";
const googlebot = allowIndexing ? "index, follow" : "noindex, follow";

let html = readFileSync(distIndex, "utf8");

html = html.replace(
  /<meta name="robots" content="[^"]*" \/>/,
  `<meta name="robots" content="${robots}" />`,
);
html = html.replace(
  /<meta name="googlebot" content="[^"]*" \/>/,
  `<meta name="googlebot" content="${googlebot}" />`,
);
html = html.replace(
  /<meta property="og:image" content="[^"]*" \/>/,
  `<meta property="og:image" content="${ogImage}" />`,
);
html = html.replace(
  /<meta name="twitter:image" content="[^"]*" \/>/,
  `<meta name="twitter:image" content="${ogImage}" />`,
);

if (siteUrl) {
  const canonical = `${siteUrl}/`;
  if (!html.includes('rel="canonical"')) {
    html = html.replace(
      "</head>",
      `    <link rel="canonical" href="${canonical}" />\n  </head>`,
    );
  }
}

writeFileSync(distIndex, html, "utf8");
console.log("[seo] dist/index.html ajustado para o ambiente de deploy");
