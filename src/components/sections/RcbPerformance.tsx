import { images } from '../../data/images';
import { rcbAttributes } from '../../data/content';
import { ArrowLink } from '../ui/ArrowLink';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function RcbPerformance() {
  const left = rcbAttributes.slice(0, 3);
  const right = rcbAttributes.slice(3);

  return (
    <section id="rcb-performance" className="w-full bg-sage-100 py-28 sm:py-40">
      <div className="mx-auto max-w-page px-5 sm:px-8">
        <SectionHeading
          eyebrow="Designed for application"
          title="Material performance starts with"
          accent="consistency."
          className="max-w-3xl" />
        

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <ul className="order-2 space-y-8 lg:order-1 lg:col-span-4">
            {left.map((attribute, i) =>
            <Reveal as="li" key={attribute.name} delay={i * 0.05}>
                <div className="border-t border-paper/15 pt-4 lg:text-right">
                  <h3 className="label text-paper">
                    {attribute.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper/60">
                    {attribute.note}
                  </p>
                </div>
              </Reveal>
            )}
          </ul>

          <Reveal delay={0.08} className="order-1 lg:order-2 lg:col-span-4">
            <figure className="relative overflow-hidden rounded-full">
              <img
                src={images.rcbMacro}
                alt="Macro texture of recovered carbon black showing fine particle structure"
                className="aspect-square w-full object-cover" />
              
              <figcaption className="label-sm absolute inset-x-0 bottom-0 bg-carbon/60 px-6 py-4 text-center text-paper backdrop-blur-sm">
                rCB · Macro structure
              </figcaption>
            </figure>
          </Reveal>

          <ul className="order-3 space-y-8 lg:col-span-4">
            {right.map((attribute, i) =>
            <Reveal as="li" key={attribute.name} delay={i * 0.05}>
                <div className="border-t border-paper/15 pt-4">
                  <h3 className="label text-paper">
                    {attribute.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper/60">
                    {attribute.note}
                  </p>
                </div>
              </Reveal>
            )}
          </ul>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-16 flex justify-center">
            <ArrowLink href="#applications" size="lg">
              Explore technical grades
            </ArrowLink>
          </div>
        </Reveal>
      </div>
    </section>);

}