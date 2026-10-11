import { toolGroups } from "../data/site";

const Toolbox = () => (
  <section id="tools" className="tone-mid py-20 md:py-28">
    <div className="wrap">
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Tools I work with</h2>
      <p className="mt-3 max-w-xl text-sage">Grouped by the job they do in a system.</p>

      <dl className="tone-light mt-12 rounded-2xl border-t-4 border-t-gold px-6 py-2 shadow-lg md:px-10">
        {toolGroups.map((g) => (
          <div key={g.group} className="grid gap-3 border-b border-moss py-5 last:border-0 md:grid-cols-12 md:gap-8">
            <dt className="font-medium text-sage md:col-span-3">{g.group}</dt>
            <dd className="flex flex-wrap gap-2 md:col-span-9">
              {g.tools.map((t) => (
                <span key={t} className="rounded-full bg-gold/25 px-3 py-1 text-sm font-medium text-ivory">{t}</span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default Toolbox;
