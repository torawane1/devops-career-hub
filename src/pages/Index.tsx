import Starfield from '@/components/Starfield';
import CursorEffect from '@/components/CursorEffect';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import ProjectWork from '@/components/ProjectWork';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative z-0 min-h-screen">
      <Starfield />
      <CursorEffect />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <ProjectWork />
        <Skills />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
