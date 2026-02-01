import { Terminal, Database, Palette, Briefcase, GraduationCap } from "lucide-react";

export default function About() {
  const experiences = [
    {
      company: "KING TONY Tools Co. Ltd. 金統立工業",
      role: "Digital Platform Specialist 數位平台管理師",
      period: "2025/10 – Present",
      description: [
        "Shopify Modern Development: Implemented Shopify CLI + VS Code environment with Git version control for transparent code tracking.",
        "AI-Assisted Optimization: Integrated Gemini AI for logic debugging and efficient Liquid template customization.",
        "Interactive Features: Developed Wishlist with async API integration and robust login state rendering.",
        "Maintenance & Debugging: Managed global product data accuracy and multilingual content debugging."
      ]
    },
    {
      company: "TransPak Taiwan",
      role: "Sales Customer Service / Data Flow Analyst",
      period: "2024/10 – 2024/12",
      description: [
        "Systematic Data Maintenance: Operated ERP systems for transaction data, ensuring structural integrity.",
        "Complex Requirement Analysis: Decoded BOMs to generate 40+ quotes and analyzed product structures.",
        "Cross-functional Collaboration: Coordinated 100+ custom requests across departments."
      ]
    },
    {
      company: "Jin Jia Long Enterprise (所長茶葉蛋)",
      role: "HR Specialist / Operations Schema Architect",
      period: "2020/03 – 2021/06",
      description: [
        "Data Consistency: Managed attendance/performance systems with 100% accuracy.",
        "Project Compliance: Executed government projects (TTQS) with strict regulatory adherence."
      ]
    }
  ];

  const educations = [
    {
      school: "iSpan International",
      degree: "Frontend Web Developer Bootcamp",
      status: "Completed"
    },
    {
      school: "Chang Jung Christian University",
      degree: "Information and Media Design",
      status: "Bachelor's Degree"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-black/50 to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16">
          {/* Left Column: Summary & Skills */}
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Professional <span className="text-accent">Summary</span>
            </h2>
            
            <div className="prose prose-invert text-muted text-lg leading-relaxed mb-10">
              <p>
                With 4-5 years of cross-disciplinary experience, currently serving as a 
                <span className="text-white font-medium"> Digital Platform Specialist</span> at KING TONY.
              </p>
              <p>
                Specializing in transforming <span className="text-white font-medium">Media Design</span> backgrounds into precise 
                <span className="text-white font-medium"> UI/UX Implementations</span>. I leverage rigorous logic from HR & Sales domains to ensure data consistency and process efficiency.
              </p>
              <p>
                Focusing on <span className="text-white font-medium">Shopify Development</span> and <span className="text-white font-medium">React/Node.js</span> Full Stack solutions. Capable of building testing sites from scratch, integrating third-party APIs, and handling complex membership logic to optimize global market conversions.
              </p>
            </div>

            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Terminal className="text-accent" /> Technical Skills
            </h3>
            
            <div className="space-y-4 mb-10">
              <div>
                <h4 className="text-white font-medium mb-2">Frontend Development</h4>
                <p className="text-muted text-sm border-l-2 border-white/10 pl-3">
                  HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS, Bootstrap, GSAP Animation
                </p>
              </div>
              <div>
                <h4 className="text-white font-medium mb-2">Backend & Database</h4>
                <p className="text-muted text-sm border-l-2 border-white/10 pl-3">
                  Node.js, Express.js, PHP, MySQL, RESTful API Integration
                </p>
              </div>
              <div>
                <h4 className="text-white font-medium mb-2">Platform Development</h4>
                <p className="text-muted text-sm border-l-2 border-white/10 pl-3">
                  Shopify CLI, Liquid, Theme Customization, ECPay Integration
                </p>
              </div>
              <div>
                <h4 className="text-white font-medium mb-2">Tools & Languages</h4>
                <p className="text-muted text-sm border-l-2 border-white/10 pl-3">
                  Git/GitHub (Git Flow), VS Code, Gemini AI, Figma <br/>
                  English (TOEIC 755), Taiwanese (Intermediate)
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Experience & Education */}
          <div className="relative">
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse pointer-events-none"></div>

            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Briefcase className="text-accent" /> Professional Experience
            </h3>

            <div className="space-y-8 border-l border-white/10 pl-6 ml-3 mb-12">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative">
                  <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-accent ring-4 ring-background"></span>
                  <div className="mb-2">
                    <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                    <div className="text-sm text-accent mb-1">{exp.company}</div>
                    <span className="text-xs font-mono text-muted">{exp.period}</span>
                  </div>
                  <ul className="text-sm text-muted list-disc list-inside space-y-1 marker:text-white/30">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <GraduationCap className="text-accent" /> Education
            </h3>

            <div className="grid gap-4">
              {educations.map((edu, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-black/20 border border-white/5 flex justify-between items-center hover:border-accent/30 transition-colors">
                  <div>
                    <h4 className="font-bold text-white">{edu.school}</h4>
                    <p className="text-sm text-muted">{edu.degree}</p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded bg-white/10 text-white/70">{edu.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
    </section>
  );
}
