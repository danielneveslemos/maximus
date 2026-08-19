import { Link } from "react-router-dom";
import { brand, mapLocations, nav } from "../content/site";
import { BrandLogo } from "./BrandLogo";
import { InstagramIcon } from "./InstagramIcon";
import { MapsPin } from "./MapsPin";
import { WhatsAppIcon } from "./WhatsAppIcon";

const contacts = [
  { label: "Boitel: (16) 99753-4551", phone: "5516997534551" },
  {
    label: "Antecipação: (16) 99772-8883",
    phone: "5516997728883",
  },
  { label: "Esterco: (16) 99753-4551", phone: "5516997534551" },
  { label: "Recrutamento: (16) 99617-8882", phone: "5516996178882" },
];

export function Footer() {
  return (
    <footer
      className="bg-ink text-white"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="max-w-7xl mx-auto page-pad py-12 sm:py-16 grid gap-10 sm:gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_max-content_max-content]">
        <div className="space-y-4 min-w-0">
          <BrandLogo />
          <a
            href={brand.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 min-h-11 text-sm text-white/70 hover:text-stone transition-colors duration-200"
          >
            <InstagramIcon />
            @{brand.instagramHandle}
          </a>
        </div>

        <div>
          <ul className="space-y-1 text-sm text-white/70">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="inline-flex min-h-11 min-w-11 items-center hover:text-stone transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold text-sm mb-4">Contato</p>
          <ul className="space-y-1 text-sm text-white/70">
            {contacts.map((item) => (
              <li key={item.label}>
                <a
                  href={`https://api.whatsapp.com/send?phone=${item.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 min-h-11 hover:text-stone transition-colors duration-200"
                >
                  <WhatsAppIcon />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold text-sm mb-4">Localização</p>
          <ul className="space-y-1 text-sm text-white/70">
            {mapLocations.map((u) => (
              <li key={u.slug}>
                <a
                  href={u.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 hover:text-stone transition-colors duration-200"
                >
                  <MapsPin className="size-4" />
                  {u.slug === "escritorio"
                    ? `${u.name} / SP (Escritório)`
                    : `${u.name} / SP`}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto page-pad py-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-white/50">
          <div className="uppercase">
            © {new Date().getFullYear()} {brand.name}. Todos os direitos
            reservados.
          </div>
          <div className="break-words min-w-0">
            MAXIMUS AGRONEGOCIOS E PARTICIPACOES LTDA (39.935.460/0001-47)
          </div>
        </div>
      </div>
    </footer>
  );
}
