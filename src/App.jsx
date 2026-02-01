import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="min-h-screen relative bg-background text-text overflow-x-hidden selection:bg-accent selection:text-white">
      {/* Global Effects */}
      <div className="fixed inset-0 pointer-events-none z-50 scanlines opacity-20"></div>
      
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Placeholder Sections to enable scrolling */}
        <section id="projects" className="min-h-screen py-20 border-t border-white/5">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-display font-bold mb-8">Selected Projects</h2>
            <p className="text-muted">Coming soon...</p>
          </div>
        </section>

        <section id="about" className="min-h-screen py-20 border-t border-white/5">
           <div className="container mx-auto px-6">
            <h2 className="text-3xl font-display font-bold mb-8">About Me</h2>
            <p className="text-muted">Coming soon...</p>
          </div>
        </section>

        <section id="contact" className="min-h-[50vh] py-20 border-t border-white/5">
           <div className="container mx-auto px-6">
            <h2 className="text-3xl font-display font-bold mb-8">Contact</h2>
            <p className="text-muted">Coming soon...</p>
          </div>
        </section>
      </main>
      
      <footer className="py-8 border-t border-white/10 text-center text-muted text-sm">
        <p>© 2026 Eri.dev. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
