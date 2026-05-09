import { useState } from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/shaker_profile.png";

const Hero = () => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 overflow-hidden pt-20">
      {/* Background Glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-violet-deep/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-accent/10 rounded-full blur-[120px] -z-10" />

      <div className="flex-1 text-left space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-violet-glow font-medium tracking-widest uppercase text-sm mb-2">
            Senior Laravel Developer & DevOps Engineer
          </h2>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white leading-[0.9]">
            SHAKER <br />
            <span className="text-violet-deep">AL-MUZAYNI.</span>
          </h1>
        </motion.div>

        <motion.p
          className="text-gray-400 max-w-md text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Architecting high-performance digital systems with 5+ years of experience 
          in Laravel, React, and DevOps. Focused on scalability, security, and neural-inspired interfaces.
        </motion.p>

        <motion.div
          className="flex gap-4 pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button className="px-8 py-3 bg-violet-deep text-white font-medium rounded-full hover:bg-violet-glow transition-all duration-300 shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:scale-105 active:scale-95">
            View Projects
          </button>
          <button className="px-8 py-3 glass text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105 active:scale-95">
            Download CV
          </button>
        </motion.div>
      </div>

      <motion.div
        className="flex-1 relative mt-16 md:mt-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
          {/* Decorative Borders */}
          <div className="absolute -inset-4 border border-violet-deep/30 rounded-3xl rotate-6 -z-10" />
          <div className="absolute -inset-4 border border-emerald-accent/20 rounded-3xl -rotate-3 -z-10" />
          
          <motion.div 
            className="w-full h-full rounded-2xl overflow-hidden glass p-1 cursor-pointer"
            whileHover={{ rotateY: 15, rotateX: -15, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={() => setShowFilter(!showFilter)}
          >
            <img 
              src={profileImg} 
              alt="Profile" 
              className={`w-full h-full object-cover rounded-xl transition-all duration-500 ${showFilter ? 'grayscale' : 'grayscale-0'}`}
            />
          </motion.div>
          
          {/* Floating Element */}
          <motion.div 
            className="absolute -bottom-6 -right-6 glass p-4 rounded-2xl animate-float"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="text-emerald-accent text-xs font-bold uppercase tracking-tighter">Available for</div>
            <div className="text-white text-sm">Full-time Roles</div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
