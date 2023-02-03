<template>
  <div h="full">
    <a-menu :theme="theme">
      <template v-for="(item, index) in menuTree" :key="index">
        <a-sub-menu v-if="item.hasChildren" :key="`${index}_${item.id}`">
          <template #icon>
            <component :is="item.icon" />
          </template>
          <template #title>
            {{ t(item.name || '') }}
          </template>
          <a-menu-item
            v-for="menuItem in item.children"
            :key="`${index}_${item.id}_${menuItem.id}`"
          >
            {{ t(menuItem.name || '') }}
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item v-else :key="`${item.id}`">
          {{ t(item.name || '') }}
        </a-menu-item>
      </template>
    </a-menu>
  </div>
</template>

<script lang="ts" setup>
  import { useSettingsStore } from '@/store'
  import { useMenu } from '@/hooks/useMenu'
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()

  const settingsStore = useSettingsStore()
  const { theme } = storeToRefs(settingsStore)

  const { menuTree } = useMenu()
</script>
