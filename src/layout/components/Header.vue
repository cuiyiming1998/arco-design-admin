<template>
  <nav
    class="w-full border-b border-color-border-2 py-4 px-5 sm:px-10 md:px-16 flex justify-between items-center gap-x-4 bg-color-bg-2"
  >
    <div class="text-primary-6 text-xl">{{ projectName }}</div>
    <div class="flex gap-x-4 cursor-pointer">
      <a-button shape="round">
        <template #icon>
          <icon-language class="text-base" />
        </template>
      </a-button>
      <a-button
        v-show="'dark' === theme"
        shape="round"
        @click="handleToggleTheme"
      >
        <template #icon>
          <icon-sun-fill class="text-base" />
        </template>
      </a-button>
      <a-button
        v-show="'dark' !== theme"
        shape="round"
        @click="handleToggleTheme"
      >
        <template #icon>
          <icon-moon-fill class="text-base" />
        </template>
      </a-button>
      <a-tooltip content="跳转Github">
        <a-button v-if="isShowGithub" shape="round" @click="gotoGithub">
          <template #icon>
            <icon-github class="text-base" />
          </template>
        </a-button>
      </a-tooltip>
    </div>
  </nav>
</template>

<script lang="ts" setup>
  import { useSettingsStore } from '@/store'

  // 主题配置
  const settingsStore = useSettingsStore()
  const { projectName, theme, github, isShowGithub } =
    storeToRefs(settingsStore)
  const isDark = useDark({
    selector: 'body',
    attribute: 'arco-theme',
    valueDark: 'dark',
    valueLight: 'light',
    storageKey: 'ada-theme',
    onChanged(dark: boolean) {
      settingsStore.toggleTheme(dark)
    }
  })
  const toggleTheme = useToggle(isDark)
  const handleToggleTheme = () => {
    toggleTheme()
  }

  const gotoGithub = () => {
    window.open(unref(github))
  }
</script>

<style lang="scss" scoped></style>
