import { capabilities } from "../data/site";

const Capabilities = () => (
  <section id="services" className="tone-mid py-20 md:py-28">
    <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-14">
      <div className="lg:col-span-4">
        <div className="lg:sticky lg:top-28">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">What I do</h2>
          <p className="mt-3 text-sage">
            I own the part of a product that has to keep working after launch: the API, the data, and the automation behind it.
          </p>
        </div>
      </div>

      <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
        {capabilities.map((c) => (
          <li key={c.title} className="tone-light flex flex-col rounded-xl border-t-4 border-t-gold p-6 shadow-lg">
            <h3 className="text-xl font-semibold">{c.title}</h3>
            <p className="mt-2 flex-1 leading-relaxed text-ivory/80">{c.body}</p>
            <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Tools">
              {c.tools.map((t) => (
                <li key={t} className="rounded-md bg-gold/25 px-2 py-0.5 text-xs text-ivory">{t}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Capabilities;
