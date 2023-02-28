<template>
  <section>
    <a-typography-text text="xl text-1" font="bold" m="0" block>
      {{ $t('workplace.user.title') }}
    </a-typography-text>
    <div flex m="t-4" items="center" justify-between>
      <div flex>
        <a-avatar :size="60" m="r-6 t-1">
          <img
            alt="avatar"
            src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
          />
        </a-avatar>
        <div>
          <a-typography-text text="xl" font="500">
            {{ userInfo.userName }}
          </a-typography-text>
          <span block text="text-3" m="t-2">
            前端开发
            <a-divider direction="vertical" />
            ByteDance
            <a-divider direction="vertical" />
            XXX事业部
          </span>
        </div>
      </div>
      <div flex justify-center items-center>
        <div flex-col items-center>
          <span text="text-3">{{ $t('workplace.user.todo') }}</span>
          <a-typography-text text="2xl" font="500" m="t-1">
            10
          </a-typography-text>
        </div>
        <a-divider
          direction="vertical"
          style="height: 2.5rem; margin: 0 2rem"
        />
        <div flex-col items-center>
          <span text="text-3">{{ $t('workplace.user.projects') }}</span>
          <a-typography-text text="2xl" m="t-1" font="500">
            22
          </a-typography-text>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  import { useUserStore } from '@/store'

  const userStore = useUserStore()
  const { userInfo } = storeToRefs(userStore)
</script>
