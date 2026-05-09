import { motion } from "framer-motion";
import { Code2, Layout, Database, Cpu, Globe, Zap } from "lucide-react";

const skills = [
  { name: "Laravel & PHP", level: 98, icon: Database, color: "violet-deep" },
  { name: "Frontend (React & Vue)", level: 92, icon: Layout, color: "emerald-accent" },
  { name: "DevOps & Docker", level: 85, icon: Cpu, color: "violet-glow" },
  { name: "Cloud (AWS & Firebase)", level: 80, icon: Globe, color: "violet-deep" },
  { name: "Real-time (Pusher & WebRTC)", level: 88, icon: Zap, color: "emerald-accent" },
  { name: "Server Management (Linux)", level: 90, icon: Code2, color: "violet-glow" },
];

const Skills = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-obsidian/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center">
          Technical <span className="text-violet-deep">Stack</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="space-y-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 glass rounded-lg text-violet-glow">
                    <skill.icon size={20} />
                  </div>
                  <span className="text-lg font-medium text-white">{skill.name}</span>
                </div>
                <span className="text-violet-glow font-mono">{skill.level}%</span>
              </div>

              {/* Progress Bar */}
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-violet-deep to-violet-glow"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Cloud */}
        <div className="mt-24 flex flex-wrap justify-center gap-4 opacity-50">
          {["Laravel", "Vue.js", "React", "Docker", "AWS", "GitHub Actions", "Tailwind", "PostgreSQL", "Redis", "TypeScript", "Kubernetes", "Inertia.js", "Nginx", "WebRTC", "Pusher"].map((tech, i) => (
            <motion.span
              key={i}
              className="px-4 py-2 glass rounded-full text-xs font-mono text-gray-400 hover:text-white hover:border-violet-deep transition-all duration-300"
              whileHover={{ scale: 1.1, y: -5 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
