import SectionWrapper from './ui/SectionWrapper';
import SectionHeading from './ui/SectionHeading';

const struggles = [
  {
    emoji: '🌍',
    title: 'Sentir-se perdido em outra cultura',
    description:
      'A distância do que é familiar pode gerar uma sensação contínua de não pertencimento. Você não precisa normalizar esse desconforto.',
  },
  {
    emoji: '💔',
    title: 'Solidão e saudade',
    description:
      'Mesmo cercado de pessoas, a sensação de solidão pode ser profunda — especialmente quando as conexões estão em outra língua.',
  },
  {
    emoji: '🔄',
    title: 'Dificuldades nos relacionamentos',
    description:
      'Relações afetivas, familiares e sociais ganham novas camadas de complexidade quando vivemos longe. É possível compreender esses padrões.',
  },
  {
    emoji: '🌫️',
    title: 'Ansiedade e confusão emocional',
    description:
      'Quando tudo parece incerto, o corpo e a mente respondem. A terapia ajuda a nomear e acolher o que você está sentindo.',
  },
];

export default function BraziliansAbroad() {
  return (
    <SectionWrapper id="brasileiros" bgClassName="bg-cream-50">
      <SectionHeading
        eyebrow="Para brasileiros no mundo todo"
        title="Você não precisa passar por isso sozinho."
        subtitle="Morar fora muda tudo — a língua, a rotina, os vínculos. A terapia em português é um espaço para reconectar com você mesmo, do jeito que só a sua língua permite."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {struggles.map((item) => (
          <div
            key={item.title}
            className="group bg-white/60 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 border border-cream-300/50"
          >
            <span className="text-3xl inline-block mb-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
              {item.emoji}
            </span>
            <h3 className="font-serif text-xl text-text-primary mb-2">
              {item.title}
            </h3>
            <p className="text-text-secondary leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
