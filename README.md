# Vue3 Template All In One

 基于`vue3` + `ts` + `vite`的开发模板

``` bash
git clone https://github.com/cuiyiming1998/vue-template-all-in-one.git

// 推荐使用 pnpm

pnpm i && pnpm dev
```

## 目前集成的功能
- [x] Vue3 + Vite + TypeScript开发模式
- [x] [Vue-Router](https://router.vuejs.org/zh/introduction.html)
- [x] [Pinia](https://pinia.web3doc.top/getting-started.html)
- [x] [AntDesignVue](https://www.antdv.com/docs/vue/introduce-cn)
- [x] [VueUse](https://vueuse.org/)
- [x] [VueRequest](https://github.com/AttoJS/vue-request)
- [x] [Tailwindcss](https://www.tailwindcss.cn/docs)
- [x] [AnimateCSS](https://animate.style/#documentation)
- [x] [Lodash-es](https://www.lodashjs.com/)
- [x] Vite-Plugins
  - [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)
      使用composition API无需引入
      ``` vue
      // import { ref } from 'vue'
      const num = ref(0)
      ```
  - [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
    自动导入UI组件
    ```typescript
        import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

        export default defineConfig({
          ...,
          plugins: [
            Components({
              resolvers: [AntDesignVueResolver()]
            }),
          ]
        })
    ```
  - [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages)
    约定式路由
  
- [x] Commit-Lint

  - 集成了`commitlint-config-cz`与`commitlint-config-git-commit-emoji`
  - 使用`pnpm commit`进行commit