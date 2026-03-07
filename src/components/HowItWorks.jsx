import SectionWrapper from './ui/SectionWrapper';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';
import { LINKS, CTA_LABELS } from '../constants';

const steps = [
  {
    number: '01',
    title: 'Agende sua sessão',
    description:
      'Escolha o melhor horário para você. O agendamento é simples e rápido — sem burocracia.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Fale abertamente',
    description:
      'Em um espaço seguro e confidencial, você pode expressar o que sente — sem pressa e sem julgamento.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Inicie seu processo',
    description:
      'Comece uma jornada de autoconhecimento e transformação pessoal, com acompanhamento contínuo e sensível.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <SectionWrapper id="como-funciona" bgClassName="bg-cream-50">
      <SectionHeading
        eyebrow="Como funciona"
        title="Três passos para começar sua terapia"
        subtitle="O caminho até o autocuidado pode começar hoje, de forma simples e acolhedora."
      />

      <div className="grid gap-8 md:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.number}
            className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-soft text-center group hover:shadow-card transition-all duration-300 hover:-translate-y-1"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-sage-100 text-sage-600 mb-6 group-hover:bg-sage-200 transition-colors">
              {step.icon}
            </div>
            <span className="block text-sage-400 text-sm font-bold tracking-wider mb-2">
              {step.number}
            </span>
            <h3 className="font-serif text-xl text-text-primary mb-3">
              {step.title}
            </h3>
            <p className="text-text-secondary leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button href={LINKS.schedule} size="lg">
          {CTA_LABELS.primary}
        </Button>
      </div>
    </SectionWrapper>
  );
}
