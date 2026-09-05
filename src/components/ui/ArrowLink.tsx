import React from 'react';
import { ChevronRightIcon } from 'lucide-react';

type ArrowLinkProps = {
  href: string;
  children: React.ReactNode;
  tone?: 'dark' | 'light' | 'amber';
  size?: 'md' | 'lg';
  /** 'text' = inline chevron link. 'pill' = filled capsule call to action. */
  variant?: 'text' | 'pill';
};

const textTone: Record<NonNullable<ArrowLinkProps['tone']>, string> = {
  dark: 'text-sage-300 hover:text-paper focus-visible:outline-paper',
  light: 'text-sage-300 hover:text-paper focus-visible:outline-paper',
  amber: 'text-amber-300 hover:text-paper focus-visible:outline-amber'
};

const pillTone: Record<NonNullable<ArrowLinkProps['tone']>, string> = {
  dark: 'bg-moss-800 text-paper hover:bg-moss-700 focus-visible:outline-paper',
  light: 'bg-paper text-carbon hover:bg-sage-300 focus-visible:outline-paper',
  amber: 'bg-amber text-carbon hover:bg-amber-700 hover:text-paper focus-visible:outline-amber'
};

/**
 * Apple-style inline link: colour plus a chevron that nudges on hover, with no
 * underline or rule competing with the type.
 */
export function ArrowLink({
  href,
  children,
  tone = 'dark',
  size = 'md',
  variant = 'text'
}: ArrowLinkProps) {
  const isPill = variant === 'pill';

  return (
    <a
      href={href}
      className={[
      'group inline-flex items-center font-display font-medium transition-colors duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4',
      isPill ?
      'gap-1.5 px-7 py-3.5' :
      'gap-1',
      size === 'lg' ? 'text-[1.0625rem]' : 'text-[0.9375rem]',
      isPill ? pillTone[tone] : textTone[tone]].
      join(' ')}>
      
      <span className="tracking-[-0.012em]">{children}</span>
      <ChevronRightIcon
        className="h-4 w-4 shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-0.5"
        aria-hidden="true" />
      
    </a>);

}