import presetWind from '@unocss/preset-wind'
import presetAttributify from '@unocss/preset-attributify'
import type { VitePluginConfig } from 'unocss/vite'
export const unoConfig: VitePluginConfig = {
  presets: [presetWind(), presetAttributify()],
  theme: {
    breakpoints: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1600px'
    },
    colors: {
      primary: {
        '6': 'rgb(var(--primary-6))',
        '5': 'rgb(var(--primary-5))',
        '4': 'rgb(var(--primary-4))',
        '3': 'rgb(var(--primary-3))',
        '2': 'rgb(var(--primary-2))',
        '1': 'rgb(var(--primary-1))'
      },
      success: {
        '6': 'rgb(var(--success-6))',
        '5': 'rgb(var(--success-5))',
        '4': 'rgb(var(--success-4))',
        '3': 'rgb(var(--success-3))',
        '2': 'rgb(var(--success-2))',
        '1': 'rgb(var(--success-1))'
      },
      warning: {
        '6': 'rgb(var(--warning-6))',
        '5': 'rgb(var(--warning-5))',
        '4': 'rgb(var(--warning-4))',
        '3': 'rgb(var(--warning-3))',
        '2': 'rgb(var(--warning-2))',
        '1': 'rgb(var(--warning-1))'
      },
      danger: {
        '6': 'rgb(var(--danger-6))',
        '5': 'rgb(var(--danger-5))',
        '4': 'rgb(var(--danger-4))',
        '3': 'rgb(var(--danger-3))',
        '2': 'rgb(var(--danger-2))',
        '1': 'rgb(var(--danger-1))'
      },
      link: {
        '6': 'rgb(var(--link-6))',
        '5': 'rgb(var(--link-5))',
        '4': 'rgb(var(--link-4))',
        '3': 'rgb(var(--link-3))',
        '2': 'rgb(var(--link-2))',
        '1': 'rgb(var(--link-1))'
      },
      border: {
        '4': 'var(--color-border-4)',
        '3': 'var(--color-border-3)',
        '2': 'var(--color-border-2)',
        '1': 'var(--color-border-1)'
      },
      fill: {
        '4': 'var(--color-fill-4)',
        '3': 'var(--color-fill-3)',
        '2': 'var(--color-fill-2)',
        '1': 'var(--color-fill-1)'
      },
      text: {
        '4': 'var(--color-text-4)',
        '3': 'var(--color-text-3)',
        '2': 'var(--color-text-2)',
        '1': 'var(--color-text-1)'
      },
      bg: {
        '5': 'var(--color-bg-5)',
        '4': 'var(--color-bg-4)',
        '3': 'var(--color-bg-3)',
        '2': 'var(--color-bg-2)',
        '1': 'var(--color-bg-1)',
        white: 'var(--color-bg-white)'
      }
    }
  },
  shortcuts: [
    ['wh-full', 'w-full h-full'],
    ['f-c-c', 'flex justify-center items-center'],
    ['flex-col', 'flex flex-col'],
    ['text-ellipsis', 'truncate']
  ],
  rules: []
}
