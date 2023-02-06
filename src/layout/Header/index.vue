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
    <div text="primary-6 xl" font="600" cursor="default">
      {{ projectName }}
    </div>
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

      <a-tooltip
        trigger="hover"
        :content="
          isDark
            ? $t('header.tooltip.language.dark')
            : $t('header.tooltip.language.light')
        "
      >
        <a-button shape="round" @click="handleToggleTheme">
          <template #icon>
            <icon-sun-fill v-show="isDark" text-base />
            <icon-moon-fill v-show="!isDark" text-base />
          </template>
        </a-button>
      </a-tooltip>

      <a-popover trigger="hover">
        <a-badge :count="9">
          <a-button shape="round" @click="gotoGithub">
            <template #icon>
              <icon-notification text-base />
            </template>
          </a-button>
        </a-badge>
        <template #content>
          <MessageBox />
        </template>
      </a-popover>

      <a-tooltip :content="$t('header.tooltip.github')">
        <a-button v-if="isShowGithub" shape="round" @click="gotoGithub">
          <template #icon>
            <icon-github text-base />
          </template>
        </a-button>
      </a-tooltip>

      <a-dropdown trigger="hover">
        <a-avatar :size="32" m="l-4">
          <img
            alt="avatar"
            src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
          />
        </a-avatar>
        <template #content>
          <a-doption>
            <a-space>
              <icon-user />
              <span>
                {{ $t('header.tooltip.user.profile') }}
              </span>
            </a-space>
          </a-doption>
          <a-doption>
            <a-space>
              <icon-settings />
              <span>
                {{ $t('header.tooltip.user.settings') }}
              </span>
            </a-space>
          </a-doption>
          <a-doption @click="handleLogout">
            <a-space>
              <icon-export />
              <span>
                {{ $t('header.tooltip.user.logout') }}
              </span>
            </a-space>
          </a-doption>
        </template>
      </a-dropdown>
    </div>
  </nav>
</template>

<script lang="ts" setup>
  import { useSettingsStore } from '@/store'
  import { useLocale } from '@/hooks/useLocale'
  import { useLogout } from '@/hooks/useLogout'
  import MessageBox from './components/MessageBox.vue'

  // 主题配置
  const settingsStore = useSettingsStore()
  const { projectName, github, isShowGithub } = storeToRefs(settingsStore)
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

  const { logout } = useLogout()
  const handleLogout = () => {
    logout()
  }

  const gotoGithub = () => {
    window.open(unref(github))
  }
</script>

<style lang="scss" scoped></style>
