export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif']
      },
      screens: {
        'sm': '476px',
  
        'md': '850px',
  
        'lg': '1200px',
      },
    },
  },
  plugins: [],
}
