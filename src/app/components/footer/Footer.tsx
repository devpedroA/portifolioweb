import Link from "next/link"
import { Github, Linkedin, Instagram, MessageCirclePlus } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-16 bg-gradient-to-br from-[#0B0B1A] to-[#141429]">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-white/80">
            &copy; {new Date().getFullYear()} PEDRO H ANDRADE. Todos os direitos reservados.
          </p>
          <div className="mt-4 flex justify-center gap-6">
            {[
              {
                icon: Github,
                href: "https://github.com/seu-usuario",
                name: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/seu-usuario/",
                name: "LinkedIn",
              },
              {
                icon: Instagram,
                href: "https://www.instagram.com/seu-usuario",
                name: "Instagram",
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
                target="_blank"
                aria-label={name}
                className="p-3 rounded-full shadow bg-white/5 text-white/80 hover:bg-purple-500/20 hover:text-purple-500 transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
              >
                <Icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}