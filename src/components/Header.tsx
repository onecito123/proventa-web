import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-xl font-bold text-foreground">Proventa</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="inicio" smooth={true} duration={500} className="text-foreground hover:text-primary transition-smooth cursor-pointer">
              Inicio
            </Link>
            <Link to="servicios" smooth={true} duration={500} className="text-foreground hover:text-primary transition-smooth cursor-pointer">
              Servicios
            </Link>
            <Link to="nosotros" smooth={true} duration={500} className="text-foreground hover:text-primary transition-smooth cursor-pointer">
              Nosotros
            </Link>
            <Link to="contacto" smooth={true} duration={500} className="text-foreground hover:text-primary transition-smooth cursor-pointer">
              Contacto
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Iniciar Sesión
            </Button>
            <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              Contactanos
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground hover:text-primary transition-smooth"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-4">
              <Link to="inicio" smooth={true} duration={500} className="text-foreground hover:text-primary transition-smooth px-4 py-2 cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                Inicio
              </Link>
              <Link to="servicios" smooth={true} duration={500} className="text-foreground hover:text-primary transition-smooth px-4 py-2 cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                Servicios
              </Link>
              <Link to="nosotros" smooth={true} duration={500} className="text-foreground hover:text-primary transition-smooth px-4 py-2 cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                Nosotros
              </Link>
              <Link to="contacto" smooth={true} duration={500} className="text-foreground hover:text-primary transition-smooth px-4 py-2 cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                Contacto
              </Link>
              <div className="flex flex-col space-y-2 px-4 pt-4">
                <Button variant="ghost" className="text-foreground hover:text-primary justify-start">
                  Iniciar Sesión
                </Button>
                <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300 justify-start">
                  Contactanos
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;