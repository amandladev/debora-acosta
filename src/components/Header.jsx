import { useState, useEffect } from 'react';
import { LINKS } from '../constants';

const navItems = [
  { label: 'Para você', href: LINKS.forBrazilians },
  { label: 'Sobre', href: LINKS.about },
  { label: 'Como funciona', href: LINKS.howItWorks },
  { label: 'Depoimentos', href: LINKS.testimonials },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream-100/90 backdrop-blur-md shadow-soft py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-serif text-xl md:text-2xl text-text-primary hover:text-sage-600 transition-colors"
          aria-label="Início"
        >
          Débora Costa
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-text-secondary hover:text-sage-600 transition-colors font-medium"
            >
              {item.label}
            </a>
          ))}
          <a
            href={LINKS.schedule}
            className="text-sm font-medium bg-sage-500 text-white px-5 py-2.5 rounded-xl hover:bg-sage-600 transition-all"
          >
            Agendar sessão
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-text-primary hover:text-sage-600 transition-colors"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMobileOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {isMobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav
          className="bg-cream-100/95 backdrop-blur-md border-t border-cream-300 px-5 py-4 flex flex-col gap-3"
          aria-label="Menu mobile"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-text-secondary hover:text-sage-600 transition-colors py-2 font-medium"
              onClick={() => setIsMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={LINKS.schedule}
            className="mt-2 text-center font-medium bg-sage-500 text-white px-5 py-3 rounded-xl hover:bg-sage-600 transition-all"
            onClick={() => setIsMobileOpen(false)}
          >
            Agendar sessão
          </a>
        </nav>
      </div>
    </header>
  );
}
