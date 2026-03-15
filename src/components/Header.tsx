import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "IDENTIDAD", target: "identidad" },
  { label: "LABORATORIO", target: "laboratorio" },
  { label: "SERVICIOS", target: "servicios" },
  { label: "HABLEMOS", target: "hablemos" },
];

const Header = () => {
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
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur-md border-b border-white/10"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-12 lg:px-24 h-16">
          {/* Logo */}
          <button
            onClick={() => scrollTo("top")}
            className="font-body text-sm tracking-widest uppercase text-foreground hover:text-[#C49A45] transition-colors duration-300"
          >
            JUAN A. GIL
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
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-foreground"
            aria-label="Abrir menú"
          >
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
