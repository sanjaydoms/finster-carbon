export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        /* Cream. The page is dark throughout, so this is the foreground tone
           on every ground rather than a background in its own right. */
        paper: '#eff5e9',
        /* Primary dark-green section ground. */
        ground: '#33503a',
        sage: {
          /* Deeper alternate ground, for sections sitting against `ground`. */
          100: '#2a4230',
          /* Lifted / hover state — one step lighter than `ground`. */
          200: '#3d5c45',
          /* Light accent text on the dark grounds. */
          300: '#d5e3c6',
        },
        moss: {
          /* Deep forest — the brand green, weighted for gravitas. Used for
             the sections that need to sit below the two grounds. */
          DEFAULT: '#2f4a34',
          600: '#25392a',
          700: '#1b2c20',
          800: '#111c14',
        },
        /* Muted light sage: the quiet tone for micro labels on the dark ground. */
        stone: '#b8cbab',
        /* Brass: the single metallic accent. */
        amber: {
          DEFAULT: '#c79a58',
          /* Lightened brass for micro labels and inline links, which are
             below 24px and so need the 4.5:1 threshold, not 3:1. */
          300: '#dbb87e',
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
         tertiary copy is cream on a dark green ground, so the mid steps sit
         higher than their names suggest to hold real contrast. */
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
