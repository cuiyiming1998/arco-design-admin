<template>
  <div h="full">
    <a-menu :theme="theme">
      <template v-for="(item, index) in menu" :key="index">
        <a-sub-menu v-if="item.hasChildren" :key="`${index}_${item.id}`">
          <template #icon>
            <component :is="item.icon" />
          </template>
          <template #title>
            {{ item.name }}
          </template>
          <a-menu-item
            v-for="menuItem in item.children"
            :key="`${index}_${item.id}_${menuItem.id}`"
          >
            {{ menuItem.name }}
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item v-else :key="`${item.id}`">
          {{ item.name }}
        </a-menu-item>
      </template>
    </a-menu>
  </div>
</template>

<script lang="ts" setup>
  import { useSettingsStore, useRouteStore } from '@/store'

  const settingsStore = useSettingsStore()
  const { theme } = storeToRefs(settingsStore)

  const routeStore = useRouteStore()
  const { menu } = storeToRefs(routeStore)
  console.log(menu.value)
</script>
