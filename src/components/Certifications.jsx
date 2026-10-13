import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { certificates } from "../data/certificates";

const Certifications = () => (
  <section id="certifications" className="tone-light py-20 md:py-28">
    <div className="wrap">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Certifications</h2>
        <p className="max-w-md text-sm text-sage">Courses, credentials, and the technologies surrounding each specialization.</p>
      </div>
      <ul className="mt-12 grid gap-4 md:grid-cols-2">
        {certificates.map((certificate) => (
          <li key={certificate.slug} className="rounded-xl border border-moss bg-pine shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-mint hover:shadow-md">
            <Link
              to={`/certifications/${certificate.slug}`}
              className="group flex min-h-16 items-center justify-between gap-4 rounded-xl px-5 py-4"
              aria-label={`View details for ${certificate.name}`}
            >
              <span className="min-w-0 font-medium transition-colors group-hover:text-mint">
                {certificate.name}
                <ArrowRight size={15} aria-hidden="true" className="ml-1 inline text-sage transition-transform group-hover:translate-x-0.5" />
              </span>
              <span className="tone-forest shrink-0 rounded-full px-3 py-0.5 text-sm tabular-nums">
                <span className="text-gold">{certificate.date}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Certifications;