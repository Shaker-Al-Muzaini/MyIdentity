import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    name: "Networking World",
    date: "07/2020",
    link: "https://tinyurl.com/3cfekkdb",
  },
  {
    name: "Professional Certificate in DevOps",
    date: "01/2026",
    link: "https://drive.google.com/file/d/1VWa6GkZT01mBSHeQd9sOgNwvcF2If4iE/view",
  },
  {
    name: "English Writing Skills",
    date: "03/2021",
    link: "https://tinyurl.com/y8rfmspe",
  },
  {
    name: "Docker Deep Dive",
    date: "01/2026",
    link: "https://drive.google.com/file/d/1qTxHkYK7f5oB5V9UwSDmA5sXQvO78jcR/view",
  },
  {
    name: "Laravel Socialite",
    date: "05/2020",
    link: "https://tinyurl.com/3fjev5a2",
  },
  {
    name: "Hotel Management System",
    date: "02/2026",
    link: "https://drive.google.com/file/d/1MsSVAzQQh65ucOb3EXvC06cWZZlMIpo-/view",
  },
  {
    name: "Complete Job Portal Build",
    date: "02/2023",
    link: "https://tinyurl.com/4fvz3tkm",
  },
  {
    name: "Laravel Telescope",
    date: "08/2023",
    link: "https://tinyurl.com/kp4z45ez",
  }
];

const Certifications = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-obsidian/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-violet-glow font-medium tracking-widest uppercase text-sm mb-2">
            Recognition
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Professional <span className="text-violet-deep">Certifications</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-6 rounded-2xl flex items-center justify-between hover:border-violet-deep/50 transition-all group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-violet-deep/10 rounded-xl flex items-center justify-center text-violet-glow group-hover:bg-violet-deep group-hover:text-white transition-all">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm group-hover:text-violet-glow transition-colors">{cert.name}</h4>
                  <p className="text-violet-deep">{cert.date}</p>
                </div>
              </div>
              <ExternalLink size={16} className="text-gray-600 group-hover:text-white transition-colors" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
