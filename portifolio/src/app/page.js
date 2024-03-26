import Image from "next/image";
import Nav from "../Components/Nav/Nav";
import Home from "../Containers/Home/Home";
import About from "../Containers/About/About";
import Experience from "../Containers/Experience/Experience";
import Experience2 from "../Containers/Experience2/Experience2";
import Footer from "../Containers/Footer/Footer";
import Contact from "../Containers/Contact/Contact";
import Projects from "../Containers/Projects/Projects";

export default function Main() {
  return (
    <main>
      <header>
        <Nav />
        <Home />  
        <About />
        <Experience />  
        <Experience2 />
        <Projects />  
        <Contact />
        <Footer />  
      </header>
    </main>
  );
}
