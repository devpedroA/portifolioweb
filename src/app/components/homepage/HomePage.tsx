"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Instagram,
  Send,
  FolderGit,
  MessageCirclePlus,
} from "lucide-react";

export default function HomePage() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#0B0B1A] to-[#141429]">
      <main className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-around">
          {/* Coluna Esquerda */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-6xl font-bold">
                <span className="text-white mb-4 text-with-underline">
                  Full Stack
                </span>
                <br />
                <span className="text-purple-500">Developer</span>
              </h1>
            </div>

            <p className="text-white/60 text-lg max-w-xl">
              Desenvolvedor Full Stack apaixonado por criar soluções inovadoras
              e funcionais. Com experiência em React, Node.js, Firebase, estou
              sempre buscando novos desafios para expandir minhas habilidades.
            </p>

            <div className="flex flex-wrap gap-3">
              {["React", "Javascript", "Node.js", "Tailwind", "Firebase"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 cursor-default rounded-full bg-white/5 text-white/80 hover:bg-purple-500/20 hover:text-purple-500 transition-all shadow"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-purple-500 text-white hover:bg-purple-600 transition-colors"
              >
                Projetos <FolderGit className="w-4 h-4 text-white" />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 text-white hover:bg-white/10 transition-colors"
              >
                Contato <Send className="w-4 h-4 text-purple-500" />
              </button>
            </div>

            <div className="flex gap-6">
              {[
                {
                  icon: Github,
                  href: "https://github.com/pedroarltx",
                  name: "GitHub",
                  target: "_blank",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/pxdpedro-henrique/",
                  name: "LinkedIn",
                  target: "_blank",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/pex.ph",
                  name: "Instagram",
                  target: "_blank",
                },
                {
                  icon: MessageCirclePlus,
                  href: "https://wa.me/41984713828",
                  name: "Instagram",
                  target: "_blank",
                },
              ].map(({ icon: Icon, href, name }) => (
                <Link
                  key={name}
                  href={href}
                  target={
                    name === "GitHub" || "Instagram" || "Linkedin"
                      ? "_blank"
                      : "_self"
                  }
                  aria-label={name}
                  className="p-3 rounded-full bg-white/5 text-white/80 hover:bg-purple-500/20 hover:text-purple-500 transition-all shadow"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Coluna Direita (Imagem) */}
          <div className="hidden lg:block text-center">
            <div className="relative overflow-hidden w-[300px] h-[300px] rounded-full bg-gradient-to-br from-purple-500/20 to-purple-700/20 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
              <Image
                src="/img-redonda.png"
                alt="Frontend Development Illustration"
                width={300}
                height={300}
                className="rounded-full"
                priority
              />
            </div>
            {/* Nome abaixo da imagem */}
            <span className="mt-4 block text-with-underline text-2xl font-bold text-white">
              PEDRO H ANDRADE
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
