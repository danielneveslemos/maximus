import { useState } from "react";
import { galleryMap } from "../content/gallery";
import { founderMessages, videos, type VideoGroup } from "../content/site";
import { InstagramEmbed } from "../components/InstagramEmbed";
import { Section, SectionHead } from "../components/Section";
import { VideoEmbed } from "../components/VideoEmbed";

const groups: { group: VideoGroup; eyebrow: string; title: string; description: string }[] =
  [
    {
      group: "institucional",
      eyebrow: "Institucionais",
      title: "A operação em vídeo.",
      description: "Dois institucionais da Maximus.",
    },
    {
      group: "presenca",
      eyebrow: "Presença na mídia",
      title: "A Maximus em reportagens e entrevistas.",
      description: "Participações em programas e matérias.",
    },
    {
      group: "webserie",
      eyebrow: "Websérie",
      title: "Parceria com a Ponta Agro.",
      description: "Episódios da websérie gravada com a Ponta Agro.",
    },
  ];

export function Midia() {
  const [playingId, setPlayingId] = useState<string | null>(null);

  return (
    <>
      <section className="relative pt-36 pb-16 sm:pb-20 lg:pt-44 lg:pb-28 bg-ink text-white overflow-hidden grain">
        <img
          src={galleryMap["aerea-sertaozinho-entardecer"].src}
          alt={galleryMap["aerea-sertaozinho-entardecer"].alt}
          width={galleryMap["aerea-sertaozinho-entardecer"].width}
          height={galleryMap["aerea-sertaozinho-entardecer"].height}
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/50" />
        <div className="relative max-w-7xl mx-auto page-pad">
          <div className="text-[11px] uppercase tracking-[0.22em] text-stone mb-4">
            Mídia
          </div>
          <h1 className="font-display text-[clamp(1.85rem,7vw,2.25rem)] sm:text-5xl lg:text-6xl font-bold leading-[1.05] max-w-3xl mb-6">
            Maximus na mídia
          </h1>
          <p className="text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed">
            Mensagem do fundador, institucionais, presença na mídia e a websérie
            com a Ponta Agro.
          </p>
        </div>
      </section>

      <Section>
        <SectionHead
          eyebrow="Mensagem do Fundador"
          title="Neto Sartor, fundador da Maximus."
          description="Três mensagens do fundador no Instagram."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {founderMessages.map((v) => (
            <InstagramEmbed key={v.id} id={v.id} title={v.title} />
          ))}
        </div>
      </Section>

      {groups.map((g, i) => {
        const list = videos.filter((v) => v.group === g.group);
        return (
          <Section key={g.group} muted={i % 2 === 0}>
            <SectionHead
              eyebrow={g.eyebrow}
              title={g.title}
              description={g.description}
            />
            <div className="grid gap-6 md:grid-cols-2">
              {list.map((v) => (
                <VideoEmbed
                  key={v.id}
                  id={v.id}
                  title={v.title}
                  playing={playingId === v.id}
                  onPlay={() => setPlayingId(v.id)}
                />
              ))}
            </div>
          </Section>
        );
      })}
    </>
  );
}
