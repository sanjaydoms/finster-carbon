import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'li' | 'span';
  /** Vertical travel in px. Keep small — motion should feel like settling, not sliding. */
  distance?: number;
};

export const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export function Reveal({
  children,
  delay = 0,
  className,
  as = 'div',
  distance = 14
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const Tag = as;

  if (reduceMotion) {
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.3, delay, ease: EASE_OUT }}>
      
      {children}
    </MotionTag>);

}