import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { images } from '../../data/images';
import { ArrowLink } from '../ui/ArrowLink';
import { Reveal } from '../ui/Reveal';
import { SplitHeading } from '../ui/SplitHeading';

type Slide = {
  code: string;
  label: string;
  src: string;
  alt: string;
};

const slides: Slide[] = [
{
  code: 'Feedstock',
  label: 'End-of-life tyres',
  src: images.heroTyres,
  alt: 'Stacked walls of end-of-life passenger car tyres in an industrial recovery yard'
},
{
  code: 'rCB',
  label: 'Recovered carbon black',
  src: images.heroGranules,
  alt: 'A heap of recovered carbon black granules on the concrete floor of a working plant'
},
{
  code: 'TPO',
  label: 'Tyre pyrolysis oil',
  src: images.heroOil,
  alt: 'Dark amber tyre pyrolysis oil poured into a plain glass beaker on a steel bench'
}];


const HOLD_MS = 5200;

export function Hero() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const id = window.setTimeout(() => setActive((i) => (i + 1) % slides.length), HOLD_MS);
    return () => window.clearTimeout(id);
  }, [active]);

  return (
    <section id="top" className="relative isolate min-h-[100svh] w-full overflow-hidden bg-carbon">
      {/* Ambient material rotation: feedstock in, two products out. */}
      <div className="absolute inset-0" aria-hidden="true">
        <AnimatePresence initial={false}>
          <motion.img
            key={slides[active].src}
            src={slides[active].src}
            alt=""
            initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: reduceMotion ? 0 : 0.6, ease: [0.23, 1, 0.32, 1] },
              scale: { duration: reduceMotion ? 0 : 7.5, ease: 'linear' }
            }}
            className="absolute inset-0 h-full w-full object-cover" />
          
        </AnimatePresence>
      </div>
      <div className="absolute inset-0 bg-carbon/65" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-page flex-col items-center justify-center px-5 pb-40 pt-28 text-center sm:px-8">
        <Reveal>
          <p className="micro text-sage-300">Circular materials · Advanced tyre recovery</p>
        </Reveal>

        <SplitHeading
          as="h1"
          text="From waste tyres to materials"
          accent="that matter."
          accentClassName="serif-accent text-amber"
          delay={0.06}
          className="t-hero mt-7 max-w-4xl text-paper" />
        

        <Reveal delay={0.12}>
          <p className="lede mx-auto mt-6 text-paper/90">
            Recovering valuable carbon and oil from end-of-life tyres and transforming them
            into materials for industry.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <ArrowLink href="#core-idea" tone="light" size="lg">
              Explore our materials
            </ArrowLink>
            <ArrowLink href="#process" tone="light" size="lg">
              See the recovery process
            </ArrowLink>
          </div>
        </Reveal>
      </div>

      {/* Slide index — names the material on screen and lets you steer it. */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="mx-auto max-w-page px-5 pb-8 sm:px-8 sm:pb-10">
          <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-3">
            {slides.map((slide, i) => {
              const isActive = i === active;
              return (
                <li key={slide.code}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-current={isActive ? 'true' : undefined}
                    className="group block w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper">
                    
                    <span className="relative block h-px w-full overflow-hidden bg-paper/30">
                      {isActive &&
                      <motion.span
                        key={`${slide.code}-${active}`}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                          duration: reduceMotion ? 0 : HOLD_MS / 1000,
                          ease: 'linear'
                        }}
                        style={{ transformOrigin: 'left' }}
                        className="absolute inset-0 block bg-amber" />

                      }
                    </span>
                    <span className="mt-3 flex items-baseline gap-3">
                      <span
                        className={[
                        'micro transition-colors duration-200 ease-out',
                        isActive ? 'text-amber' : 'text-paper/55 group-hover:text-paper/80'].
                        join(' ')}>
                        
                        {slide.code}
                      </span>
                      <span
                        className={[
                        'label-sm transition-colors duration-200 ease-out',
                        isActive ? 'text-paper' : 'text-paper/60 group-hover:text-paper/85'].
                        join(' ')}>
                        
                        {slide.label}
                      </span>
                    </span>
                  </button>
                </li>);

            })}
          </ul>
        </div>
      </div>

      <span className="sr-only" aria-live="polite">
        {slides[active].label}
      </span>
      {/* Keep the material images described for assistive tech. */}
      <div className="sr-only">
        {slides.map((slide) =>
        <p key={slide.code}>{slide.alt}</p>
        )}
      </div>
    </section>);

}