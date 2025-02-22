import HomePage from "../components/homepage/HomePage"
import Navbar from "../components/navbar/Navbar"
import About from "../components/about/About"
import Projects from "../components/projects/Projects"
import Contact from "../components/contact/Contact"
import Footer from "../components/footer/Footer"
import Certificates from "../components/certificates/Certificates"



export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      <About />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </>
  )
}