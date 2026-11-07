import { lazy, Suspense, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import projectImage from '../assets/digital-momentum-dashboard.webp';
import './SystemStory.css';

const EngineeringScene = lazy(() => import('./engineering/EngineeringScene'));
const story = [
  { id: 'idea', number: '01', eyebrow: 'Software, thoughtfully engineered.', title: <>BUILT<br />WITH<br /><i>PURPOSE.</i></>, body: 'I’m Shaker Al-Muzayni. I build the backend, AI services and automation that turn an idea into a working product.', link: 'EXPLORE MY WORK', href: '/#work', caption: 'A good product starts with a clear idea.', tag: 'THE IDEA' },
  { id: 'architecture', number: '02', eyebrow: 'Look beyond the interface.', title: <>BEAUTY<br />ON THE<br /><i>INSIDE.</i></>, body: 'APIs, data, intelligence and workflows. Different parts, carefully connected. This is where I do my best work.', link: 'WHAT I BUILD', href: '/#services', caption: 'Laravel · PostgreSQL · FastAPI · n8n', tag: 'THE ARCHITECTURE' },
  { id: 'product', number: '03', eyebrow: 'Bring every part together.', title: <>FROM<br />CODE TO<br /><i>PRODUCT.</i></>, body: 'Digital Momentum brings services, orders, prepaid credit and support into one customer and admin experience.', link: 'EXPLORE THE PROJECT', href: '/project/digital-momentum', caption: 'Digital Momentum / interactive platform demo', tag: 'THE PRODUCT' },
  { id: 'craft', number: '04', eyebrow: 'Built with care. Down to the details.', title: <>MADE<br />TO MAKE<br /><i>A DIFFERENCE.</i></>, body: 'Backend engineering. AI integration. Workflow automation. Let’s build the software your next idea deserves.', link: 'LET’S TALK', href: '/#contact', caption: 'Your next idea could be here.', tag: 'YOUR NEXT IDEA' },
];
export default function Hero() {
  const root = useRef(null);
  return <section id="home" ref={root} className="engineering-story" aria-label="The journey from an idea to a software product">
    <div className="engineering-stage" aria-hidden="true"><Suspense fallback={<div className="scene-loading">Preparing the workspace<span>· · ·</span></div>}><EngineeringScene storyRef={root} /></Suspense></div>
    {story.map((part, i) => <section key={part.id} className={`engineering-panel panel-${part.id}`} aria-labelledby={`story-title-${part.id}`}>
      <div className="engineering-panel-top"><span>SHAKER AL-MUZAYNI</span><span>SOFTWARE ENGINEER</span></div>
      <div className="engineering-copy">
        <p className="engineering-eyebrow">{part.eyebrow}</p>
        {i === 0 ? <h1 id={`story-title-${part.id}`}>{part.title}</h1> : <h2 id={`story-title-${part.id}`}>{part.title}</h2>}
        <p className="engineering-description">{part.body}</p>
        <Link className="engineering-cta" to={part.href}>{part.link}<ArrowUpRight size={15} /></Link>
      </div>
      <figure className="engineering-static"><img src={projectImage} alt="Digital Momentum dashboard showing services, balance and orders" /></figure>
      <div className="engineering-caption"><span className="caption-line" />{part.caption}</div>
      <div className="engineering-panel-bottom"><span>{part.number} / {part.tag}</span><span className="engineering-dots">{story.map((s, j) => <b className={i === j ? 'current' : ''} key={s.id} />)}</span><span className="engineering-scroll">SCROLL TO DISCOVER <ArrowDown size={13} /></span></div>
    </section>)}
  </section>;
}
