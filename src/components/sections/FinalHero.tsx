import { images } from '../../data/images';
import { ArrowLink } from '../ui/ArrowLink';
import { Eyebrow } from '../ui/Eyebrow';
import { ParallaxImage } from '../ui/ParallaxImage';
import { Reveal } from '../ui/Reveal';
import { SplitHeading } from '../ui/SplitHeading';

export function FinalHero() {
  return (
    <section
      id="contact"
      className="relative isolate flex min-h-[92svh] w-full items-center overflow-hidden">
      
      <ParallaxImage
        src={images.finalHero}
        alt="Recovered carbon black powder beside amber tyre pyrolysis oil on a steel surface"
        strength={8}
        className="absolute inset-0" />
      
      <div className="absolute inset-0 bg-carbon/62" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-page px-5 py-24 text-center sm:px-8">
        <Reveal>
          <Eyebrow tone="light">Recovered carbon · Recovered oil</Eyebrow>
        </Reveal>

        <SplitHeading
          text="Materials with a"
          accent="second life."
          accentClassName="serif-accent text-amber"
          delay={0.06}
          className="t-hero mx-auto mt-7 max-w-4xl text-paper" />
        

        <Reveal delay={0.14}>
          <p className="lede mx-auto mt-8 text-paper/80">
            Explore what Finster can create from your material requirements.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8">
            <ArrowLink href="#top" tone="light" size="lg" variant="pill">
              Talk to Finster
            </ArrowLink>
            <ArrowLink href="#applications" tone="light">
              See applications
            </ArrowLink>
          </div>
        </Reveal>
      </div>
    </section>);

}