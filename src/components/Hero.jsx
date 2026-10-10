import { Link } from "react-router-dom";
import profileImg from "../assets/shaker_avatar.png";
import { profile } from "../data/site";
import RequestTrace from "./RequestTrace";

const accent = (text) =>
  text.split(/(AI service|automation)/).map((part, i) =>
    part === "AI service" ? (
      <span key={i} className="text-mint">{part}</span>
    ) : part === "automation" ? (
      <span key={i} className="text-gold">{part}</span>
    ) : (
      part
    )
  );

const Hero = () => (
  <section id="home" className="wrap grid items-start gap-12 py-14 md:py-20 lg:grid-cols-12 lg:gap-14 lg:py-24">
    <div className="lg:col-span-6">
      <div className="flex items-center gap-4">
        <img
          src={profileImg}
          alt={`Portrait of ${profile.name}`}
          width="56"
          height="56"
          className="h-14 w-14 rounded-full border border-moss object-cover"
        />
        <div>
          <p className="font-medium text-ivory">{profile.name}</p>
          <p className="text-sm text-sage">{profile.role}</p>
        </div>
      </div>

      <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-moss px-3 py-1 text-sm text-sage">
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-gold" />
        Open to full-time roles
      </p>

      <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
        {accent(profile.headline)}
      </h1>

      <div className="mt-6 max-w-xl space-y-4 text-lg leading-relaxed text-ivory/80">
        {profile.bio.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      <div className="mt-9 flex flex-wrap gap-3">
        <Link
          to={{ pathname: "/", hash: "#work" }}
          className="rounded-md bg-mint px-6 py-3 font-medium text-forest transition-colors hover:bg-ivory"
        >
          See my projects
        </Link>
        <Link
          to={{ pathname: "/", hash: "#contact" }}
          className="rounded-md border border-moss px-6 py-3 font-medium text-ivory transition-colors hover:border-mint hover:text-mint"
        >
          Get in touch
        </Link>
      </div>
    </div>

    <div className="lg:col-span-6">
      <div className="tone-light rounded-xl shadow-2xl shadow-black/30 ring-4 ring-gold/70">
        <RequestTrace />
      </div>
    </div>
  </section>
);

export default Hero;
