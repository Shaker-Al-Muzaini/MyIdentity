import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Download,
  ExternalLink,
  FileText,
  Layers3,
  Maximize2,
  ShieldCheck,
  X,
} from "lucide-react";
import { certificates, getCertificate } from "../data/certificates";

const CertificateLightbox = ({ certificate, onClose }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
    return () => {
      if (dialog?.open) dialog.close();
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-label={`${certificate.name} — enlarged certificate`}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose();
      }}
      className="m-auto max-h-[95vh] w-[min(1300px,96vw)] overflow-auto rounded-2xl border border-moss bg-deep p-3 text-ivory shadow-2xl backdrop:bg-black/85 sm:p-5"
    >
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="min-w-0 truncate text-sm text-sage">{certificate.name}</p>
        <button
          type="button"
          aria-label="Close certificate preview"
          onClick={onClose}
          className="rounded-full border border-moss p-2 text-ivory transition-colors hover:border-mint hover:text-mint"
        >
          <X size={20} aria-hidden="true" />
        </button>
      </div>
      <img
        src={certificate.imageUrl}
        alt={`Full-size certificate: ${certificate.name}`}
        className="mx-auto max-h-[80vh] w-full rounded-lg bg-white object-contain"
      />
    </dialog>
  );
};

const InfoItem = ({ icon: Icon, label, value }) => (
  <div className="rounded-xl border border-moss bg-pine p-4 sm:p-5">
    <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-sage">
      <Icon size={16} aria-hidden="true" /> {label}
    </div>
    <p className="mt-2 break-words font-medium leading-relaxed text-ivory">{value}</p>
  </div>
);

