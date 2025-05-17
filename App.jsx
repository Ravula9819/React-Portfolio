import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Education } from "./components/Education/Education";
import { Projects }from './components/Projects/Projects.jsx';
import Certificates from './components/Certificates/Certificates.jsx';





function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Education/>
      <section id="projects">
        <Projects />
      </section>

      <section id="certificates">
        <Certificates />
      </section>
      <Experience />
      <Contact />
    </div>
  );
}

export default App;