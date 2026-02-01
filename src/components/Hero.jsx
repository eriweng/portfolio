import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-accent/20 rounded-full blur-[120px] opacity-30 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-500/10 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs font-mono text-muted tracking-wide uppercase">
            Available for work
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-6 animate-fade-in-up delay-100">
          Building the
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">
            Digital Future
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200">
          Frontend Developer & UI/UX Designer crafting immersive web experiences with
          <span className="text-white font-medium"> React</span> &
          <span className="text-white font-medium"> Tailwind CSS</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-blue-600 text-white rounded-lg font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2 group"
          >
            View Projects
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg font-semibold transition-all backdrop-blur-sm"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <ChevronDown size={24} />
      </div>
    </section>
  );
}
