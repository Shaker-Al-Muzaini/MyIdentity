import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import profileImg from '../assets/shaker_avatar.png';
import { profile } from '../data/site';
import './SystemStory.css';

const chapters = [
  { label: '01 / THE IDEA', title: <>Complex ideas.<br /><em>Clear systems.</em></>, description: 'I’m Shaker. I turn business problems into software — from the first API to the intelligence and automation around it.', note: 'One idea. Every layer considered.' },
  { label: '02 / THE ARCHITECTURE', title: <>Every layer.<br /><em>Working together.</em></>, description: 'Laravel at the core. FastAPI for intelligence. PostgreSQL for data. n8n connecting the work. Designed as one coherent system.', note: 'Explore the layers. Scroll to assemble.' },
  { label: '03 / THE DELIVERY', title: <>Built to work.<br /><em>Ready to grow.</em></>, description: 'From architecture to deployment: practical software, automated workflows, and a foundation your next idea can build on.', note: 'From an idea to a working product.' },
];
const layers = [
  { name: 'n8n', detail: 'AUTOMATION', symbol: '⌘', color: 'gold' },
  { name: 'FastAPI', detail: 'INTELLIGENCE', symbol: '✳', color: 'mint' },
  { name: 'Laravel', detail: 'APPLICATION', symbol: '{ }', color: 'green' },
  { name: 'PostgreSQL', detail: 'DATA', symbol: '≡', color: 'ivory' },
];

export default function Hero() {
  const root = useRef(null);
  const [chapter, setChapter] = useState(0);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame;
    const update = () => {
      frame = null;
      const el = root.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const p = media.matches ? 0 : Math.max(0, Math.min(1, -rect.top / Math.max(1, rect.height - window.innerHeight)));
      const spread = Math.sin(p * Math.PI);
      el.style.setProperty('--spread', spread.toFixed(4));
      el.style.setProperty('--turn', `${-32 + p * 34}deg`);
      setChapter(media.matches ? 0 : p < .27 ? 0 : p < .73 ? 1 : 2);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    media.addEventListener('change', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      media.removeEventListener('change', schedule);
    };
  }, []);
  const content = chapters[chapter];
  return (
    <section ref={root} id="home" className={`system-story story-phase-${chapter}`} aria-label="From an idea to a working software system">
      <div className="story-sticky">
        <div className="story-topline"><span>SHAKER AL-MUZAYNI / SOFTWARE ENGINEER</span><span className="story-top-right">BACKEND · AI · AUTOMATION</span></div>
        <div className="story-layout">
          <div className="story-copy">
            <div className="story-person"><img src={profileImg} alt={profile.name} width="36" height="36" /><span>Engineering with purpose.</span></div>
            <p className="story-eyebrow">{content.label}</p>
            <h1>{content.title}</h1>
            <p className="story-description">{content.description}</p>
            <div className="story-actions"><Link to="/#work" className="story-primary">Explore my work <ArrowUpRight size={18} /></Link><Link to="/#contact" className="story-secondary">Let’s build something <ArrowUpRight size={17} /></Link></div>
          </div>
          <div className="story-art" role="img" aria-label="An exploded three-dimensional software core with n8n automation, FastAPI intelligence, Laravel application, and PostgreSQL data layers">
            <div className="story-orbit" /><div className="story-shadow" />
            <div className="system-model" aria-hidden="true">
              {layers.map((layer, i) => <div key={layer.name} className={`system-layer layer-${layer.color}`} style={{ '--i': i, '--offset': 1.5 - i }}>
                <div className="layer-face layer-top"><span className="layer-symbol">{layer.symbol}</span><span className="layer-top-name">{layer.name}</span><span className="layer-corner">0{i + 1}</span></div>
                <div className="layer-face layer-front"><span className="layer-led" /><span>{layer.detail}</span><span className="layer-vents">|||</span></div>
                <div className="layer-face layer-back" /><div className="layer-face layer-left" /><div className="layer-face layer-right" /><div className="layer-face layer-bottom" />
              </div>)}
            </div>
            <div className="story-art-caption"><span className="story-dot" /> {content.note}</div>
          </div>
        </div>
        <div className="story-footer"><span className="story-scroll"><ArrowDown size={16} /> SCROLL TO EXPLORE</span><div className="story-progress" aria-label={`Chapter ${chapter + 1} of 3`}>{chapters.map((_, i) => <span key={i} className={chapter === i ? 'active' : ''} />)}</div><span>IDEA → SYSTEM → IMPACT</span></div>
      </div>
    </section>
  );
}
