import { applicationGroups } from '../../data/content';
import { ArrowLink } from '../ui/ArrowLink';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function Applications() {
  const [featured, ...supporting] = applicationGroups;

  return (
    <section id="applications" className="w-full bg-paper py-28 sm:py-40">
      <div className="mx-auto max-w-page px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <SectionHeading
            eyebrow="Where our materials go"
            title="From recovery to"
            accent="real-world applications."
            className="lg:col-span-7" />
          
          <Reveal delay={0.1} className="lg:col-span-5 lg:self-end lg:pb-2">
            <p className="lede text-ink/65">
              Recovered carbon black replaces virgin material across compounding,
              moulding and coating operations — the same specifications, a different
              origin.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 flex items-center gap-4">
          <span className="micro bg-ink px-3 py-1.5 text-paper">
            rCB
          </span>
          <span className="h-px flex-1 bg-ink/15" />
        </div>

        {/* Rubber is the primary market, so it gets the dominant block. */}
        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <article className="flex h-full flex-col bg-moss-800 p-8 sm:p-10">
              <h3 className="t-major text-paper">{featured.title}</h3>
              <ul className="mt-8 grid gap-x-8 sm:grid-cols-2">
                {featured.items.map((item) =>
                <li
                  key={item}
                  className="label border-b border-paper/20 py-3 text-paper/85">
                  
                    {item}
                  </li>
                )}
              </ul>
            </article>
          </Reveal>

          <div className="grid gap-6 lg:col-span-5">
            {supporting.map((group, i) =>
            <Reveal key={group.title} delay={0.06 + i * 0.06} className="h-full">
                <article className="flex h-full flex-col bg-sage-100 p-6 sm:p-8">
                  <h3 className="t-sub text-ink">{group.title}</h3>
                  <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-2">
                    {group.items.map((item) =>
                  <li
                    key={item}
                    className="border border-ink/22 px-3 py-1.5 text-sm text-ink/70">
                    
                        {item}
                      </li>
                  )}
                  </ul>
                </article>
              </Reveal>
            )}
          </div>
        </div>

        <Reveal delay={0.08}>
          <div className="mt-16 flex items-center gap-4">
            <span
              className="micro bg-amber-700 px-3 py-1.5 text-paper">
              
              TPO
            </span>
            <span className="h-px flex-1 bg-ink/15" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-col gap-8 border-y border-ink/15 py-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h3 className="t-section max-w-2xl text-ink">Tyre Pyrolysis Oil</h3>
              <p className="lede mt-4 text-ink/65">
                A recovered material stream created through tyre pyrolysis, supporting the
                wider resource-recovery system.
              </p>
            </div>
            <ArrowLink href="#tyre-pyrolysis-oil" tone="amber" size="lg">
              Explore TPO
            </ArrowLink>
          </div>
        </Reveal>
      </div>
    </section>);

}