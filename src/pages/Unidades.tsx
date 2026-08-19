import { Link } from "react-router-dom";
import { galleryMap } from "../content/gallery";
import { units } from "../content/site";
import { Arrow } from "../components/Button";
import { Section, SectionHead } from "../components/Section";

const shots = {
  Sertãozinho: galleryMap["aerea-sertaozinho-panoramica"],
  Clementina: galleryMap["aerea-clementina-pens"],
  Sales: galleryMap["aerea-sales-represa"],
} as const;

export function Unidades() {
  return (
    <>
      <section className="relative pt-36 pb-16 sm:pb-20 lg:pt-44 lg:pb-28 bg-ink text-white overflow-hidden grain">
        <img
          src={galleryMap["aerea-panoramica-geral"].src}
          alt={galleryMap["aerea-panoramica-geral"].alt}
          width={galleryMap["aerea-panoramica-geral"].width}
          height={galleryMap["aerea-panoramica-geral"].height}
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/50" />
        <div className="relative max-w-7xl mx-auto page-pad">
          <div className="text-[11px] uppercase tracking-[0.22em] text-stone mb-4">
            Unidades
          </div>
          <h1 className="font-display text-[clamp(1.85rem,7vw,2.25rem)] sm:text-5xl lg:text-6xl font-bold leading-[1.05] max-w-3xl mb-6">
            Três confinamentos no interior de São Paulo.
          </h1>
          <p className="text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed">
            Sertãozinho, Clementina e Sales — propriedades arrendadas. Engorda
            de gado próprio e de terceiros no mesmo sistema de boitel.
          </p>
        </div>
      </section>

      <Section>
        <SectionHead
          eyebrow="Sites"
          title="O mesmo sistema em cada pátio."
          description="Sertãozinho, Clementina e Sales. Em cada uma, rebanho próprio e gado de pecuaristas no mesmo contrato de matéria seca."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {units.map((u) => (
            <article
              key={u.name}
              id={u.slug}
              className="rounded-2xl overflow-hidden border border-hairline bg-card shadow-[var(--shadow-card)] scroll-mt-32"
            >
              <img
                src={shots[u.name].src}
                alt={shots[u.name].alt}
                width={shots[u.name].width}
                height={shots[u.name].height}
                loading="lazy"
                decoding="async"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="p-6">
                <h2 className="font-display text-2xl font-bold mb-1">
                  <a
                    href={u.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-ink/70 transition-colors duration-200"
                  >
                    {u.name}
                  </a>
                </h2>
                <p className="text-sm text-muted mb-4">
                  {u.state} · {u.kind}
                </p>
                <p className="text-sm text-muted leading-relaxed">
                  Gado próprio e de terceiros no mesmo confinamento.
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12">
          <Link
            to="/boitel"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink hover:text-ink/70 transition-colors duration-200"
          >
            Como funciona o boitel <Arrow />
          </Link>
        </div>
      </Section>
    </>
  );
}
