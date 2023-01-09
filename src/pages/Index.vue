<template>
  <main class="flex flex-col justify-center items-center p-20">
    <h1 class="text-5xl text-blue-400 animate__animated animate__heartBeat">
      Vue3 Template All In One!
    </h1>
    <div class="text-2xl text-blue-400">created by {{ name }}</div>
    <div class="my-4">
      <a :href="github">github: {{ github }}</a>
    </div>
    <div class="mb-4">
      <span
        v-for="(item, index) in featuresList"
        :key="index"
        class="inline-block mx-2 px-2 bg-blue-200 rounded-sm"
      >
        {{ item }}
      </span>
    </div>
    <a-button type="primary" @click="increaseCount">
      Count is {{ count }}
    </a-button>
  </main>
</template>

<script lang="ts" setup>
  import { useUserStore } from '../store/useUserStore'

  const user = useUserStore()
  const { name, github } = storeToRefs(user)

  const count = ref<number>(0)
  const increaseCount = () => {
    count.value++
  }

  const featuresList = ref([
    'Vue',
    'Vite',
    'TypeScript',
    'Pinia',
    'Arco Design',
    'TailwindCSS'
  ])
</script>
