import SectionWrapper from './ui/SectionWrapper';
import SectionHeading from './ui/SectionHeading';

const topics = [
  { emoji: '😰', label: 'Ansiedade' },
  { emoji: '🌧️', label: 'Depressão' },
  { emoji: '🕊️', label: 'Luto' },
  { emoji: '💔', label: 'Conflitos nos relacionamentos' },
  { emoji: '🤱', label: 'Maternidade' },
  { emoji: '🔄', label: 'Transições e crises' },
  { emoji: '🌍', label: 'Imigração' },
  { emoji: '⏳', label: 'Envelhecimento' },
  { emoji: '💜', label: 'Sexualidade' },
  { emoji: '🪞', label: 'Autoconhecimento' },
];

export default function BraziliansAbroad() {
  return (
    <SectionWrapper id="brasileiros" bgClassName="bg-cream-50">
      <SectionHeading
        eyebrow="Talvez você esteja vivendo um momento difícil"
        title="Algumas experiências pedem um espaço para serem escutadas."
        subtitle="Ansiedade constante, tristeza que parece não passar, perdas, conflitos nos relacionamentos ou períodos de mudança que trazem incerteza e sofrimento. Muitas vezes tentamos lidar com tudo sozinhos — a psicoterapia pode ser esse lugar."
      />

      <div className="max-w-3xl mx-auto mb-10">
        <h3 className="font-serif text-xl text-text-primary text-center mb-6">
          Questões que a terapia pode ajudar
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {topics.map((item) => (
            <span
              key={item.label}
              className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-5 py-2.5 shadow-soft border border-cream-300/50 text-text-secondary hover:shadow-card hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="text-lg" aria-hidden="true">{item.emoji}</span>
              {item.label}
            </span>
          ))}
        </div>
      </div>

      <p className="text-center text-text-light text-base max-w-xl mx-auto leading-relaxed">
        Dentre outras questões que você consiga sentir. O processo de acompanhamento psicológico é único e respeita o tempo e a história de cada pessoa.
      </p>
    </SectionWrapper>
  );
}
