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
      scrolled ? 'bg-paper/80 backdrop-blur-xl backdrop-saturate-150' : 'bg-transparent'].
      join(' ')}>
      
      <div
        className={[
        'mx-auto flex h-16 max-w-page items-center justify-between px-5 sm:h-20 sm:px-8',
        scrolled ? 'border-b border-ink/10' : ''].
        join(' ')}>
        
        <a
          href="#top"
          className={[
          'font-serif text-[1.5rem] leading-none tracking-[-0.012em] transition-colors duration-200 ease-out',
          scrolled ? 'text-ink' : 'text-paper'].
          join(' ')}>
          
          Finster
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex xl:gap-9">
          {links.map((link) =>
          <a
            key={link.href}
            href={link.href}
            className={[
            'micro whitespace-nowrap transition-colors duration-200 ease-out',
            scrolled ? 'text-ink/80 hover:text-ink' : 'text-paper/80 hover:text-paper'].
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
          'bg-moss text-paper hover:bg-moss-600' :
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
        'h-px origin-left bg-moss transition-opacity duration-200 ease-out',
        scrolled ? 'opacity-100' : 'opacity-0'].
        join(' ')} />
      
    </header>);

}