const CertificateDetails = () => {
  const { slug } = useParams();
  const certificate = getCertificate(slug);
  const [previewOpen, setPreviewOpen] = useState(false);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = certificate ? `${certificate.name} | Shaker Al-Muzayni` : "Certificate not found | Shaker Al-Muzayni";
    return () => {
      document.title = previousTitle;
    };
  }, [certificate]);

  if (!certificate) {
    return (
      <div className="wrap py-28">
        <Award size={36} className="mb-5 text-mint" aria-hidden="true" />
        <h1 className="text-3xl font-semibold">Certificate not found</h1>
        <p className="mt-3 text-sage">The certificate link may be outdated or mistyped.</p>
        <Link to={{ pathname: "/", hash: "#certifications" }} className="mt-6 inline-flex items-center gap-2 text-mint underline underline-offset-4">
          <ArrowLeft size={17} aria-hidden="true" /> Back to certifications
        </Link>
      </div>
    );
  }

  const currentIndex = certificates.findIndex((item) => item.slug === slug);
  const previous = certificates[(currentIndex - 1 + certificates.length) % certificates.length];
  const next = certificates[(currentIndex + 1) % certificates.length];
  const hasDetails = Boolean(certificate.imageUrl || certificate.pdfUrl);
  const metadata = hasDetails
    ? [
        { icon: Award, label: "Issued via", value: certificate.platform },
        { icon: BookOpen, label: "Course provider", value: certificate.courseProvider },
        { icon: CalendarDays, label: "Completed", value: certificate.issuedOn },
        { icon: Clock3, label: "Course duration", value: certificate.duration },
        { icon: Layers3, label: "Learning format", value: certificate.learningFormat },
        { icon: ShieldCheck, label: "Credential type", value: certificate.certificateType },
      ]
    : [{ icon: CalendarDays, label: "Listed date", value: certificate.date }];

  return (
    <article>
      <div className="tone-deep relative overflow-hidden border-b border-moss/40">
        <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-mint/5 blur-3xl" aria-hidden="true" />
        <div className="wrap relative py-11 md:py-20">
          <nav aria-label="Breadcrumb">
            <Link to={{ pathname: "/", hash: "#certifications" }} className="inline-flex items-center gap-2 text-sm text-sage transition-colors hover:text-mint">
              <ArrowLeft size={16} aria-hidden="true" /> All certifications
            </Link>
          </nav>
          <div className="mt-10 grid items-end gap-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-14">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-moss bg-pine px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-mint">
                  <Award size={14} aria-hidden="true" /> Credential {String(currentIndex + 1).padStart(2, "0")} / {String(certificates.length).padStart(2, "0")}
                </span>
                <span className="text-sm text-gold">{certificate.date}</span>
              </div>
              <h1 className="mt-6 text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                {certificate.name}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-sage md:text-lg">
                {certificate.specialization || "Certificate overview and supporting details"}
              </p>
              {certificate.platform && (
                <p className="mt-5 inline-flex items-center gap-2 text-sm text-ivory/85">
                  <CheckCircle2 size={17} className="text-mint" aria-hidden="true" /> Issued through {certificate.platform}
                </p>
              )}
            </div>
            <div className="flex flex-wrap gap-3 lg:max-w-sm lg:justify-end">
              {certificate.verifyUrl && (
                <a href={certificate.verifyUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-mint px-5 py-3 font-medium text-forest transition-colors hover:bg-ivory">
                  Verify credential <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              )}
              {certificate.pdfUrl && (
                <a href={certificate.pdfUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md border border-moss px-5 py-3 font-medium transition-colors hover:border-mint hover:text-mint">
                  <FileText size={18} aria-hidden="true" /> View original PDF
                </a>
              )}
              {!certificate.pdfUrl && certificate.link && (
                <a href={certificate.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md border border-moss px-5 py-3 font-medium transition-colors hover:border-mint hover:text-mint">
                  View original link <ExternalLink size={17} aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="tone-light py-14 md:py-20">
        <div className="wrap">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(300px,0.85fr)] lg:items-start lg:gap-12">
            <section aria-labelledby="credential-preview-title" className="min-w-0">
              <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">Official document</p>
                  <h2 id="credential-preview-title" className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">Certificate preview</h2>
                </div>
                {certificate.pdfUrl && (
                  <a href={certificate.pdfUrl} download className="inline-flex items-center gap-2 text-sm font-semibold text-mint underline-offset-4 hover:underline">
                    <Download size={16} aria-hidden="true" /> Download PDF
                  </a>
                )}
              </div>
              <div className="overflow-hidden rounded-2xl border border-moss bg-pine p-3 shadow-[0_14px_50px_-24px_rgba(7,41,31,0.3)] sm:p-5">
                {hasDetails ? (
                  certificate.imageUrl ? (
                    <button
                    type="button"
                    aria-label={`Enlarge ${certificate.name} certificate`}
                    onClick={() => setPreviewOpen(true)}
                    className="group relative block w-full overflow-hidden rounded-lg border border-moss bg-white text-left"
                  >
                    <img
                      src={certificate.imageUrl}
                      alt={`Udemy certificate of completion for ${certificate.name}`}
                      loading="eager"
                      decoding="async"
                      className="aspect-[4/3] w-full object-contain transition-transform duration-300 group-hover:scale-[1.012]"
                    />
                    <span className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-lg bg-forest px-3 py-2 text-xs font-medium text-ivory shadow-md">
                      <Maximize2 size={15} aria-hidden="true" /> Enlarge
                    </span>
                  </button>
                  ) : (
                    <object
                      data={`${certificate.pdfUrl}#toolbar=0&view=FitH`}
                      type="application/pdf"
                      aria-label={`Original certificate PDF: ${certificate.name}`}
                      className="block aspect-[4/3] w-full rounded-lg bg-white"
                    >
                      <p className="p-6 text-center">
                        <a href={certificate.pdfUrl} target="_blank" rel="noopener noreferrer">
                          Open certificate PDF
                        </a>
                      </p>
                    </object>
                  )
                ) : (
                  <div className="flex min-h-64 flex-col items-center justify-center rounded-lg border border-dashed border-moss bg-forest/5 px-6 py-12 text-center">
                    <Award size={46} className="text-mint" aria-hidden="true" />
                    <p className="mt-4 font-medium">Certificate image coming soon</p>
                    <p className="mt-2 max-w-sm text-sm text-sage">The full certificate and its verified details will be added when the original document is provided.</p>
                  </div>
                )}
              </div>
              {certificate.credentialId && (
                <p className="mt-4 break-all font-mono text-xs leading-relaxed text-sage">Credential ID: {certificate.credentialId}</p>
              )}
            </section>

            <aside aria-label="Certificate facts" className="lg:pt-1">
              <div className="mb-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">At a glance</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">Certificate details</h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {metadata.map((item) => <InfoItem key={item.label} {...item} />)}
              </div>
            </aside>
          </div>

          {hasDetails ? (
            <>
              <section aria-labelledby="specialization-title" className="mt-20 grid gap-10 border-t border-moss pt-12 lg:grid-cols-[minmax(0,1fr)_minmax(260px,0.8fr)] lg:gap-16">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">01 / Overview</p>
                  <h2 id="specialization-title" className="mt-3 text-3xl font-semibold tracking-tight">About this specialization</h2>
                  <p className="mt-5 max-w-2xl leading-8 text-sage">{certificate.overview}</p>
                </div>
                <div className="rounded-xl border border-moss bg-pine p-6">
                  <h3 className="font-semibold">{certificate.principlesTitle || "Core DevOps ideas"}</h3>
                  <ul className="mt-5 space-y-4">
                    {certificate.principles?.map((principle) => (
                      <li key={principle} className="flex items-start gap-3 text-sm leading-relaxed text-sage">
                        <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-mint" aria-hidden="true" />
                        {principle}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section aria-labelledby="technologies-title" className="mt-20 border-t border-moss pt-12">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">02 / Technology ecosystem</p>
                <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
                  <h2 id="technologies-title" className="text-3xl font-semibold tracking-tight">Related technologies & practices</h2>
                  <span className="rounded-full border border-moss bg-pine px-3 py-1 text-xs text-sage">Industry context</span>
                </div>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-sage">
                  These are relevant technologies and practices in this specialization — not a verified course syllabus or a claim of proficiency based on this certificate.
                </p>
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {certificate.technologyGroups?.map((group, index) => (
                    <div key={group.title} className="rounded-2xl border border-moss bg-pine p-6 transition-colors hover:border-mint">
                      <div className="flex items-center justify-between gap-4">
                        <span className="font-mono text-xs text-mint">{String(index + 1).padStart(2, "0")}</span>
                        <Layers3 size={19} className="text-sage" aria-hidden="true" />
                      </div>
                      <h3 className="mt-4 text-lg font-semibold">{group.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-sage">{group.description}</p>
                      <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${group.title} technologies`}>
                        {group.technologies.map((technology) => (
                          <li key={technology} className="rounded-full border border-moss bg-forest/5 px-3 py-1 text-xs font-medium text-ivory">
                            {technology}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            </>
          ) : (
            <section className="mt-16 border-t border-moss pt-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">More information soon</p>
              <h2 className="mt-3 text-2xl font-semibold">This certificate is being documented</h2>
              <p className="mt-3 max-w-2xl text-sage">Its original image, issuer, duration, and related technologies will be added one certificate at a time.</p>
            </section>
          )}
        </div>
      </div>

      <div className="tone-deep border-t border-moss/50 py-9 md:py-12">
        <nav aria-label="Browse certifications" className="wrap grid gap-3 sm:grid-cols-2">
          <Link to={`/certifications/${previous.slug}`} className="group rounded-xl border border-moss p-5 transition-colors hover:border-mint hover:bg-pine">
            <span className="flex items-center gap-2 text-xs text-sage"><ArrowLeft size={15} aria-hidden="true" /> Previous certificate</span>
            <span className="mt-2 block font-semibold group-hover:text-mint">{previous.name}</span>
          </Link>
          <Link to={`/certifications/${next.slug}`} className="group rounded-xl border border-moss p-5 transition-colors hover:border-mint hover:bg-pine sm:text-right">
            <span className="flex items-center gap-2 text-xs text-sage sm:justify-end">Next certificate <ArrowRight size={15} aria-hidden="true" /></span>
            <span className="mt-2 block font-semibold group-hover:text-mint">{next.name}</span>
          </Link>
        </nav>
      </div>
      {previewOpen && hasDetails && <CertificateLightbox certificate={certificate} onClose={() => setPreviewOpen(false)} />}
    </article>
  );
};

export default CertificateDetails;