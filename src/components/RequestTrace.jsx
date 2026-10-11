import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { RotateCcw } from "lucide-react";
import { getProject } from "../data/projects";

const nodes = [
  {
    name: "Client",
    tech: "Vue 3, React, Inertia.js",
    summary:
      "The browser talks to one API. I build the interface in Vue or React, and use Inertia where a Laravel monolith fits better than a separate API.",
    used: ["b2b-link", "the-daily"],
  },
  {
    name: "Laravel API",
    tech: "Laravel, DDD, Fortify",
    summary:
      "The front door: authentication, roles, validation and business rules, organised into domain modules so every part of the system has one clear owner.",
    used: ["pdf-summarizer-saas", "b2b-link", "hr-tech"],
  },
  {
    name: "Redis queue",
    tech: "Redis, Laravel queues, Pusher",
    summary:
      "Slow work leaves the request. Background jobs handle syncs and notifications, and results travel back to the browser over WebSockets.",
    used: ["the-daily", "villa-employees"],
  },
  {
    name: "FastAPI service",
    tech: "Python, FastAPI",
    summary:
      "AI and media work lives in its own Python service, so a slow model never blocks the Laravel API and each side scales on its own.",
    used: ["hr-tech", "doblg"],
  },
  {
    name: "PostgreSQL",
    tech: "PostgreSQL, SQL",
    summary:
      "The system of record. I design schemas and indexes around real queries and tune the slow ones. On Doshtu, query response times stayed under 170 ms.",
    used: ["hr-tech"],
  },
  {
    name: "n8n workflows",
    tech: "n8n, webhooks, Telegram",
    summary:
      "Everything that is a process rather than a feature: scheduling follow-up interviews, researching and publishing content, and asking a person to approve before anything goes out.",
    used: ["ai-content-automation", "hr-tech"],
  },
];

const MAIN = 5; // nodes on the request path; the last one runs beside it
const STEP = 650;

const prefersReduced = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const RequestTrace = () => {
  const [lit, setLit] = useState(() => (prefersReduced() ? MAIN : 0));
  const [active, setActive] = useState(() => (prefersReduced() ? 1 : 0));
  const [running, setRunning] = useState(() => !prefersReduced());
  const timers = useRef([]);

  const clear = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  const schedule = () => {
    for (let i = 0; i < MAIN; i++) {
      timers.current.push(
        setTimeout(() => {
          setLit(i + 1);
          setActive(i);
          if (i === MAIN - 1) setRunning(false);
        }, 600 + i * STEP)
      );
    }
  };

  useEffect(() => {
    if (!prefersReduced()) schedule();
    return clear;
  }, []);

  const select = (i) => {
    clear();
    setRunning(false);
    setLit(MAIN);
    setActive(i);
  };

  const replay = () => {
    clear();
    setLit(0);
    setActive(0);
    if (prefersReduced()) {
      setLit(MAIN);
      return;
    }
    setRunning(true);
    schedule();
  };

  const node = nodes[active];

  return (
    <div className="overflow-hidden rounded-xl border border-moss bg-pine">
      <div className="flex items-center justify-between border-b border-moss px-5 py-3">
        <p className="text-sm text-sage">How a request moves through my systems</p>
        <button
          type="button"
          onClick={replay}
          aria-label="Replay the request"
          className="-mr-2 rounded-md p-2 text-sage transition-colors hover:text-mint"
        >
          <RotateCcw size={16} />
        </button>
      </div>

      <ol className="px-2 py-2">
        {nodes.map((n, i) => {
          const branch = i >= MAIN;
          const isLit = branch ? lit >= MAIN : lit > i;
          const lineLit = lit > i + 1;
          const isActive = active === i;
          return (
            <li key={n.name} className={`relative ${branch ? "mt-2 border-t border-dashed border-moss pt-2" : ""}`}>
              {i < MAIN - 1 && (
                <span
                  aria-hidden="true"
                  className={`absolute left-[26px] top-[30px] -bottom-[18px] w-px transition-colors duration-300 ${
                    lineLit ? "bg-mint" : "bg-moss"
                  }`}
                />
              )}
              <button
                type="button"
                aria-pressed={isActive}
                onClick={() => select(i)}
                onMouseEnter={() => !running && select(i)}
                className={`relative grid w-full grid-cols-[28px_1fr] gap-3 rounded-lg px-3 py-3 text-left transition-colors ${
                  isActive ? "bg-moss/35" : "hover:bg-moss/20"
                }`}
              >
                <span className="relative z-10 mt-1.5 flex h-3 w-7 items-start justify-center">
                  <span
                    aria-hidden="true"
                    className={`h-3 w-3 border-2 transition-colors duration-300 ${branch ? "rounded-[3px]" : "rounded-full"} ${
                      isLit ? "border-mint bg-mint" : "border-moss bg-pine"
                    } ${isActive ? "ring-4 ring-mint/25" : ""}`}
                  />
                </span>
                <span>
                  <span className="block text-[15px] font-medium text-ivory">{n.name}</span>
                  <span className="mt-0.5 block font-mono text-xs text-sage">{n.tech}</span>
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      <div className="border-t border-moss px-5 py-5" aria-live="polite">
        <p className="font-semibold text-ivory">{node.name}</p>
        <p className="mt-2 text-[15px] leading-relaxed text-ivory/85">{node.summary}</p>
        <p className="mt-3 text-sm text-sage">
          Used in{" "}
          {node.used.map((slug, i) => {
            const p = getProject(slug);
            if (!p) return null;
            return (
              <span key={slug}>
                {i > 0 && ", "}
                <Link to={`/project/${slug}`} className="text-mint underline decoration-mint/40 underline-offset-4 hover:decoration-mint">
                  {p.title}
                </Link>
              </span>
            );
          })}
        </p>
      </div>

      <p className="border-t border-moss px-5 py-3 text-xs text-sage">Shipped with Docker, GitHub Actions and AWS.</p>
    </div>
  );
};

export default RequestTrace;
