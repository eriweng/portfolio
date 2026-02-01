function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Scanlines Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 scanlines opacity-30"></div>
      
      <main className="container mx-auto px-4 py-8 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-accent mb-4">
          Hello World
        </h1>
        <p className="text-muted text-xl">Futuristic Portfolio initialized.</p>
        
        <div className="mt-8 p-6 bg-secondary rounded-xl border border-white/10">
          <h2 className="text-2xl font-bold mb-2">System Status</h2>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_theme('colors.green.500')]"></span>
            <span className="font-mono text-sm">ONLINE</span>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
