import SectionWrapper from './ui/SectionWrapper';
import SectionHeading from './ui/SectionHeading';

const testimonials = [
  {
    quote:
      'Encontrar uma psicóloga que fala português foi essencial para mim. É muito diferente poder expressar meus sentimentos na minha língua — finalmente me sinto compreendida.',
    author: 'M.S.',
    location: 'Londres, Reino Unido',
  },
  {
    quote:
      'As sessões com a Débora me ajudaram a entender padrões que eu repetia há anos. A escuta dela é genuína e o processo, transformador. Recomendo de coração.',
    author: 'R.L.',
    location: 'Toronto, Canadá',
  },
  {
    quote:
      'Eu tinha receio da terapia online, mas a experiência é incrivelmente natural. O espaço que a Débora cria faz com que eu me sinta segura e acolhida, mesmo a distância.',
    author: 'A.P.',
    location: 'Berlim, Alemanha',
  },
];

export default function Testimonials() {
  return (
    <SectionWrapper id="depoimentos" bgClassName="bg-cream-50">
      <SectionHeading
        eyebrow="Depoimentos"
        title="O que dizem sobre o processo terapêutico"
      />

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <figure
            key={item.author}
            className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col"
          >
            {/* Quote mark */}
            <span
              className="text-sage-300 text-5xl font-serif leading-none mb-4 select-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <blockquote className="flex-1 text-text-secondary leading-relaxed text-[0.95rem]">
              {item.quote}
            </blockquote>

            <figcaption className="mt-6 pt-4 border-t border-cream-300">
              <p className="font-medium text-text-primary">{item.author}</p>
              <p className="text-sm text-text-light">{item.location}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </SectionWrapper>
  );
}
