import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Hero from "../components/hero/Hero";
import Projects from "../components/projects/Projects";

export default function Home() {
  return (
    <div className="bg-white text-gray-900 transition-colors duration-500 dark:bg-gray-900 dark:text-white">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
