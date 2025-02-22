"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    console.log(`Rolando para a seção: ${id}`); // Depuração
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } 
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0, // Rola até o topo da página
      behavior: "smooth", // Adiciona um scroll suave
    });
  };

  return (
    <header className="sticky top-0 z-50 mx-auto px-4 py-3 bg-gradient-to-br from-[#0B0B1A] to-[#141429]">
      <nav className="flex items-center justify-between h-full">
        {/* Logo e Botão Beta */}
        <div className="flex items-center gap-2">
          <div className="text-purple-500 font-semibold">PH. TECH</div>
          <div className="text-xs bg-purple-500/10 text-purple-500 px-2 py-1 rounded-full">
            Beta
          </div>
        </div>

        {/* Links de Navegação (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToTop()}
            className="text-white/90 hover:text-purple-500 transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-white/60 hover:text-purple-500 transition-colors"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-white/60 hover:text-purple-500 transition-colors"
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollToSection("certificates")}
            className="text-white/60 hover:text-purple-500 transition-colors"
          >
            Certificados
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-white/60 hover:text-purple-500 transition-colors"
          >
            Contato
          </button>
        </div>

        {/* Botão do Menu de Hambúrguer (Mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white/90 hover:text-purple-500 transition-colors"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Menu de Navegação (Mobile) */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <div className="flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-white/90 hover:text-purple-500 transition-colors text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white/60 hover:text-purple-500 transition-colors text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-white/60 hover:text-purple-500 transition-colors text-left"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("certificates")}
              className="text-white/60 hover:text-purple-500 transition-colors text-left"
            >
              Certificados
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white/60 hover:text-purple-500 transition-colors text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
}