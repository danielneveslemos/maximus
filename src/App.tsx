import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SeoHead } from "./components/SeoHead";
import { Home } from "./pages/Home";
import { Midia } from "./pages/Midia";
import { NotFound } from "./pages/NotFound";
import {
  HashScroll,
  canonicalPath,
  isKnownRoute,
} from "./components/HashScroll";

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
      <SeoHead />
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

