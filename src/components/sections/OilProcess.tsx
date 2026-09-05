import { ArrowDownIcon } from 'lucide-react';
import { images } from '../../data/images';
import { coOutputs, processSteps } from '../../data/content';
import { Eyebrow } from '../ui/Eyebrow';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function OilProcess() {
  return (
    <section id="process" className="w-full bg-ground py-28 sm:py-40">
      <div className="mx-auto max-w-page px-5 sm:px-8">
        <SectionHeading
          eyebrow="Inside the process"
          title="Heat. Transformation."
          accent="Recovery."
          className="max-w-3xl" />
        

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-14">
          <ol className="lg:col-span-7">
            {processSteps.map((step, i) => {
              const isLast = i === processSteps.length - 1;
              return (
                <Reveal as="li" key={step.step} delay={i * 0.04}>
                  <div
                    className={[
                    'relative flex gap-6 rounded-sm px-5 py-5 transition-colors duration-200 ease-out sm:px-7',
                    isLast ? 'bg-moss-800 text-paper' : 'bg-sage-100'].
                    join(' ')}>
                    
                    <div className="flex-1">
                      <h3
                        className={[
                        't-sub',
                        isLast ? 'text-paper' : 'text-paper'].
                        join(' ')}>
                        
                        {step.step}
                      </h3>
                      <p
                        className={[
                        'mt-2 max-w-md text-sm leading-relaxed',
                        isLast ? 'text-paper/80' : 'text-paper/60'].
                        join(' ')}>
                        
                        {step.note}
                      </p>
                    </div>
                  </div>
                  {!isLast &&
                  <div className="flex justify-center py-2" aria-hidden="true">
                      <ArrowDownIcon className="h-4 w-4 text-paper/40" />
                    </div>
                  }
                </Reveal>);

            })}
          </ol>

          <div className="lg:col-span-5">
            <Reveal delay={0.08}>
              <img
                src={images.pipes}
                alt="Insulated condensation pipework, valves and gauges inside the pyrolysis plant"
                className="aspect-[4/5] w-full rounded-sm object-cover" />
              
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-8 border-t border-paper/15 pt-6">
                <Eyebrow>Recovered alongside</Eyebrow>
                <ul className="mt-5 space-y-4">
                  {coOutputs.map((output) =>
                  <li
                    key={output.name}
                    className="border-b border-paper/10 pb-4 last:border-b-0">
                    
                      <h3 className="label text-paper">
                        {output.name}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-paper/60">
                        {output.note}
                      </p>
                    </li>
                  )}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>);

}