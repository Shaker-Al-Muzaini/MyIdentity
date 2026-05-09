import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CodeXml, ExternalLink, CheckCircle2, ChevronRight } from "lucide-react";
import { projectsData } from "../data/projectsData";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <h2 className="text-2xl">Project not found</h2>
        <Link to="/" className="ml-4 text-violet-glow hover:underline">Go back home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 md:px-20 relative overflow-hidden bg-obsidian">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-deep/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-deep/5 rounded-full blur-[150px] -z-10" />

      <div className="max-w-5xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-violet-glow transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>Back to Portfolio</span>
        </Link>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed mb-8">
            {project.desc}
          </p>

          <div className="flex flex-wrap gap-4">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 glass rounded-xl hover:bg-white/5 transition-colors border border-white/5 hover:border-violet-deep/30 text-white"
            >
              <CodeXml size={20} />
              <span>Source Code</span>
            </a>
            <a 
              href={project.live} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-violet-deep text-white rounded-xl hover:bg-violet-glow transition-colors shadow-[0_0_20px_rgba(124,58,237,0.3)]"
            >
              <ExternalLink size={20} />
              <span>Live Project</span>
            </a>
          </div>
        </motion.div>

        {/* Image Gallery */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {project.gallery.map((img, i) => (
            <div key={i} className={`rounded-[32px] overflow-hidden border border-white/5 shadow-2xl ${i === 0 ? "md:col-span-2" : ""}`}>
              <img src={img} alt={`${project.title} screenshot ${i+1}`} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </motion.div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-12"
          >
            {/* Features */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-violet-deep rounded-full"></span>
                Key Features
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 glass p-4 rounded-2xl border border-white/5">
                    <CheckCircle2 className="text-emerald-accent flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tasks & Solutions */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-violet-deep rounded-full"></span>
                Challenges & Solutions
              </h3>
              <div className="space-y-6">
                {project.tasksAndSolutions.map((item, i) => (
                  <div key={i} className="glass p-6 rounded-2xl border border-white/5">
                    <div className="flex items-center gap-2 mb-3">
                      <ChevronRight className="text-violet-glow" size={20} />
                      <h4 className="text-lg font-semibold text-white">{item.task}</h4>
                    </div>
                    <p className="text-gray-400 pl-7 leading-relaxed border-l border-white/10 ml-2">
                      {item.solution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Technologies */}
            <div className="glass p-8 rounded-[32px] border border-white/5 sticky top-24">
              <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {project.stack.map((tech, i) => (
                  <span 
                    key={i} 
                    className="text-sm font-medium px-4 py-2 bg-violet-deep/10 text-violet-glow border border-violet-deep/20 rounded-xl"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
