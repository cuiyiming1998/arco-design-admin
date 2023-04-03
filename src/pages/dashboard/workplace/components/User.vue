<script lang="ts" setup>
import { useUserStore } from '@/store'
import { CardTitle } from '@/components/CardTitle'

const userStore = useUserStore()
const { userInfo } = storeToRefs(userStore)
</script>

<template>
  <section base-card>
    <CardTitle :title="$t('workplace.user.title')" />
    <div flex m="t-4" items="center" justify-between>
      <div flex>
        <a-avatar :size="60" m="r-6 t-1">
          <img
            alt="avatar"
            src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
          >
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
      <div flex justify-center items-center p="r-4">
        <div flex-col items-center>
          <span text="text-3">{{ $t('workplace.user.todo') }}</span>
          <a-statistic animation :value="12" />
        </div>
        <a-divider
          direction="vertical"
          style="height: 2.5rem; margin: 0 2rem"
        />
        <div flex-col items-center>
          <span text="text-3">{{ $t('workplace.projects.num') }}</span>
          <a-statistic animation :value="35" />
        </div>
      </div>
    </div>
  </section>
</template>
