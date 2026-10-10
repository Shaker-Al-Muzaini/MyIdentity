import { ArrowUpRight } from "lucide-react";
import { certifications } from "../data/site";

const Certifications = () => (
  <section id="certifications" className="tone-light py-20 md:py-28">
    <div className="wrap">
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Certifications</h2>

      <ul className="mt-12 grid gap-4 md:grid-cols-2">
        {certifications.map((c) => (
          <li key={c.name} className="rounded-xl border border-moss bg-pine shadow-sm">
            <a
              href={c.link}
              target="_blank"
              rel="noreferrer noopener"
              className="group flex items-center justify-between gap-4 px-5 py-4"
            >
              <span className="transition-colors group-hover:text-mint">
                {c.name}
                <ArrowUpRight size={15} aria-hidden="true" className="ml-1 inline text-sage" />
                <span className="sr-only"> (opens in a new tab)</span>
              </span>
              <span className="tone-forest shrink-0 rounded-full px-3 py-0.5 text-sm tabular-nums"><span className="text-gold">{c.date}</span></span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Certifications;
