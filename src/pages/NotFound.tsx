import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <section className="relative min-h-[70dvh] flex items-center pt-36 pb-20 bg-ink text-white">
      <div className="max-w-7xl mx-auto page-pad">
        <div className="text-[11px] uppercase tracking-[0.22em] text-white mb-4">
          404
        </div>
        <h1 className="font-display text-[clamp(1.85rem,7vw,2.25rem)] sm:text-5xl font-bold leading-[1.05] max-w-2xl mb-6">
          Esta página não existe.
        </h1>
        <p className="text-base sm:text-lg text-white max-w-xl mb-10 leading-relaxed">
          O endereço pode ter mudado ou sido digitado errado. Volte ao início ou
          fale com a equipe pelo WhatsApp no topo.
        </p>
        <Link
          to="/"
          className="inline-flex min-h-11 items-center rounded-md bg-stone text-ink font-semibold px-5"
        >
          Ir para o início
        </Link>
      </div>
    </section>
  );
}
