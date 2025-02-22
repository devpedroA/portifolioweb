"use client"

import { useState, useEffect } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../services/firebase/firebase"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { getTechIcon } from "../../../libs/techIcons" // Vamos criar esta função

interface Project {
  id: string
  name: string
  description: string
  link: string
  technologies: string[]
  imageUrl: string
}



export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsCollection = collection(db, "projects")
      const projectSnapshot = await getDocs(projectsCollection)
      const projectList = projectSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Project[]
      setProjects(projectList)
      setLoading(false)
    }

    fetchProjects()
  }, [])
  if (loading) {
    return (
      <section id="projects" className="py-16 bg-gradient-to-br from-[#0B0B1A] to-[#141429]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-white text-with-underline">Projetos</h2>
          <p className="text-white/80">Carregando projetos...</p>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="py-16 bg-gradient-to-br from-[#0B0B1A] to-[#141429]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-white text-with-underline">Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white/5 shadow rounded-lg backdrop-blur-sm overflow-hidden ">
              <div className="relative h-48 ">
                <Image
                  src={project.imageUrl || "/placeholder.svg"}
                  alt={project.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6 ">
                <h3 className="text-xl font-bold mb-2 text-purple-500">{project.name}</h3>
                <p className="mb-4 text-sm text-white/80">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => {
                    const TechIcon = getTechIcon(tech)
                    return (
                      <span key={tech} className="text-white shadow-lg" title={tech}>
                        <TechIcon className="size-05" />
                      </span>
                    )
                  })}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-500 hover:text-purple-400 transition-colors"
                >
                  Ver Projeto <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

