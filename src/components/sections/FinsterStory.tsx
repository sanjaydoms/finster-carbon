import { timeline } from '../../data/content';
import { ArrowLink } from '../ui/ArrowLink';
import { Eyebrow } from '../ui/Eyebrow';
import { Reveal } from '../ui/Reveal';
import { SplitHeading } from '../ui/SplitHeading';

export function FinsterStory() {
  return (
    <section id="finster" className="w-full bg-ground py-28 sm:py-40">
      <div className="mx-auto max-w-page px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow tone="moss">Experience behind the process</Eyebrow>
            </Reveal>
            <SplitHeading
              text="Decades of industrial"
              accent="experience."
              delay={0.04}
              className="t-section mt-5 text-paper" />
            
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-paper/70">
                Finster's journey has evolved from tyre recycling to the development of
                recovered materials designed for today's industries.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="mt-8">
                <ArrowLink href="#contact">About Finster</ArrowLink>
              </div>
            </Reveal>
          </div>

          <ol className="lg:col-span-7">
            {timeline.map((entry, i) =>
            <Reveal as="li" key={entry.year} delay={i * 0.05}>
                <div className="group grid gap-2 border-t border-paper/15 py-8 transition-colors duration-150 ease-out hover:bg-sage-100 sm:grid-cols-12 sm:gap-6 sm:px-2">
                  <span className="tnum display text-[clamp(1.5rem,3vw,2.25rem)] text-amber sm:col-span-3">
                    {entry.year}
                  </span>
                  <div className="sm:col-span-9">
                    <h3 className="t-sub text-paper">
                      {entry.title}
                    </h3>
                    <p className="mt-2 max-w-lg text-sm leading-relaxed text-paper/60">
                      {entry.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            )}
          </ol>
        </div>
      </div>
    </section>);

}