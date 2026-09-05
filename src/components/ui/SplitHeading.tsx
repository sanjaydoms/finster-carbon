import { motion, useReducedMotion } from 'framer-motion';
import { EASE_OUT } from './Reveal';

type SplitHeadingProps = {
  /** Leading portion of the headline, rendered in the inherited colour. */
  text: string;
  /** Trailing portion, rendered in the accent colour class. */
  accent?: string;
  accentClassName?: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
  delay?: number;
};

/**
 * Headline that reveals word by word from behind a mask — the words rise into
 * place rather than fading in as one block, so large type reads as typeset
 * rather than dropped in. Each word animates for 260ms; the stagger is capped
 * so the last word never feels late.
 */
export function SplitHeading({
  text,
  accent,
  accentClassName = 'serif-accent text-amber',
  className = '',
  as = 'h2',
  delay = 0
}: SplitHeadingProps) {
  const reduceMotion = useReducedMotion();
  const Tag = as;

  const words = text.split(' ').filter(Boolean);
  const accentWords = accent ? accent.split(' ').filter(Boolean) : [];
  const total = words.length + accentWords.length;
  const step = total > 0 ? Math.min(0.05, 0.42 / total) : 0;

  if (reduceMotion) {
    return (
      <Tag className={className}>
        {text} {accent ? <span className={accentClassName}>{accent}</span> : null}
      </Tag>);

  }

  const MotionTag = motion[as];

  const renderWord = (word: string, index: number, accented: boolean) =>
  <span key={`${word}-${index}-${accented ? 'a' : 'b'}`} className="word-mask">
      <motion.span
      className={accented ? `inline-block ${accentClassName}` : 'inline-block'}
      variants={{
        hidden: { y: '108%' },
        shown: {
          y: '0%',
          transition: { duration: 0.26, delay: delay + index * step, ease: EASE_OUT }
        }
      }}>
      
        {word}
      </motion.span>
      {'\u00A0'}
    </span>;


  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.3 }}>
      
      {words.map((w, i) => renderWord(w, i, false))}
      {accentWords.map((w, i) => renderWord(w, words.length + i, true))}
    </MotionTag>);

}