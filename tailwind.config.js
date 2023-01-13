// import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1600px'
    },
    extend: {
      colors: {
        'primary-6': 'rgb(var(--primary-6))',
        'primary-5': 'rgb(var(--primary-5))',
        'primary-4': 'rgb(var(--primary-4))',
        'primary-3': 'rgb(var(--primary-3))',
        'primary-2': 'rgb(var(--primary-2))',
        'primary-1': 'rgb(var(--primary-1))',
        'success-6': 'rgb(var(--success-6))',
        'success-5': 'rgb(var(--success-5))',
        'success-4': 'rgb(var(--success-4))',
        'success-3': 'rgb(var(--success-3))',
        'success-2': 'rgb(var(--success-2))',
        'success-1': 'rgb(var(--success-1))',
        'warning-6': 'rgb(var(--warning-6))',
        'warning-5': 'rgb(var(--warning-5))',
        'warning-4': 'rgb(var(--warning-4))',
        'warning-3': 'rgb(var(--warning-3))',
        'warning-2': 'rgb(var(--warning-2))',
        'warning-1': 'rgb(var(--warning-1))',
        'danger-6': 'rgb(var(--danger-6))',
        'danger-5': 'rgb(var(--danger-5))',
        'danger-4': 'rgb(var(--danger-4))',
        'danger-3': 'rgb(var(--danger-3))',
        'danger-2': 'rgb(var(--danger-2))',
        'danger-1': 'rgb(var(--danger-1))',
        'link-6': 'rgb(var(--link-6))',
        'link-5': 'rgb(var(--link-5))',
        'link-4': 'rgb(var(--link-4))',
        'link-3': 'rgb(var(--link-3))',
        'link-2': 'rgb(var(--link-2))',
        'link-1': 'rgb(var(--link-1))',
        'color-border-4': 'rgb(var(--color-border-4))',
        'color-border-3': 'rgb(var(--color-border-3))',
        'color-border-2': 'rgb(var(--color-border-2))',
        'color-border-1': 'rgb(var(--color-border-1))',
        'color-fill-4': 'rgb(var(--color-fill-4))',
        'color-fill-3': 'rgb(var(--color-fill-3))',
        'color-fill-2': 'rgb(var(--color-fill-2))',
        'color-fill-1': 'rgb(var(--color-fill-1))',
        'color-text-4': 'rgb(var(--color-text-4))',
        'color-text-3': 'rgb(var(--color-text-3))',
        'color-text-2': 'rgb(var(--color-text-2))',
        'color-text-1': 'rgb(var(--color-text-1))',
        'color-bg-5': 'rgb(var(--color-bg-5))',
        'color-bg-4': 'rgb(var(--color-bg-4))',
        'color-bg-3': 'rgb(var(--color-bg-3))',
        'color-bg-2': 'rgb(var(--color-bg-2))',
        'color-bg-1': 'rgb(var(--color-bg-1))',
        'color-bg-white': 'rgb(var(--color-bg-white))'
      }
    }
  },
  plugins: []
}
