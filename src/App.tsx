import { motion, useScroll, useSpring } from "framer-motion";
import Loader from "./components/Loader";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Philosophy from "./components/Philosophy";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });
  return (
    <div className="bg-[#080808] text-white antialiased">
      <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[80] bg-gradient-to-r from-[#8f1748] to-[#477bff]" aria-hidden />
      <Loader /><Cursor /><Navbar />
      <main>
        <Hero /><About /><Skills /><Experience /><Projects /><Philosophy /><Education /><Contact />
      </main>
      <Footer />
    </div>
  );
}
