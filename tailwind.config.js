/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heebo: ['Heebo', 'sans-serif'], // Include Heebo font in the theme
      },
      fontSize: {
        'body-text-small': ['0.75rem', { lineHeight: '1.125rem'},{ medium: 500,}],  // Font size and line height
        'body-text-medium': ['0.875rem', { lineHeight: '0.875rem' } ,{ medium: 500,}],  // Font size and line height
        'body-text': ['1rem', { lineHeight: '1.5rem' }, { medium: 500,}],  // Font size and line height
        'ui-label-semi-bold': ['1rem', { lineHeight: '1.5rem' },{ medium: 600,}],  // Font size and line height
        'ui-label-medium': ['1rem', { lineHeight: '1.5rem' }, { medium: 500,}],  // Font size and line height
        'ui-label-regular': ['1rem', { lineHeight: '1.5rem' }, {normal: 400}],
        'h3-heading': ['1.25rem', { lineHeight: '1.375rem' }, {medium: 500}],
        'heading': ['1.5rem', { lineHeight: '1.65rem' }, {medium: 500}],
        'h2-heading': ['2rem', { lineHeight: '2.2' }, {medium: 500}],
        'h1-heading': ['2.5rem', { lineHeight: '2.5' }, {medium: 500}],
        'heebo': ['3.375rem', {lineHeight:'3.4125rem'}, {medium: 500}],
      },
    },
  },
  plugins: [],
}

