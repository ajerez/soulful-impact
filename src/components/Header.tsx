import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "IDENTIDAD", target: "identidad" },
  { label: "LABORATORIO", target: "laboratorio" },
  { label: "SERVICIOS", target: "servicios" },
  { label: "HABLEMOS", target: "hablemos" },
];

const Header = ({ onContact }: { onContact?: () => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (id === "hablemos" && onContact) {
      onContact();
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/40 backdrop-blur-md border-b border-white/10"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-12 lg:px-24 h-16">
          {/* Logo */}
          <button
            onClick={() => scrollTo("top")}
            className="text-foreground hover:text-[#C49A45] transition-colors duration-300 w-9 h-9 md:w-11 md:h-11"
            aria-label="Volver arriba"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%" fill="none" className="w-full h-full">
              <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3">
                <circle cx="35" cy="25" r="3" />
                <path d="M34 29 L31 40 L65 31" />
                <path d="M49 42 C49 32, 55 20, 80 15 C65 25, 49 42, 49 42" fill="currentColor" />
                <circle cx="51" cy="48" r="6" fill="currentColor" />
                <path d="M51 54 L65 85" strokeWidth="4"/>
                <path d="M22 55 C10 55, 10 75, 20 75 C30 75, 40 65, 54 65" />
              </g>
            </svg>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollTo(item.target)}
                className="font-body text-xs tracking-widest uppercase text-foreground/70 hover:text-[#C49A45] transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button onClick={() => setMenuOpen(true)} className="md:hidden text-foreground" aria-label="Abrir menú">
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center gap-10 transition-opacity duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-6 text-foreground"
          aria-label="Cerrar menú"
        >
          <X size={28} strokeWidth={1.5} />
        </button>

        {navItems.map((item) => (
          <button
            key={item.target}
            onClick={() => scrollTo(item.target)}
            className="font-body text-2xl tracking-widest uppercase text-foreground/80 hover:text-[#C49A45] transition-colors duration-300"
          >
            {item.label}
          </button>
        ))}
      </div>
    </>
  );
};

export default Header;
