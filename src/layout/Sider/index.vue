<template>
  <div h="full" text="primary-1">
    <a-menu :theme="theme"></a-menu>
  </div>
</template>

<script lang="ts" setup>
  import { useSettingsStore, useRouteStore } from '@/store'

  const settingsStore = useSettingsStore()
  const { theme } = storeToRefs(settingsStore)

  const routeStore = useRouteStore()
  const menuList = routeStore.getMenu
</script>
