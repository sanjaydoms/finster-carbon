
const columns = [
{
  title: 'Materials',
  links: [
  { label: 'Recovered Carbon Black', href: '#recovered-carbon-black' },
  { label: 'Tyre Pyrolysis Oil', href: '#tyre-pyrolysis-oil' },
  { label: 'Applications', href: '#applications' }]

},
{
  title: 'Operations',
  links: [
  { label: 'The process', href: '#process' },
  { label: 'Technology', href: '#technology' },
  { label: 'Our facility', href: '#technology' }]

},
{
  title: 'Company',
  links: [
  { label: 'About Finster', href: '#finster' },
  { label: 'Sustainability', href: '#finster' },
  { label: 'Contact', href: '#contact' }]

}];


export function SiteFooter() {
  return (
    <footer className="w-full bg-sage-100 py-20 sm:py-24">
      <div className="mx-auto max-w-page px-5 sm:px-8">
        <div className="grid gap-10 border-b border-ink/15 pb-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <img
              src="/finster-carbon-logo.png"
              alt="Finster Carbon"
              width={666}
              height={375}
              className="h-20 w-auto sm:h-24" />
            
            <p className="mt-4 max-w-sm text-[0.9375rem] leading-relaxed tracking-[-0.01em] text-ink/60">
              Advanced tyre recovery and recovered materials for industry.
            </p>
          </div>
          {columns.map((column) =>
          <nav
            key={column.title}
            aria-label={column.title}
            className="lg:col-span-2 lg:col-start-auto">
            
              <h2 className="micro text-stone">
                {column.title}
              </h2>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) =>
              <li key={link.label}>
                    <a
                  href={link.href}
                  className="text-[0.9375rem] tracking-[-0.01em] text-ink/70 transition-colors duration-200 ease-out hover:text-moss">
                  
                      {link.label}
                    </a>
                  </li>
              )}
              </ul>
            </nav>
          )}
        </div>

        <div className="flex flex-col gap-3 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink/50">
            © {new Date().getFullYear()} Finster Carbon. All rights reserved.
          </p>
          <p className="micro text-stone">
            Circular materials · Advanced tyre recovery
          </p>
        </div>
      </div>
    </footer>);

}