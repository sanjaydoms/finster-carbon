import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const links = [
{ label: 'Home', href: '#top' },
{ label: 'About us', href: '#finster' },
{ label: 'Products', href: '#recovered-carbon-black' },
{ label: 'Sustainability', href: '#sustainability' },
{ label: 'Events', href: '#applications' },
{ label: 'Contact us', href: '#contact' }];


export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 40,
    restDelta: 0.001
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={[
      'fixed inset-x-0 top-0 z-50 transition-colors duration-200 ease-out',
      scrolled ? 'bg-ground/80 backdrop-blur-xl backdrop-saturate-150' : 'bg-transparent'].
      join(' ')}>
      
      <div
        className={[
        'mx-auto flex h-20 max-w-page items-center justify-between px-5 sm:h-24 sm:px-8',
        scrolled ? 'border-b border-paper/10' : ''].
        join(' ')}>
        
        <a href="#top" className="flex shrink-0 items-center">
          {/* Supplied artwork is dark on transparency; the header is dark in
              both its states, so the mark is knocked out to a flat cream. */}
          <img
            src="/finster-carbon-logo.png"
            alt="Finster Carbon"
            width={666}
            height={375}
            className="h-12 w-auto sm:h-16"
            style={{ filter: 'brightness(0) invert(1)' }} />
          
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex xl:gap-9">
          {links.map((link) =>
          <a
            key={link.href}
            href={link.href}
            className={[
            'micro whitespace-nowrap transition-colors duration-200 ease-out',
            scrolled ? 'text-paper/80 hover:text-paper' : 'text-paper/80 hover:text-paper'].
            join(' ')}>
            
              {link.label}
            </a>
          )}
        </nav>

        <a
          href="#contact"
          className={[
          'micro whitespace-nowrap px-5 py-3 transition-colors duration-200 ease-out',
          scrolled ?
          'bg-amber text-carbon hover:bg-amber-700 hover:text-paper' :
          'border border-paper/40 text-paper hover:border-amber hover:bg-amber hover:text-carbon'].
          join(' ')}>
          
          Talk to Finster
        </a>
      </div>

      {/* Reading progress — appears only once the page is in motion. */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className={[
        'h-px origin-left bg-amber transition-opacity duration-200 ease-out',
        scrolled ? 'opacity-100' : 'opacity-0'].
        join(' ')} />
      
    </header>);

}