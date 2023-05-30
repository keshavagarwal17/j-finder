module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'label': ['14px', {
          lineHeight: '20px',
          fontWeight: '500',
        }],
      },
      colors: {
        'input-border': '#E6E6E6',
        'input-box': '#7A7A7A'
      },
      fontFamily:{
        body: ['Poppins']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}