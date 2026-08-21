import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = join(root, "public");

const siteUrl = (process.env.VITE_SITE_URL ?? "").replace(/\/$/, "");
const allowIndexing =
  Boolean(siteUrl) && process.env.VITE_ALLOW_INDEXING !== "false";

const routes = ["/", "/midia"];
const lastmod = new Date().toISOString().slice(0, 10);

mkdirSync(publicDir, { recursive: true });

const robots = allowIndexing
  ? `# Maximus Agronegócio — gerado no build
User-agent: *
Allow: /

${siteUrl ? `Sitemap: ${siteUrl}/sitemap.xml` : "# Defina VITE_SITE_URL no deploy para incluir o Sitemap"}
`
  : `# Apresentação ou preview — sem domínio canônico; não indexar
User-agent: *
Disallow: /
`;

writeFileSync(join(publicDir, "robots.txt"), robots, "utf8");

if (!siteUrl) {
  console.warn(
    "[seo] VITE_SITE_URL não definido — sitemap.xml omitido. Defina no deploy de produção.",
  );
} else {
  const urls = routes
    .map(
      (path) => `  <url>
    <loc>${siteUrl}${path === "/" ? "/" : path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${path === "/" ? "weekly" : "monthly"}</changefreq>
    <priority>${path === "/" ? "1.0" : "0.7"}</priority>
  </url>`,
    )
    .join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  writeFileSync(join(publicDir, "sitemap.xml"), sitemap, "utf8");
}

console.log("[seo] robots.txt gerado" + (siteUrl ? " + sitemap.xml" : ""));
