import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background shadow-lg border-b border-border"
          : "bg-white/10 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 transition-all duration-300">
            <img
              src="https://i.postimg.cc/L5qzYQmh/logoqrz-Editado.png"
              alt="Turismos QRZ"
              className={`h-auto transition-all duration-300 ${
                isScrolled ? "w-32" : "w-36"
              }`}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className={`text-sm font-semibold transition-all duration-300 link-underline ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className={`text-sm font-semibold transition-all duration-300 link-underline ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className={`text-sm font-semibold transition-all duration-300 link-underline ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className={`text-sm font-semibold transition-all duration-300 link-underline ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className={`text-sm font-semibold transition-all duration-300 link-underline ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              Contato
            </button>
          </nav>

          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("contato")}
              className="relative overflow-hidden bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow text-primary-foreground font-bold px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Solicitar Orçamento</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-primary opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-in">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-left font-semibold hover:text-primary transition-colors py-2"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-left font-semibold hover:text-primary transition-colors py-2"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-left font-semibold hover:text-primary transition-colors py-2"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="text-left font-semibold hover:text-primary transition-colors py-2"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-left font-semibold hover:text-primary transition-colors py-2"
            >
              Contato
            </button>
            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow text-primary-foreground font-bold rounded-full"
            >
              Solicitar Orçamento
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
