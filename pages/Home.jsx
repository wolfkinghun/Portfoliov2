// import styles from "../App.module.css";

import { About } from "../src/components/About/About";
import { Contact } from "../src/components/Contact/Contact";
import { Experience } from "../src/components/Experience/Experience";
import { Hero } from "../src/components/Hero/Hero";
import { Navbar } from "../src/components/Navbar/Navbar";
import { Projects } from "../src/components/Projects/Projects";


function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Experience />
      <Projects />
      <Contact />
      </>
  );
}

export default Home;
