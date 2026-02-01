import { Server, Database, Code, Cpu } from "lucide-react";

export default function About() {
  const skills = [
    { name: "Golang", level: 90, icon: <Server size={18} /> },
    { name: "React", level: 85, icon: <Code size={18} /> },
    { name: "Docker/K8s", level: 80, icon: <Database size={18} /> },
    { name: "IoT/MQTT", level: 95, icon: <Cpu size={18} /> },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-black/50 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            About <span className="text-accent">Me</span>
          </h2>
          <div className="space-y-6 text-muted text-lg leading-relaxed">
            <p>
              I am a <span className="text-white font-medium">Software Engineer</span> with a unique background in
              <span className="text-white font-medium"> Industrial Automation</span>. My journey began in the world of PLCs and SCADA systems, where I learned the importance of reliability and real-time performance.
            </p>
            <p>
              Driven by a passion for scalable systems, I transitioned to modern Backend Development, focusing on <span className="text-white font-medium">Golang</span> and <span className="text-white font-medium">Cloud Native</span> technologies. I now build high-performance microservices that power the next generation of digital applications.
            </p>
            <p>
              When I'm not coding, I'm exploring new tech stacks or optimizing home automation workflows.
            </p>
          </div>
          
          <div className="mt-8 flex gap-4">
            <div className="p-4 rounded-lg bg-black/20 border border-white/5 backdrop-blur-sm">
              <h4 className="text-2xl font-bold text-white">3+</h4>
              <span className="text-sm text-muted">Years Experience</span>
            </div>
            <div className="p-4 rounded-lg bg-black/20 border border-white/5 backdrop-blur-sm">
              <h4 className="text-2xl font-bold text-accent">20+</h4>
              <span className="text-sm text-muted">Projects Shipped</span>
            </div>
          </div>
        </div>

        {/* Skills Visualization */}
        <div className="bg-black/20 p-8 rounded-2xl border border-white/5 backdrop-blur-md relative">
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
          
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Code className="text-accent" /> Technical Arsenal
          </h3>
          
          <div className="space-y-6">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium flex items-center gap-2">
                    {skill.icon} {skill.name}
                  </span>
                  <span className="text-muted font-mono">{skill.level}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent relative"
                    style={{ width: `${skill.level}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-2">
            {["PostgreSQL", "Redis", "gRPC", "Linux", "Terraform", "CI/CD"].map((tech) => (
              <span key={tech} className="px-3 py-1 text-xs rounded-full bg-white/5 text-muted border border-white/5">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
