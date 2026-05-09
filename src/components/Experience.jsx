import { motion } from "framer-motion";

const experiences = [
  {
    year: "2023 - 2025",
    role: "Senior Laravel Developer",
    company: "In2world (MIXAA Group)",
    desc: "Led the development of Doshtu multi-vendor platform, integrated AliExpress APIs, and built complex admin dashboards using Metronic. Optimized deployments with Docker and CI/CD pipelines.",
  },
  {
    year: "2021 - 2023",
    role: "Full Stack Developer",
    company: "Domino ICT",
    desc: "Developed secure e-commerce platforms and real-time communication systems using WebSockets and Pusher. Implemented scalable backend architectures with Laravel and Docker.",
  },
  {
    year: "2019 - 2021",
    role: "Freelance Developer",
    company: "Independent",
    desc: "Delivered various full-stack solutions including education platforms (EduRa) and custom business analytics dashboards for diverse clients.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-20 bg-obsidian/30 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-deep/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-violet-glow font-medium tracking-widest uppercase text-sm mb-2">
            Professional Journey
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white">
            Career <span className="text-violet-deep">Timeline</span>
          </h3>
        </motion.div>
 
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-violet-deep/50 to-transparent md:-translate-x-1/2" />
 
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Node */}
                <div className="absolute left-4 md:left-1/2 top-0 -translate-x-1/2 w-8 h-8 bg-obsidian border-2 border-violet-deep rounded-full flex items-center justify-center z-20 shadow-[0_0_20px_rgba(124,58,237,0.4)]">
                  <div className="w-2.5 h-2.5 bg-violet-deep rounded-full animate-pulse" />
                </div>
 
                <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  {/* Content Card */}
                  <motion.div
                    className="w-full md:w-[45%] ml-12 md:ml-0"
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: index * 0.1 }}
                  >
                    <div className="glass p-8 rounded-[32px] hover:bg-white/5 transition-all duration-500 border border-white/5 hover:border-violet-deep/30 group">
                      <div className="flex justify-between items-start mb-4">
                        <span className="px-4 py-1.5 rounded-full bg-violet-deep/10 border border-violet-deep/20 text-violet-glow text-xs font-mono">
                          {exp.year}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-violet-glow transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-emerald-accent font-medium mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-emerald-accent rounded-full" />
                        {exp.company}
                      </p>
                      <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                        {exp.desc}
                      </p>
                    </div>
                  </motion.div>
 
                  {/* Empty space for alternating effect */}
                  <div className="hidden md:block w-[10%]" />
                  <div className="hidden md:block w-[45%]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
