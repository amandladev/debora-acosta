import SectionWrapper from './ui/SectionWrapper';
import SectionHeading from './ui/SectionHeading';
import Card from './ui/Card';

const situations = [
  {
    emoji: '🧠',
    title: 'Ansiedade e sobrecarga emocional',
    description:
      'Quando os pensamentos não param e o corpo sente o peso da mente. A terapia ajuda a entender e acolher essa experiência.',
  },
  {
    emoji: '💑',
    title: 'Dificuldades nos relacionamentos',
    description:
      'Padrões que se repetem, conflitos que não se resolvem. Compreender as relações é um caminho para transformá-las.',
  },
  {
    emoji: '🔍',
    title: 'Autoconhecimento e crescimento pessoal',
    description:
      'Às vezes, a terapia não surge de uma dor — mas de um desejo de se conhecer melhor e viver com mais liberdade.',
  },
  {
    emoji: '🦋',
    title: 'Transições e mudanças de vida',
    description:
      'Mudanças de país, carreira, relacionamentos ou fases da vida. A terapia oferece apoio para navegar o desconhecido.',
  },
];

export default function WhoCanHelp() {
  return (
    <SectionWrapper id="para-quem" bgClassName="bg-white/50">
      <SectionHeading
        eyebrow="Para quem é"
        title="A terapia pode ajudar em muitos momentos"
        subtitle="Não existe um motivo certo ou errado para buscar terapia. Se algo em você pede atenção, esse já é um bom motivo."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {situations.map((item) => (
          <Card key={item.title}>
            <span className="text-3xl block mb-4" aria-hidden="true">
              {item.emoji}
            </span>
            <h3 className="font-serif text-xl text-text-primary mb-2">
              {item.title}
            </h3>
            <p className="text-text-secondary leading-relaxed">
              {item.description}
            </p>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
