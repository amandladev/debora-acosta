import SectionWrapper from './ui/SectionWrapper';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';
import { LINKS, CTA_LABELS } from '../constants';

const details = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" />
      </svg>
    ),
    title: 'Sessões 100% online',
    description: 'Atendimento por videochamada, de qualquer lugar do mundo.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: 'Espaço confidencial',
    description: 'Sigilo absoluto. Sua privacidade é prioridade.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: 'Flexível para quem mora fora',
    description: 'Horários adaptados a diferentes fusos horários.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Duração da sessão',
    description: 'Duração média de 50 minutos, com frequência semanal.',
  },
];

export default function SessionDetails() {
  return (
    <SectionWrapper id="sessoes" bgClassName="bg-white/50">
      <SectionHeading
        eyebrow="Como funciona na prática"
        title="Simples, seguro e feito para você"
        subtitle="Sem deslocamento, sem sala de espera. A terapia acontece onde você estiver, no horário que funciona para a sua rotina."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {details.map((item) => (
          <div
            key={item.title}
            className="bg-cream-50 rounded-3xl p-6 text-center hover:bg-sage-100/50 transition-colors duration-300 border border-cream-300/40"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-sage-100 text-sage-600 mb-4">
              {item.icon}
            </div>
            <h3 className="font-serif text-lg text-text-primary mb-2">
              {item.title}
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button href={LINKS.schedule} size="lg">
          {CTA_LABELS.schedule}
        </Button>
      </div>
    </SectionWrapper>
  );
}
