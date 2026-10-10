import { useState } from "react";
import { profile } from "../data/site";

const field =
  "mt-2 w-full rounded-md border border-moss bg-forest px-4 py-3 text-ivory placeholder:text-sage/60 focus:border-mint focus:outline-none";

const Contact = () => {
  const [status, setStatus] = useState("");

  // Opens the visitor's email app with the message filled in. A hosted form
  // service can replace this later without changing the layout.
  const onSubmit = (e) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const subject = `Portfolio message from ${d.get("name")}`;
    const body = `${d.get("message")}\n\nFrom: ${d.get("name")} (${d.get("email")})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("Your email app should open with the message ready to send.");
  };

  const link = "underline decoration-mint/40 underline-offset-4 hover:decoration-mint text-mint";

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Have a backend to build or fix?</h2>
          <p className="mt-4 text-lg leading-relaxed text-ivory/80">
            Tell me what you're working on and where it hurts. A few lines about the problem is enough to start a conversation.
          </p>

          <ul className="mt-8 space-y-3">
            <li>
              <a className={link} href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <a className={link} href={profile.whatsapp} target="_blank" rel="noreferrer noopener">Message on WhatsApp</a>
            </li>
            <li>
              <a className={link} href={profile.github} target="_blank" rel="noreferrer noopener">GitHub</a>
            </li>
            <li>
              <a className={link} href={profile.linkedin} target="_blank" rel="noreferrer noopener">LinkedIn</a>
            </li>
          </ul>
        </div>

        <form onSubmit={onSubmit} className="tone-light rounded-xl border-t-4 border-t-gold p-6 shadow-2xl md:p-8 lg:col-span-7">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-sm text-sage">Your name</label>
              <input id="name" name="name" type="text" required autoComplete="name" className={field} />
            </div>
            <div>
              <label htmlFor="email" className="text-sm text-sage">Your email</label>
              <input id="email" name="email" type="email" required autoComplete="email" className={field} />
            </div>
          </div>
          <div className="mt-5">
            <label htmlFor="message" className="text-sm text-sage">What are you building?</label>
            <textarea id="message" name="message" rows={6} required className={`${field} resize-y`} />
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button
              type="submit"
              className="rounded-md bg-mint px-6 py-3 font-medium text-forest transition-colors hover:bg-ivory"
            >
              Send message
            </button>
            <p role="status" className="text-sm text-sage">{status}</p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
