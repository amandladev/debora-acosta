export default function Card({ children, className = '', hover = true }) {
  return (
    <div
      className={`bg-white/70 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-soft ${
        hover ? 'transition-all duration-300 hover:shadow-card hover:-translate-y-1' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
