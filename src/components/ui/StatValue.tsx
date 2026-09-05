import { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';

type StatValueProps = {
  value: string;
  className?: string;
};

const NUMERIC = /^([^\d]*)([\d.,]+)(.*)$/;

/**
 * Counts a numeric stat up once when it scrolls into view. Non-numeric values
 * (e.g. "ZERO") render straight through — no fake animation on a word.
 */
export function StatValue({ value, className = '' }: StatValueProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const match = value.match(NUMERIC);
  const target = match ? Number(match[2].replace(/,/g, '')) : null;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView || target === null || reduceMotion) return;
    const controls = animate(0, target, {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setCurrent(latest)
    });
    return () => controls.stop();
  }, [inView, target, reduceMotion]);

  if (!match || target === null) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>);

  }

  const decimals = match[2].includes('.') ? 1 : 0;
  const shown =
  reduceMotion || !inView ?
  reduceMotion ?
  target :
  0 :
  current;

  return (
    <span ref={ref} className={`tnum ${className}`}>
      {match[1]}
      {shown.toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
      })}
      {match[3]}
    </span>);

}