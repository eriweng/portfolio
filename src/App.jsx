import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectGrid from "./components/ProjectGrid";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen relative bg-background text-text overflow-x-hidden selection:bg-accent selection:text-white">
      {/* Global Effects */}
      <div className="fixed inset-0 pointer-events-none z-50 scanlines opacity-20"></div>
      
      <Navbar />
      
      <main>
        <Hero />
        <ProjectGrid />
        <About />
        <Contact />
      </main>
      
      <footer className="py-8 border-t border-white/10 text-center text-muted text-sm relative z-10 bg-black">
        <p>© 2026 Eri.dev. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
