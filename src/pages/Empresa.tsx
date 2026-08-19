import { galleryMap } from "../content/gallery";
import { company } from "../content/site";
import { Arrow, Button } from "../components/Button";
import { Section } from "../components/Section";

export function Empresa() {
  return (
    <>
      <section className="relative pt-36 pb-16 sm:pb-20 lg:pt-44 lg:pb-28 bg-ink text-white overflow-hidden grain">
        <img
          src={galleryMap["sede-fachada-oficial"].src}
          alt={galleryMap["sede-fachada-oficial"].alt}
          width={galleryMap["sede-fachada-oficial"].width}
          height={galleryMap["sede-fachada-oficial"].height}
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/50" />
        <div className="relative max-w-7xl mx-auto page-pad">
          <div className="text-[11px] uppercase tracking-[0.22em] text-stone mb-4">
            Empresa
          </div>
          <h1 className="font-display text-[clamp(1.85rem,7vw,2.25rem)] sm:text-5xl lg:text-6xl font-bold leading-[1.05] max-w-3xl mb-6">
            De Sabino às três unidades.
          </h1>
          <p className="text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed">
            {company.founder} · {company.founderRole}. Fundada em{" "}
            {company.founded}.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            {company.story.map((p, i) => (
              <p
                key={i}
                className="text-base text-muted leading-relaxed mb-5"
              >
                {p}
              </p>
            ))}
            <Button href="/boitel" variant="solid">
              Ver o boitel <Arrow />
            </Button>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-ink font-semibold mb-4">
              Volumes
            </div>
            <ul className="space-y-3 mb-10">
              {company.volumes.map((v) => (
                <li
                  key={v.year}
                  className="flex items-baseline justify-between gap-4 border-b border-hairline pb-3"
                >
                  <span className="text-muted">{v.year}</span>
                  <span className="font-display font-bold text-ink">
                    {v.value} animais
                  </span>
                </li>
              ))}
            </ul>
            <div className="rounded-2xl border border-hairline p-6 bg-card">
              <div className="text-xs uppercase tracking-[0.2em] text-ink font-semibold mb-2">
                Mix {company.mix.year}
              </div>
              <p className="font-display text-xl sm:text-2xl font-bold mb-2">
                {company.mix.clients} clientes · {company.mix.own} próprio
              </p>
              <p className="text-sm text-muted leading-relaxed">
                {company.mix.note} Total: {company.mix.total} cabeças.
              </p>
              <p className="text-sm text-muted mt-4">
                {company.revenue.y2025} em {company.mix.year} · meta{" "}
                {company.revenue.y2026} em 2026.
              </p>
              <p className="text-sm text-muted mt-2">
                {company.partners.count} pecuaristas parceiros.{" "}
                {company.partners.note}
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
