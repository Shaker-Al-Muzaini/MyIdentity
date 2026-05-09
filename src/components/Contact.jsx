import { motion } from "framer-motion";
import { Mail, CodeXml, ExternalLink, Globe, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-deep/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-violet-glow font-medium tracking-widest uppercase text-sm mb-2">
              Get In Touch
            </h2>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Let's build <br />
              <span className="text-violet-deep">something great.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-md">
              Have a project in mind or just want to say hi? I'm always open to new opportunities and collaborations.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-violet-glow group-hover:bg-violet-deep group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest">Email me at</p>
                  <p className="text-white font-medium">sshakiralmazini@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                {[
                  { icon: CodeXml, link: "https://github.com/Shaker-Al-Muzaini" },
                  { icon: ExternalLink, link: "https://www.linkedin.com/in/shakiralmazini" },
                  { icon: Globe, link: "#" },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.link}
                    className="w-12 h-12 glass rounded-full flex items-center justify-center text-gray-400 hover:text-violet-glow hover:border-violet-deep/50 transition-all"
                    whileHover={{ scale: 1.1, y: -5 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-8 md:p-12 rounded-[40px]"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-violet-deep/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-violet-deep/50 transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Subject</label>
                <input 
                  type="text" 
                  placeholder="How can I help you?"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-violet-deep/50 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
                <textarea 
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-violet-deep/50 transition-colors resize-none"
                />
              </div>

              <button className="w-full py-5 bg-violet-deep text-white font-bold rounded-2xl hover:bg-violet-glow transition-all flex items-center justify-center gap-2 group shadow-[0_0_30px_rgba(124,58,237,0.3)]">
                Send Message
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
