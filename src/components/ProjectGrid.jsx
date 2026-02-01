import { useState } from "react";
import { ExternalLink, Github, Code2, Cpu, Globe, Database } from "lucide-react";

export default function ProjectGrid() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Distributed Task Queue",
      category: "Backend",
      description: "High-performance distributed task queue system inspired by Celery, built with Golang and Redis.",
      tags: ["Golang", "Redis", "Docker"],
      icon: <Database size={40} />,
      link: "#",
      github: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Industrial IoT Dashboard",
      category: "Frontend",
      description: "Real-time monitoring dashboard for industrial automation systems using MQTT over WebSockets.",
      tags: ["React", "TypeScript", "MQTT"],
      icon: <Cpu size={40} />,
      link: "#",
      github: "#",
    },
    {
      id: 3,
      title: "Microservices E-commerce",
      category: "Backend",
      description: "Scalable e-commerce backend architecture using gRPC for inter-service communication.",
      tags: ["Golang", "gRPC", "PostgreSQL"],
      icon: <Code2 size={40} />,
      link: "#",
      github: "#",
    },
    {
      id: 4,
      title: "Portfolio V1",
      category: "Frontend",
      description: "My personal portfolio website featuring Cyberpunk aesthetics and immersive UI interactions.",
      tags: ["React", "Tailwind CSS", "Vite"],
      icon: <Globe size={40} />,
      link: "#",
      github: "#",
    },
  ];

  const categories = ["All", "Backend", "Frontend", "Full Stack"];

  const filteredProjects = projects.filter(
    (project) => filter === "All" || project.category === filter
  );

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Selected <span className="text-accent">Projects</span>
            </h2>
            <p className="text-muted max-w-lg">
              Showcasing my journey from industrial automation to high-performance
              backend engineering.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  filter === cat
                    ? "bg-white text-black border-white"
                    : "bg-transparent text-muted border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid - Masonry-ish with Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group relative rounded-xl bg-secondary border border-white/5 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] ${
                project.featured ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              {/* Card Content */}
              <div className="p-8 h-full flex flex-col items-start gap-4 relatie z-10">
                <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-accent mb-2 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  {project.icon}
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted mb-6 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-muted border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Overlay Actions */}
              <div className="absolute inset-0 bg-primary/90 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm z-20">
                <a
                  href={project.github}
                  className="p-3 rounded-full bg-white text-black hover:scale-110 transition-transform"
                  title="View Code"
                >
                  <Github size={24} />
                </a>
                <a
                  href={project.link}
                  className="p-3 rounded-full bg-accent text-white hover:scale-110 transition-transform"
                  title="Live Demo"
                >
                  <ExternalLink size={24} />
                </a>
              </div>

              {/* Decorative Gradient Border/Glow on Hover */}
              <div className="absolute inset-0 border border-white/5 rounded-xl group-hover:border-accent/50 transition-colors duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
