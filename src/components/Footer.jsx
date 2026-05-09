import { CodeXml, ExternalLink, Globe, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-obsidian pt-24 pb-12 px-6 md:px-20 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="text-white font-bold tracking-tighter text-3xl">
              MyIdentity<span className="text-violet-deep">.</span>
            </div>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              Senior Laravel Developer & DevOps Engineer with 5+ years of experience 
              building high-performance, scalable systems.
            </p>
            <div className="flex gap-4">
              {[CodeXml, ExternalLink, Globe, Mail].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-500 hover:text-violet-glow hover:border-violet-deep/50 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-violet-glow transition-colors">Home</a></li>
              <li><a href="#work" className="hover:text-violet-glow transition-colors">Portfolio</a></li>
              <li><a href="#experience" className="hover:text-violet-glow transition-colors">Experience</a></li>
              <li><a href="#contact" className="hover:text-violet-glow transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#services" className="hover:text-violet-glow transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-violet-glow transition-colors">UI/UX Design</a></li>
              <li><a href="#services" className="hover:text-violet-glow transition-colors">Cloud Architecture</a></li>
              <li><a href="#services" className="hover:text-violet-glow transition-colors">Optimization</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © {currentYear} Shaker Al-Muzayni. Built with Passion & Precision.
          </p>
          <div className="flex gap-8 text-gray-500 text-xs uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
