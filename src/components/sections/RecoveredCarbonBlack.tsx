import { images } from '../../data/images';
import { rcbApplications } from '../../data/content';
import { ArrowLink } from '../ui/ArrowLink';
import { Eyebrow } from '../ui/Eyebrow';
import { ParallaxImage } from '../ui/ParallaxImage';
import { Reveal } from '../ui/Reveal';
import { SplitHeading } from '../ui/SplitHeading';

export function RecoveredCarbonBlack() {
  return (
    <section id="recovered-carbon-black" className="w-full bg-ground">
      <div className="relative isolate min-h-[92svh] w-full overflow-hidden">
        <ParallaxImage
          src={images.rcbMacro}
          alt="Macro view of fine recovered carbon black powder"
          strength={7}
          className="absolute inset-0" />
        
        <div className="absolute inset-0 bg-carbon/62" aria-hidden="true" />

        <div className="relative mx-auto flex min-h-[92svh] max-w-page flex-col justify-end px-5 py-16 sm:px-8 sm:py-20">
          <Reveal>
            <Eyebrow tone="light">Recovered Carbon Black</Eyebrow>
          </Reveal>
          <SplitHeading
            text="Black with"
            accent="purpose."
            accentClassName="text-sage-300"
            delay={0.04}
            className="t-hero mt-6 max-w-[7ch] text-paper" />
          
          <Reveal delay={0.12}>
            <p className="lede mt-8 text-paper/80">
              Giving recovered carbon a new role in industrial manufacturing.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-page px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow tone="moss">Applications</Eyebrow>
            </Reveal>
            <ul className="mt-6 border-t border-paper/12">
              {rcbApplications.map((application, i) =>
              <Reveal as="li" key={application} delay={i * 0.04}>
                  <div className="flex items-baseline justify-between border-b border-paper/12 py-4">
                    <span className="display text-[clamp(1.4rem,3vw,2.25rem)] text-paper">
                      {application}
                    </span>
                  </div>
                </Reveal>
              )}
            </ul>
          </div>

          <div className="lg:col-span-7 lg:pl-8">
            <Reveal delay={0.06}>
              <p className="max-w-none text-[clamp(1.2rem,2vw,1.75rem)] font-light leading-[1.35] tracking-[-0.015em] text-paper">
                Finster's Recovered Carbon Black is produced from end-of-life tyres and
                developed as a practical material option for applications where
                performance, consistency and resource efficiency matter.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="mt-10 overflow-hidden rounded-sm">
                <img
                  src={images.rubber}
                  alt="Industrial rubber seals, gaskets and conveyor belt sections"
                  className="aspect-[16/9] w-full object-cover" />
                
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-10">
                <ArrowLink href="#rcb-performance" size="lg">
                  Explore Recovered Carbon Black
                </ArrowLink>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>);

}