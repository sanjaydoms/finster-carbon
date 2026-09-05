import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

type ParallaxImageProps = {
  src: string;
  alt: string;
  /** Percentage of drift across the full scroll pass. Keep subtle. */
  strength?: number;
  className?: string;
  imgClassName?: string;
};

/**
 * Scroll-linked image drift. Continuous and 1:1 with scroll position, so it
 * reads as depth rather than as an animation playing at you.
 */
export function ParallaxImage({
  src,
  alt,
  strength = 8,
  className = '',
  imgClassName = ''
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`]);

  const overscan = strength * 2 + 4;

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={
        reduceMotion ?
        undefined :
        { y, height: `${100 + overscan}%`, top: `-${overscan / 2}%` }
        }
        className={`absolute inset-x-0 h-full w-full object-cover ${imgClassName}`} />
      
    </div>);

}