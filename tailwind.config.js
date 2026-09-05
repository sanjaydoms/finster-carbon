export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        /* Light green ground rather than pure white — planted, not screen. */
        paper: '#eff5e9',
        sage: {
          50: '#f5f9f0',
          100: '#e2ecd8',
          200: '#cddcbf',
          300: '#d5e3c6',
          400: '#7f9169',
        },
        moss: {
          /* Deep forest — the brand green, weighted for gravitas. */
          DEFAULT: '#2f4a34',
          600: '#25392a',
          700: '#1b2c20',
          800: '#111c14',
        },
        ink: '#12170f',
        /* Muted green-grey, darkened to hold contrast on the green ground. */
        stone: '#55604c',
        /* Brass: the single metallic accent. */
        amber: {
          DEFAULT: '#c79a58',
          700: '#77592c',
        },
        carbon: '#0c110c',
      },
      fontFamily: {
        display: [
          'Inter Tight',
          '-apple-system',
          'BlinkMacSystemFont',
          'SF Pro Display',
          'system-ui',
          'sans-serif',
        ],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        serif: ['Instrument Serif', 'Iowan Old Style', 'Georgia', 'serif'],
      },
      maxWidth: {
        page: '82rem',
      },
      /* Alpha ramp for text tones, compressed toward opaque: secondary and
         tertiary copy has to keep real contrast against the light green
         ground, so the mid steps sit higher than their names suggest. */
      opacity: {
        12: '0.12',
        15: '0.15',
        18: '0.18',
        22: '0.22',
        35: '0.35',
        45: '0.62',
        50: '0.68',
        55: '0.7',
        60: '0.74',
        62: '0.72',
        65: '0.78',
        68: '0.78',
        70: '0.82',
        72: '0.82',
        75: '0.86',
        80: '0.9',
        85: '0.94',
      },
    },
  },
  plugins: [],
}
