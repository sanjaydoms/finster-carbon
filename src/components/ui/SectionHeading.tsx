import { Eyebrow } from './Eyebrow';
import { Reveal } from './Reveal';
import { SplitHeading } from './SplitHeading';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  accent?: string;
  /** 'major' = brand moment (oversized). 'section' = supporting chapter. */
  level?: 'major' | 'section';
  tone?: 'dark' | 'light';
  className?: string;
  headingClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  accent,
  level = 'section',
  tone = 'dark',
  className = '',
  headingClassName = ''
}: SectionHeadingProps) {
  const size = level === 'major' ? 't-major' : 't-section';
  const color = 'text-paper';
  const accentColor =
  'serif-accent text-amber';

  return (
    <div className={className}>
      <Reveal>
        <Eyebrow tone={tone === 'light' ? 'light' : 'moss'}>{eyebrow}</Eyebrow>
      </Reveal>
      <SplitHeading
        as="h2"
        text={title}
        accent={accent}
        accentClassName={accentColor}
        delay={0.04}
        className={`${size} mt-5 ${color} ${headingClassName}`} />
      
    </div>);

}