import { sustainabilityFocus } from '../../data/content';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function Sustainability() {
  return (
    <section id="sustainability" className="w-full bg-sage-100 py-28 sm:py-40">
      <div className="mx-auto max-w-page px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <SectionHeading
            eyebrow="Beyond recycling"
            title="Keeping carbon & resources"
            accent="in motion."
            className="lg:col-span-7" />
          
          <Reveal delay={0.1} className="lg:col-span-5 lg:self-end lg:pb-2">
            <p className="lede text-ink/65">
              Our approach goes beyond diverting tyres from disposal. It is about
              recovering materials, using resources more efficiently and returning
              valuable outputs to productive applications.
            </p>
          </Reveal>
        </div>

        {/* Hairline rows rather than a third card grid — the page already has two. */}
        <ol className="mt-16 border-t border-ink/15">
          {sustainabilityFocus.map((focus, i) =>
          <Reveal as="li" key={focus.title} delay={i * 0.06}>
              <div className="group grid items-baseline gap-4 border-b border-ink/15 py-8 transition-colors duration-150 ease-out hover:bg-sage-200 lg:grid-cols-12 lg:gap-10 lg:px-2">
                <h3 className="t-sub text-ink lg:col-span-5">{focus.title}</h3>
                <p className="text-base leading-relaxed text-ink/65 lg:col-span-7">
                  {focus.body}
                </p>
              </div>
            </Reveal>
          )}
        </ol>
      </div>
    </section>);

}