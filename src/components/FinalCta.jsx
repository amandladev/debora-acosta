import SectionWrapper from './ui/SectionWrapper';
import Button from './ui/Button';
import { LINKS, CTA_LABELS } from '../constants';

export default function FinalCta() {
  return (
    <SectionWrapper bgClassName="bg-gradient-to-b from-cream-50 via-sage-100/30 to-cream-200">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-text-primary leading-tight text-balance">
          Você não precisa enfrentar{' '}
          <span className="text-sage-600 italic">tudo sozinho.</span>
        </h2>

        <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
          O primeiro passo pode ser simples: permitir-se ser ouvido. Estou aqui para caminhar com você nesse processo.
        </p>

        <div className="mt-10">
          <Button href={LINKS.schedule} size="lg">
            {CTA_LABELS.final}
          </Button>
        </div>

        <p className="mt-6 text-sm text-text-light">
          A primeira sessão é um espaço sem compromisso para nos conhecermos.
        </p>
      </div>
    </SectionWrapper>
  );
}
