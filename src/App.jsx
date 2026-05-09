import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Testimonials from "./components/Testimonials";
import Certifications from "./components/Certifications";
import ProjectDetails from "./components/ProjectDetails";

const Home = () => (
  <>
    <section id="home">
      <Hero />
    </section>

    <section id="services">
      <Services />
    </section>
    
    <section id="experience">
      <Experience />
    </section>
    
    <section id="work">
      <Projects />
    </section>
    
    <section id="skills">
      <Skills />
    </section>

    <Certifications />

    <Testimonials />
    
    <Contact />
  </>
);

function App() {
  return (
    <main className="bg-obsidian min-h-screen text-white selection:bg-violet-deep selection:text-white scroll-smooth">
      <Navbar />
      <ScrollToTop />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
      
      <Footer />
    </main>
  );
}

export default App;
