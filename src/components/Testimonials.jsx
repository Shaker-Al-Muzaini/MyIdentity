import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO @ NeuralStream",
    content: "Alex's ability to translate complex technical requirements into elegant, high-performance interfaces is unparalleled. A true professional.",
    image: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "Marcus Thorne",
    role: "Founder @ Vortex",
    content: "Working with Alex was a game-changer for our platform. The neural-inspired design system he built is now our core identity.",
    image: "https://i.pravatar.cc/150?u=marcus"
  },
  {
    name: "Elena Rodriguez",
    role: "Product Lead @ Pixel",
    content: "Beyond just code, Alex brings architectural wisdom to every discussion. The scalability of the backend he built is impressive.",
    image: "https://i.pravatar.cc/150?u=elena"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-obsidian">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-violet-glow font-medium tracking-widest uppercase text-sm mb-2">
            Client Stories
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Trusted by <span className="text-violet-deep">Industry Leaders</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="glass p-8 rounded-[32px] relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-violet-deep rounded-full flex items-center justify-center text-white shadow-lg">
                <Quote size={18} />
              </div>
              
              <p className="text-gray-300 italic mb-8 leading-relaxed">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full grayscale" />
                <div>
                  <h4 className="text-white font-bold text-sm">{t.name}</h4>
                  <p className="text-violet-glow text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
