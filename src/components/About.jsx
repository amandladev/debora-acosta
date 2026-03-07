import SectionWrapper from './ui/SectionWrapper';
import SectionHeading from './ui/SectionHeading';

const highlights = [
  '7 anos de experiência em atendimento clínico',
  'Abordagem psicanalítica — escuta profunda e sem julgamento',
  'Foco em autoconhecimento e compreensão de si',
  'Atendimento acolhedor e empático',
  'Especialização em atendimento online',
];

export default function About() {
  return (
    <SectionWrapper id="sobre" bgClassName="bg-white/50">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Photo */}
        <div className="flex-shrink-0">
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-card bg-gradient-to-br from-cream-300 via-sage-100 to-warm-300">
            <img
              src="/debora-about.jpg"
              alt="Débora Costa, Psicóloga"
              className="w-full h-full object-cover"
              loading="lazy"
              width={600}
              height={450}
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 text-center lg:text-left">
          <SectionHeading
            eyebrow="Sobre a psicóloga"
            title="Débora Costa"
            center={false}
          />

          <p className="text-text-secondary text-lg leading-relaxed mb-6 -mt-8">
            Sou psicóloga clínica com abordagem psicanalítica. Há 7 anos, acompanho pessoas em processos de autoconhecimento, acolhendo suas dores, dúvidas e transformações.
          </p>
          <p className="text-text-secondary text-lg leading-relaxed mb-8">
            Meu trabalho é oferecer uma escuta genuína — um espaço onde você pode falar sobre o que sente, sem pressa e sem julgamento. Acredito que, ao nos compreendermos mais profundamente, encontramos caminhos mais livres para viver.
          </p>

          <ul className="space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-text-secondary">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-sage-400 flex-shrink-0" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}
