import { galleryMap } from "../content/gallery";
import { boitel } from "../content/site";
import { Arrow, Button } from "../components/Button";
import { Section, SectionHead } from "../components/Section";

export function Boitel() {
  return (
    <>
      <section className="relative pt-36 pb-16 sm:pb-20 lg:pt-44 lg:pb-28 bg-ink text-white overflow-hidden grain">
        <img
          src={galleryMap["aerea-corredor-trato"].src}
          alt={galleryMap["aerea-corredor-trato"].alt}
          width={galleryMap["aerea-corredor-trato"].width}
          height={galleryMap["aerea-corredor-trato"].height}
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/50" />
        <div className="relative max-w-7xl mx-auto page-pad">
          <div className="text-[11px] uppercase tracking-[0.22em] text-stone mb-4">
            Modelo
          </div>
          <h1 className="font-display text-[clamp(1.85rem,7vw,2.25rem)] sm:text-5xl lg:text-6xl font-bold leading-[1.05] max-w-3xl mb-6">
            {boitel.title}
          </h1>
          <p className="text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed">
            {boitel.lead}
          </p>
          <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl">
            {boitel.proof.map((m) => (
              <div key={m.label} className="border-l border-white/15 pl-5">
                <div className="font-display text-3xl font-bold text-stone tracking-tight">
                  {m.value}
                </div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-white/55 mt-1.5">
                  {m.label}
                </div>
                <p className="text-xs text-white/50 mt-2 leading-relaxed">
                  {m.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <SectionHead
          eyebrow="Como funciona"
          title="Por que matéria seca."
          description="Por que a Maximus cobra matéria seca, como o interesse se alinha e por que o modelo chega mais barato."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {boitel.howItWorks.map((p, i) => {
            const ink = i % 2 === 1;
            return (
              <div
                key={p.title}
                className={
                  ink
                    ? "p-5 sm:p-7 rounded-2xl bg-ink text-white shadow-[var(--shadow-card)] min-w-0"
                    : "p-5 sm:p-7 rounded-2xl bg-card border border-hairline shadow-[var(--shadow-card)] min-w-0"
                }
              >
                <div
                  className={
                    ink
                      ? "w-12 h-12 rounded-xl border border-white/15 bg-white/10 flex items-center justify-center mb-5 font-mono text-xs tracking-[0.14em] text-stone"
                      : "w-12 h-12 rounded-xl border border-hairline bg-canvas flex items-center justify-center mb-5 font-mono text-xs tracking-[0.14em] text-muted"
                  }
                >
                  0{i + 1}
                </div>
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                <p
                  className={
                    ink
                      ? "text-sm text-white/70 leading-relaxed"
                      : "text-sm text-muted leading-relaxed"
                  }
                >
                  {p.body}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      <blockquote className="max-w-3xl mx-auto page-pad py-8 text-center">
        <p className="font-display text-xl sm:text-2xl lg:text-3xl font-bold leading-tight text-ink">
          “{boitel.quote}”
        </p>
        <footer className="mt-4 text-sm text-muted">{boitel.quoteAttr}</footer>
      </blockquote>

      <Section muted>
        <div id="antecipacao" className="scroll-mt-32 max-w-2xl">
          <div className="text-xs uppercase tracking-[0.2em] text-ink font-semibold mb-3">
            Serviço
          </div>
          <h2 className="font-display text-[1.75rem] sm:text-3xl lg:text-4xl font-bold mb-5 leading-tight">
            {boitel.antecipacao.title}
          </h2>
          <p className="text-lg text-muted leading-relaxed mb-8">
            {boitel.antecipacao.body}
          </p>
          <Button href="/unidades" variant="solid">
            Ver unidades <Arrow />
          </Button>
        </div>
      </Section>
    </>
  );
}
