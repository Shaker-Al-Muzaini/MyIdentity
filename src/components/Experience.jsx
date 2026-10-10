import { experiences } from "../data/site";

const Experience = () => (
  <section id="experience" className="tone-light py-20 md:py-28">
    <div className="wrap">
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Experience</h2>

      <ol className="mt-12 space-y-5">
        {experiences.map((e) => (
          <li key={e.period} className="grid overflow-hidden rounded-xl border border-moss bg-pine shadow-sm md:grid-cols-12">
            <p className="tone-forest px-6 py-4 md:col-span-3 md:py-6"><span className="font-medium text-gold">{e.period}</span></p>
            <div className="p-6 md:col-span-9">
              <h3 className="text-xl font-semibold">{e.role}</h3>
              <p className="mt-0.5 font-medium text-mint">{e.company}</p>
              <p className="mt-3 max-w-2xl leading-relaxed text-ivory/80">{e.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
