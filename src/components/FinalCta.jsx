import SectionWrapper from './ui/SectionWrapper';
import Button from './ui/Button';
import { LINKS, CTA_LABELS } from '../constants';

export default function FinalCta() {
  return (
    <SectionWrapper bgClassName="bg-gradient-to-b from-cream-50 via-sage-100/30 to-cream-200">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-text-primary leading-tight text-balance">
          Dar o primeiro passo{' '}
          <span className="text-sage-600 italic">é mais simples do que parece.</span>
        </h2>

        <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
          Uma mensagem no WhatsApp já é o suficiente. Vamos conversar, sem compromisso, e ver se faz sentido para você.
        </p>

        <div className="mt-10">
          <Button href={LINKS.schedule} size="lg">
            {CTA_LABELS.final}
          </Button>
        </div>

        <p className="mt-6 text-sm text-text-light">
          Respondo pessoalmente. Sem formulários, sem espera.
        </p>
      </div>
    </SectionWrapper>
  );
}
