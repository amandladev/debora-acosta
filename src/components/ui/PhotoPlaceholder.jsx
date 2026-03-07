export default function PhotoPlaceholder({ size = 'md', className = '' }) {
  const sizeClasses = {
    sm: 'w-20 h-20',
    md: 'w-40 h-40 md:w-52 md:h-52',
    lg: 'w-56 h-56 md:w-72 md:h-72',
    hero: 'w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96',
  };

  return (
    <div
      className={`${sizeClasses[size]} rounded-full bg-gradient-to-br from-cream-300 via-sage-100 to-warm-300 flex items-center justify-center overflow-hidden shadow-card ${className}`}
      role="img"
      aria-label="Foto de Débora Costa, Psicóloga"
    >
      <svg
        className="w-2/3 h-2/3 text-warm-500/40"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v1.2c0 .7.5 1.2 1.2 1.2h16.8c.7 0 1.2-.5 1.2-1.2v-1.2c0-3.2-6.4-4.8-9.6-4.8z" />
      </svg>
    </div>
  );
}
