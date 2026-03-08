import SectionWrapper from './ui/SectionWrapper';
import SectionHeading from './ui/SectionHeading';

const highlights = [
  'Psicóloga formada pela PUC Minas (2019), com início da prática clínica em 2017',
  'Experiência em Hospital Luxemburgo (cuidados paliativos), Centro de Saúde Hermelinda, Colégio Santa Maria, Centro Juvenil Dom Bosco e clínica-escola',
  'Projeto social Saúde Mental para Todos (2021–2023) — ampliação do acesso ao cuidado psicológico',
  'Grupos de estudo em feminismo, depressão, morte, imigração, amor, envelhecimento e mal-estar na contemporaneidade',
  'Em formação em psicanálise pela Escola Brasileira de Psicanálise, seção Bahia',
];

export default function About() {
  return (
    <SectionWrapper id="sobre" bgClassName="bg-white/50">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Photo */}
        <div className="flex-shrink-0">
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-card bg-gradient-to-br from-cream-300 via-sage-100 to-warm-300">
            <img
              src="/photos_2/optimized/image4.png"
              alt="Debora Costa, Psicóloga"
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
            eyebrow="Percurso e prática clínica"
            title="Debora Costa"
            center={false}
          />

          <p className="text-text-secondary text-lg leading-relaxed mb-6 -mt-8">
            Minha prática clínica é orientada pela psicanálise e se sustenta na aposta na palavra como possibilidade de elaboração do sofrimento.
          </p>
          <p className="text-text-secondary text-lg leading-relaxed mb-8">
            Na clínica, sustento um espaço de escuta ética e sigilosa, onde cada pessoa possa falar sobre o que vive e, quando possível, encontrar novas formas de se posicionar diante da própria história. Faço análise desde 2015 — experiência que também sustenta minha confiança na palavra e na possibilidade de produzir novos sentidos para aquilo que nos atravessa.
          </p>

          <blockquote className="border-l-4 border-sage-300 pl-5 mb-8">
            <p className="text-text-secondary text-lg italic leading-relaxed mb-1">
              "O importante não é o que fizeram de mim, mas o que eu faço com o que fizeram de mim."
            </p>
            <cite className="text-sm text-text-light not-italic">— Jean-Paul Sartre</cite>
          </blockquote>

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
