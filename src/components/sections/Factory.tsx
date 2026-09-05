import { images } from '../../data/images';
import { ArrowLink } from '../ui/ArrowLink';
import { Eyebrow } from '../ui/Eyebrow';
import { ParallaxImage } from '../ui/ParallaxImage';
import { Reveal } from '../ui/Reveal';
import { SplitHeading } from '../ui/SplitHeading';

const facts = [
{ value: 'Continuous', label: 'Reactor operation' },
{ value: 'In-line', label: 'Material handling' },
{ value: 'Monitored', label: 'Emission systems' }];


/**
 * Deliberately not a third full-bleed hero: the facility gets a sticky
 * editorial split so the page changes rhythm before the technical chapters.
 */
export function Factory() {
  return (
    <section className="w-full bg-carbon">
      <div className="mx-auto grid max-w-page gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <Eyebrow tone="light">Where material becomes product</Eyebrow>
            </Reveal>
            <SplitHeading
              text="Built for recovery"
              accent="at scale."
              accentClassName="text-sage-300"
              delay={0.04}
              className="t-major mt-5 text-paper" />
            
            <Reveal delay={0.1}>
              <p className="lede mt-8 text-paper/70">
                Behind every recovered material is a controlled industrial process — from
                tyre preparation and thermal processing to material recovery and product
                handling.
              </p>
            </Reveal>

            <dl className="mt-10 border-t border-paper/15">
              {facts.map((fact, i) =>
              <Reveal key={fact.value} delay={0.12 + i * 0.05}>
                  <div className="flex items-baseline justify-between border-b border-paper/15 py-4">
                    <dt className="label text-paper">
                      {fact.value}
                    </dt>
                    <dd className="text-sm text-paper/55">{fact.label}</dd>
                  </div>
                </Reveal>
              )}
            </dl>

            <Reveal delay={0.28}>
              <div className="mt-10">
                <ArrowLink href="#technology" tone="light" size="lg">
                  Our facility
                </ArrowLink>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.08} className="lg:col-span-7">
          <figure className="relative isolate aspect-[4/5] w-full overflow-hidden sm:aspect-[3/4] lg:aspect-[4/5]">
            <ParallaxImage
              src={images.factory}
              alt="Finster tyre recovery plant with ducting, a conveyor and baled tyres in the yard"
              strength={9}
              className="absolute inset-0" />
            
          </figure>
          <figcaption className="label-sm mt-4 text-paper/45">
            Recovery plant · Tyre yard, reactors and material handling
          </figcaption>
        </Reveal>
      </div>
    </section>);

}