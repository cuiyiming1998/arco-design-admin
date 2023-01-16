<template>
  <nav
    border="b-solid b-1 border-1"
    p="y-4 x-5 sm:x-10 md:x-16"
    bg="bg-2"
    flex
    justify-between
    items-center
    gap-x-4
  >
    <div text="primary-6 xl">{{ projectName }}</div>
    <div flex gap-x-4 cursor-pointer>
      <a-dropdown trigger="hover" @select="handleChangeLocale">
        <a-button shape="round">
          <template #icon><icon-language text-base /></template>
        </a-button>
        <template #content>
          <a-doption
            v-for="item in localeOptions"
            :key="item.id"
            :value="item.value"
          >
            <template #icon>
              <icon-check v-show="item.value === locale" />
            </template>
            {{ item.label }}
          </a-doption>
        </template>
      </a-dropdown>
      <a-button
        v-show="'dark' === theme"
        shape="round"
        @click="handleToggleTheme"
      >
        <template #icon>
          <icon-sun-fill text-base />
        </template>
      </a-button>
      <a-button
        v-show="'dark' !== theme"
        shape="round"
        @click="handleToggleTheme"
      >
        <template #icon>
          <icon-moon-fill text-base />
        </template>
      </a-button>
      <a-tooltip :content="$t('header.dropdown.github')">
        <a-button v-if="isShowGithub" shape="round" @click="gotoGithub">
          <template #icon>
            <icon-github text-base />
          </template>
        </a-button>
      </a-tooltip>
    </div>
  </nav>
</template>

<script lang="ts" setup>
  import { useSettingsStore } from '@/store'
  import { useLocale } from '@/hooks/useLocale'

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

  // 国际化
  const { locale, localeOptions, change: changeLocale } = useLocale()
  const handleChangeLocale = (
    value: string | number | Record<string, any> | undefined,
    _e: Event
  ) => {
    if ('string' === typeof value) {
      changeLocale(value)
    }
  }

  const gotoGithub = () => {
    window.open(unref(github))
  }
</script>

<style lang="scss" scoped></style>
