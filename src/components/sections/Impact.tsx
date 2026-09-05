import { impactStats } from '../../data/content';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { StatValue } from '../ui/StatValue';

export function Impact() {
  const [lead, ...rest] = impactStats;

  return (
    <section className="w-full bg-moss-700 py-28 sm:py-40">
      <div className="mx-auto max-w-page px-5 sm:px-8">
        <SectionHeading
          eyebrow="What recovery makes possible"
          title="Millions of tyres."
          accent="Valuable materials."
          level="major"
          tone="light"
          className="max-w-4xl" />
        

        {/* The headline figure carries the section; the rest support it. */}
        <dl className="mt-16 grid gap-x-10 gap-y-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="border-t-2 border-paper pt-6">
              <dt className="t-hero block text-paper">
                <StatValue value={lead.value} />
              </dt>
              <dd className="mt-6 max-w-sm text-base leading-relaxed text-paper/75">
                {lead.label}
              </dd>
            </div>
          </Reveal>

          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-3 lg:col-span-7 lg:self-end">
            {rest.map((stat, i) =>
            <Reveal key={stat.value} delay={0.06 + i * 0.06} className="h-full">
                <div className="flex h-full flex-col border-t border-paper/30 pt-5">
                  <dt className="display text-[clamp(2rem,3.4vw,3rem)] text-paper">
                    <StatValue value={stat.value} />
                  </dt>
                  <dd className="mt-auto pt-5 text-sm leading-relaxed text-paper/70">
                    {stat.label}
                  </dd>
                </div>
              </Reveal>
            )}
          </div>
        </dl>
      </div>
    </section>);

}