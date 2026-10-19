import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { getProject, projects } from "../data/projects";

const Lightbox = ({ images, title, index, onClose, onChange }) => {
  const ref = useRef(null);

  useEffect(() => {
    const d = ref.current;
    if (d && !d.open) d.showModal();
  }, []);

  const go = (step) => onChange((index + step + images.length) % images.length);

  const onKeyDown = (e) => {
    if (images.length < 2) return;
    if (e.key === "ArrowRight") go(1);
    if (e.key === "ArrowLeft") go(-1);
  };

  const btn =
    "absolute top-1/2 -translate-y-1/2 rounded-full border border-moss bg-forest/80 p-2 text-ivory hover:border-mint hover:text-mint";

  return (
    <dialog
      ref={ref}
      aria-label={`${title} screenshot ${index + 1} of ${images.length}`}
      onClose={onClose}
      onKeyDown={onKeyDown}
      onClick={(e) => e.target === ref.current && onClose()}
      className="m-auto max-h-[92vh] w-[min(1100px,94vw)] overflow-hidden rounded-xl border border-moss bg-pine p-0 text-ivory backdrop:bg-black/80"
    >
      <div className="relative">
        <img src={images[index]} alt={`${title} screenshot ${index + 1}`} className="max-h-[88vh] w-full object-contain" />
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 rounded-full border border-moss bg-forest/80 p-2 hover:border-mint hover:text-mint"
        >
          <X size={20} />
        </button>
        {images.length > 1 && (
          <>
            <button type="button" onClick={() => go(-1)} aria-label="Previous screenshot" className={`${btn} left-3`}>
              <ChevronLeft size={22} />
            </button>
            <button type="button" onClick={() => go(1)} aria-label="Next screenshot" className={`${btn} right-3`}>
              <ChevronRight size={22} />
            </button>
          </>
        )}
      </div>
    </dialog>
  );
};

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = getProject(slug);
  const [open, setOpen] = useState(null);
  const [language, setLanguage] = useState("en");

  useEffect(() => setLanguage("en"), [slug]);

  if (!project) {
    return (
      <div className="wrap py-28">
        <h1 className="text-3xl font-semibold">That project doesn't exist</h1>
        <p className="mt-3 text-sage">The link may be old or mistyped.</p>
        <Link to={{ pathname: "/", hash: "#work" }} className="mt-6 inline-block text-mint underline underline-offset-4">
          See all projects
        </Link>
      </div>
    );
  }

  const arabic = language === "ar" && Boolean(project.taglineAr);
  const features = arabic ? project.featuresAr || project.features : project.features;
  const challenges = arabic ? project.challengesAr || project.challenges : project.challenges;
  const limitations = arabic ? project.limitationsAr || project.limitations : project.limitations || [];

  const i = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];
  
  const shot = (src, n) => (
    <button
      key={src + n}
      type="button"
      onClick={() => setOpen(n)}
      aria-label={arabic ? `تكبير الصورة ${n + 1} من ${project.gallery.length}` : `Enlarge screenshot ${n + 1} of ${project.gallery.length}`}
      className="group mb-5 block w-full break-inside-avoid overflow-hidden rounded-xl border border-moss bg-pine"
    >
      <img
        src={src}
        alt={`${project.title} screenshot ${n + 1}`}
        loading={n === 0 ? "eager" : "lazy"}
        decoding="async"
        className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.015]"
      />
    </button>
  );

  return (
    <article dir={arabic ? "rtl" : "ltr"} lang={arabic ? "ar" : "en"} className="wrap py-10 md:py-16">
      <nav aria-label="Breadcrumb" className="text-sm">
        <Link to={{ pathname: "/", hash: "#work" }} className="inline-flex items-center gap-1.5 text-sage hover:text-mint">
          {arabic ? <ArrowRight size={16} aria-hidden="true" /> : <ArrowLeft size={16} aria-hidden="true" />} {arabic ? "كل المشاريع" : "All projects"}
        </Link>
      </nav>

      {project.taglineAr && (
        <div className="mt-6 flex justify-end">
          <div role="group" aria-label="Project language" className="inline-flex rounded-lg border border-moss bg-pine p-1">
            <button
              type="button"
              onClick={() => setLanguage("en")}
              aria-pressed={!arabic}
              className={`rounded-md px-3 py-1.5 text-sm transition-colors ${!arabic ? "bg-mint text-forest" : "text-sage hover:text-ivory"}`}
            >
              English
            </button>
            <button
              type="button"
              onClick={() => setLanguage("ar")}
              aria-pressed={arabic}
              lang="ar"
              className={`rounded-md px-3 py-1.5 text-sm transition-colors ${arabic ? "bg-mint text-forest" : "text-sage hover:text-ivory"}`}
            >
              العربية
            </button>
          </div>
        </div>
      )}

      <header className="mt-8 max-w-3xl">
        <p className="text-sm text-sage">{arabic ? project.categoryAr || project.category : project.category}</p>
        <h1 className="mt-2 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">{project.title}</h1>
        <p className="mt-4 text-lg leading-relaxed text-ivory/80">{arabic ? project.taglineAr || project.tagline : project.tagline}</p>

        <div className="mt-7 flex flex-wrap gap-3">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-md bg-mint px-5 py-3 font-medium text-forest transition-colors hover:bg-ivory"
            >
              {arabic ? "زيارة الموقع" : "Visit live site"} <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-md border border-moss px-5 py-3 font-medium transition-colors hover:border-mint hover:text-mint"
            >
              {arabic ? "المصدر البرمجي" : "Source code"} <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          )}
        </div>
      </header>

      <div className={`mt-12 ${project.gallery.length > 1 ? "md:columns-2 md:gap-5" : ""}`}>
        {project.gallery.map((src, n) => shot(src, n))}
      </div>

      <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="space-y-14 lg:col-span-8">
          <section>
            <h2 className="text-2xl font-semibold tracking-tight">{arabic ? "ماذا يقدّم المشروع؟" : "What it does"}</h2>
            <ul className="mt-5 border-t border-moss">
              {features.map((f) => (
                <li key={f} className="border-b border-moss py-3.5 leading-relaxed text-ivory/85">
                  {f}
                </li>
              ))}
            </ul>
          </section>

          {challenges.length > 0 && (
            <section>
              <h2 className="text-2xl font-semibold tracking-tight">{arabic ? "التحديات والحلول" : "Challenges and solutions"}</h2>
              <dl className="mt-5 space-y-8">
                {challenges.map((c) => (
                  <div key={c.task} className={arabic ? "border-r-2 border-moss pr-5" : "border-l-2 border-moss pl-5"}>
                    <dt className="font-semibold">{c.task.replace(/^[\p{Extended_Pictographic}\uFE0F\s]+/u, "")}</dt>
                    <dd className="mt-1.5 leading-relaxed text-ivory/80">{c.solution}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}
          {limitations.length > 0 && (
            <section>
              <h2 className="text-2xl font-semibold tracking-tight">{arabic ? "ملاحظات وحدود التشغيل" : "Operational notes and limitations"}</h2>
              <ul className="mt-5 border-t border-moss">
                {limitations.map((item) => (
                  <li key={item} className="border-b border-moss py-3.5 leading-relaxed text-ivory/85">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <aside className="lg:col-span-4">
          <div className="rounded-xl border border-moss bg-pine p-6 lg:sticky lg:top-24">
            <h2 className="font-semibold">{arabic ? "التقنيات المستخدمة" : "Built with"}</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <li key={t} className="rounded-md border border-moss px-2.5 py-1 text-sm text-sage">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <nav aria-label="More projects" className="mt-20 grid gap-px overflow-hidden rounded-xl border border-moss bg-moss sm:grid-cols-2">
        <Link to={`/project/${prev.slug}`} className="group bg-forest p-6 transition-colors hover:bg-pine">
          <span className="flex items-center gap-1.5 text-sm text-sage">
            {arabic ? <ArrowRight size={15} aria-hidden="true" /> : <ArrowLeft size={15} aria-hidden="true" />} {arabic ? "المشروع السابق" : "Previous project"}
          </span>
          <span className="mt-1 block text-lg font-medium group-hover:text-mint">{prev.title}</span>
        </Link>
        <Link to={`/project/${next.slug}`} className="group bg-forest p-6 transition-colors hover:bg-pine sm:text-right">
          <span className="flex items-center gap-1.5 text-sm text-sage sm:justify-end">
            {arabic ? "المشروع التالي" : "Next project"} {arabic ? <ArrowLeft size={15} aria-hidden="true" /> : <ArrowRight size={15} aria-hidden="true" />}
          </span>
          <span className="mt-1 block text-lg font-medium group-hover:text-mint">{next.title}</span>
        </Link>
      </nav>

      {open !== null && (
        <Lightbox images={project.gallery} title={project.title} index={open} onClose={() => setOpen(null)} onChange={setOpen} />
      )}
    </article>
  );
};

export default ProjectDetails;
