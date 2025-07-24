/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom animations
      animation: {
        'fade-in': 'fadeIn 1.5s ease-out forwards',
        slideBottomAnimation: 'slideBottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideBottom: {
          '0%': { transform: 'translateY(-25%)' },
          '100%': { transform: 'translateY(0%)' },
        },
      },

      // Custom spacing (0-200) → 0rem to 50rem
      spacing: (() => {
        const customSpacing = {};
        for (let i = 0; i <= 200; i++) {
          customSpacing[i] = `${i * 0.25}rem`;
        }
        return customSpacing;
      })(),

      // Font sizes
      fontSize: {
        'size-xs': '.75rem',
        'size-sm': '.875rem',
        'size-base': '1rem',
        'size-lg': '1.125rem',
        'size-xl': '1.25rem',
        'size-2xl': '1.5rem',
        'size-3xl': '1.875rem',
        'size-4xl': '2.25rem',
        'size-5xl': '3rem',
        'size-6xl': '4rem',
        'size-7xl': '5rem',
      },

      // Colors
      colors: {
        primary: {
          golden: "#DCCA87",
          black: "#0C0C0C",
          gray: "#545454",
          crimson: "#F5EFDB",
          gray2: "#AAAAAA",
          white: "#FFFFFF",
        },
      },

      // Custom transition timing
      transitionTimingFunction: {
        'slideBottomCubic': 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },

      // Custom fonts
      fontFamily: {
        CormorantUpright: ['Cormorant Upright', 'sans-serif'], 
        Sans: ['sans-serif'],
      },

      // Z-index values
      zIndex: {
        '-1': -1,
        '0': 0,
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'nav': 999,
      },

      // Flex values
      flex: {
        'one': 1,
      },

      // Height with vh and vw units
      height: {
        '10vh': '10vh',
        '20vh': '20vh',
        '30vh': '30vh',
        '40vh': '40vh',
        '50vh': '50vh',
        '60vh': '60vh',
        '70vh': '70vh',
        '80vh': '80vh',
        '90vh': '90vh',

        '10vwh': '10vw',
        '20vwh': '20vw',
        '30vwh': '30vw',
        '40vwh': '40vw',
        '50vwh': '50vw',
        '60vwh': '60vw',
        '70vwh': '70vw',
        '80vwh': '80vw',
        '90vwh': '90vw',
      },

      // Width with vw units
      width: {
        '10vw': '10vw',
        '20vw': '20vw',
        '30vw': '30vw',
        '40vw': '40vw',
        '50vw': '50vw',
        '60vw': '60vw',
        '70vw': '70vw',
        '80vw': '80vw',
        '90vw': '90vw',
      },

      // Custom breakpoints
      screens: {
        'mobile': '450px',
        'big': '2000px',
      },
    },
  },
  plugins: [],
}
