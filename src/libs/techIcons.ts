import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiDjango,
  SiVuedotjs,
  SiAngular,
  SiGithub,
} from "react-icons/si"
import type { IconType } from "react-icons"

const techIcons: { [key: string]: IconType } = {
  react: SiReact,
  "next.js": SiNextdotjs,
  javascript: SiJavascript,
  typescript: SiTypescript,
  "node.js": SiNodedotjs,
  tailwindcss: SiTailwindcss,
  firebase: SiFirebase,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  python: SiPython,
  django: SiDjango,
  "vue.js": SiVuedotjs,
  angular: SiAngular,
  github: SiGithub,
}

export function getTechIcon(tech: string): IconType {
  return techIcons[tech.toLowerCase()] || SiGithub // Use GitHub icon as fallback
}

