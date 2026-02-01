import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectGrid from "./components/ProjectGrid";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    // Mouse tracking for spotlight effect
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Theme initialization
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "light" || (!savedTheme && !prefersDark)) {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen relative bg-background text-text overflow-x-hidden selection:bg-accent selection:text-white transition-colors duration-300">
      {/* Global Effects */}
      <div className="fixed inset-0 pointer-events-none z-50 scanlines opacity-20"></div>
      
      {/* Interactive Spotlight */}
      <div 
        className="fixed inset-0 pointer-events-none z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), var(--color-accent) 5%, transparent 40%)`,
          opacity: 0.15
        }}
      ></div>
      
      <Navbar />
      
      <main>
        <Hero />
        <ProjectGrid />
        <About />
        <Contact />
      </main>
      
      <footer className="py-8 border-t border-white/10 text-center text-muted text-sm relative z-10 bg-primary/50 backdrop-blur-sm">
        <p>© 2026 Eri.dev. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
