const variants = {
  primary:
    'bg-sage-500 text-white hover:bg-sage-600 active:bg-sage-700 shadow-soft hover:shadow-card',
  secondary:
    'bg-transparent text-sage-600 border-2 border-sage-300 hover:bg-sage-100 hover:border-sage-400 active:bg-sage-200',
  ghost:
    'bg-transparent text-sage-600 hover:text-sage-700 underline underline-offset-4 decoration-sage-300 hover:decoration-sage-500',
};

const sizes = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-7 py-3.5 text-base',
  lg: 'px-9 py-4 text-lg',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  ...props
}) {
  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-2xl transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-sage-400 focus:ring-offset-2 focus:ring-offset-cream-100 cursor-pointer';

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    const isExternal = href.startsWith('http');
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
