import { galleryMap } from "../content/gallery";
import {
  brand,
  company,
  heroProof,
  offers,
  units,
} from "../content/site";
import { Arrow, Button } from "../components/Button";
import { Section, SectionHead } from "../components/Section";
import { LocalVideo } from "../components/LocalVideo";
import { WhatsAppIcon } from "../components/WhatsAppIcon";

const storyFigures = [
  {
    src: galleryMap["sede-fachada-oficial"].src,
    label: "Sede Maximus",
    alt: galleryMap["sede-fachada-oficial"].alt,
    width: galleryMap["sede-fachada-oficial"].width,
    height: galleryMap["sede-fachada-oficial"].height,
    className: "col-span-3 row-span-2",
  },
  {
    src: galleryMap["confina-brasil-scot"].src,
    label: "Confina Brasil",
    alt: galleryMap["confina-brasil-scot"].alt,
    width: galleryMap["confina-brasil-scot"].width,
    height: galleryMap["confina-brasil-scot"].height,
    className: "col-span-2 row-span-1",
  },
  {
    src: galleryMap["cocho-nelore-vertical"].src,
    label: "Matéria seca",
    alt: galleryMap["cocho-nelore-vertical"].alt,
    width: galleryMap["cocho-nelore-vertical"].width,
    height: galleryMap["cocho-nelore-vertical"].height,
    className: "col-span-2 row-span-1",
  },
];

const opGallery = [
  {
    ...galleryMap["angus-destaque-piquete"],
    label: "Redução no tempo de terminação e aumento do lucro",
  },
  {
    ...galleryMap["piquete-nelore-cocho"],
    label:
      "Acabamento de carcaça superior ao do animal a pasto melhorando o rendimento no abate",
  },
  {
    ...galleryMap["lote-angus-ceu-azul"],
    label:
      "Impacto direto na taxa de lotação e giro de estoque de gado da fazenda",
  },
  {
    ...galleryMap["lote-angus-sertaozinho"],
    label:
      "Não há desembolso inicial para o pecuarista, pagamento só após o abate",
  },
];

const capabilityShots = [
  {
    ...galleryMap["acabamento-carcaca"],
    label: "Melhora na previsibilidade do fluxo de caixa",
  },
  {
    ...galleryMap["cocho-concreto-alimentacao"],
    label: "Alivia pastagens e possibilita reposição antecipada",
  },
  {
    ...galleryMap["lote-cruzamento-descanso"],
    label: "Acesso a bonificações exclusivas junto aos frigoríficos",
  },
  {
    ...galleryMap["lote-gado-ancp-conecta"],
    label: "Preferência na escala de abate do frigorífico",
  },
];

const extraGallery = [
  {
    ...galleryMap["boiada-nelore-frente"],
    label: "Antecipação de recebíveis",
  },
  {
    ...galleryMap["embarque-abate-rampa"],
    label: "Equipe técnica especializada focada 24/7",
  },
  {
    ...galleryMap["curral-manejo-seringa"],
    label: "Proteção de preço no mercado futuro",
  },
  {
    ...galleryMap["lote-bois-pretos-sunset"],
    label: "Dieta elevada ao mais alto nível da nutrição de gado de corte",
    shiftUp: 60,
  },
];

const industryCards = [
  { title: "Transparência", ...galleryMap["aerea-sertaozinho-agrishow"] },
  { title: "Credibilidade", ...galleryMap["aerea-corredor-trato"] },
  { title: "Segurança", ...galleryMap["aerea-sales-represa"] },
  { title: "Tecnologia", ...galleryMap["aerea-modulos-canavial"] },
  { title: "Intensificação", ...galleryMap["aerea-macro-arvore-central"] },
  { title: "Rentabilidade", ...galleryMap["aerea-panoramica-geral"] },
];

