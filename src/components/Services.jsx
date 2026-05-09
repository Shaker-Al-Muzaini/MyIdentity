import { motion } from "framer-motion";
import { Code, Layout, Smartphone, Globe, BarChart, Shield } from "lucide-react";

const services = [
  {
    title: "Web Development",
    desc: "Building scalable, high-performance web applications using modern frameworks like React and Laravel.",
    icon: Code,
  },
  {
    title: "UI/UX Design",
    desc: "Crafting intuitive and visually stunning user interfaces with a focus on user experience and accessibility.",
    icon: Layout,
  },
  {
    title: "Mobile Solutions",
    desc: "Developing responsive and performant mobile applications for both iOS and Android platforms.",
    icon: Smartphone,
  },
  {
    title: "API Architecture",
    desc: "Designing robust and secure RESTful and GraphQL APIs to power your digital ecosystem.",
    icon: Globe,
  },
  {
    title: "Performance Optimization",
    desc: "Auditing and optimizing application performance to ensure lightning-fast load times and smooth interactions.",
    icon: BarChart,
  },
  {
    title: "Cloud Infrastructure",
    desc: "Setting up and managing secure cloud environments using AWS, Docker, and CI/CD pipelines.",
    icon: Shield,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-violet-glow font-medium tracking-widest uppercase text-sm mb-2">
            My Expertise
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Specialized <span className="text-violet-deep">Services</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="glass p-8 rounded-[32px] hover:border-violet-deep/50 transition-all duration-500 group cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-14 h-14 bg-violet-deep/10 rounded-2xl flex items-center justify-center mb-6 text-violet-glow group-hover:scale-110 group-hover:bg-violet-deep group-hover:text-white transition-all duration-300">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-violet-glow transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
