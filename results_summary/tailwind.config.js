/** @type {import('tailwindcss').Config} */
export default {
  content: [
      './src/App.jsx',
      './src/Rating.jsx',
      './src/Button.jsx',
    ],
  theme: {
    extend: {
      colors: {
        Lightred: 'hsl(0, 100%, 67%)',
        Orangeyellow: 'hsl(39, 100%, 56%)',
        Greenteal: 'hsl(166, 100%, 37%)',
        Cobaltblue: 'hsl(234, 85%, 45%)',
        Lightslateblue: 'hsl(252, 100%, 67%)',
        Lightroyalblue: 'hsl(241, 81%, 54%)',
        Violetblue: 'hsla(256, 72%, 46%, 1)',
        Persianblue: 'hsla(241, 72%, 46%, 0)',
        White: 'hsl(0, 0%, 100%)',
        Paleblue: 'hsl(221, 100%, 96%)',
        Lightlavender: 'hsl(241, 100%, 89%)',
        Darkgrayblue: 'hsl(224, 30%, 27%)',
        red_light: 'hsla(0, 100%, 67%, 0.05)',
        yellow_light: 'hsla(39, 100%, 56%, 0.05)',
        green_light: 'hsla(166, 100%, 37%, 0.05)',
        violet_light: 'hsla(241, 100%, 89%, 0.05)',
      },
      fontFamily: {
        custom: ['Hanken Grotesk', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

