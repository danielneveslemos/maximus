import { useRef, useState } from "react";

export function LocalVideo({
  src,
  poster,
  title,
}: {
  src: string;
  poster: string;
  title: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function start() {
    const el = videoRef.current;
    if (!el) return;
    setPlaying(true);
    void el.play();
  }

  return (
    <div className="relative mx-auto w-full max-w-[min(100%,320px)] aspect-[9/16] overflow-hidden rounded-2xl ring-1 ring-hairline bg-ink shadow-[var(--shadow-elegant)]">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        title={title}
        playsInline
        controls={playing}
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
        onPlay={() => setPlaying(true)}
        onEnded={() => setPlaying(false)}
      />
      {!playing ? (
        <button
          type="button"
          className="absolute inset-0 w-full h-full group cursor-pointer"
          onClick={start}
          aria-label={`Reproduzir ${title}`}
        >
          <span className="absolute inset-0 bg-ink/25 group-hover:bg-ink/15 transition-colors" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="w-14 h-14 rounded-full bg-white/90 text-ink flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <svg viewBox="0 0 24 24" className="w-6 h-6 ml-0.5" fill="currentColor" aria-hidden>
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
        </button>
      ) : null}
    </div>
  );
}
