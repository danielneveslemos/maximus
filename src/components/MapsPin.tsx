export function MapsPin({ className = "size-4" }: { className?: string }) {
  return (
    <img
      src="/maps-pin.png"
      alt=""
      width={192}
      height={192}
      className={`shrink-0 object-contain ${className}`}
      aria-hidden
    />
  );
}
