/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    "./app/**/*.{js,ts,jsx,tsx}" ,

    "./pages/**/*.{js,ts,jsx,tsx}" ,

    "./components/**/*.{js,ts,jsx,tsx}"
  ],

  theme: {
    extend: {

   colors: {
  background: 'rgb(var(--color-background) / <alpha-value>)',

  foreground: 'rgb(var(--color-foreground) / <alpha-value>)',

  card: 'rgb(var(--color-card) / <alpha-value>)',

  primary: {
    DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',

    foreground: 'rgb(var(--color-primary-foreground) / <alpha-value>)',
  },

  secondary: {

    DEFAULT: 'rgb(var(--color-secondary) / <alpha-value>)',

    foreground: 'rgb(var(--color-secondary-foreground) / <alpha-value>)',
  },

  muted: {

    DEFAULT: 'rgb(var(--color-muted) / <alpha-value>)',

    foreground: 'rgb(var(--color-muted-foreground) / <alpha-value>)',
  },

  border: 'rgb(var(--color-border) / <alpha-value>)',

  highlight: 'rgb(var(--color-highlight) / <alpha-value>)',
  
  surface: 'rgb(var(--color-surface) / <alpha-value>)',


},

  borderRadius: {
    
      DEFAULT: 'var(--radius)',
    },


    },
  },
  plugins: [],
}

