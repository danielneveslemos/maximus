export function VideoEmbed({
  id,
  title,
  playing,
  onPlay,
}: {
  id: string;
  title: string;
  playing: boolean;
  onPlay: () => void;
}) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl ring-1 ring-hairline bg-ink">
      {playing ? (
        <iframe
          key={id}
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
          title={title}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          className="absolute inset-0 w-full h-full group cursor-pointer"
          onClick={onPlay}
          aria-label={`Reproduzir ${title}`}
        >
          <img
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt=""
            width={480}
            height={360}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <span className="absolute inset-0 bg-ink/25 group-hover:bg-ink/15 transition-colors" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="w-14 h-14 rounded-full bg-white/90 text-ink flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <svg viewBox="0 0 24 24" className="w-6 h-6 ml-0.5" fill="currentColor" aria-hidden>
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
