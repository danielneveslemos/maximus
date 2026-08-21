import { useEffect } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Midia } from "./pages/Midia";
import { NotFound } from "./pages/NotFound";
import {
  HashScroll,
  canonicalPath,
  isKnownRoute,
} from "./components/HashScroll";

const pageMeta: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Maximus Agronegócio",
    description:
      "A Maximus Agronegócio opera três confinamentos no interior paulista, combinando rebanho próprio com prestação de serviço de engorda (boitel) por matéria seca para pecuaristas de vários estados.",
  },
  "/midia": {
    title: "Mídia · Maximus Agronegócio",
    description:
      "Vídeos, reportagens, websérie institucional e presença na mídia da Maximus Agronegócio e do fundador Neto Sartor.",
  },
};

const OG_IMAGE = "/gallery/2022-07-01_19-19-51.jpg";

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.rel = "canonical";
    document.head.appendChild(el);
  }
  el.href = href;
}

function DocumentMeta() {
  const { pathname } = useLocation();
  const path = canonicalPath(pathname);
  const meta = pageMeta[path] ?? {
    title: "Página não encontrada · Maximus Agronegócio",
    description: "A página solicitada não foi encontrada no site da Maximus Agronegócio.",
  };

  useEffect(() => {
    document.title = meta.title;

    const origin = window.location.origin;
    const url = `${origin}${path === "/" ? "/" : path}`;
    setCanonical(url);
    setMeta("name", "description", meta.description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:title", meta.title);
    setMeta("property", "og:description", meta.description);
    setMeta("property", "og:image", `${origin}${OG_IMAGE}`);
    setMeta("name", "twitter:title", meta.title);
    setMeta("name", "twitter:description", meta.description);
    setMeta("name", "twitter:image", `${origin}${OG_IMAGE}`);
  }, [path, meta.title, meta.description]);

  return null;
}

/** Old or mistyped paths → canonical location (home sections use hash). */
const LEGACY_PATHS: Record<string, { pathname: string; hash?: string }> = {
  "/boitel": { pathname: "/", hash: "boitel" },
  "/empresa": { pathname: "/", hash: "empresa" },
  "/unidades": { pathname: "/", hash: "unidades" },
  "/fundador": { pathname: "/", hash: "fundador" },
  "/inicio": { pathname: "/", hash: "inicio" },
};

function PathNormalizer() {
  const { pathname, search, hash } = useLocation();
  const canonical = canonicalPath(pathname);

  const legacy = LEGACY_PATHS[canonical];
  if (legacy) {
    return (
      <Navigate
        to={{ pathname: legacy.pathname, hash: legacy.hash, search }}
        replace
      />
    );
  }

  const normalized = pathname.length > 1 && pathname.endsWith("/")
    ? pathname.slice(0, -1)
    : pathname;
  const needsCanonical =
    isKnownRoute(pathname) &&
    (pathname !== canonical || normalized !== canonical);
  if (needsCanonical) {
    return <Navigate to={`${canonical}${search}${hash}`} replace />;
  }
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <HashScroll />
      <PathNormalizer />
      <DocumentMeta />
      <div className="min-h-dvh flex flex-col bg-canvas">
        <a href="#conteudo" className="skip-link">
          Ir para o conteúdo
        </a>
        <Header />
        <main id="conteudo" tabIndex={-1} className="flex-1 outline-none">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/midia" element={<Midia />} caseSensitive={false} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

