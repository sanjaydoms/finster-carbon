import { images } from '../../data/images';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

type Path = {
  label: string;
  accent: string;
  output: string;
  steps: string[];
};

const paths: Path[] = [
{
  label: 'Carbon path',
  accent: '#2f4a34',
  output: 'Recovered Carbon Black',
  steps: ['End-of-life tyre', 'Pyrolysis', 'Recovered Carbon Black', 'Rubber / Plastics / Coatings']
},
{
  label: 'Oil path',
  accent: '#8a6a3b',
  output: 'Tyre Pyrolysis Oil',
  steps: ['End-of-life tyre', 'Pyrolysis', 'Tyre Pyrolysis Oil', 'Further industrial use']
}];


function PathTrack({ path, delay }: {path: Path;delay: number;}) {
  return (
    <div className="border-t border-ink/15 pt-6">
      <div className="flex items-center gap-3">
        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: path.accent }} />
        <span
          className="label-sm"
          style={{ color: path.accent }}>
          
          {path.label}
        </span>
      </div>

      <ol className="mt-5 flex flex-wrap items-stretch gap-x-3 gap-y-3">
        {path.steps.map((step, i) =>
        <Reveal as="li" key={step} delay={delay + i * 0.05} className="flex items-center gap-3">
            <div className="min-w-[9.5rem] flex-1 bg-paper px-4 py-3">
              <span className="block font-display text-sm font-semibold leading-tight text-ink">
                {step}
              </span>
            </div>
            {i < path.steps.length - 1 &&
          <span
            aria-hidden="true"
            className="hidden h-px w-5 shrink-0 sm:block"
            style={{ backgroundColor: path.accent }} />

          }
          </Reveal>
        )}
      </ol>
    </div>);

}

export function CircularSystem() {
  return (
    <section className="w-full bg-sage-100 py-28 sm:py-40">
      <div className="mx-auto max-w-page px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Single feedstock anchors the left; the two tracks diverge from it. */}
          <Reveal className="lg:col-span-4">
            <figure className="lg:sticky lg:top-28">
              <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-full bg-paper">
                <img
                  src={images.tyre}
                  alt="A single worn end-of-life tyre lying on wet cracked concrete"
                  className="h-full w-full object-cover" />
                
              </div>
              <figcaption className="mt-6 max-w-sm">
                <span className="label text-ink">
                  One end-of-life tyre
                </span>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  A single feedstock enters the reactor and leaves as two distinct
                  industrial material streams.
                </p>
              </figcaption>
            </figure>
          </Reveal>

          <div className="lg:col-span-8">
            <SectionHeading
              eyebrow="From one feedstock"
              title="Two materials."
              accent="Multiple possibilities."
              className="max-w-2xl" />
            
            <div className="mt-12 space-y-12">
              {paths.map((path, i) =>
              <PathTrack key={path.label} path={path} delay={0.05 + i * 0.06} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}