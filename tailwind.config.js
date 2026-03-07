/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FAFAF7',
          100: '#F8F6F2',
          200: '#F5F0EB',
          300: '#EDE8E0',
          400: '#E2D9CD',
        },
        warm: {
          300: '#D4C5B5',
          400: '#C4B3A0',
          500: '#B8A99A',
          600: '#9E8E7E',
          700: '#7A6E62',
        },
        sage: {
          100: '#E8EDE6',
          200: '#D1DECE',
          300: '#B5C4B1',
          400: '#94A88E',
          500: '#7D9477',
          600: '#637860',
          700: '#4A5C48',
        },
        text: {
          primary: '#3D3930',
          secondary: '#5C574E',
          light: '#8A847A',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        soft: '0 2px 15px -3px rgba(61, 57, 48, 0.07), 0 4px 6px -4px rgba(61, 57, 48, 0.05)',
        card: '0 4px 25px -5px rgba(61, 57, 48, 0.08), 0 8px 10px -6px rgba(61, 57, 48, 0.04)',
        elevated: '0 10px 40px -10px rgba(61, 57, 48, 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
