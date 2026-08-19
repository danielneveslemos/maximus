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
import { Boitel } from "./pages/Boitel";
import { Empresa } from "./pages/Empresa";
import { Unidades } from "./pages/Unidades";
import { Midia } from "./pages/Midia";
import { NotFound } from "./pages/NotFound";
import {
  HashScroll,
  canonicalPath,
  isKnownRoute,
} from "./components/HashScroll";

const pageTitles: Record<string, string> = {
  "/": "Maximus Agronegócio",
  "/boitel": "Boitel por matéria seca · Maximus Agronegócio",
  "/empresa": "Empresa · Maximus Agronegócio",
  "/unidades": "Unidades · Maximus Agronegócio",
  "/midia": "Mídia · Maximus Agronegócio",
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

  useEffect(() => {
    document.title =
      pageTitles[path] ?? "Página não encontrada · Maximus Agronegócio";

    const origin = window.location.origin;
    const url = `${origin}${path === "/" ? "/" : path}`;
    setCanonical(url);
    setMeta("property", "og:url", url);
    setMeta("property", "og:title", document.title);
    setMeta("property", "og:image", `${origin}${OG_IMAGE}`);
    setMeta("name", "twitter:image", `${origin}${OG_IMAGE}`);
  }, [path]);

  return null;
}

function PathNormalizer() {
  const { pathname, search, hash } = useLocation();
  const canonical = canonicalPath(pathname);
  if (pathname !== canonical && isKnownRoute(pathname)) {
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
            <Route path="/boitel" element={<Boitel />} />
            <Route path="/empresa" element={<Empresa />} />
            <Route path="/unidades" element={<Unidades />} />
            <Route path="/midia" element={<Midia />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
