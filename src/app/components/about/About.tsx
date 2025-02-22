import { Calendar, Code, Zap } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-16 bg-gradient-to-br from-[#0B0B1A] to-[#141429]">
      <div className="container  mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-white text-with-underline">Sobre Mim</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-white/80">
              Sou um desenvolvedor Full Stack apaixonado por criar soluções inovadoras e funcionais. Com experiência em
              React, Node.js, Firebase, estou sempre buscando novos desafios para expandir minhas
              habilidades.
            </p>
            <div className="flex flex-wrap gap-4 ">
              {[
                { icon: Code, text: "Desenvolvedor Full Stack" },
                { icon: Zap, text: "Soluções Inovadoras" },
                { icon: Calendar, text: "1 anos de Experiência" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 cursor-default shadow-[0_0_20px_rgba(168,85,247,0.4)] bg-white/5 rounded-full px-4 py-2">
                  <Icon className="w-5 h-5 text-purple-500" />
                  <span className="text-white/80 ">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-purple-500 text-with-underline cursor-default">Minhas Habilidades</h3>
            {[
              { skill: "Frontend Development", level: 80 },
              { skill: "Backend Development", level: 80 },
            ].map(({ skill, level }) => (
              <div key={skill} className="space-y-2">
                <div className="flex justify-between cursor-default ">
                  <span className="text-white/80">{skill}</span>
                  <span className="text-purple-500">{level}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2.5">
                  <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: `${level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

