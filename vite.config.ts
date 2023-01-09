import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import vuejsx from '@vitejs/plugin-vue-jsx'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import { pagesConfig } from './src/config/pageConfig'

export default defineConfig({
  plugins: [
    Pages({ ...pagesConfig }),
    Components({
      resolvers: [ArcoResolver()]
    }),
    AutoImport({
      imports: ['vue', '@vueuse/core', 'pinia', 'vue-router'],
      dts: './auto-imports.d.ts',
      eslintrc: {
        enabled: true, // 第一次启动项目需要设置为true, 生成eslint文件, 之后恢复为false即可
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      }
    }),
    vue(),
    vuejsx()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
