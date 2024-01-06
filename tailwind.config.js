/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['node_modules/preline/dist/*.js', './index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        'black-gradient': 'gradient-to-r from-stone-500 to-stone-700',
        'store-white': '#fff',
        'store-grey': '#c2c2c2',
        'store-blue': 'blue-500',
        'store-secondary': '#545454'
      },
      screens: {
        xs: '460px'
      },
      keyframes: {
        reduceWidth: {
          '0%': { width: '100%' },
          '50%': { width: '90%' },
          '100%:': { width: '100%' }
        },
        scaleAnimation: {
          '0%': { transform: 'scale(0)', top: '0%' },
          '50%': { transform: 'scale(0)', top: '0%' },
          ' 100%': { transform: 'scale(1)', top: '0%' }
        },
        deScaleAnimation: {
          '0%': { transform: 'scale(1)', top: '0%' },
          ' 100%': { transform: 'scale(0)', top: '0%' }
        }
      },
      transformOrigin: {
        'top-left': '0% 50%'
      },
      boxShadow: {
        button: '0 1px 2px 0 #e3fafd',
        card: '1px 14px 16px -5px  rgba(0,0,0,0.65)'
      },
      animation: {
        'reducing-width': 'reduceWidth 1s cubic-bezier(0.79, 0.25, 0.4, 0.97) 4.5s',
        'scale-enter': 'scaleAnimation 1s cubic-bezier(0.79, 0.25, 0.4, 0.97)',
        'scale-leave': 'deScaleAnimation 1s  cubic-bezier(0.79, 0.25, 0.4, 0.97)'
      }
    }
  },
  plugins: [require('preline/plugin')]
}
