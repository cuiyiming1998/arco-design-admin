<script setup lang="ts">
import enUS from '@arco-design/web-vue'
import zhCN from '@arco-design/web-vue'
import { useLocale } from '@/hooks/useLocale'

const { locale } = useLocale()
const l = computed(() => {
  const localeMap: { [propName: string]: any } = {
    'zh-CN': zhCN,
    'en-US': enUS,
  }
  return localeMap[unref(locale)] || zhCN
})
</script>

<template>
  <a-config-provider :locale="l">
    <main w-full h-full font-sans text="black dark:gray-100">
      <router-view />
    </main>
  </a-config-provider>
</template>

<style lang="scss" setup>
  #app {
    height: 100vh;
    width: 100vw;
    overflow: auto;
    background-color: var(--color-bg-4);
  }
</style>
