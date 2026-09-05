import { technology } from '../../data/content';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function Technology() {
  return (
    <section id="technology" className="w-full bg-paper py-28 sm:py-40">
      <div className="mx-auto max-w-page px-5 sm:px-8">
        <SectionHeading
          eyebrow="Engineered recovery"
          title="The technology behind"
          accent="the material."
          className="max-w-3xl" />
        

        <div className="mt-14 border-t border-ink/15">
          {technology.map((item, i) =>
          <Reveal key={item.title} delay={i * 0.05}>
              <article className="group grid gap-4 border-b border-ink/15 py-10 transition-colors duration-150 ease-out hover:bg-sage-100 lg:grid-cols-12 lg:gap-8 lg:px-2">
                <h3 className="display text-[clamp(1.75rem,3.4vw,2.75rem)] text-ink lg:col-span-6">
                  {item.title}
                </h3>
                <p className="max-w-xl text-base leading-relaxed text-ink/65 lg:col-span-6 lg:self-center">
                  {item.body}
                </p>
              </article>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}