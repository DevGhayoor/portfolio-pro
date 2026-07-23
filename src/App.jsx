import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import Contact from "./sections/Contact";

import Loader from "./components/Loader";


function App() {

  return (

    <div className="bg-[#050816] min-h-screen text-white">

      <Loader />

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Services />

      <Contact />

      <Footer />

    </div>

  );

}


export default App;