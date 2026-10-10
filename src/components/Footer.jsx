import { Link } from "react-router-dom";
import { navLinks, profile } from "../data/site";

const Footer = () => (
  <footer className="tone-deep py-12">
    <div className="wrap flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
      <div>
        <p className="font-semibold">{profile.name}</p>
        <p className="mt-1 text-sm text-sage">{profile.role}</p>
      </div>

      <nav aria-label="Footer">
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {navLinks.map((l) => (
            <li key={l.id}>
              <Link to={{ pathname: "/", hash: `#${l.id}` }} className="text-sage hover:text-ivory">
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a href={profile.github} target="_blank" rel="noreferrer noopener" className="text-sage hover:text-ivory">GitHub</a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noreferrer noopener" className="text-sage hover:text-ivory">LinkedIn</a>
          </li>
        </ul>
      </nav>
    </div>
    <p className="wrap mt-8 text-sm text-sage">© {new Date().getFullYear()} {profile.name}</p>
  </footer>
);

export default Footer;
