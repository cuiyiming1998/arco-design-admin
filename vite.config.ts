import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuejsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'
import topLevelAwait from 'vite-plugin-top-level-await'

export default defineConfig({
  plugins: [
    topLevelAwait({
      promiseExportName: '__tla',
      promiseImportName: i => `__tla_${i}`,
    }),
    Components({
      resolvers: [ArcoResolver()],
    }),
    UnoCSS(),
    AutoImport({
      imports: ['vue', '@vueuse/core', 'pinia', 'vue-router'],
      dts: './auto-imports.d.ts',
      eslintrc: {
        enabled: false, // 第一次启动项目需要设置为true, 生成eslint文件, 之后恢复为false即可
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
    }),
    vue(),
    vuejsx(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'vue': 'vue/dist/vue.esm-bundler.js',
    },
  },
})