export function Home() {
  return (
    <>
      <section
        id="inicio"
        className="relative min-h-dvh flex items-center pt-28 pb-16 sm:pb-20 lg:pt-36 bg-ink text-white overflow-hidden grain"
      >
        <img
          src={galleryMap["aerea-macro-arvore-central"].src}
          alt={galleryMap["aerea-macro-arvore-central"].alt}
          width={galleryMap["aerea-macro-arvore-central"].width}
          height={galleryMap["aerea-macro-arvore-central"].height}
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/25" />
        <div className="absolute inset-0 opacity-[0.07] hero-grid" />

        <div className="relative max-w-7xl mx-auto page-pad grid lg:grid-cols-12 gap-10 lg:gap-12 items-center w-full min-w-0">
          <div className="lg:col-span-7 animate-fade-up min-w-0">
            <div className="inline-flex max-w-full items-center px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-[10px] sm:text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.22em] mb-6 sm:mb-7">
              <span className="min-w-0">12º MAIOR CONFINAMENTO DO BRASIL</span>
            </div>
            <h1 className="font-display text-[clamp(2rem,8vw,2.75rem)] sm:text-6xl lg:text-[4.5rem] font-bold leading-[1.05] mb-6 sm:mb-7">
              Rentabilidade com{" "}
              <span className="text-white">transparência e confiança</span>.
            </h1>
            <p className="text-base lg:text-lg text-white max-w-xl mb-8 sm:mb-9 leading-relaxed">
              {company.teaser}
            </p>
            <div className="flex flex-col min-[420px]:flex-row min-[420px]:flex-wrap gap-3">
              {units.map((u) => (
                <Button
                  key={u.name}
                  href={u.mapsUrl}
                  variant="outlineLight"
                  size="lg"
                  className="uppercase w-full min-[420px]:w-auto"
                >
                  {u.name} / SP
                </Button>
              ))}
            </div>
            <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-6 max-w-2xl">
              {heroProof.map((m) => (
                <div key={`${m.value}-${m.label}`} className="border-l border-white/15 pl-3 sm:pl-4 min-w-0">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight font-display break-words">
                    {m.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.14em] sm:tracking-[0.18em] text-white mt-1.5 leading-snug">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex lg:col-span-5 items-center justify-center relative animate-fade-in">
            <figure className="relative w-full max-w-[480px] mx-auto">
              <div className="relative rounded-3xl overflow-hidden ring-1 ring-white/15 shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
                <img
                  src={galleryMap["aerea-sales-represa"].src}
                  alt={galleryMap["aerea-sales-represa"].alt}
                  width={galleryMap["aerea-sales-represa"].width}
                  height={galleryMap["aerea-sales-represa"].height}
                  className="w-full h-[240px] sm:h-[340px] lg:h-[520px] object-cover object-center"
                />
              </div>
            </figure>
          </div>
        </div>
      </section>

      <Section id="boitel">
        <SectionHead
          eyebrow="Benefícios para pecuaristas parceiros"
          title="Utilize o Boitel como ferramenta para maximizar o lucro da sua fazenda"
          description="A pecuária mudou. Intensificar não é mais uma opção. Veja abaixo a forma mais lucrativa de fazer isso e como a Maximus pode te ajudar nesse projeto."
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {opGallery.map((t) => (
            <div
              key={t.id}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] shadow-[var(--shadow-card)] ring-1 ring-hairline bg-card"
            >
              <img
                src={t.src}
                alt={t.alt}
                width={t.width}
                height={t.height}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {t.label ? (
                <span className="absolute inset-x-0 bottom-0 text-white">
                  <span className="relative block px-3 sm:px-4 pt-6 sm:pt-8 pb-2">
                    <span className="gallery-base-gradient" />
                    <span className="relative text-[13px] sm:text-base font-medium leading-snug line-clamp-6 sm:line-clamp-3">
                      {t.label}
                    </span>
                  </span>
                </span>
              ) : null}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {capabilityShots.map((t) => (
            <div
              key={t.id}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] shadow-[var(--shadow-card)] ring-1 ring-hairline bg-card"
            >
              <img
                src={t.src}
                alt={t.alt}
                width={t.width}
                height={t.height}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {t.label ? (
                <span className="absolute inset-x-0 bottom-0 text-white">
                  <span className="relative block px-3 sm:px-4 pt-6 sm:pt-8 pb-2">
                    <span className="gallery-base-gradient" />
                    <span className="relative text-[13px] sm:text-base font-medium leading-snug line-clamp-6 sm:line-clamp-3">
                      {t.label}
                    </span>
                  </span>
                </span>
              ) : null}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {extraGallery.map((t) => (
            <div
              key={t.id}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] shadow-[var(--shadow-card)] ring-1 ring-hairline bg-card"
            >
              <img
                src={t.src}
                alt={t.alt}
                width={t.width}
                height={t.height}
                loading="lazy"
                decoding="async"
                className={
                  "shiftUp" in t && t.shiftUp
                    ? "absolute left-0 w-full object-cover group-hover:scale-105 transition-transform duration-700"
                    : "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                }
                style={
                  "shiftUp" in t && t.shiftUp
                    ? {
                        height: `${100 + t.shiftUp}%`,
                        top: `-${t.shiftUp}%`,
                      }
                    : undefined
                }
              />
              {t.label ? (
                <span className="absolute inset-x-0 bottom-0 text-white">
                  <span className="relative block px-3 sm:px-4 pt-6 sm:pt-8 pb-2">
                    <span className="gallery-base-gradient" />
                    <span className="relative text-[13px] sm:text-base font-medium leading-snug line-clamp-6 sm:line-clamp-3">
                      {t.label}
                    </span>
                  </span>
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead
          eyebrow="O motor do nosso crescimento como boitel"
          titleAriaLabel="Consumo de Matéria Seca Alinhamento de Interesses"
          title={
            <>
              Consumo de Matéria Seca
              <br />
              Alinhamento de Interesses
            </>
          }
          description="De um lado, o pecuarista deseja que o animal consuma o máximo possível para ganhar peso o mais rápido possível. Do outro, o confinamento procura controlar seus custos, gerando questionamentos frequentes sobre o manejo alimentar. O consumo de matéria seca alinha os interesses de forma transparente. 89,5% dos nossos clientes escolhem essa modalidade de boitel."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {offers.map((p, i) => {
            const ink = i % 2 === 1;
            return (
              <article
                key={`${p.title}-${i}`}
                className={
                  ink
                    ? "relative h-full p-5 sm:p-7 rounded-2xl bg-ink text-white shadow-[var(--shadow-card)] overflow-hidden min-w-0"
                    : "relative h-full p-5 sm:p-7 rounded-2xl bg-card border border-hairline shadow-[var(--shadow-card)] overflow-hidden min-w-0"
                }
              >
                <div
                  className={
                    ink
                      ? "w-12 h-12 rounded-xl border border-white/15 bg-white/10 flex items-center justify-center mb-5 text-white"
                      : "w-12 h-12 rounded-xl border border-hairline bg-canvas flex items-center justify-center mb-5 text-ink"
                  }
                >
                  <span
                    aria-hidden
                    className="block size-7 bg-current [mask-image:url(/maximus-mark.png?v=2)] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center] [-webkit-mask-image:url(/maximus-mark.png?v=2)] [-webkit-mask-size:contain] [-webkit-mask-repeat:no-repeat] [-webkit-mask-position:center]"
                  />
                </div>
                <h3 className="relative text-lg font-semibold mb-2">
                  {p.title}
                </h3>
                <p
                  className={
                    ink
                      ? "text-sm text-white leading-relaxed"
                      : "text-sm text-muted leading-relaxed"
                  }
                >
                  {p.body}
                </p>
              </article>
            );
          })}
        </div>
      </Section>

      <Section muted id="empresa">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-5 grid-rows-2 gap-2 lg:gap-3 aspect-[5/4] sm:aspect-[5/3] lg:aspect-[4/5] max-w-md lg:max-w-none mx-auto w-full">
              {storyFigures.map((t) => (
                <figure
                  key={t.label}
                  className={`relative rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)] ring-1 ring-hairline ${t.className}`}
                >
                  <img
                    src={t.src}
                    alt={t.alt}
                    width={t.width}
                    height={t.height}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                  <figcaption className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-4 sm:right-auto text-[10px] uppercase tracking-[0.12em] sm:tracking-[0.22em] text-white font-semibold">
                    {t.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-ink font-semibold mb-3">
              {company.scale.eyebrow}
            </div>
            <h2 className="font-display text-[1.75rem] sm:text-3xl lg:text-4xl font-bold mb-5 leading-tight">
              {company.scale.title}
            </h2>
            <p className="text-base text-muted leading-relaxed mb-4">
              {company.scale.lead}
            </p>
            <p className="text-base text-muted leading-relaxed mb-6">
              {company.scale.body}
            </p>
            <div className="text-xs uppercase tracking-[0.2em] text-ink font-semibold mb-4">
              Volumes
            </div>
            <ul className="space-y-3">
              {company.volumes.map((v) => (
                <li
                  key={v.year}
                  className="flex items-baseline justify-between gap-4 border-b border-hairline pb-3"
                >
                  <span className="text-muted">{v.year}</span>
                  <span className="font-semibold text-ink">
                    {v.value} animais
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section muted id="fundador">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-ink font-semibold mb-3">
              {company.founder} · {company.founded}
            </div>
            <h2 className="font-display text-[1.75rem] sm:text-3xl lg:text-4xl font-bold mb-5 leading-tight">
              O Fundador
            </h2>
            <div className="mb-8">
              {company.founderHome.map((p) => (
                <p key={p.slice(0, 40)} className="text-base text-muted leading-relaxed mb-5 last:mb-0">
                  {p}
                </p>
              ))}
            </div>
            <Button
              href="https://agfeed.com.br/negocios/ele-nao-gostava-de-confinamentos-mas-decidiu-criar-o-seu-e-agora-projeta-faturar-r-800-milhoes/"
              variant="solid"
            >
              Saiba mais <Arrow />
            </Button>
          </div>
          <div className="flex justify-center lg:justify-end">
            <LocalVideo
              src="/videos/neto-sartor.mp4"
              poster="/videos/neto-sartor.png"
              title="Neto Sartor, fundador da Maximus Agronegócio"
            />
          </div>
        </div>
      </Section>

      <Section id="unidades">
        <SectionHead
          eyebrow="Unidades"
          title="Escala que coloca rentabilidade no bolso do pecuarista."
          description="Sertãozinho, Clementina e Sales. O seu gado recebe o mesmo manejo e dieta do gado da Maximus."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industryCards.map((u) => (
            <div
              key={u.title}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300"
            >
              <img
                src={u.src}
                alt={`${u.title} — ${u.alt}`}
                width={u.width}
                height={u.height}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-x-0 bottom-0 text-white">
                <div className="relative px-3 sm:px-4 pt-6 sm:pt-8 pb-2">
                  <div className="gallery-base-gradient" />
                  <h3 className="relative text-lg sm:text-xl font-semibold tracking-[0.08em]">
                    {u.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 lg:mt-16 flex flex-col items-center text-center gap-6">
          <h2 className="font-display text-[1.75rem] sm:text-3xl lg:text-4xl font-bold text-ink leading-tight max-w-2xl">
            Venha conhecer nossas unidades
          </h2>
          <Button href={brand.whatsappBoitelUrl} variant="solid" size="lg">
            <WhatsAppIcon className="size-4" />
            marcar uma visita
          </Button>
        </div>
      </Section>
    </>
  );
}
