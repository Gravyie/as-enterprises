export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Add this if 'Inter' font is not already configured
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-right': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        // ADD THESE KEYFRAMES FOR THE LOOPING SCROLL ANIMATION
        'loop-scroll': {
          from: { transform: 'translateX(0%)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        blob: 'blob 7s infinite ease-in-out',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'fade-in-right': 'fade-in-right 0.6s ease-out forwards',
        // ADD THIS ANIMATION FOR THE LOOPING SCROLL
        'loop-scroll': 'loop-scroll 50s linear infinite', // Adjust 50s duration as needed for speed
      }      
    },
  },
  plugins: [],
}
