import { Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Capabilities from "./components/Capabilities.jsx";
import Experience from "./components/Experience";
import Toolbox from "./components/Toolbox.jsx";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollManager from "./components/ScrollManager.jsx";
import ProjectDetails from "./components/ProjectDetails";

const Home = () => (
  <>
    <Hero />
    <Projects />
    <Capabilities />
    <Experience />
    <Toolbox />
    <Certifications />
    <Contact />
  </>
);

const NotFound = () => (
  <div className="wrap py-28">
    <h1 className="text-3xl font-semibold">Page not found</h1>
    <p className="mt-3 text-sage">The page you're looking for doesn't exist.</p>
    <Link to="/" className="mt-6 inline-block text-mint underline underline-offset-4">
      Back to the home page
    </Link>
  </div>
);

function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-mint focus:px-4 focus:py-2 focus:text-forest"
      >
        Skip to content
      </a>
      <Navbar />
      <ScrollManager />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:slug" element={<ProjectDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
