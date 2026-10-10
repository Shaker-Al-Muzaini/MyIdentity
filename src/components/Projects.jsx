import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { featuredProjects, projects } from "../data/projects";

const BATCH = 3;
const rest = projects.slice(featuredProjects.length);

const Featured = ({ project, flip }) => (
  <article className="tone-forest grid items-center gap-6 rounded-2xl p-5 shadow-lg md:p-8 lg:grid-cols-12 lg:gap-12">
    <Link
      to={`/project/${project.slug}`}
      aria-label={`${project.title} case study`}
      className={`group block overflow-hidden rounded-xl border border-moss bg-pine shadow-sm lg:col-span-7 ${flip ? "lg:order-2" : ""}`}
    >
      <img
        src={project.image}
        alt={`${project.title} interface`}
        loading="lazy"
        decoding="async"
        className={`${project.frame || "aspect-[16/10]"} w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]`}
      />
    </Link>

    <div className="lg:col-span-5">
      <p className="text-sm font-medium text-gold">{project.category}</p>
      <h3 className="mt-1 text-2xl font-semibold tracking-tight md:text-3xl">{project.title}</h3>
      <p className="mt-3 leading-relaxed text-ivory/80">{project.tagline}</p>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
        {project.stack.slice(0, 6).map((t) => (
          <li key={t} className="rounded-md border border-gold/40 bg-gold/10 px-2.5 py-1 text-sm text-ivory">
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
        <Link
          to={`/project/${project.slug}`}
          className="font-medium text-mint underline decoration-mint/40 underline-offset-4 hover:decoration-mint"
        >
          Read the case study
        </Link>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1 text-sage hover:text-ivory"
        >
          Source code <ArrowUpRight size={16} aria-hidden="true" />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </div>
  </article>
);

const Card = ({ project, focusRef, animate }) => (
  <motion.li
    initial={animate ? { opacity: 0, y: 12 } : false}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="group flex flex-col overflow-hidden rounded-xl border border-moss border-t-4 border-t-gold bg-pine shadow-sm"
  >
    <Link to={`/project/${project.slug}`} tabIndex={-1} aria-hidden="true" className="block overflow-hidden">
      <img
        src={project.image}
        alt=""
        loading="lazy"
        decoding="async"
        className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
      />
    </Link>
    <div className="flex flex-1 flex-col p-5">
      <p className="text-xs text-sage">{project.category}</p>
      <h4 className="mt-1 text-lg font-semibold leading-snug">
        <Link ref={focusRef} to={`/project/${project.slug}`} className="hover:text-mint">
          {project.title}
        </Link>
      </h4>
      <p className="mt-2 text-sm leading-relaxed text-ivory/75">{project.tagline}</p>
      <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
        {project.stack.slice(0, 4).map((t) => (
          <li key={t} className="rounded-md bg-gold/20 px-2 py-0.5 text-xs text-ivory">
            {t}
          </li>
        ))}
      </ul>
    </div>
  </motion.li>
);

const Projects = () => {
  const [extra, setExtra] = useState(0); // how many of the remaining projects are visible
  const [batchStart, setBatchStart] = useState(-1);
  const firstNew = useRef(null);
  const reduce = useReducedMotion();

  const shownTotal = featuredProjects.length + extra;
  const left = rest.length - extra;
  const next = Math.min(BATCH, left);

  useEffect(() => {
    if (batchStart >= 0) firstNew.current?.focus({ preventScroll: false });
  }, [batchStart]);

  const showMore = () => {
    setBatchStart(extra);
    setExtra((n) => Math.min(n + BATCH, rest.length));
  };

  return (
    <section id="work" className="tone-light py-20 md:py-28">
      <div className="wrap">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Selected work</h2>
        <p className="mt-3 max-w-xl text-sage">
          Three projects that show how I combine Laravel, FastAPI and n8n. Everything else I've built follows, three at a time.
        </p>

        <div className="mt-14 space-y-16 md:space-y-24">
          {featuredProjects.map((p, i) => (
            <Featured key={p.slug} project={p} flip={i % 2 === 1} />
          ))}
        </div>

        {extra > 0 && (
          <ul className="mt-20 grid gap-6 border-t border-moss pt-14 sm:grid-cols-2 lg:grid-cols-3" aria-label="More projects">
            {rest.slice(0, extra).map((p, i) => (
              <Card
                key={p.slug}
                project={p}
                focusRef={i === batchStart ? firstNew : null}
                animate={!reduce && i >= batchStart}
              />
            ))}
          </ul>
        )}

        <div className={`flex flex-col items-center gap-3 ${extra > 0 ? "mt-12" : "mt-20 border-t border-moss pt-12"}`}>
          <p className="text-sm text-sage" role="status" aria-live="polite">
            Showing {shownTotal} of {projects.length} projects
          </p>
          {left > 0 && (
            <button
              type="button"
              onClick={showMore}
              className="inline-flex items-center gap-2 rounded-md border border-ivory/80 px-6 py-3 font-medium transition-colors hover:bg-ivory hover:text-forest"
            >
              Show {next} more project{next > 1 ? "s" : ""}
              <ChevronDown size={18} aria-hidden="true" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
