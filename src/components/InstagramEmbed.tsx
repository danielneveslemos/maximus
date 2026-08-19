export function InstagramEmbed({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  return (
    <div className="relative mx-auto w-full max-w-[400px] overflow-hidden rounded-2xl ring-1 ring-hairline bg-white shadow-[var(--shadow-card)]">
      <iframe
        src={`https://www.instagram.com/reel/${id}/embed/`}
        title={title}
        className="block w-full h-[740px] border-0"
        loading="lazy"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
