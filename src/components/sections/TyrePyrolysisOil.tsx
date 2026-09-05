import { images } from '../../data/images';
import { ArrowLink } from '../ui/ArrowLink';
import { Eyebrow } from '../ui/Eyebrow';
import { Reveal } from '../ui/Reveal';
import { SplitHeading } from '../ui/SplitHeading';

export function TyrePyrolysisOil() {
  return (
    <section id="tyre-pyrolysis-oil" className="w-full bg-moss-700">
      <div className="mx-auto grid max-w-page items-stretch gap-0 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <Eyebrow tone="light">Tyre Pyrolysis Oil</Eyebrow>
          </Reveal>
          <SplitHeading
            text="Turning tyres into another"
            accent="resource."
            accentClassName="serif-accent text-amber"
            delay={0.04}
            className="t-major mt-5 max-w-[11ch] text-paper" />
          
          <Reveal delay={0.12}>
            <p className="lede mt-8 text-paper/80">
              Through controlled thermal processing, end-of-life tyres are transformed
              into valuable oil and other recoverable material streams.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-10">
              <ArrowLink href="#process" tone="light" size="lg">
                Explore TPO
              </ArrowLink>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-rows-2 gap-px bg-paper/15">
          <img
            src={images.tpoOil}
            alt="Glass sample jars of dark amber tyre pyrolysis oil on a workbench"
            className="h-full min-h-[16rem] w-full object-cover" />
          
          <img
            src={images.tanks}
            alt="Steel oil storage tanks and pipework at the recovery plant"
            className="h-full min-h-[16rem] w-full object-cover" />
          
        </div>
      </div>
    </section>);

}