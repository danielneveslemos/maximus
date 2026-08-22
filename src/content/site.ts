export const brand = {
  name: "Maximus Agronegócio",
  wordmark: "MAXIMUS",
  instagramHandle: "maximusagronegocio",
  instagramUrl: "https://www.instagram.com/maximusagronegocio/",
  whatsappBoitelUrl: "https://api.whatsapp.com/send?phone=5516997534551",
  whatsappRecruitmentUrl: "https://api.whatsapp.com/send?phone=5516996178882",
} as const;

export const press = {
  outlet: "Portal DBO",
  logo: "/press/dbo-top20-confinadores.png",
  date: "agosto de 2026",
  title:
    "TOP 20 Confinadores 2026: os campeões da engorda eficiente",
  url: "https://portaldbo.com.br/select_post/top-20-confinadores-2026-os-campeoes-da-engorda-eficiente/",
} as const;

export const company = {
  founder: "Neto Sartor",
  founderRole: "Zootecnista e proprietário",
  founded: 2017,
  summary:
    "A Maximus Agronegócio opera três confinamentos no interior paulista: rebanho próprio e boitel para pecuaristas, no mesmo sistema de matéria seca.",
  teaser:
    "Tenha acesso ao mesmo nível de intensificação de terminação que o 12º maior confinamento do Brasil utiliza para o próprio gado.",
  scale: {
    eyebrow: "3 unidades · interior de São Paulo",
    title: "Gado próprio e gado de terceiros. Mesmo tratamento.",
    lead: "Sertãozinho, Clementina e Sales. Em todas as unidades, o gado da Maximus e o dos pecuaristas parceiros passam pelo mesmo confinamento. Em 2025, 117 pecuaristas mandaram gado para os confinamentos da Maximus.",
    body: "Em 2025 a Maximus terminou 97 mil animais: cerca de 60 mil de clientes e 37 mil de gado próprio. O faturamento foi de R$ 650 milhões. A meta para 2026 é 110 mil cabeças e R$ 800 milhões.",
  },
  founderHome: [
    "Quando ainda trabalhava como consultor, o zootecnista Neto Sartor passava boa parte do tempo ajudando pecuaristas a decidir onde confinar seus animais. O problema era que, muitas vezes, ele próprio não gostava das opções que encontrava.",
    "Os contratos disponíveis na época, frequentemente geravam dúvidas sobre custos, desempenho dos animais e até conflitos de interesse entre confinadores e produtores.",
    "Então, ao invés de apenas orientar seus clientes, Sartor decidiu criar uma alternativa. Em 2017, arrendou seu primeiro confinamento no interior paulista e fundou a Maximus Agronegócio.",
    "Formado em zootecnia e mestre em nutrição de bovinos de corte, Sartor passou por empresas do setor antes de migrar para a consultoria técnica. Foi nessa fase que percebeu que havia espaço para construir um confinamento diferente dos que costumava recomendar aos próprios clientes.",
    "A oportunidade surgiu em 2017, quando arrendou um confinamento em Sabino, município do interior paulista próximo a Araçatuba.",
  ],
  volumes: [
    { year: "2018", value: "20 mil" },
    { year: "2019", value: "35 mil" },
    { year: "2020", value: "43 mil" },
    { year: "2025", value: "97 mil" },
    { year: "2026*", value: "110 mil" },
  ],
} as const;

export const heroProof = [
  {
    label: "Projeção de abate para 2026",
    value: "110 mil animais",
  },
  {
    label: "Projeção de faturamento para 2026",
    value: "R$ 800 milhões",
  },
  {
    label: "Unidades",
    value: "3",
  },
  {
    label: "Ano de início",
    value: "2017",
  },
] as const;

export const units = [
  {
    name: "Sertãozinho",
    slug: "sertaozinho",
    state: "São Paulo",
    kind: "Confinamento arrendado",
    mapsUrl: "https://maps.app.goo.gl/gTZ8X3ZqLhXZxvbi7",
  },
  {
    name: "Clementina",
    slug: "clementina",
    state: "São Paulo",
    kind: "Confinamento arrendado",
    mapsUrl: "https://maps.app.goo.gl/VdoFoQxTmHBLaTyTA",
  },
  {
    name: "Sales",
    slug: "sales",
    state: "São Paulo",
    kind: "Confinamento arrendado",
    mapsUrl: "https://maps.app.goo.gl/JaLWj6mxv3b8Z9SK7",
  },
] as const;

export const mapLocations = [
  ...units,
  {
    name: "Ribeirão Preto",
    slug: "escritorio",
    state: "São Paulo",
    kind: "Escritório",
    mapsUrl: "https://maps.app.goo.gl/Tcna5jzut762r1eK9",
  },
] as const;

