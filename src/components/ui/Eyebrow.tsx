import React from 'react';

type EyebrowProps = {
  children: React.ReactNode;
  tone?: 'dark' | 'light' | 'moss';
  className?: string;
};

const toneClasses: Record<NonNullable<EyebrowProps['tone']>, string> = {
  dark: 'text-stone',
  light: 'text-paper/65',
  moss: 'text-amber-700'
};

/**
 * Specification kicker above a headline: wide-tracked micro caps, set small
 * enough to read as a label on a datasheet rather than a second headline. The
 * only place caps are used in the system.
 */
export function Eyebrow({ children, tone = 'dark', className = '' }: EyebrowProps) {
  return <p className={`micro ${toneClasses[tone]} ${className}`}>{children}</p>;
}