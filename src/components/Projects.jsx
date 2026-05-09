import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projectsData } from "../data/projectsData";

const Projects = () => {
  return (
    <section id="work" className="py-24 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-violet-glow font-medium tracking-widest uppercase text-sm mb-2">
              Portfolio
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Featured <span className="text-violet-deep">Projects</span>
            </h2>
          </div>
          <button className="text-gray-400 hover:text-white transition-colors border-b border-gray-800 pb-1">
            View All Projects
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div 
                className="glass rounded-3xl overflow-hidden h-full flex flex-col"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {project.stack.map((tech, i) => (
                      <span 
                        key={i} 
                        className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-violet-deep/10 text-violet-glow border border-violet-deep/20 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-violet-glow transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                    {project.desc}
                  </p>

                  <Link 
                    to={`/project/${project.id}`}
                    onClick={() => window.scrollTo(0, 0)}
                    className="w-full py-3 glass-violet text-white font-medium rounded-xl group-hover:bg-violet-deep transition-all duration-300 flex justify-center items-center"
                  >
                    View Case Study
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
