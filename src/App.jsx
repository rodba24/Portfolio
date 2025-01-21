import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Languages from "./components/Languages";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-#c1c1e8 selection:text-purple-300 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className="absolute top-0 z-[-2] h-auto w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" ></div>
      <Navbar />
      <Hero />
      <About />
      <Technologies/>
      <Languages />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
