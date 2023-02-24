<template>
  <div h="full">
    <a-menu
      :theme="theme"
      :default-selected-keys="[PagesPath.Workplace]"
      :default-open-keys="[PagesPath.Dashboard]"
      @menu-item-click="menuClick"
    >
      <template v-for="(item, index) in menuTree" :key="index">
        <a-sub-menu v-if="item.hasChildren" :key="`${item.path}`">
          <template #icon>
            <component :is="item.icon" />
          </template>
          <template #title>
            {{ $t(item.name || '') }}
          </template>
          <a-menu-item v-for="menuItem in item.children" :key="menuItem.path">
            {{ $t(menuItem.name || '') }}
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item v-else :key="`menu${item.path}`">
          {{ $t(item.name || '') }}
        </a-menu-item>
      </template>
    </a-menu>
  </div>
</template>

<script lang="ts" setup>
  import { useSettingsStore } from '@/store'
  import { useMenu } from '@/hooks/useMenu'
  import { PagesPath } from '@/enums/pages'

  const settingsStore = useSettingsStore()
  const { theme } = storeToRefs(settingsStore)

  const { menuTree } = useMenu()

  const router = useRouter()

  const menuClick = (path: string) => {
    console.log({ path })
    router.push({ path })
  }
</script>
