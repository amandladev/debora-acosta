export default function SectionHeading({ eyebrow, title, subtitle, center = true }) {
  return (
    <div className={`mb-12 md:mb-16 ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <span className="inline-block text-sage-500 font-medium text-sm tracking-wider uppercase mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-text-primary leading-tight text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-text-secondary text-lg md:text-xl max-w-2xl leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
