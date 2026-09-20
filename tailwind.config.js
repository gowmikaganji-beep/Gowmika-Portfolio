/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        emerald: {
          950: '#04120D',
          900: '#062A1E',
          800: '#0A3D29',
          700: '#0F5236',
          600: '#146B47',
          500: '#1B8A5A',
        },
        charcoal: {
          950: '#0B0C0D',
          900: '#111315',
          800: '#191C1F',
          700: '#22262A',
        },
        warmwhite: '#F6F3EC',
        gold: {
          400: '#D8B876',
          500: '#C6A15C',
          600: '#A9843F',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      },
      animation: {
        'grain': 'grain 8s steps(10) infinite',
      },
      keyframes: {
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-2%, -3%)' },
          '20%': { transform: 'translate(-4%, 2%)' },
          '30%': { transform: 'translate(2%, -4%)' },
          '40%': { transform: 'translate(-2%, 5%)' },
          '50%': { transform: 'translate(-4%, 2%)' },
          '60%': { transform: 'translate(3%, 0)' },
          '70%': { transform: 'translate(0, 3%)' },
          '80%': { transform: 'translate(-3%, 0)' },
          '90%': { transform: 'translate(2%, 2%)' },
        },
      },
    },
  },
  plugins: [],
}
