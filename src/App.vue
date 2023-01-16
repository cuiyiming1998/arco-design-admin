<template>
  <a-config-provider :locale="l">
    <router-view></router-view>
  </a-config-provider>
</template>

<script setup lang="ts">
  import { useLocale } from '@/hooks/useLocale'
  import enUS from '@arco-design/web-vue'
  import zhCN from '@arco-design/web-vue'

  const { locale } = useLocale()
  const l = computed(() => {
    const localeMap: { [propName: string]: any } = {
      'zh-CN': zhCN,
      'en-US': enUS
    }
    return localeMap[unref(locale)] || zhCN
  })
</script>

<style lang="scss" setup>
  #app {
    height: 100vh;
    width: 100vw;
    overflow: auto;
    background-color: var(--color-bg-4);
  }
</style>