export const offers = [
  {
    title: "Pioneira no Brasil",
    body: "Enquanto a maior parte dos confinamentos cobra diária ou arroba produzida, a Maximus foi pioneira ao cobrar pela matéria seca efetivamente fornecida aos animais.",
  },
  {
    title: "Modelo americano adaptado",
    body: "A ideia veio de grandes confinamentos nos Estados Unidos. No Brasil usa-se silagem, alimentos úmidos e água na dieta — cobrar pelo peso da ração distorce o custo. Por isso a Maximus trouxe tudo para a base de matéria seca, que já é uma medida utilizada normalmente na nutrição animal.",
  },
  {
    title: "Mesmo lado da mesa",
    body: "Na matéria seca, os dois ganham quando o animal come e ganha peso — o pecuarista e o confinador sentam do mesmo lado da mesa. O confinamento vende a comida para os animais e assim, quanto mais comerem, mais comida vende. Ao mesmo tempo, quanto mais comem, mais peso ganham e mais o pecuarista ganha. Não há conflito de interesse.",
  },
  {
    title: "Foco na conversão alimentar",
    body: "O confinamento vende comida para os animais: quanto mais comerem, mais comida vende. O foco muda para eficiência em transformar alimento em carcaça.",
  },
  {
    title: "Menor custo para o pecuarista",
    body: "Os modelos tradicionais obrigam os confinamentos a embutirem margens de segurança nas diárias para compensar eventuais variações de consumo ao longo do ciclo de engorda. Na cobrança por matéria seca, essa proteção deixa de ser necessária, já que o pecuarista paga exatamente pelo alimento consumido, eliminando uma margem que antes precisava existir.",
  },
  {
    title: "Modalidade validada",
    body: "A modalidade já responde por 89,5% de toda a prestação de serviços realizada pelo confinamento. Sem desconfiança por parte dos pecuaristas parceiros. Pecuarista e confinador com interesses alinhados.",
  },
] as const;

export const founderMessages = [
  {
    id: "DavAMalA6Pa",
    permalink: "https://www.instagram.com/maximusagronegocio/reel/DavAMalA6Pa/",
    title: "Mensagem do fundador",
  },
  {
    id: "DbqZKN-gInI",
    permalink: "https://www.instagram.com/maximusagronegocio/reel/DbqZKN-gInI/",
    title: "Mensagem do fundador",
  },
  {
    id: "DcBPXZKgH4j",
    permalink: "https://www.instagram.com/maximusagronegocio/reel/DcBPXZKgH4j/",
    title: "Mensagem do fundador",
  },
] as const;

export type VideoGroup = "presenca" | "webserie" | "institucional";

export const videos: {
  id: string;
  group: VideoGroup;
  title: string;
}[] = [
  { id: "3ePXcsU__gw", group: "presenca", title: "Presença na mídia" },
  { id: "4bXPDNKbHMc", group: "presenca", title: "Presença na mídia" },
  { id: "ROiYZofO56A", group: "presenca", title: "Presença na mídia" },
  { id: "Gv785V-5ISg", group: "presenca", title: "Presença na mídia" },
  { id: "lkoizF4ZQEk", group: "presenca", title: "Presença na mídia" },
  { id: "AO0IyQgJRH4", group: "presenca", title: "Presença na mídia" },
  { id: "9USL5mO9ptQ", group: "presenca", title: "Presença na mídia" },
  { id: "xMgtnK5nlbs", group: "presenca", title: "Presença na mídia" },
  {
    id: "9lFyns-HXDQ",
    group: "webserie",
    title: "Websérie em parceria com a Ponta Agro",
  },
  {
    id: "BbzPTD1ZNeU",
    group: "webserie",
    title: "Websérie em parceria com a Ponta Agro",
  },
  {
    id: "I8CBviZDVsw",
    group: "webserie",
    title: "Websérie em parceria com a Ponta Agro",
  },
  {
    id: "1rjLLRXdzeg",
    group: "webserie",
    title: "Websérie em parceria com a Ponta Agro",
  },
  {
    id: "HPLDPqOLvqA",
    group: "webserie",
    title: "Websérie em parceria com a Ponta Agro",
  },
  {
    id: "QJucvzpAHQ4",
    group: "webserie",
    title: "Websérie em parceria com a Ponta Agro",
  },
  { id: "53EkbQoOyx4", group: "institucional", title: "Vídeo institucional" },
  { id: "bsvon634FDw", group: "institucional", title: "Vídeo institucional" },
];

export const nav = [
  { href: "/#inicio", label: "Início" },
  { href: "/#boitel", label: "Boitel" },
  { href: "/#empresa", label: "Empresa" },
  { href: "/#fundador", label: "Fundador" },
  { href: "/#unidades", label: "Unidades" },
  { href: "/midia", label: "Mídia" },
] as const;