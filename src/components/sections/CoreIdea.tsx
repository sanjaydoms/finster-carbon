import { images } from '../../data/images';
import { ArrowLink } from '../ui/ArrowLink';
import { Eyebrow } from '../ui/Eyebrow';
import { Reveal } from '../ui/Reveal';
import { SplitHeading } from '../ui/SplitHeading';

const panels = [
{
  title: ['Recovered', 'Carbon Black'],
  code: 'rCB',
  body: 'Recovered carbon material developed for rubber, plastics, paints and coatings.',
  cta: 'Explore rCB',
  href: '#recovered-carbon-black',
  image: images.rcbPellets,
  alt: 'Recovered carbon black pellets spilling from an opened sack onto a concrete floor'
},
{
  title: ['Tyre', 'Pyrolysis Oil'],
  code: 'TPO',
  body: 'A recovered oil produced through the controlled thermal processing of end-of-life tyres.',
  cta: 'Explore TPO',
  href: '#tyre-pyrolysis-oil',
  image: images.tpoOil,
  alt: 'Glass sample jars of dark amber tyre pyrolysis oil in an industrial lab'
}];


export function CoreIdea() {
  return (
    <section id="core-idea" className="w-full bg-sage-100 py-28 sm:py-40">
      <div className="mx-auto max-w-page px-5 sm:px-8">
        <Reveal>
          <Eyebrow tone="moss">Two materials · One recovery system</Eyebrow>
        </Reveal>

        <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <SplitHeading
            text="Carbon for performance."
            accent="Oil for possibility."
            className="t-major text-ink lg:col-span-7" />
          
          <Reveal delay={0.08} className="lg:col-span-5 lg:pb-3 lg:self-end">
            <p className="lede text-ink/65">
              Finster's recovery process transforms end-of-life tyres into valuable
              material streams, with Recovered Carbon Black and Tyre Pyrolysis Oil at the
              heart of our product portfolio.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {panels.map((panel, i) =>
          <Reveal key={panel.code} delay={i * 0.06} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-sm bg-paper">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                  src={panel.image}
                  alt={panel.alt}
                  className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]" />
                
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-6">
                    <h3 className="display text-[clamp(1.6rem,2.8vw,2.25rem)] text-ink">
                      {panel.title[0]}
                      <br />
                      {panel.title[1]}
                    </h3>
                    <span className="micro mt-2 shrink-0 border border-amber/40 px-3 py-1.5 text-amber-700">
                      {panel.code}
                    </span>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-ink/65 sm:text-base">
                    {panel.body}
                  </p>
                  <div className="mt-auto pt-8">
                    <ArrowLink href={panel.href}>{panel.cta}</ArrowLink>
                  </div>
                </div>
              </article>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}