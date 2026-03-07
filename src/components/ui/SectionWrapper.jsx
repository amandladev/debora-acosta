import { useInView } from '../../hooks/useInView';

export default function SectionWrapper({
  id,
  children,
  className = '',
  bgClassName = 'bg-transparent',
}) {
  const [ref, isVisible] = useInView();

  return (
    <section
      id={id}
      ref={ref}
      className={`${bgClassName} ${className}`}
    >
      <div
        className={`section-fade-in ${isVisible ? 'visible' : ''} max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24`}
      >
        {children}
      </div>
    </section>
  );
}
