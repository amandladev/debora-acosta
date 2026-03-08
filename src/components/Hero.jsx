import Button from './ui/Button';
import { LINKS, CTA_LABELS } from '../constants';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-cream-200 via-cream-100 to-cream-50">
      {/* Decorative shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-sage-100/50 blur-3xl" />
        <div className="absolute bottom-10 -left-32 w-80 h-80 rounded-full bg-warm-300/30 blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-sage-200/30 blur-2xl animate-float" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-28 pb-16 md:pt-32 md:pb-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Copy */}
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block bg-sage-100 text-sage-600 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              🌿 Para brasileiros em qualquer parte do mundo
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] leading-[1.15] text-text-primary text-balance">
              Quando tudo pesa, ter alguém para ouvir{' '}
              <span className="text-sage-600 italic">faz diferença.</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl mx-auto lg:mx-0">
              Abordagem psicanalítica, escuta sem julgamento e o conforto de falar na sua língua — com uma psicóloga brasileira.
            </p>

            <p className="mt-4 text-sm text-text-light font-medium tracking-wide">
              ✦ 7 anos de experiência em atendimento clínico
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 lg:justify-start justify-center">
              <Button href={LINKS.schedule} size="lg">
                {CTA_LABELS.primary}
              </Button>
              <Button href={LINKS.howItWorks} variant="secondary" size="lg">
                {CTA_LABELS.secondary}
              </Button>
            </div>
          </div>

          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-card bg-gradient-to-br from-cream-300 via-sage-100 to-warm-300">
              <img
                src="/photos_2/optimized/image2.jpg"
                alt="Debora Costa, Psicóloga"
                className="w-full h-full object-cover"
                loading="eager"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#brasileiros"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-text-light animate-bounce hover:text-sage-500 transition-colors cursor-pointer"
        aria-label="Rolar para a próxima seção"
      >
        <span className="text-xs tracking-wider uppercase">Saiba mais</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7" />
        </svg>
      </a>
    </section>
  );
}
