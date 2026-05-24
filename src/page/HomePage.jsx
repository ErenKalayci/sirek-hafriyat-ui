import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default HomePage;
